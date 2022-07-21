import React from 'react'

const Preview = ({text,textData}) => {
  return (
    <div className='w-[46%] mx-auto  border-[1px] border-black mb-7 p-4 bg-white'>
      <h2 className='text-xl mb-2 columns: 11;'>Preview</h2>
      <p>Total words is : {textData.numberOfWords} and the time to read this text is : {textData.textReadTime} Seconds</p>
      <p className='w-full'  id='preview'>{text.length === 0? "Please Add Some TEXT to above textarea":text}</p>
    </div>
  )
}

export default Preview