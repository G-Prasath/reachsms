'use client'
import React, { useState } from 'react'
import Photoupload from '../../components/Photoupload'
import { MdDone } from "react-icons/md";
import SearchDropdown from '@/app/components/SearchDropdown';

const page = () => {
    const [tabActive, setTabActive] = useState('T1');
    const [commonVar, setCommonVar] = useState('')
    const [toogle, setToogle] = useState(false)

    const handletabClick = (arg: any) => {
        setTabActive(arg)
    }
    return (
        <section className='px-[16%] max-md:px-[10%] w-full pt-[4%] max-md:pt-[15%] z-50 mb-[50px]'>
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

            <div className='flex w-full max-md:flex-col gap-x-4 max-md: gap-y-3'>
                {/* ----------- Left Box ---------- */}
                <div className={`w-2/6 max-md:w-full ${tabActive !== 'T1' ? 'hidden' : 'fade_right duration-500'}`}>
                    <div className='relative hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 flex flex-col items-center py-[30px]'>
                        <div className='pb-[20px]'>
                            <Photoupload />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-hash_clr'>rshrivigneshwar@yahoo.com</p>
                            <a href="javascript:;" className='px-[15px] py-[10px] bg-primary text-white flex items-center justify-center mt-3 uppercase rounded-md text-[12px] font-semibold'>Save Picture</a>
                        </div>
                    </div>
                </div>

                {/* ---------- Change Password -------------  */}
                <div className={`w-3/6 max-md:w-full ${tabActive !== 'T2' ? 'hidden' : 'fade_left'}`}>
                    {/* ------------ Box 1 ---------------  */}
                    <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 flex flex-col items-center'>
                        {/* ---------- Header -----------  */}
                        <div className='flex items-center justify-between w-full px-[20px] py-[10px] border-b-[1px] border-b-hash_clr'>
                            <p className='font-semibold text-hash_clr'>Change Password</p>
                        </div>

                        {/* -------------- Body input Boxes -----------  */}
                        <div className='w-full flex flex-wrap px-[20px] py-[10px]'>
                            <div className='w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Old Password</p>
                                <input type="password" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>New Password</p>
                                <input type="password" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>New Confirm Password</p>
                                <input type="password" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-full flex justify-center items-center'>
                                <a href="javascript:;" className='px-[15px] py-[10px] bg-primary text-white flex items-center justify-center mt-3 uppercase rounded-md text-[12px] font-semibold'>Change Password</a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* -------------- Right Box ------- */}
                <div className={`w-4/6 max-md:w-full ${tabActive !== 'T1' ? 'hidden' : 'fade_left'}`}>
                    {/* ------------ Box 1 ---------------  */}
                    <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 flex flex-col items-center'>
                        {/* ---------- Header -----------  */}
                        <div className='flex items-center justify-between w-full px-[20px] py-[10px] border-b-[1px] border-b-hash_clr'>
                            <p className='font-semibold text-hash_clr'>Contact Info</p>
                            <div className={`border-[1.5px] rounded-full cursor-pointer p-1 ${commonVar === 'hover' ? 'border-[1.5px] border-green-400' : 'border-hash_clr border-dashed'}`} onMouseEnter={() => setCommonVar('hover')} onMouseLeave={() => setCommonVar('leave')}>
                                <MdDone className={`${commonVar === 'hover' ? 'rotate-[360deg] text-green-400 duration-500' : 'text-hash_clr'}`} fontSize={25} />
                            </div>
                        </div>

                        {/* -------------- Body input Boxes -----------  */}
                        <div className='w-full flex flex-wrap px-[20px] py-[10px]'>
                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>First Name</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Last Name</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Email</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Phone</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Entity ID</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>


                        </div>
                    </div>

                    {/* ------------ Box 2 --------------  */}
                    <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 flex flex-col items-center'>
                        {/* ---------- Header -----------  */}
                        <div className='flex items-center justify-between w-full px-[20px] py-[10px] border-b-[1px] border-b-hash_clr'>
                            <p className='font-semibold text-hash_clr'>Billing Address</p>
                            <div className={`border-[1.5px] rounded-full cursor-pointer p-1 ${commonVar === 'hover1' ? 'border-[1.5px] border-green-400' : 'border-hash_clr border-dashed'}`} onMouseEnter={() => setCommonVar('hover1')} onMouseLeave={() => setCommonVar('leave')}>
                                <MdDone className={`${commonVar === 'hover1' ? 'rotate-[360deg] text-green-400 duration-500' : 'text-hash_clr'}`} fontSize={25} />
                            </div>
                        </div>

                        {/* -------------- Body input Boxes -----------  */}
                        <div className='w-full flex flex-wrap px-[20px] py-[10px]'>
                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Number</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Street</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>City</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Postal Code</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>State</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Country</p>
                                <SearchDropdown />
                            </div>

                        </div>
                    </div>

                    {/* ------------ Box 3 ---------------  */}
                    <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 flex flex-col items-center'>
                        {/* ---------- Header -----------  */}
                        <div className='flex items-center justify-between w-full px-[20px] py-[10px] border-b-[1px] border-b-hash_clr'>
                            <p className='font-semibold text-hash_clr'>Shipping Address</p>

                            <div className="flex items-center justify-end">
                                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                    <input type="checkbox" id="toggle" className="sr-only peer" onChange={() => setToogle(!toogle)} />
                                    <div className="block relative bg-white shadow-textboxShadow  w-12 h-7 p-1 rounded-full before:absolute before:bg-white before:shadow-textboxShadow before:w-5 before:h-5 before:p-2 before:rounded-full before:transition-all before:duration-500 before:left-1.5 peer-checked:before:left-6 peer-checked:before:bg-white peer-checked:bg-primary">
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* -------------- Body input Boxes -----------  */}
                        <div className={`w-full flex flex-wrap px-[20px] py-[10px] ${toogle ? '' : 'pointer-events-none opacity-[.5]'}`}>
                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Number</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Street</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>City</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Postal Code</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>State</p>
                                <input type="text" className='border-[1px] border-hash_clr rounded-sm py-[7px] px-[7px] outline-none' />
                            </div>

                            <div className='w-1/2 max-md:w-full flex flex-col justify-start p-[10px] max-md:p-[5px]'>
                                <p className='font-semibold text-secondary text-[14px]'>Country</p>
                                <SearchDropdown />
                            </div>

                        </div>
                    </div>
                </div>
            </div>



























        </section>
    )
}

export default page