"use client";
import { useEffect, useState } from "react";
import Airtime from '@/image/svg/airtime'
import Data from '@/image/svg/data'
import Dots from '@/image/svg/Dots'
import Eyes from '@/image/svg/eyes'
import Transfer from '@/image/svg/transfer'
import Wavy from '@/image/svg/Wavy'
import Profile from '@/image/svg/profile';
import Eyesclose from "@/image/svg/Eyesclose";
import Home from "@/image/svg/home";
import Transfer1 from "@/image/svg/tranfer1";
import Notify from "@/image/svg/notify";
import Histry from "@/image/svg/history";
import Rewards from "@/image/svg/rewards";
import ArrowUp from "@/image/svg/Arrowup";
import ArrowDown from "@/image/svg/arrowdown";
import router from "next/router";
import Link from "next/link";


export default function BalanceCard() {
    const [showBalance, setShowBalance] = useState(true);
    const [username, setUsername] = useState("");


    useEffect(() => {
        const storedName = localStorage.getItem("username");
        if (storedName) {
            setUsername(storedName);
        } else {

            router.push("/login");
        }
    }, [router]);
    return (
        <div>
            <header >
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
            <main>
                <section className='mt-30 md:mx-8'>
                    <div className="m-8">
                        <p className='text-2xl font-bold text-blue-500'>Hello, {username} </p>
                    </div>

                    <div className='bg-blue-500 text-white mx-8 h-40 rounded-2xl'>
                        <div className='flex items-center justify-between p-5'>
                            <p className='text-xl'>Available Balance</p>
                            <button
                                onClick={() => setShowBalance(!showBalance)}
                                className="mt-3 text-white cursor-pointer"
                            >
                                {showBalance ? <Eyes /> : <Eyesclose />}
                            </button>
                        </div>
                        <p className='text-4xl font-bold px-5'>
                            {showBalance ? "₦0.00" : "****"}
                        </p>
                    </div>


                </section>
                <section className='md:mx-8'>
                    <div>
                        <div className='m-8'>
                            <p className='text-2xl font-bold text-blue-500'>Quick Actions</p>
                        </div>
                        <div className='flex items-center justify-evenly   flex-wrap '>
                            <Link href="/beforetransfer">  <div className='w-80  h-30 flex flex-col items-center justify-center rounded-lg shadow-sm hover:scale-105 text-blue-500 bg-white transition-transform cursor-pointer'>
                                <div className="hidden sm:block">
                                    <Transfer />
                                </div>
                                <p className='text-xl font-bold'>Transfer</p>
                            </div></Link>
                            <div className='w-80 h-30 flex flex-col items-center justify-center rounded-lg shadow-sm hover:scale-105 text-blue-500 bg-white transition-transform cursor-pointer'>
                                <Airtime />
                                <p className='text-xl font-bold'>Airtime</p>
                            </div>
                            <div className='w-80 h-30 flex flex-col items-center justify-center rounded-lg shadow-sm hover:scale-105 text-blue-500 bg-white transition-transform cursor-pointer'>
                                <Data />
                                <p className='text-xl font-bold'>Data</p>
                            </div>
                            <div className='w-80 h-30 flex flex-col gap-y-2 items-center justify-center rounded-lg shadow-sm hover:scale-105 text-blue-500 bg-white transition-transform cursor-pointer'>
                                <Dots />
                                <p className='text-xl font-bold'>Others</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className='mb-25 md:mx-10'>
                    <div className='m-8'>
                        <p className='text-2xl font-bold text-blue-500'>Recent Transaction</p>
                    </div>
                    <div className='flex flex-col gap-y-10'>
                        <div className=' mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between'>
                            <div className='flex items-center gap-x-5 mx-7'>
                                <div className='w-12 flex items-center justify-center h-12 rounded-full bg-gray-300'>
                                    <ArrowUp />
                                </div>
                                <div>
                                    <p className='text-lg'>Transfer to Afolabi Rhodiat</p>
                                    <p className='text-gray-500 '>12/09/25</p>
                                </div>
                            </div>
                            <div className='mx-7 flex flex-col items-end'>
                                <p className='text-red-500 font-semibold text-md '>-₦10,000</p>
                                <p className='text-green-500 '>Completed</p>
                            </div>

                        </div>
                        <div className=' mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between'>
                            <div className='flex items-center gap-x-5 mx-7'>
                                <div className='w-12 h-12 flex items-center justify-center flex items-center justify-center rounded-full bg-gray-300'>
                                    <ArrowUp />
                                </div>
                                <div>
                                    <p className='text-lg'>MTN Airtime Purchase</p>
                                    <p className='text-gray-500'>09/09/25</p>
                                </div>
                            </div>
                            <div className='mx-7 flex flex-col items-end'>
                                <p className='text-red-500 font-semibold text-md'>-₦6,000</p>
                                <p className='text-green-500 '>Completed</p>
                            </div>

                        </div>
                        <div className=' mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between'>
                            <div className='flex items-center gap-x-5 mx-7'>
                                <div className='w-12 flex items-center justify-center h-12 rounded-full bg-gray-300'>
                                    <ArrowUp />
                                </div>
                                <div>
                                    <p className='text-lg'>Transfer to Usman Khalid</p>
                                    <p className='text-gray-500 '>12/09/25</p>
                                </div>
                            </div>
                            <div className='mx-7 flex flex-col items-end'>
                                <p className='text-red-500 font-semibold text-md '>-₦12,000</p>
                                <p className='text-green-500 '>Completed</p>
                            </div>
                        </div>
                        <div className=' mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between'>
                            <div className='flex items-center gap-x-5 mx-7'>
                                <div className='w-12 flex items-center justify-center h-12 rounded-full bg-gray-300'>
                                    <ArrowUp />
                                </div>
                                <div>
                                    <p className='text-lg'>Transfer to Mukhtar Ayomide</p>
                                    <p className='text-gray-500 '>12/09/25</p>
                                </div>
                            </div>
                            <div className='mx-7 flex flex-col items-end'>
                                <p className='text-red-500 font-semibold text-md '>-₦22,000</p>
                                <p className='text-green-500 '>Completed</p>
                            </div>
                        </div>
                        <div className='mx-8 h-20 shadow-sm rounded-xl flex items-center justify-between '>
                            <div className='flex items-center gap-x-5 mx-7'>
                                <div className='w-12 flex items-center justify-center h-12 rounded-full bg-gray-300'>
                                    <ArrowDown />
                                </div>
                                <div>
                                    <p className='text-lg'>Salary Payment</p>
                                    <p className='text-gray-500 '>01/09/25</p>
                                </div>
                            </div>
                            <div className='mx-7 flex flex-col items-end'>
                                <p className='text-green-500 font-semibold text-md '>+₦300,000</p>
                                <p className='text-green-500 '>Completed</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className='flex items-center justify-evenly px-8 h-20 bg-white shadow-xl z-40  fixed bottom-0 left-0  right-0'>
                    <div className="flex flex-col items-center justify-center">
                        <Home />
                        <p className='cursor-pointer font-bold text-lg text-blue-500'>Home</p>
                    </div>
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


function setUsername(storedName: string) {
    throw new Error("Function not implemented.");
}

