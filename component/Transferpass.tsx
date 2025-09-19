import Histry from '@/image/svg/history'
import Home from '@/image/svg/home'
import Notify from '@/image/svg/notify'
import Profile from '@/image/svg/profile'
import Rewards from '@/image/svg/rewards'
import Transfer1 from '@/image/svg/tranfer1'
import Wavy from '@/image/svg/Wavy'
import Link from 'next/link'
import React from 'react'

const Transferpass = () => {
  return (
    <div>
         <header >
                <div className='flex items-center justify-between md:px-15 px-5 h-20 bg-white shadow-md fixed left-0 top-0 right-0'>
                    <div className='flex items-center justify-center gap-x-4'>
                        <Wavy />
                        <p className='text-[#2164A1] text-xl font-extrbold md:text-3xl'>PayWave</p>
                    </div>
                    <div className="flex items-center mdgap-x-3">
                        <div>
                            <Notify />
                        </div>
                        <div className='w-[45px] h-[45px] rounded-full  flex items-center justify-center'>
                            <Profile />
                        </div>
                    </div>
                </div>
            </header>
            <main className='pt-26 flex items-center justify-center h-[100vh] ' >
                <form className='flex flex-col items-center justify-center gap-y-5 w-150 h-100 shadow-md bg-white rounded-lg text-blue-700'>
                    <input type='number' className='overflow-hidden h-10 border-2 border-gray-300 p-2 rounded-md focus:outline-none'  placeholder='enter your 4 digit pin'/>
                    <button  className='w-27 text-white rounded-sm bg-blue-500 h-10'>Submit</button>
                </form>
            </main>
             <footer>
                <div className='flex items-center justify-evenly mdpx-8 h-20 bg-white shadow-xl z-40  fixed bottom-0 left-0  right-0'>
                    <Link href="/dashboard">
                        <div className="flex flex-col items-center justify-center">
                            <Home />
                            <p className='cursor-pointer fmd:ont-bold md:text-lg text-blue-500'>Home</p>
                        </div></Link>
                    <Link href="/beforetransfer"><div className="flex flex-col items-center  justify-center">
                        <Transfer1 />
                        <p className='cursor-pointer  md:font-bold md:text-lg text-blue-500'>Transfer</p>
                    </div></Link>
                    <div className="flex flex-col items-center justify-center">
                        <Histry />
                        <p className='cursor-pointer md:font-bold md:text-lg text-blue-500'>History</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Rewards />
                        <p className='cursor-pointer md:font-bold md:text-lg text-blue-500'>Rewards</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Profile />
                        <p className='cursor-pointer md:font-bold md:text-lg text-blue-500'>Profile</p>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Transferpass