import React from 'react'
import { BsCart3 } from "react-icons/bs";

const Navber = () => {
  return (
    <div>
        <div className="navbar max-w-[1200px] mx-auto bg-base-100 ">
  <div className="navbar-start">
    <h1 className="font-bold text-[#9514FA] text-4xl"><a>DigiTools</a></h1>
    
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-[16px] text-[#101727]">
     <li><a>Products</a></li>
     <li><a>Features</a></li>
     <li><a>Pricing</a></li>
     <li><a>Testimonials</a></li>
     <li><a>FAQ</a></li>
     
    </ul>
  </div>
  <div className="navbar-end ">
    <h2><a className='flex justify-between gap-3 items-center font-semibold text-[16px] text-[#101727]'><BsCart3 />Login</a></h2>
    <button className='font-semibold text-[16px] text-[#FFFFFF] bg-[#9514FA] hover:bg-[#c381f5]  px-[16px] py-[12px] rounded-3xl ml-4'>Get Started</button>
  </div>
</div>
</div>
  )
}

export default Navber