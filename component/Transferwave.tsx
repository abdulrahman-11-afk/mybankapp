import Histry from '@/image/svg/history'
import Home from '@/image/svg/home'
import Notify from '@/image/svg/notify'
import Profile from '@/image/svg/profile'
import Rewards from '@/image/svg/rewards'
import Transfer1 from '@/image/svg/tranfer1'
import Wavy from '@/image/svg/Wavy'
import Link from 'next/link'
import React from 'react'

const Transferwave = () => {
    return (
        <div>
            <header className='bg-wh'>
                <div className='flex items-center justify-between md:px-15 h-20 bg-white shadow-md fixed left-0 top-0 right-0'>
                    <div className='flex items-center justify-center gap-x-4'>
                        <Wavy />
                        <p className='text-[#2164A1] font-extrbold text-3xl'>PayWave</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div>
                            <Notify />
                        </div>
                        <div className='w-[45px] h-[45px] rounded-full  flex items-center justify-center'>
                            <Profile />
                        </div>
                    </div>
                </div>
            </header>
            <main className='bg-gray-100'>
                <section className='pt-30'>
                    <div className='md:mx-17 flex items-center justify-between'>
                        <p className='text-blue-500 text-xl'>Transfer to PayWave</p>
                        <p className='text-blue-500 text-xl'>History</p>
                    </div>
                </section>
                <section className='mt-10 flex items-center justify-center bg-gray-100 '>
                    <form className='flex flex-col  justify-center gap-y-5 w-250 h-100 shadow-md bg-white rounded-lg text-blue-700'>
                        <div className='flex flex-col mx-20 '>
                            <input className='overflow-hidden h-10  focus:outline-none' required type='number' placeholder='Enter 10 digits Account Number' />
                            <div className='items-center flex justify-center'>
                                <hr className='text-gray-400 w-[100%]' />
                            </div>
                        </div>
                        <div className='flex flex-col mx-20 '>
                            <input className='h-10  focus:outline-none' type='number' required placeholder='Enter Amount (₦) ' />
                            <div className='items-center flex justify-center'>
                                <hr className='text-gray-400 w-[100%]' />
                            </div>
                        </div>
                        <div className='flex flex-col mx-20 '>
                            <input className='h-10  focus:outline-none' type='text' placeholder='Remark (optional)' />
                            <div className='items-center flex justify-center'>
                                <hr className='text-gray-400 w-[100%]' />
                            </div>
                        </div>
                        <div className='items-center justify-center flex'>
                            <button className='w-27 text-white rounded-sm bg-blue-500 h-10'>Next</button>
                        </div>

                    </form>
                </section>
                <div className='bg-gray-100 h-30'>
                
            </div>
            </main>
            <footer>
                <div className='flex items-center justify-evenly px-8 h-20 bg-white shadow-xl z-40  fixed bottom-0 left-0  right-0'>
                    <Link href="/dashboard"> <div className="flex flex-col items-center justify-center">
                        <Home />
                        <p className='cursor-pointer font-bold text-lg text-blue-500'>Home</p>
                    </div></Link>
                    <Link href="/beforetransfer"><div className="flex flex-col items-center  justify-center">
                        <Transfer1 />
                        <p className='cursor-pointer  font-bold text-lg text-blue-500'>Transfer</p>
                    </div></Link>
                    <div className="flex flex-col items-center justify-center">
                        <Histry />
                        <p className='cursor-pointer font-bold text-lg text-blue-500'>History</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Rewards />
                        <p className='cursor-pointer font-bold text-lg text-blue-500'>Rewards</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Profile />
                        <p className='cursor-pointer font-bold text-lg text-blue-500'>Profile</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Transferwave