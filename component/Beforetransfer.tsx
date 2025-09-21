import Histry from '@/image/svg/history'
import Home from '@/image/svg/home'
import Notify from '@/image/svg/notify'
import Profile from '@/image/svg/profile'
import Rewards from '@/image/svg/rewards'
import Transfer1 from '@/image/svg/tranfer1'
import Wavy from '@/image/svg/Wavy'
import Link from 'next/link'
import React from 'react'

const Beforetransfer = () => {
    return (
        <div>
            <header className=''>
                <div className='flex items-center justify-between md:px-15 px-5 h-20 dark:bg-gray-900 bg-white shadow-md fixed left-0 top-0 right-0'>
                    <div className='flex items-center justify-center gap-x-4'>
                        <Wavy />
                        <p className='text-[#2164A1] text-xl font-extrabold md:text-3xl'>PayWave</p>
                    </div>
                    <div className="flex items-center md:gap-x-3">
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
                <div className='h-[100vh] gap-y-10 flex items-center justify-center flex-col dark:bg-gray-900 bg-gray-200'>
                    <Link href="/transferwave"><div className='md:w-120 w-70 h-15 flex items-center justify-center rounded-lg md:rounded-2xl bg-blue-500 text-white'>
                        <p className='text-lg font-bold'>Transfer to PayWave</p>
                    </div></Link>
                    <Link href="/Transfe"> <div className='md:w-120 w-70 h-15 flex items-center justify-center rounded-lg md:rounded-2xl bg-blue-500 text-white'>
                        <p className='text-lg font-bold'>Transfer to Bank</p>
                    </div></Link>
                </div>
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
          <Link href={"/Features"}>
            <div className="flex flex-col items-center justify-center">
              <Histry />
              <p className="cursor-pointer md:font-bold md:text-lg text-blue-500">
                History
              </p>
            </div>
          </Link>
          <Link href={"/Features"}>
            <div className="flex flex-col items-center justify-center">
              <Rewards />
              <p className="cursor-pointer md:font-bold md:text-lg text-blue-500">
                Rewards
              </p>
            </div>
          </Link>
          <Link href={"/Features"}>
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

export default Beforetransfer