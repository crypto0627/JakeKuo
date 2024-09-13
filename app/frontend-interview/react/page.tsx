'use client'
import { useEffect } from 'react'

console.log(1)
export default function Home() {
  console.log(2)
  useEffect(() => {
    console.log(3)
  })

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <p>123</p>
      </main>
    </div>
  )
}
