'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/reachsms_logo.svg'
import { AiOutlineHome, LuSend, BsVoicemail, FaEnvelopeOpenText, FiUsers, FiBook, MdCampaign, IoDocumentOutline, FiUser, FiSearch } from '../../public/icon'


const page = () => {

    const [menuTip, setMenuTip] = useState('')

    const handleHover = (arg: any) => {
        setMenuTip(arg)        
    }

    const handleRemove = () => {
        setMenuTip('')
    }
    
    
    
    return (
        <section>
            <div className='flex justify-between'>
                {/* --------- Left Bar ------------  */}
                <div className='left_nav w-[70px] flex items-center flex-col shadow-navShadow'>
                    <div className="logo w-full">
                        <a href="javascript:;">
                            <Image src={logo} alt='Logo' width={100} height={100} />
                        </a>
                    </div>
                    <div className="menus flex flex-col justify-center items-center w-full">
                        <ul className='w-full flex flex-col justify-center items-center'>

                            <li className='nav_li' onMouseEnter={() => handleHover('l1')} onMouseLeave={() => handleRemove()} >
                                <a href="javasvcript:;" className='nav_anchor'>
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
                                        <p className='z-10 flex items-center text-[12px]'>Voice</p>
                                    </div>
                                </a>
                            </li>


                            <li className='nav_li' onMouseEnter={() => handleHover('l4')} onMouseLeave={() => handleRemove()}>
                                <a href="javasvcript:;" className='nav_anchor'>
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
                                        <p className='z-10 flex items-center text-[12px]'>Manage</p>
                                    </div>
                                </a>
                            </li>
                            <li className='nav_li' onMouseEnter={() => handleHover('l6')} onMouseLeave={() => handleRemove()}>
                                <a href="javasvcript:;" className='nav_anchor'>
                                    <FiBook fontSize={20} />
                                    <div className={`nav_tooltip ${menuTip === 'l6' ? 'flex fade_right' : 'hidden'}`}>
                                        <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                        <p className='z-10 flex items-center text-[12px]'>Queue</p>
                                    </div>
                                </a>
                            </li>
                            <li className='nav_li' onMouseEnter={() => handleHover('l7')} onMouseLeave={() => handleRemove()}>
                                <a href="javasvcript:;" className='nav_anchor'>
                                    <MdCampaign fontSize={20} />
                                    <div className={`nav_tooltip ${menuTip === 'l7' ? 'flex fade_right' : 'hidden'}`}>
                                        <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                        <p className='z-10 flex items-center text-[12px]'>Campaign</p>
                                    </div>
                                </a>
                            </li>
                            <li className='nav_li' onMouseEnter={() => handleHover('l8')} onMouseLeave={() => handleRemove()}>
                                <a href="javasvcript:;" className='nav_anchor'>
                                    <IoDocumentOutline fontSize={20} />
                                    <div className={`nav_tooltip ${menuTip === 'l8' ? 'flex fade_right' : 'hidden'}`}>
                                        <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                        <p className='z-10 flex items-center text-[12px]'>Campaign</p>
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
                            <li className='nav_li' onMouseEnter={() => handleHover('l10')} onMouseLeave={() => handleRemove()}>
                                <a href="javasvcript:;" className='nav_anchor'>
                                    <FiSearch fontSize={20} />
                                    <div className={`nav_tooltip ${menuTip === 'l10' ? 'flex fade_right' : 'hidden'}`}>
                                        <div className='w-[10px] h-[10px] bg-primary left-[-4px] absolute rotate-45'></div>
                                        <p className='z-10 flex items-center text-[12px]'>Search</p>
                                    </div>
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>

                {/* ------------ Right Bar --------------  */}
                <div className='right_nav h-screen w-[100px] border-2 border-primary'>
                    
                </div>
            </div>
        </section>
    )
}

export default page