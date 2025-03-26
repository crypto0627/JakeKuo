"use client";

import ConnectButton from "@/components/connect-button";
import Image from "next/image";
import { useState } from "react";
import { parseEther } from "viem";
import { useAccount, usePrepareTransactionRequest, useSendTransaction } from "wagmi";

export default function Home() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { address } = useAccount();
  
  const { data: config } = usePrepareTransactionRequest({
    to: recipient as `0x${string}`,
    value: recipient && amount ? parseEther(amount) : undefined,
  });
  
  const { sendTransaction } = useSendTransaction({
    mutation: {
      onSuccess(data) {
        setStatus(`交易已提交! 交易哈希: ${data}`);
        setLoading(false);
      },
      onError(error: Error) {
      setStatus(`錯誤: ${error.message || "未知錯誤"}`);
      setLoading(false);
    },
  },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!address) {
      setStatus("請先連接錢包");
      return;
    }

    try {
      setLoading(true);
      setStatus("正在發送交易...");
      
      if (sendTransaction) {
        sendTransaction({});
      } else {
        throw new Error("交易準備失敗");
      }
    } catch (error: any) {
      setStatus(`錯誤: ${error.message || "未知錯誤"}`);
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-md">
        <div className="flex flex-col items-center gap-4 w-full">
          <h1 className="text-2xl font-bold">發送以太坊交易</h1>
          <Image
            className="dark:invert mb-4"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
            priority
          />
          
          <ConnectButton />
          
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="recipient" className="text-sm font-medium">
                收款地址
              </label>
              <input
                id="recipient"
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="0x..."
                className="rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent p-2 text-sm"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="amount" className="text-sm font-medium">
                金額 (ETH)
              </label>
              <input
                id="amount"
                type="number"
                step="0.0001"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.01"
                className="rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent p-2 text-sm"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading || !address}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "處理中..." : "發送交易"}
            </button>
          </form>
          
          {status && (
            <div className="mt-4 p-3 rounded-md bg-black/[.05] dark:bg-white/[.06] w-full text-sm">
              {status}
            </div>
          )}
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ethereum.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          了解以太坊
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://metamask.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          安裝MetaMask
        </a>
      </footer>
    </div>
  );
}
