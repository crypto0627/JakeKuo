"use client"
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export function Gallery() {
  const [index, setIndex] = useState(1)
  
  const handleNext = () => {
    setIndex(prev => prev + 1)
  }

  const handleBack = () => {
    setIndex(prev => prev - 1)
  }

  return (
    <section className="flex flex-col py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <header className="mx-auto flex-row flex gap-2">
        <h1 className="text-4xl font-bold text-purple-400">NFT</h1>
        <h1 className="text-4xl font-bold">Gallery</h1>
      </header>
      <main className="grid grid-cols-3 gap-4 mt-8 w-full max-w-7xl mx-auto h-96">
        <article className="p-6 rounded-lg bg-gradient-to-r from-pink-100 via-pink-200 to-purple-300 text-black">
          <h2 className="text-xl font-semibold mb-2">Featured NFTs</h2>
          <p className="text-black">Explore our curated collection of premium NFTs from top artists.</p>
        </article>
        {index === 1 && (
          <article className="p-6 rounded-lg bg-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <h2 className="text-xl font-semibold mb-2">1</h2>
            <p className="text-gray-400">Check out the latest additions to our NFT marketplace.</p>
          </article>
        )}
        {index === 2 && (
          <article className="p-6 rounded-lg bg-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <div className="absolute -left-2 top-1/2 w-2 h-2 bg-purple-500 rounded-full" />
            <h2 className="text-xl font-semibold mb-2">2</h2>
            <p className="text-gray-400">Discover trending NFT collections that are making waves.</p>
          </article>
        )}
      </main>
      <div className="hidden md:flex flex-row mx-auto mt-10 gap-2">
        <Button disabled={index === 1} onClick={handleBack} className="disabled:opacity-50"><ArrowLeft /></Button>
        <Button disabled={index === 2} onClick={handleNext}><ArrowRight /></Button>
      </div>
    </section>
  )
}
