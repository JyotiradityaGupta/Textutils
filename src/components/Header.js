import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    function dark() {
        document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    }
    return (

        <div className='flex justify-between py-4 px-5 shadow-md bg-[#F0E0DD] hover:bg-[#EFC5BD]' >
            <h2 className='text-xl text-black'>TextUtlis</h2>
            <ul className='flex gap-7 items-center'>
                <li><Link to="/" className='bg-red-500 rounded-md mr-2 py-2 px-7 text-white hover:bg-red-700 hover:text-[#DC3BC8]'>Home</Link></li>
                <li><Link to="/" className='bg-red-500 rounded-md mr-2 py-2 px-7 text-white hover:bg-red-700 hover:text-white'>Blog</Link></li>
                <li><Link to="/" className='bg-red-500 rounded-md mr-2 py-2 px-7 text-white hover:bg-red-700 hover:text-white'>Contact</Link></li>
                <li><Link to="/about" className='bg-red-500 rounded-md mr-2 py-2 px-7 text-white hover:bg-red-700 hover:text-white'>About Us</Link></li>
                <li><button type="button" onClick={dark} className='bg-red-500 rounded-md mr-2 py-2 px-7 text-white hover:bg-red-700 hover:text-white '>click me</button></li>
            </ul>
        </div>
    )
}
export default Header;