"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Wavy from "@/image/svg/Wavy";
import Notify from "@/image/svg/notify";
import Profile from "@/image/svg/profile";
import Home from "@/image/svg/home";
import Transfer1 from "@/image/svg/tranfer1";
import Histry from "@/image/svg/history";
import Rewards from "@/image/svg/rewards";

export default function Transf() {
  const [account, setAccount] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupSuccess, setPopupSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("balance");
    if (!saved) {
      window.localStorage.setItem("balance", "500000"); 
    }
  }, []);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    try {
      
      const currentBalance = Number(window.localStorage.getItem("balance") || "0");
      const transferAmount = Number(amount);

      if (!/^\d{10}$/.test(account)) {
        setPopupMessage("❌ Enter a valid 10-digit account number.");
        setPopupSuccess(false);
        setShowPopup(true);
        return;
      }

      if (!bank.trim()) {
        setPopupMessage("❌ Select a bank.");
        setPopupSuccess(false);
        setShowPopup(true);
        return;
      }

      if (!Number.isFinite(transferAmount) || transferAmount <= 0) {
        setPopupMessage("❌ Enter a valid amount greater than 0.");
        setPopupSuccess(false);
        setShowPopup(true);
        return;
      }

      if (!/^\d{4,6}$/.test(pin)) {
        setPopupMessage("❌ Enter a valid PIN (4-6 digits).");
        setPopupSuccess(false);
        setShowPopup(true);
        return;
      }

      if (currentBalance >= transferAmount) {
        const newBalance = Math.max(0, currentBalance - transferAmount);

        window.localStorage.setItem("balance", String(newBalance));

        const txs = JSON.parse(window.localStorage.getItem("transactions") || "[]");
        txs.unshift({
          id: Date.now(),
          type: "debit",
          amount: transferAmount,
          to: `${bank} • ${account.slice(-4)}`,
          date: new Date().toLocaleString(),
        });
        window.localStorage.setItem("transactions", JSON.stringify(txs));

        setPopupMessage(`✅ Transfer successful. New balance: ₦${newBalance.toLocaleString()}`);
        setPopupSuccess(true);
        setShowPopup(true);

        setAccount("");
        setBank("");
        setAmount("");
        setPin("");
      } else {
        setPopupMessage("Transaction failed: Insufficient funds.");
        setPopupSuccess(false);
        setShowPopup(true);
      }
    } catch (err) {
      console.error("Transfer error:", err);
      setPopupMessage("An unexpected error occurred. Check console for details.");
      setPopupSuccess(false);
      setShowPopup(true);
    }
  };

  return (
    <div className="m-0 p-0">
      <header>
        <div className="flex items-center justify-between md:px-15 px-5 h-20 bg-white shadow-md fixed left-0 top-0 right-0">
          <div className="flex items-center gap-x-4">
            <Wavy />
            <p className="text-[#2164A1] text-xl font-extrabold md:text-3xl">PayWave</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Notify />
            <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
              <Profile />
            </div>
          </div>
        </div>
      </header>

      <main className="bg-gray-100 h-[100vh] pt-28">
        <section className="md:mx-17 flex items-center justify-between px-6">
          <Link href="/transferwave">
          <p className="text-blue-500 text-xl cursor-pointer">Transfer to Paywave</p>
          </Link>
          <p className="text-blue-500 text-xl cursor-pointer">History</p>
        </section>

        <section className="mt-10 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-5 w-80 shadow-md bg-white rounded-lg text-blue-700 p-6"
          >
            <input
              className="h-10 focus:outline-none border-b border-gray-300"
              required
              type="number"
              placeholder="Enter 10 digits Account Number"
              value={account}
              onChange={(e) => setAccount(e.target.value.replace(/\D/g, "").slice(0, 10))}
            />

            <input
              className="h-10 focus:outline-none border-b border-gray-300"
              required
              type="text"
              placeholder="Select Bank"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
            />

            <input
              className="h-10 focus:outline-none border-b border-gray-300"
              required
              type="number"
              placeholder="Enter Amount (₦)"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
            />

            <input
              className="h-10 focus:outline-none border-b border-gray-300"
              type="text"
              placeholder="Remark (optional)"
            />

            <input
              className="h-10 focus:outline-none border-b border-gray-300"
              required
              type="password"
              placeholder="Enter Your Pin"
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
            />

            <button type="submit" className="w-full cursor-pointer text-white rounded-sm bg-blue-500 h-10">
              Send
            </button>
          </form>
        </section>
      </main>

      
      {showPopup && (
        <div className="fixed inset-0 bg-gray-200  bg-opacity-50 flex items-center justify-center z-1000">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <p className={`text-lg font-bold ${popupSuccess ? "text-green-600" : "text-red-600"}`}>
              {popupMessage}
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                OK
              </button>
              {popupSuccess && (
                <Link href="/dashboard">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Go to Dashboard</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <footer>
        <div className="flex items-center justify-evenly h-20 bg-white shadow-xl fixed bottom-0 left-0 right-0">
          <Link href="/dashboard"><div className="flex flex-col items-center"><Home /><p className="font-bold text-blue-500">Home</p></div></Link>
          <Link href="/beforetransfer"><div className="flex flex-col items-center"><Transfer1 /><p className="font-bold text-blue-500">Transfer</p></div></Link>
          <Link href="/Features"><div className="flex flex-col items-center"><Histry /><p className="font-bold text-blue-500">History</p></div></Link>
          <Link href="/Features"><div className="flex flex-col items-center"><Rewards /><p className="font-bold text-blue-500">Rewards</p></div></Link>
          <Link href="/Features"><div className="flex flex-col items-center"><Profile /><p className="font-bold text-blue-500">Profile</p></div></Link>
        </div>
      </footer>
    </div>
  );
}
