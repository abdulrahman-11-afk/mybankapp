"use client";
import Wavy from '@/image/svg/Wavy';
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation"; 

const SgnUp = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [accountNumber, setAccountNumber] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const password = (form.password as HTMLInputElement).value;
    const confirmPassword = (form.confirmPassword as HTMLInputElement).value;
    const username = (form.username as HTMLInputElement).value;
    const phone = (form.number as HTMLInputElement).value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const acc = phone.startsWith("0") ? phone.slice(1) : phone;

    
    localStorage.setItem("username", username);
    localStorage.setItem("accountNumber", acc);

    setError("");
    setAccountNumber(acc); 
  };

  return (
    <div className="min-h-screen h-[100vh] bg-gray-200">
      <div className="flex items-center justify-around h-25 sm:gap-x-250">
        <div className="flex items-center justify-center gap-x-4">
          <Wavy />
          <p className="text-[#2164A1] font-extrabold text-4xl">PayWave</p>
        </div>
        <Link href="/login">
          <button className="w-30 bg-blue-700 text-white h-10 rounded-md border-none cursor-pointer">
            Login
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-white shadow-lg rounded-xl p-8 w-96 sm:m-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Sign up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First name" required className="w-full border rounded-md px-4 py-2 focus:outline-none" />
            <input type="text" name="surname" placeholder="Surname" required className="w-full border rounded-md px-4 py-2 focus:outline-none" />
            <input type="text" name="username" placeholder="Username" required className="w-full border rounded-md px-4 py-2 focus:outline-none" />
            <input type="email" name="email" placeholder="Email" required className="w-full border rounded-md px-4 py-2 focus:outline-none" />
            <input type="number" name="number" placeholder="Phone Number" required className="w-full border rounded-md px-4 py-2 focus:outline-none" />
            <input type="password" name="password" placeholder="Password" required minLength={6} className="w-full border rounded-md px-4 py-2 focus:outline-none" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required minLength={6} className="w-full border rounded-md px-4 py-2 focus:outline-none" />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <p className="text-sm text-blue-500">
              Already have an account?{" "}
              <Link href="/login">
                <span className="underline">Login</span>
              </Link>
            </p>

            <button type="submit" className="w-full bg-blue-700 text-white py-2 cursor-pointer rounded-md hover:bg-blue-900">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      {accountNumber && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-70 backdrop-blur-[10px]">
          <div className="bg-white p-6 rounded-xl flex flex-col items-center shadow-xl text-center h-80 w-120">
            <div className="flex items-end w-full justify-end">
              <button
                className="mt-5 text-blue px-4 py-2 bg-blue-400 rounded-md hover:text-white hover:bg-blue-600"
                onClick={() => setAccountNumber(null)}
              >
                x
              </button>
            </div>

            <h1 className="text-xl mt-10 font-bold text-green-600">
              You have successfully created an Account
            </h1>

            <div className="flex items-center justify-center mt-4">
              <p className="text-lg text-gray-700">Your account number is:</p>
              <p
                onClick={async () => {
                  await navigator.clipboard.writeText(accountNumber);
                }}
                className="text-blue-700 text-lg font-mono cursor-pointer hover:underline"
              >
                {accountNumber}
              </p>
            </div>

            <button
              onClick={() => router.push("/dashboard")}
              className="px-4 py-2 mt-10 bg-blue-400 cursor-pointer hover:bg-blue-600 text-white rounded"
            >
              Move to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SgnUp;
