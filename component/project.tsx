"use client";
import Wavy from "@/image/svg/Wavy";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Eyesclose from "@/image/svg/Eyesclose";
import Eyes from "@/image/svg/eyes";
import Eyespass from "@/image/svg/Eyespass";
import Eyesclpass from "@/image/svg/yeseclosepass";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const username = (form.username as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    if (!username || !password) {
      setError("Both fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: any) => u.username === username && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setError("");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen h-[100vh] bg-gray-200">
      <div className="flex items-center justify-between mx-5 h-25 ">
        <div className="flex items-center justify-center gap-x-4">
          <Wavy />
          <p className="text-[#2164A1] font-extrabold text-4xl cursor-pointer">
            PayWave
          </p>
        </div>
        <Link href="/signup">
          <button className="w-30 bg-blue-700 text-white h-10 rounded-md cursor-pointer border-none">
            Sign up
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-white shadow-lg rounded-xl p-8 w-96 sm:m-10">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none placeholder:text-gray-500 text-black"
            />

           
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="w-full border-gray-500 border rounded-md px-4 py-2 focus:outline-none placeholder:text-gray-500 text-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500 cursor-pointer "
              >
                {showPassword ? <Eyespass/> : <Eyesclpass/>}
              </button>
            </div>
           
            <p className="text-sm text-blue-500">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="underline">Sign up</span>
              </Link>
            </p>

            {error && (
              <p className="text-red-500 text-sm transition-opacity duration-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-900 cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
