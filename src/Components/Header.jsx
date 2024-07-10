import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px]   mx-auto flex justify-between items-center  py-[15px]'>
       
       <div className='text-3xl font-bold'> 
         Techno Soft
       </div>
       {
       toggle ?
       <IoCloseOutline onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
       
       :
       <IoIosMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
       }

       
      
  <ul className='hidden md:flex text-white gap-8 '>
    <li className='p-5'>
        Home
    </li>
    <li className='p-5'>
        Company
    </li>
    <li className='p-5'>
        Resources
    </li>
    <li className='p-5'>
        About
    </li>
    <li className='p-5'>
        Contact
    </li>
    
  </ul>
  
        </div>
    </div>
  )
}

export default Header