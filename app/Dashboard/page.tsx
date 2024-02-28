'use client'
import React from 'react'
import DashboardCard from '../components/DashboardCard'
import Linechart from '../components/Linechart'


const page = () => {
    return (
        <section className=' w-max-container h-min-screen px-[10%] py-[5%]'>
            <div>
                <div className="heading">
                    <h2>Dashboard</h2>
                </div>
                <div className="card-section">
                    <div className="mb-[5%] border-b-[1px] border-b-swap w-full">
                        <p className='login_tab text-primary border-b-[2px] border-b-primary inline-block text-[16px]'>Last 5 Queues</p>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div className='w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 text-center'>
                            <DashboardCard />
                        </div>
                        <div className='w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 text-center'>
                            <DashboardCard />
                        </div>
                        <div className='w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 text-center'>
                            <DashboardCard />
                        </div>
                        <div className='w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 text-center'>
                            <DashboardCard />
                        </div>
                        <div className='w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 text-center'>
                            <DashboardCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className='lineChart w-full bg-white px-[20px] py-[20px] mt-[50px]'>
                <Linechart/>
            </div>
        </section>
    )
}

export default page