'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/reachsms_logo.svg'
import { AiOutlineHome, LuSend, BsVoicemail, FaEnvelopeOpenText, FiUsers, FiBook, FaFileInvoice, IoDocumentOutline, FiUser, FiSearch, RxCross2, BiUser, IoSettingsOutline, MdLogout, AiOutlineMenuUnfold, IoClose } from '../../../public/icon'
import profile_logo from '../../../public/reachlogo.png'

const page = () => {

    const [menuTip, setMenuTip] = useState('')
    const [searchNav, setSearchNav] = useState(false)

    const handleHover = (arg: any) => {
        setMenuTip(arg)
    }
    const handleRemove = () => {
        setMenuTip('')
    }
    const [leftbar, setLeftbar] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)


    return (

        <>

            <div className={`shadow-navShadow w-full bg-white z-50 fixed px-4 max-h-max hidden max-md:block ${mobileNav ? '-translate-y-40 opacity-0 duration-1000 overflow-hidden' : 'opacity-1 duration-1000'}`}>
                <div className='flex items-center justify-start gap-x-3 h-ull'>
                    <a href="javascript:;">
                        <Image src={logo} alt="Logo" width={60} height={60} />
                    </a>
                    <div className='mt-[-15px] cursor-pointer' onClick={() => setMobileNav(!mobileNav)}>
                        <AiOutlineMenuUnfold fontSize={26} className='font-semibold' />
                    </div>
                </div>
            </div>

            {/* <section className='w-full flex justify-between fixed'> */}

                <div className={`flex justify-start h-screen max-w-max max-md:${mobileNav ? 'flex fade_left' : 'hidden'} fixed`}>

                    {/* --------- Left Bar ------------  */}
                    <div className='left_nav w-[70px] max-md:w-[60px] flex items-center flex-col shadow-navShadow bg-white'>
                        <div className="logo w-full">
                            <a href="javascript:;">
                                <Image src={logo} alt='Logo' width={100} height={100} />
                            </a>
                        </div>
                        <div className="menus flex flex-col justify-center items-center w-full">
                            <ul className='w-full flex flex-col justify-center items-center'>

                                <li className='nav_li' onMouseEnter={() => handleHover('l1')} onMouseLeave={() => handleRemove()} >
                                    <a href="/Dashboard" className='nav_anchor'>
                                        <AiOutlineHome fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l1' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Home</p>
                                        </div>
                                    </a>
                                </li>

                                <li className='nav_li' onMouseEnter={() => handleHover('l2')} onMouseLeave={() => handleRemove()}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <LuSend fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l2' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Send</p>
                                        </div>
                                    </a>
                                </li>

                                <li className='nav_li' onMouseEnter={() => handleHover('l3')} onMouseLeave={() => handleRemove()}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <BsVoicemail fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l3' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Voice Mail</p>
                                        </div>
                                    </a>
                                </li>


                                <li className='nav_li' onMouseEnter={() => handleHover('l4')} onMouseLeave={() => handleRemove()}>
                                    <a href="/email/send" className='nav_anchor'>
                                        <FaEnvelopeOpenText fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l4' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>E-mail</p>
                                        </div>
                                    </a>
                                </li>
                                <li className='nav_li' onMouseEnter={() => handleHover('l5')} onMouseLeave={() => handleRemove()}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <FiUsers fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l5' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-5px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>SMS</p>
                                        </div>
                                    </a>
                                </li>
                                <li className='nav_li' onMouseEnter={() => handleHover('l6')} onMouseLeave={() => handleRemove()}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <IoDocumentOutline fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l6' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Queue</p>
                                        </div>
                                    </a>
                                </li>
                                <li className='nav_li' onMouseEnter={() => handleHover('l7')} onMouseLeave={() => handleRemove()}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <FaFileInvoice fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l7' ? 'flex fade_right' : 'hidden'} right-[-130px]`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Email Campaign</p>
                                        </div>
                                    </a>
                                </li>
                                <li className='nav_li' onMouseEnter={() => handleHover('l8')} onMouseLeave={() => handleRemove()}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <FiBook fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l8' ? 'flex fade_right' : 'hidden'} right-[-130px]`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Voice Campaign</p>
                                        </div>
                                    </a>
                                </li>
                                <li className='nav_li' onMouseEnter={() => handleHover('l9')} onMouseLeave={() => handleRemove()}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <FiUser fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l9' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Account</p>
                                        </div>
                                    </a>
                                </li>
                                <li className='nav_li' onMouseEnter={() => handleHover('l10')} onMouseLeave={() => handleRemove()} onClick={() => setSearchNav(!searchNav)}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        {searchNav ? <RxCross2 fontSize={20} className={`${searchNav ? 'rotate-cross' : ''}`} /> : <FiSearch fontSize={20} />}
                                        <div className={`nav_tooltip ${menuTip === 'l10' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>{searchNav ? 'Close' : 'Search'}</p>
                                        </div>
                                    </a>
                                </li>

                                <li className={`nav_li hidden max-md:block`} onMouseEnter={() => handleHover('l11')} onMouseLeave={() => handleRemove()}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <MdLogout fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l11' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Logout</p>
                                        </div>
                                    </a>
                                </li>

                                <li className={`nav_li hidden max-md:block`} onMouseEnter={() => handleHover('l12')} onMouseLeave={() => handleRemove()} onClick={() => setMobileNav(false)}>
                                    <a href="javasvcript:;" className='nav_anchor'>
                                        <RxCross2 fontSize={20} />
                                        <div className={`nav_tooltip ${menuTip === 'l12' ? 'flex fade_right' : 'hidden'}`}>
                                            <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                            <p className='z-10 flex items-center text-[12px]'>Close</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className={`flex justify-end max-md:hidden ${leftbar ? 'flex' : ''} absolute right-0`}>

                    {/* ------------ Right Bar --------------  */}
                    <div className='right_nav w-[230px] flex flex-col items-center sticky top-0'>

                        <div className='p-5 w-full absolute flex justify-end z-50' onClick={() => setLeftbar(!leftbar)}>
                            <div className='profile_freame w-[80px] h-[80px] rounded-full overflow-hidden cursor-pointer p-3 shadow-profileShadow bg-white'>
                                <Image src={profile_logo} alt="Profile" className='object-fit' />
                            </div>
                        </div>


                        <div className={`w-full h-screen bg-white shadow-profileShadow ${leftbar ? 'fade_right' : 'opacity-0 duration-1000 overflow-hidden'}`}>

                            <ul className='flex items-end flex-col gap-y-[25px] absolute top-[25%] left-[10%]'>
                                <li className=''>
                                    <a href="javascript:;" className='flex items-center gap-x-3'>
                                        <p className='font-semibold text-secondary uppercase text-[14px]'>Profile</p>
                                        <BiUser fontSize={25} className='text-secondary' />
                                    </a>
                                </li>
                                <li className=''>
                                    <a href="javascript:;" className='flex items-center gap-x-3'>
                                        <p className='font-semibold text-secondary uppercase text-[14px]'>Change Password</p>
                                        <IoSettingsOutline fontSize={25} className='text-secondary' />
                                    </a>
                                </li>
                                <li className=' '>
                                    <a href="javascript:;" className='flex items-center gap-x-3'>
                                        <p className='font-semibold text-secondary uppercase text-[14px]'>Logout</p>
                                        <MdLogout fontSize={25} className='text-secondary' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            {/* </section> */}
        </>
    )
}

export default page