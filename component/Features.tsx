"use client";

import { useEffect, useState } from "react";
import Histry from '@/image/svg/history'
import Home from '@/image/svg/home'
import Notify from '@/image/svg/notify'
import Profile from '@/image/svg/profile'
import Rewards from '@/image/svg/rewards'
import Transfer1 from '@/image/svg/tranfer1'
import Wavy from '@/image/svg/Wavy'
import Link from 'next/link'
import React from 'react'

const Features = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen">
      <header>
        <div className="flex items-center justify-between md:px-15 px-5 h-20 bg-white dark:bg-gray-900 shadow-md fixed left-0 top-0 right-0">
          <div className="flex items-center justify-center gap-x-4">
            <Wavy />
            <p className="text-[#2164A1] text-xl font-extrabold md:text-3xl">
              PayWave
            </p>
          </div>
          <div className="flex items-center mdgap-x-3">
            <div>
              <Notify />
            </div>
            <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
              <Profile />
            </div>
          </div>
        </div>
      </header>

    <main className="flex items-center justify-center h-[100vh] p-5 md:pt-28">
  {loading ? (
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  ) : (
    <div >
      <p className="md:text-2xl text-xl  md:font-bold text-blue-500">
      Features coming soon...
    </p>
    </div>
  )}
</main>


      <footer>
        <div className="flex items-center justify-evenly mdpx-8 h-20 bg-white dark:bg-gray-900 shadow-xl z-40 fixed bottom-0 left-0 right-0">
          <Link href="/dashboard">
            <div className="flex flex-col items-center justify-center">
              <Home />
              <p className="cursor-pointer md:font-bold md:text-lg text-blue-500">
                Home
              </p>
            </div>
          </Link>
          <Link href="/beforetransfer">
            <div className="flex flex-col items-center justify-center">
              <Transfer1 />
              <p className="cursor-pointer md:font-bold md:text-lg text-blue-500">
                Transfer
              </p>
            </div>
          </Link>
          <Link href="/Features">
            <div className="flex flex-col items-center justify-center">
              <Histry />
              <p className="cursor-pointer md:font-bold md:text-lg text-blue-500">
                History
              </p>
            </div>
          </Link>
          <Link href="/Features">
            <div className="flex flex-col items-center justify-center">
              <Rewards />
              <p className="cursor-pointer md:font-bold md:text-lg text-blue-500">
                Rewards
              </p>
            </div>
          </Link>
          <Link href="/Features">
            <div className="flex flex-col items-center justify-center">
              <Profile />
              <p className="cursor-pointer md:font-bold md:text-lg text-blue-500">
                Profile
              </p>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Features;
