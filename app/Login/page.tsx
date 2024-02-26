'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import login_bg from '../../public/login/login-bg.jpg'
import logo from '../../public/login/loginlogo.svg'

import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { PiPasswordThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";


const page = () => {
  const [tabActive, setTabActive] = useState('LOGIN')
  const tabHanddel = (e: any) => {
    setTabActive(e.target.textContent)
  }

  return (
    <>
      <section id='login' className='flex items-center justify-center h-screen w-full flex-1 px-20 text-center bg-hole_body'>
        <div className='bg-primary h-screen w-[100px]'>

        </div>


        <div className='w-2/3 max-w-4xl float-left'>
          <p className='float-left heading'>LOGIN</p>
        </div>
        <div className='bg-white shadow-2xl flex flex-row w-2/3 max-w-4xl'>
          <div className='relative w-3/6 bg-primary'>
            <Image src={login_bg} alt='login-bg' className='absolute inset-0 h-full w-full object-fit' />
            <div className='absolute inset-0 bg-primary bg-opacity-65 '></div>
            <div className='relative flex justify-center items-center w-full h-full flex-col'>
              <Image src={logo} width={120} height={120} alt='logo' />
              <p className='uppercase text-[10px] tracking-[3px] leading-relaxed text-white font-semibold raleway'>Reach | Global Communication Platform</p>
            </div>
          </div>
          <div className='w-3/6 p-5'>
            <div className='flex mb-2 border-b-[1px] border-b-swap w-full'>
              <p className={`login_tab ${tabActive === 'LOGIN' ? 'login_click' : 'hover:login_hover'}`} onClick={(e) => tabHanddel(e)}>LOGIN</p>
              <p className={`login_tab ${tabActive === 'REGISTER' ? 'login_click' : 'hover:login_hover'}`} onClick={(e) => tabHanddel(e)}>REGISTER</p>
            </div>

            {/* Error-Box */}
            <div className="danger_box hidden">
              <p className='text-left raleway text-[0.9rem]'>The e-mail address and/or password you specified are not correct</p>
            </div>

            {/* Login */}
            <div className={`w-full mt-[30px] relative ${tabActive === 'LOGIN' ? '' : 'hidden'}`}>
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
                  <button type='submit' className='login-btn'>Login</button>
                  <a href="javascript:;">Forgot Password ?</a>
                </div>
              </form>
            </div>


            {/* Register */}
            <div className={`w-full mt-[30px] relative ${tabActive === 'REGISTER' ? '' : 'hidden'}`}>
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
                <div className='w-full flex justify-start mt-[20px]'>
                  <button type='submit' className='login-btn'>Register</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>

  )
}

export default page