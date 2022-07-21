import Preview from "./Preview";
import React,{useState} from "react";


const Form = ({ UppercaseFunc, text, setText, LoweCaseFunc, CapitalizeFunc, ClearText }) => {

    const [textData, setTextData] = useState({
        textReadTime: 0,
        numberOfWords: 0
      });

    function ChangeColor(e) {
        let mycolor = e.target.value;
        let mytextarea = document.getElementById("mytextarea")
        mytextarea.style.color = mycolor;
    }

    function readtime() {
        const words = text.split(" ");
        for (var i = 0; i < words.length; i++) {
          words[i] = words[i].charAt(0) + words[i].slice(1);
        }
        const textReadTime = (words.length / 200) * 0.60 * 100;
        setTextData({
          textReadTime,
          numberOfWords: words.length
        });
    }

    return (
        <>
            <div className='mt-5'>
                <form className='w-3/4 mx-auto'>
                    <div className="flex justify-between w-full gap-4 ">
                        <textarea cols="34" rows="14" id='mytextarea' className='border-[2px]  border-black outline-none w-[46%] rounded-md mb-7 p-7 bg-[#F5E4F3] hover:bg-[#EFBDE9] ' value={text} onChange={e => {setText(e.target.value); readtime();}} placeholder="Enter your text here...."></textarea>
                        <Preview text={text} textData = {textData}/>
                    </div>
                    <div>
                        <button type='button' onClick={UppercaseFunc} className='bg-blue-500 py-4 px-7 rounded-md mr-4 text-white hover:bg-blue-600 ' >Capital</button>
                        <button type='button' onClick={function Lower() { setText(text.toLowerCase()); }} className='bg-blue-500 py-4 px-7 rounded-md mr-4 text-white hover:bg-[#E46E55]'>lowercase</button>
                        <button type='button' onClick={CapitalizeFunc} className='bg-blue-500 py-4 px-7 rounded-md mr-4  text-white hover:bg-[#C4EAE3]'>Capitalize</button>
                        <button type='button' id="colorchanger" className='bg-blue-500 py-4 px-7 rounded-md mr-4  text-white hover:bg-red-600'><input type="color" placeholder="" onChange={(e) => { ChangeColor(e) }} /></button>
                        <button type='button' onClick={ClearText} className='bg-blue-500 py-4 px-7 rounded-md mr-4 text-white hover:bg-blue-600'>ClearText</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;