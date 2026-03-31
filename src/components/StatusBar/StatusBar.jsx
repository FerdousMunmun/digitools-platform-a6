import React from 'react'

const StatusBar = () => {
  return (
    <div>
        <div className="mx-auto w-full max-w-[1280px] bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] px-10 py-[60px] mt-[85px]">
      <div className="grid grid-cols-3 text-center text-[#FFFFFF]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[60px] font-Extrabold leading-none">50K+</h2>
          <p className="mt-3 text-[24px] font-medium text-[#FFFFFF]">Active Users</p>
        </div>

        <div className="flex flex-col items-center justify-center border-x border-white/25">
          <h2 className="text-[60px] font-Extrabold leading-none">200+</h2>
          <p className="mt-3 text-[24px] font-medium text-[#FFFFFF]">Premium Tools</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[60px] font-Extrabold leading-none">4.9</h2>
          <p className="mt-3 text-[24px] font-medium text-[#FFFFFF]">Rating</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default StatusBar