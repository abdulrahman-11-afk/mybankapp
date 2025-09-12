import Wavy from '@/image/svg/Wavy'
import React from 'react'
import Link from "next/link";

const SgnUp = () => {
    return (
        <div>
            <div className="min-h-screen h-[100vh] bg-gray-200">
                <div className='flex items-center justify-around  h-25 sm:gap-x-250'>
                    <div className='flex items-center justify-center gap-x-4'>
                        <Wavy />
                        <p className='text-[#2164A1] font-extrbold text-4xl'>PayWave</p>
                    </div>
                   <Link href="/login"> <button className='w-30 bg-blue-700 text-white h-10 rounded-md border-none cursor-pointer'>Login</button></Link>
                </div>
                <div className="flex justify-center items-center h-[80vh]">
                    <div className="bg-white shadow-lg rounded-xl p-8 w-96 sm:m-10">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">Sign up</h2>
                        <form className="space-y-4">
                             <input type="text" placeholder="First name" className="w-full border rounded-md px-4 py-2 focus:outline-none"/>
                              <input type="text" placeholder="Surname" className="w-full border rounded-md px-4 py-2 focus:outline-none"/>
                            <input type="email" placeholder="Email" className="w-full border rounded-md px-4 py-2 focus:outline-none"/>
                            <input type="password" placeholder="Password" className="w-full border rounded-md px-4 py-2 focus:outline-none"/>
                             <input type="password" placeholder="Confirm Password" className="w-full border rounded-md px-4 py-2 focus:outline-none" />
                             <p className='text-sm text-blue-500 '>Already have an account? <Link href="/login"><span>login</span></Link> </p>
                          <Link href="/dashboard">  <button className="w-full bg-blue-700 text-white py-2 cursor-pointercursor-pointer rounded-md hover:bg-blue-900">
                                Sign Up
                            </button></Link>
                        </form>
                    </div>
                </div>
            </div>
            </div>
    )}


            export default SgnUp