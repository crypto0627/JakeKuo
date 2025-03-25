"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [positions, setPositions] = useState<Array<{
    initial: { x: number; y: number };
    animate: { x: number[]; y: number[]; rotate: number[] };
    duration: number;
  }>>([])

  useEffect(() => {
    // Update dimensions and generate random positions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Generate random positions for each paper
    setPositions(
      Array.from({ length: count }).map(() => ({
        initial: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        animate: {
          x: Array.from({ length: 3 }, () => Math.random() * window.innerWidth),
          y: Array.from({ length: 3 }, () => Math.random() * window.innerHeight),
          rotate: [0, 180, 360],
        },
        duration: 20 + Math.random() * 10,
      }))
    )

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [count])

  return (
    <div className="relative w-full h-full">
      {positions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={position.initial}
          animate={{
            x: position.animate.x,
            y: position.animate.y,
            rotate: position.animate.rotate,
          }}
          transition={{
            duration: position.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            <FileText className="w-8 h-8 text-purple-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

