"use client";
import Wavy from '@/image/svg/Wavy';
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

const SgnUp = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const password = (form.password as HTMLInputElement).value;
        const confirmPassword = (form.confirmPassword as HTMLInputElement).value;

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        router.push("/dashboard");
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
                        <input type="email" name="email" placeholder="Email" required className="w-full border rounded-md px-4 py-2 focus:outline-none" />
                        <input type="password" name="password" placeholder="Password" required minLength={6} className="w-full border rounded-md px-4 py-2 focus:outline-none" />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" required minLength={6} className="w-full border rounded-md px-4 py-2 focus:outline-none" />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <p className="text-sm text-blue-500"> Already have an account?{" "} <Link href="/login">  <span className="underline">Login</span> </Link> </p>
                        <button type="submit" className="w-full bg-blue-700 text-white py-2 cursor-pointer rounded-md hover:bg-blue-900">Sign Up </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SgnUp;
