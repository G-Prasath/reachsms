'use client'

import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

// --------- Email Box icons ------------- 
import { FaBold } from "react-icons/fa";
import { RiItalic } from "react-icons/ri";
import { MdHorizontalRule } from "react-icons/md";
import { FaHeading } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiListOrdered } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import { GrFormUpload } from "react-icons/gr";
import { MdOutlineFitScreen } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
// import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { Button, TimePicker } from 'antd';

// import Datechoose from '@/app/components/Datechoose';




const page = () => {

    const [tabActive, setTabActive] = useState('T1');
    const [dropdown, setDropdown] = useState(false);
    const [dropdownOptions, setDropdownOptions] = useState('Choose Options')
    const [emailTab, setEmailTab] = useState('editor')
    const [open, setOpen] = useState(false);
    const [toggle, setToogle] = useState(false)
    const [toggleHover, setToggleHover] = useState(false)
    const [check, setCheck] = useState(false)



    const handletabClick = (arg: any) => {
        setTabActive(arg)
    }
    const chooseOprions = (e: any) => {
        setDropdownOptions(e.target.textContent)
        setDropdown(false)
    }
    const handleCheck = (e: any) => {
        setCheck(e.target.checked)
    }


    return (
        <section>

            <div className='px-[15%] max-md:px-[10%] w-full pt-[4%] max-md:pt-[15%] z-50 mb-[50px]'>

                {/* ------------------- Heading -----------  */}
                <div className='flex justify-between'>
                    <p className='heading'>SEND</p>
                    <div className='flex flex-col justify-start py-[20px]'>
                        <p className='text-primary font-bold'>4879</p>
                        <p className='text-primary'>Request Credits</p>
                    </div>
                </div>

                {/* ------------- Tab Move ---------- */}
                <div className='flex mt-[30px] border-b-[1px] border-b-hash_clr text-hash_clr'>
                    <a href="javscript:;" className={`py-[10px] px-[10px] ${tabActive === 'T1' ? 'tab_active' : 'hover:tab_hover'}`} onClick={() => handletabClick('T1')}>Normal Push</a>
                    <a href="javscript:;" className={`py-[10px] px-[10px] ${tabActive === 'T2' ? 'tab_active' : 'hover:tab_hover'}`} onClick={() => handletabClick('T2')}>File Push</a>
                    <a href="javscript:;" className={`py-[10px] px-[10px] ${tabActive === 'T3' ? 'tab_active' : 'hover:tab_hover'}`} onClick={() => handletabClick('T3')}>Group Push</a>
                </div>

                {/* --------------- Box 1 -----------  */}
                <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300'>
                    <div className='text-[16px] jost font-[500] text-hash_clr px-[20px] py-[15px] border-b-[1px] border-b-hash_clr'>
                        <p>Campaign</p>
                    </div>
                    <div className='w-full p-[20px]'>
                        <p className='text-[14px] font-semibold'>Campaign Name</p>
                        <input type="text" className='inputbox_style' />
                    </div>
                </div>

                {/* ---------------- Box 2 -------------- */}
                <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 overflow-hidden'>
                    <div className='text-[16px] jost font-[500] text-hash_clr px-[20px] py-[15px] border-b-[1px] border-b-hash_clr'>
                        <p>Email</p>
                    </div>

                    <div className='w-full px-[20px] py-[10px] flex max-md:flex-col items-start gap-x-4 max-md:gap-y-2'>

                        <div className='w-4/6 max-md:w-full'>
                            <p className='text-[14px] font-semibold'>Choose from templates</p>

                            <button className="inputbox_style flex items-center justify-between overflow-hidden" type="button" onClick={() => setDropdown(!dropdown)}>{dropdownOptions} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>


                            <div className={`z-10 bg-white divide-y rounded-lg shadow w-full text-secondary ${dropdown ? 'fade_top' : ' absolute h-[0px] overflow-hidden duration-500'}`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="javascript:;" className="block px-4 py-2 hover:bg-hole_body text-secondary" onClick={(e) => chooseOprions(e)}>Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="block px-4 py-2 hover:bg-hole_body text-secondary" onClick={(e) => chooseOprions(e)}>Settings</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="block px-4 py-2 hover:bg-hole_body text-secondary" onClick={(e) => chooseOprions(e)}>Earnings</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className='w-2/6 max-md:w-full flex items-start mt-[25px] max-md:my-[25px] relative'>
                            <a href="javascript:;" className='w-full h-[30px] bg-primary text-white flex justify-center items-center rounded-sm text-[12px] absolute'><span>Manage Templates</span></a>
                        </div>

                    </div>

                    <div className='w-full px-[20px] py-[10px]'>
                        <p className='text-[14px] font-semibold'>Subject</p>
                        <input type="text" className='inputbox_style' />
                    </div>

                    {/* -------- Email Composer Start -------------  */}
                    <div className='w-full px-[20px] py-[10px]'>
                        <p className='text-[14px] font-semibold'>Type Your Email</p>
                        <div className='border-[1px] border-hash_clr w-full rounded-t-md mt-[10px]'>
                            <div className='flex max-md:flex-col items-center justify-between border-b-[1px] border-b-hash_clr w-full'>
                                {/* ------------- Left side -------------  */}
                                <div className='flex items-center max-md:mb-[25px]'>
                                    <div className={`flex items-center gap-x-1 py-[15px] max-md:py-[10px] px-[10px] cursor-pointer  ${emailTab === 'editor' ? 'emailbox' : 'hover:border-b-[1px] border-b-hash_clr'}`} onClick={() => setEmailTab('editor')}>
                                        <FaEdit />
                                        <p className='text-[16px] font-semibold '>Editor</p>
                                    </div>
                                    <div className={`flex items-center gap-x-1 py-[15px] max-md:py-[10px] px-[10px] cursor-pointer ${emailTab === 'preview' ? 'emailbox' : 'hover:border-b-[1px] border-b-hash_clr'}`} onClick={() => setEmailTab('preview')}>
                                        <FaEye />
                                        <p className='text-[16px] font-semibold'>Preview</p>
                                    </div>
                                </div>

                                {/* -------------------- Right side --------------  */}
                                <div className='w-full flex justify-end max-md:justify-start pr-[15px]'>
                                    <ul className='flex gap-x-[5px] max-md:gap-x-0'>
                                        <li title='Bold' className='email_editor'>
                                            <FaBold className='email_icons' />
                                        </li>
                                        <li title='Italic' className='email_editor'>
                                            <RiItalic className='email_icons' />
                                        </li>
                                        <li title='Horizontal' className='email_editor'>
                                            <MdHorizontalRule className='email_icons' />
                                        </li>
                                        <li title='Heading' className='email_editor'>
                                            <FaHeading className='email_icons' />
                                        </li>
                                        <li title='Pre or code' className='email_editor'>
                                            <FaCode className='email_icons' />
                                        </li>

                                        <li title='Quote' className='email_editor'>
                                            <FaQuoteLeft className='email_icons' />
                                        </li>
                                        <li title='Unorderlist' className='email_editor'>
                                            <AiOutlineUnorderedList className='email_icons' />
                                        </li>
                                        <li title='Orderlist' className='email_editor'>
                                            <RiListOrdered className='email_icons' />
                                        </li>
                                        <li title='Link URL' className='email_editor'>
                                            <IoIosLink className='email_icons' />
                                        </li>
                                        <li title='Uploade Image' className='email_editor'>
                                            <GrFormUpload className='email_icons' />
                                        </li>
                                        <li title='Full Screen' className='email_editor'>
                                            <MdOutlineFitScreen className='email_icons' />
                                        </li>
                                        <li title='Markdown Guide' className='email_editor'>
                                            <FaRegQuestionCircle className='email_icons' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <textarea cols={30} rows={10} className='w-full border-l-[1px] border-r-[1px] border-b-[1px] border-l-hash_clr border-r-hash_clr border-b-hash_clr outline-none p-[10px] rounded-b-md' placeholder='Compose Your Mail'></textarea>
                        </div>


                        {/* --------------------- File PUSH ---------------  */}
                        <div className={`relative flex justify-between items-center max-md:flex-col ${tabActive !== 'T2' ? 'hidden' : ''}`}>
                            <div className='flex items-center gap-x-2 max-w-max'>
                                <input type="checkbox" onChange={(e) => handleCheck(e)} />
                                <p>Dynamic Messages</p>
                            </div>

                            <div className={`min-w-[300px] max-md:w-full ${check ? 'fade_top' : 'hidden'}`}>
                                <button className="inputbox_style flex items-center justify-between overflow-hidden w-full" type="button" onClick={() => setDropdown(!dropdown)}>{dropdownOptions} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>


                                <div className={`z-10 bg-white divide-y rounded-lg shadow w-full text-secondary ${dropdown ? 'fade_left' : 'absolute h-[0px] overflow-hidden duration-500'}`}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="javascript:;" className="block px-4 py-2 hover:bg-hole_body text-secondary" onClick={(e) => chooseOprions(e)}>Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" className="block px-4 py-2 hover:bg-hole_body text-secondary" onClick={(e) => chooseOprions(e)}>Settings</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" className="block px-4 py-2 hover:bg-hole_body text-secondary" onClick={(e) => chooseOprions(e)}>Earnings</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* --------------------- File PUSH ---------------  */}

                    </div>
                    {/* -------- Email Composer End -------------  */}

                </div>

                {/* ------------------ Normal Push Box 3 -------------- */}
                <div className={`hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 ${tabActive !== 'T1' ? 'hidden' : ''}`}>
                    <div className='text-[16px] jost font-[500] text-hash_clr px-[20px] py-[15px] border-b-[1px] border-b-hash_clr'>
                        <p>Emails</p>
                    </div>
                    <div className='flex h-auto max-md:flex-col w-full'>
                        <div className='w-1/2 max-md:w-full p-[20px]'>
                            <p className='text-[14px] font-semibold'>Emails</p>
                            <textarea cols={30} rows={5} className='border-[1px] border-hash_clr overflow-hidden w-full outline-none'></textarea>
                        </div>
                        <div className='w-1/2 max-md:w-full max-md:px-[20px] flex justify-center items-center text-secondary'>
                            <p>Note : You can paste maximum 10,000 emails in a single queue. It should be one by one.</p>
                        </div>
                    </div>
                </div>

                {/* ----------------------- File Push Box 3 -----------------  */}
                <div className={`hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 ${tabActive !== 'T2' ? 'hidden' : ''}`}>
                    <div className='text-[16px] jost font-[500] text-hash_clr px-[20px] py-[15px] border-b-[1px] border-b-hash_clr'>
                        <p>File Upload</p>
                    </div>
                    <div className='flex h-auto max-md:flex-col w-full'>
                        <div className='w-full max-md:w-full p-[20px]'>
                            <p className='text-[14px] font-semibold'>Choose File</p>
                            <div className='w-full overflow-hidden relative'>
                                <input type="file" className='border-[1px] border-hash_clr p-[5px] rounded-md  w-full' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------- Box 4 ----------------  */}
                <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300'>
                    <div className='text-[16px] jost font-[500] text-hash_clr px-[20px] py-[15px] border-b-[1px] border-b-hash_clr'>
                        <p>Sender Details</p>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-1/2 max-md:w-full px-[20px] py-[10px]'>
                            <p className='text-[14px] font-semibold'>Sender Email ID</p>
                            <input type="text" className='inputbox_style' />
                        </div>
                        <div className='w-1/2 max-md:w-full px-[20px] py-[10px]'>
                            <p className='text-[14px] font-semibold'>Sender Name</p>
                            <input type="text" className='inputbox_style' />
                        </div>
                        <div className='w-1/2 max-md:w-full px-[20px] py-[10px]'>
                            <p className='text-[14px] font-semibold'>Replay To</p>
                            <input type="text" className='inputbox_style' />
                        </div>
                    </div>

                </div>

                {/* ----------------- Box 5 ------------------  */}
                <div className='hole_box shadow-boxShadow-profileShadow hover:shadow-textboxShadow duration-300 relative pb-[20px] mb-[30px]'>
                    <div className='text-[16px] jost font-[500] text-hash_clr px-[20px] py-[15px] border-b-[1px] border-b-hash_clr flex justify-between'>
                        <p>Campaign</p>
                        <div className='flex items-center'>

                            <div className={`absolute right-[-80px] max-md:right-0 -top-6 bg-card_hover_bg text-white py-[5px] rounded-md px-[10px] flex justify-center ${toggleHover ? 'scale-1 duration-500' : 'scale-0'}`}>
                                <div className='w-[10px] h-[10px] bg-card_hover_bg absolute -rotate-45 -bottom-[5px] max-md:right-[40px] right-[50%] '></div>
                                <p className='text-[14px]'>Enable if you want schedule the message</p>
                            </div>

                            <div className="flex items-center justify-center w-full" onMouseEnter={() => setToggleHover(true)} onMouseLeave={() => setToggleHover(false)}>
                                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                    <input type="checkbox" id="toggle" className="sr-only peer" onChange={() => setToogle(!toggle)} />
                                    <div className="block relative bg-white shadow-textboxShadow  w-12 h-7 p-1 rounded-full before:absolute before:bg-white before:shadow-textboxShadow before:w-5 before:h-5 before:p-2 before:rounded-full before:transition-all before:duration-500 before:left-1.5 peer-checked:before:left-6 peer-checked:before:bg-white peer-checked:bg-primary">
                                    </div>
                                </label>
                            </div>
                            
                        </div>
                    </div>

                    <div className={`flex items-center w-full px-[20px] gap-x-[20px] max-md:flex-col max-md:gap-y-4 ${toggle ? '' : 'pointer-events-none opacity-[.6]'}`}>
                        <div className='w-1/2 max-md:w-full flex flex-col gap-y-2'>
                            <div className='py-[5px]'>
                                <p className='mb-[5px] text-[14px] jost font-[600]'>Date</p>
                                <DatePicker style={{ width: '100%' }} />
                            </div>
                            <div className='py-[5px]'>
                                <p className='mb-[5px] text-[14px] jost font-[600]'>Time</p>
                                <TimePicker
                                    style={{ width: '100%' }}
                                    open={open}
                                    onOpenChange={setOpen}
                                    renderExtraFooter={() => (
                                        <Button size="small" type="primary" onClick={() => setOpen(false)}>
                                            OK
                                        </Button>
                                    )}
                                />
                            </div>
                        </div>
                        <div className='w-1/2 max-md:w-full flex items-center justify-center text-secondary'>
                            <p>Note : Promotional email time is between 9:00 AM to 9:00 PM only</p>
                        </div>
                    </div>                    
                </div>

                {/* ------------------- Submit Button ------------  */}
                <a href="javascript:;" className='px-[30px] py-[15px] bg-primary text-white uppercase rounded-full text-[12px] font-semibold'>Submit</a>
            </div>

        </section>
    )
}

export default page