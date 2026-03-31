import React from 'react'
import BannerImg from "../../assets/banner.png"
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-base-100 py-[117px] '>
          <div className="md:flex gap-2 items-center justify-between">
            <div className="w-[634px] bg-white px-6 pt-6 pb-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-[16px] font-medium text-[#9514FA]">
        <span className="h-2.5 w-2.5 rounded-full bg-violet-500 ring-4 ring-violet-200"></span>
        New: AI-Powered Tools Available
      </div>

      <h1 className="mt-6 max-w-[634px] md:text-7xl sm:text-3xl  font-bold leading-[1.05] tracking-[-0.04em] text-[#101727]">
        Supercharge Your Digital Workflow
      </h1>

      <p className="mt-6 max-w-[640px] text-[18px] text-sm leading-10 text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.
      </p>

      <p className="text-[18px] text-sm text-[#627382]">Explore Products</p>

      <div className="mt-8 flex items-center gap-4">
        <button className="rounded-full bg-[#9514FA] px-8 py-5 text-[16px] font-bold text-white shadow-md hover:bg-[#501e83]">
          Explore Products
        </button>

        <button className="flex items-center gap-3 rounded-full border-2 border-[#9514FA] px-8 py-4 text-[16px] font-bold text-[#9514FA] hover:bg-[#ceade7]">
          <span className="flex h-7 w-6 items-center justify-center text-bold">
           <IoPlayOutline  className=''/>
          </span>
          Watch Demo
        </button>
      </div>
    </div>
         <div className="w-[500px]">
            <img src={BannerImg} alt="banner"/>
         </div>
          </div>
    </div>
   
  )
}

export default Banner