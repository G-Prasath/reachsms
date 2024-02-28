'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import login_bg from '../../public/login/login-bg.jpg'
import logo from '../../public/login/loginlogo.svg'

import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { PiPasswordThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import Link from 'next/link'


const page = () => {
  const [tabActive, setTabActive] = useState('LOGIN')
  const tabHanddel = (e: any) => {
    setTabActive(e.target.textContent)
  }

  const handleLogin = () => {

  }

  return (
    <>
      <section id='login' className='flex flex-col items-center justify-center max-md:h-auto h-screen w-full flex-1 px-20 max-md:pb-10 max-md:px-5 text-center bg-hole_body'>
        <div className='w-2/3 max-md:w-full max-w-4xl float-left'>
          <p className={`float-left heading fade_left`}>{tabActive}</p>
        </div>
        <div className='bg-white hover:shadow-2xl duration-300 flex max-md:flex-col w-2/3 max-w-4xl max-md:w-full max-h-screen overflow-hidden'>
          <div className='relative w-3/6 bg-primary max-md:w-full max-md:h-[50vh]'>
            <Image src={login_bg} alt='login-bg' className='absolute inset-0 h-full w-full object-fit' />
            <div className='absolute inset-0 bg-primary bg-opacity-65 '></div>
            <div className='relative flex justify-center items-center w-full h-full flex-col'>
              <Image src={logo} width={120} height={120} alt='logo' />
              <p className='uppercase text-[10px] tracking-[3px] leading-relaxed text-white font-semibold raleway'>Reach | Global Communication Platform</p>
            </div>
          </div>
          <div className='w-3/6 p-5 max-md:w-full'>
            <div className='flex mb-2 border-b-[1px] border-b-swap w-full'>
              <p className={`login_tab ${tabActive === 'LOGIN' ? 'login_click' : 'hover:login_hover'}`} onClick={(e) => tabHanddel(e)}>LOGIN</p>
              <p className={`login_tab ${tabActive === 'REGISTER' ? 'login_click' : 'hover:login_hover'}`} onClick={(e) => tabHanddel(e)}>REGISTER</p>
            </div>

            {/* Error-Box */}
            <div className="danger_box hidden">
              <p className='text-left raleway text-[0.9rem]'>The e-mail address and/or password you specified are not correct</p>
            </div>

            {/* Login */}
            <div className={`w-full mt-[30px] relative ${tabActive === 'LOGIN' ? 'fade_right' : 'hidden'} overflow-hidden `}>
              <form action="javascript:;">
                <div className="inputs">
                  <div className="input-feilds">
                    <CiMail fontSize={20} className='absolute left-[10px]' />
                    <input type="text" placeholder='E-mail' className='input-box' />
                  </div>

                  <div className="input-feilds">
                    <CiLock fontSize={20} className='absolute left-[10px]' />
                    <input type="text" placeholder='Password' className='input-box' />
                  </div>

                  <div className="flex items-center mt-[10px] gap-x-2">
                    <input type="checkbox" name="checkBox" id="checkBox" />
                    <p>Remember Me ?</p>
                  </div>

                </div>
                <div className='w-full flex justify-between items-center my-[30px]'>
                  {/* <button type='submit'>Login</b?utton> */}
                  <Link href='/Dashboard' className='login-btn'>Login</Link>
                  <a href="javascript:;" className='text-sm text-swap-click_border'>Forgot Password ?</a>
                </div>
              </form>
            </div>


            {/* Register */}
            <div className={`w-full mt-[30px] relative ${tabActive === 'REGISTER' ? 'fade_right' : 'hidden'}`}>
              <form action="javascript:;">
                <div className="inputs">
                  <div className="input-feilds">
                    <CiMail fontSize={20} className='absolute left-[10px]' />
                    <input type="text" placeholder='E-mail' className='input-box' />
                  </div>
                  <div className="input-feilds">
                    <IoCallOutline fontSize={20} className='absolute left-[10px]' />
                    <input type="text" placeholder='Mobile' className='input-box' />
                  </div>
                  <div className="input-feilds">
                    <CiLock fontSize={20} className='absolute left-[10px]' />
                    <input type="text" placeholder='Password' className='input-box' />
                  </div>
                  <div className="input-feilds">
                    <PiPasswordThin fontSize={20} className='absolute left-[10px]' />
                    <input type="text" placeholder='Confirm Password' className='input-box' />
                  </div>
                </div>
                <div className='w-full flex justify-start my-[20px]'>
                  <button type='submit' className='login-btn'>Register</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section >
    </>

  )
}

export default page