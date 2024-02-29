import React, { useState } from 'react'
import { Progress } from 'antd';
import { CgDanger } from "react-icons/cg";

import { FiClock } from "react-icons/fi";
import { IoPlayCircle } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";

const DashboardCard = () => {
  const [mouseEnter, setMouseEnter] = useState(false)  

  return (
    <>
      <div className="w-full py-[20px] px-[20px] my-[10px] flex flex-col items-start shadow-cardShadow bg-white rounded-sm relative z-10 max-md:z-0" onMouseEnter={() => { setMouseEnter(true) }} onMouseLeave={() => { setMouseEnter(false) }}>

        <div className={`tooltip w-full border-2 border-md absolute top-[-65%] left-0 bg-card_hover_bg rounded-2xl justify-center ${mouseEnter ? 'flex fade_right' : 'hidden'}`}>
          <div className='arrow h-[30px] w-[30px] absolute -bottom-2 transform rotate-45 bg-card_hover_bg z-0'></div>


          <div className="flex flex-col justify-start items-start w-full px-[20px] py-[20px] z-40 gap-y-3">
            <div className="flex items-center gap-x-3 z-10">
              <FiClock fontSize={20} className='text-white font-bold' />
              <div className='flex justify-start flex-col i   tems-start'>
                <p className='text-[10px] text-card_txt_clr uppercase raleway'>Sent On</p>
                <p className='text-[12px] text-white raleway font-semibold'>N/A</p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 z-10">
              <GoDatabase fontSize={20} className='text-white font-bold' />
              <div className='flex justify-start flex-col items-start'>
                <p className='text-[10px] text-card_txt_clr uppercase raleway'>Total volume</p>
                <p className='text-[14px] text-white raleway'>1</p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 z-10">
              <IoPlayCircle fontSize={20} fontWeight={700} className='text-white font-bold' />
              <div className='flex justify-start flex-col items-start'>
                <p className='text-[10px] text-card_txt_clr uppercase raleway'>Total Processed</p>
                <p className='text-[14px] text-white raleway'>0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex justify-between relative w-full mb-[3rem]">
          <p className='text-[14px] jost'>Name of Client</p>
          <p className='text-white bg-status_clr text-[13px] rounded-[4px] px-[.75rem] jost flex items-center'>Status</p>
        </div>
        <div className="range_bar flex flex-col items-center justify-center w-full relative">
          <Progress type="circle" percent={1} className='mb-[10px]' format={() => ''} strokeColor={'#FF7273'} />
          <CgDanger className='absolute text-hash_clr top-[46px]' fontSize={30} />
          <p className='text-[16px] text-hash_clr jost my-[10px]'>0% Completed</p>
        </div>
      </div>
    </>
  )
}

export default DashboardCard
