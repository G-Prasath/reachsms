'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Photoupload from '../../components/Photoupload'

const page = () => {
    const [tabActive, setTabActive] = useState('T1');
    const handletabClick = (arg: any) => {
        setTabActive(arg)
    }
    return (
        <section className='px-[13%] max-md:px-[10%] w-full pt-[4%] max-md:pt-[15%] z-50'>
            {/* ------------------- Heading -----------  */}
            <div className='flex justify-between'>
                <p className='heading'>Edit Account</p>
            </div>

            {/* ------------- Tab Move ---------- */}
            <div className='flex mt-[30px] border-b-[1px] border-b-hash_clr text-hash_clr'>
                <a href="javscript:;" className={`py-[10px] px-[10px] ${tabActive === 'T1' ? 'tab_active' : 'hover:tab_hover'}`} onClick={() => handletabClick('T1')}>Account</a>
                <a href="javscript:;" className={`py-[10px] px-[10px] ${tabActive === 'T2' ? 'tab_active' : 'hover:tab_hover'}`} onClick={() => handletabClick('T2')}>Change Password</a>
            </div>

            {/* --------------- Box 1 ------------------  */}

            <div className='flex w-full max-md:flex-col'>
                {/* ----------- Left Box ---------- */}
                <div className='w-2/5 max-md:w-full bor h-[300px]'>
                   <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 flex flex-col items-center'>
                        <div>
                           <Photoupload/>
                        </div>
                        <div>
                            <p className='text-hash_clr'>rshrivigneshwar@yahoo.com</p>
                        </div>
                   </div>
                </div>

                {/* -------------- Right Box ------- */}
                <div className='w-3/5 max-md:w-full bor h-[300px]'>
                    Box 2
                </div>
            </div>



























        </section>
    )
}

export default page