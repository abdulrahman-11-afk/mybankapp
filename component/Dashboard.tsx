import Airtime from '@/image/svg/airtime'
import Data from '@/image/svg/data'
import Dots from '@/image/svg/Dots'
import Eyes from '@/image/svg/eyes'
import Transfer from '@/image/svg/transfer'
import Wavy from '@/image/svg/Wavy'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <header>
                <div className='flex items-center justify-between px-8 h-20 bg-white shadow-md fixed left-0 top-0 right-0'>
                    <div className='flex items-center justify-center gap-x-4'>
                        <Wavy />
                        <p className='text-[#2164A1] font-extrbold text-3xl'>PayWave</p>
                    </div>
                    <div className='w-[45px] h-[45px] rounded-full bg-gray-300'>

                    </div>
                </div>
            </header>
            <section className='mt-30'>
                <div className='flex items-center gap-x-2 m-8'>
                    <p className='text-2xl font-bold text-blue-500'>Hello,</p>
                    <p className='text-2xl font-bold text-blue-500'>Abdulrahman</p>
                </div>
                <div className='bg-blue-500 text-white mx-8 h-40 rounded-2xl'>
                    <div className='flex items-center justify-between p-5'>
                        <p className='text-xl'>Available Balance</p>
                        <div>
                            <Eyes />
                        </div>
                    </div>
                    <p className='text-4xl font-bold px-5'>₦500,000</p>
                </div>
            </section>
            <section className=''>
                <div>
                    <div className='m-8'>
                        <p className='text-2xl font-bold text-blue-500'>Quick Actions</p>
                    </div>
                    <div className='flex items-center justify-evenly m-8 flex-wrap '>
                        <div className='w-80 h-30 flex flex-col items-center justify-center rounded-lg shadow-sm hover:scale-105 text-blue-500 bg-white transition-transform'>
                            <Transfer />
                            <p className='text-xl font-bold'>Transfer</p>
                        </div>
                        <div className='w-80 h-30 flex flex-col items-center justify-center rounded-lg shadow-sm hover:scale-105 text-blue-500 bg-white transition-transform'>
                            <Airtime />
                            <p className='text-xl font-bold'>Airtime</p>
                        </div>
                        <div className='w-80 h-30 flex flex-col items-center justify-center rounded-lg shadow-sm hover:scale-105 text-blue-500 bg-white transition-transform'>
                            <Data />
                            <p className='text-xl font-bold'>Data</p>
                        </div>
                        <div className='w-80 h-30 flex flex-col gap-y-2 items-center justify-center rounded-lg shadow-sm hover:scale-105 text-blue-500 bg-white transition-transform'>
                            <Dots />
                            <p className='text-xl font-bold'>Others</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className='mb-25'>
                <div className='m-8'>
                    <p className='text-2xl font-bold text-blue-500'>Recent Transaction</p>
                </div>
                <div className='flex flex-col gap-y-10'>
                    <div className=' mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between'>
                        <div className='flex items-center gap-x-5 mx-7'>
                            <div className='w-12 h-12 rounded-full bg-gray-300'>

                            </div>
                            <div>
                                <p className='text-lg'>Transfer to Afolabi Rhodiat</p>
                                <p className='text-gray-500 '>12/09/25</p>
                            </div>
                        </div>
                        <div className='mx-7 flex flex-col items-end'>
                            <p className='text-red-500 font-semibold text-xl '>-₦10,000</p>
                            <p className='text-green-500 '>Completed</p>
                        </div>

                    </div>
                    <div className=' mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between'>
                        <div className='flex items-center gap-x-5 mx-7'>
                            <div className='w-12 h-12 rounded-full bg-gray-300'>

                            </div>
                            <div>
                                <p className='text-lg'>MTN Airtime Purchase</p>
                                <p className='text-gray-500 '>09/09/25</p>
                            </div>
                        </div>
                        <div className='mx-7 flex flex-col items-end'>
                            <p className='text-red-500 font-semibold text-xl '>-₦6,000</p>
                            <p className='text-green-500 '>Completed</p>
                        </div>

                    </div>
                    <div className=' mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between'>
                        <div className='flex items-center gap-x-5 mx-7'>
                            <div className='w-12 h-12 rounded-full bg-gray-300'>
                            </div>
                            <div>
                                <p className='text-lg'>Transfer to Usman Khalid</p>
                                <p className='text-gray-500 '>12/09/25</p>
                            </div>
                        </div>
                        <div className='mx-7 flex flex-col items-end'>
                            <p className='text-red-500 font-semibold text-xl '>-₦12,000</p>
                            <p className='text-green-500 '>Completed</p>
                        </div>
                    </div>
                    <div className=' mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between'>
                        <div className='flex items-center gap-x-5 mx-7'>
                            <div className='w-12 h-12 rounded-full bg-gray-300'>
                            </div>
                            <div>
                                <p className='text-lg'>Transfer to Mukhtar Ayomide</p>
                                <p className='text-gray-500 '>12/09/25</p>
                            </div>
                        </div>
                        <div className='mx-7 flex flex-col items-end'>
                            <p className='text-red-500 font-semibold text-xl '>-₦22,000</p>
                            <p className='text-green-500 '>Completed</p>
                        </div>
                    </div>
                    <div className='mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between '>
                        <div className='flex items-center gap-x-5 mx-7'>
                            <div className='w-12 h-12 rounded-full bg-gray-300'>
                            </div>
                            <div>
                                <p className='text-lg'>Salary Payment</p>
                                <p className='text-gray-500 '>01/09/25</p>
                            </div>
                        </div>
                        <div className='mx-7 flex flex-col items-end'>
                            <p className='text-green-500 font-semibold text-xl '>+₦300,000</p>
                            <p className='text-green-500 '>Completed</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className='flex items-center justify-evenly px-8 h-15 bg-white shadow-xl z-40  fixed bottom-0 left-0  right-0'>
                    <p className='cursor-pointer hover:text-blue-500'>Home</p>
                    <p className='cursor-pointer hover:text-blue-500'>Transfer</p>
                    <p className='cursor-pointer hover:text-blue-500'>History</p>
                    <p className='cursor-pointer hover:text-blue-500'>Rewards</p>
                    <p className='cursor-pointer hover:text-blue-500'>Profile</p>
                </div>
            </footer>
        </div>
    )
}

export default Dashboard