"use client";
import Wavy from '@/image/svg/Wavy'
import React from 'react'
import Link from "next/link";

type Props = {
  onLogin: () => void;
};

const Project = ({onLogin}: Props) => {
  return (
    <div className="min-h-screen h-[100vh] bg-gray-200">
      <div className='flex items-center justify-around h-25 sm:gap-x-250'>
        <div className='flex items-center justify-center gap-x-4'>
          <Wavy />
          <p className='text-[#2164A1] font-extrabold text-4xl cursor-pointer'>PayWave</p>
        </div>
        <Link href='/signup'>
          <button className='w-30 bg-blue-700 text-white h-10 rounded-md cursor-pointer border-none'>
            Sign up
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-white shadow-lg rounded-xl p-8 w-96 sm:m-10">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Login</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text" placeholder="Email" required className="w-full border rounded-md px-4 py-2 focus:outline-none"/>
            <input type="password" placeholder="Password" required className="w-full border rounded-md px-4 py-2 focus:outline-none"/>
            <p className='text-sm text-blue-500'>
              Don't have an account? <Link href="/signup"><span>Sign up</span></Link>
            </p>
           <button type="button" onClick={onLogin}    className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-900 cursor-pointer">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Project;
