"use client";
import { useEffect, useState } from "react";
import Airtime from "@/image/svg/airtime";
import Data from "@/image/svg/data";
import Dots from "@/image/svg/Dots";
import Eyes from "@/image/svg/eyes";
import Transfer from "@/image/svg/transfer";
import Wavy from "@/image/svg/Wavy";
import Profile from "@/image/svg/profile";
import Eyesclose from "@/image/svg/Eyesclose";
import Home from "@/image/svg/home";
import Transfer1 from "@/image/svg/tranfer1";
import Notify from "@/image/svg/notify";
import Histry from "@/image/svg/history";
import Rewards from "@/image/svg/rewards";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      const parsed = JSON.parse(currentUser);
      setUsername(parsed.username);
    } else {
      router.push("/login");
    }
  }, [router]);

  const [accountNumber, setAccountNumber] = useState("");
  const [error, setError] = useState("");

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    if (savedBalance) {
      setBalance(parseFloat(savedBalance));
    } else {
      localStorage.setItem("balance", "5000000");
      setBalance(5000000);
    }
  }, []);


  useEffect(() => {
    const accountNumber = localStorage.getItem("accountNumber");

    if (accountNumber) {
      setAccountNumber(accountNumber);
    }
  }, [router]);
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

      <main>
        <section className="pt-24 md:mx-8">
          <div className="m-4">
            <p className="text-2xl font-bold text-blue-500">
              Hello, {username}
            </p>
          </div>


          <div className="bg-blue-500 text-white mx-4 h-30 md:h-40 rounded-2xl">
            <div className="flex items-center justify-between p-3">
              <p className="text-xl">Available Balance</p>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="mt-3 text-white cursor-pointer"
              >
                {showBalance ? <Eyes /> : <Eyesclose />}
              </button>
            </div>
            <div className="flex items-center justify-between p-3">
              <p className="md:text-4xl text-2xl font-bold ">
                {showBalance ? `₦${balance.toLocaleString()}.00` : "****"}
              </p>

              <p className="md:text-2xl text-2xl font-bold"> {accountNumber
                ? accountNumber.slice(0, -3).replace(/./g, "*") + accountNumber.slice(-3)
                : ""}</p>
            </div>
          </div>
        </section>

        <section className="md:mx-8">
          <div className="m-4">
            <p className="text-2xl font-bold text-blue-500">Quick Actions</p>
          </div>
          <div className="flex items-center ml-2 md:ml-0 justify-evenly">
            <Link href="/beforetransfer">
              <div className="md:w-80 h-12 w-19 md:h-30 flex flex-col items-center justify-center rounded-sm md:rounded-lg shadow-sm hover:scale-105 dark:bg-gray-900 dark:border-blue-500 dark:border-2 text-blue-500 bg-white transition-transform cursor-pointer">
                <div className="hidden sm:block">
                  <Transfer />
                </div>
                <p className="md:text-xl md:font-bold">Transfer</p>
              </div>
            </Link>

            <Link href={"/Features"}>
              <div className="md:w-80 h-12 w-19 md:h-30 flex flex-col items-center justify-center rounded-sm md:rounded-lg shadow-sm hover:scale-105 text-blue-500 dark:bg-gray-900 dark:border-blue-500 dark:border-2 bg-white transition-transform cursor-pointer">
                <div className="hidden sm:block">
                  <Airtime />
                </div>
                <p className="md:text-xl md:font-bold">Airtime</p>
              </div>
            </Link>

            <Link href={"/Features"}>
              <div className="md:w-80 h-12 w-19 md:h-30 flex flex-col items-center justify-center rounded-sm md:rounded-lg shadow-sm hover:scale-105 dark:bg-gray-900 dark:border-blue-500 dark:border-2 text-blue-500 bg-white transition-transform cursor-pointer">
                <div className="hidden sm:block">
                  <Data />
                </div>
                <p className="md:text-xl md:font-bold">Data</p>
              </div>
            </Link>

            <Link href={"/Features"}>
              <div className="md:w-80 h-12 w-19 md:h-30 flex flex-col gap-y-2 items-center justify-center rounded-sm md:rounded-lg shadow-sm hover:scale-105 dark:bg-gray-900 dark:border-blue-500 dark:border-2 text-blue-500 bg-white transition-transform cursor-pointer">
                <div className="hidden sm:block">
                  <Dots />
                </div>
                <p className="md:text-xl md:font-bold">Others</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="pb-28 md:mx-10">
          <div className="m-4">
            <p className="text-2xl font-bold text-blue-500">
              Recent Transaction
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-bold text-lg text-blue-500">
              No Recent Transaction
            </p>
          </div>
        </section>
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
    </div >
  );
}

