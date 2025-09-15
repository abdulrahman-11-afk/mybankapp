"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Project from "../../../component/project";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);


    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-blue-500 text-lg font-bold">Welcome</p>
        </div>
      ) : (
        <Project/> 
      )}
    </div>
  );
}