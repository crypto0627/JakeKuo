'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export function Banner() {
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 300], [0, 1])
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30
  })

  const titleX = useTransform(smoothProgress, [0, 1], [0, -100])
  const titleOpacity = useTransform(smoothProgress, [0, 1], [1, 0])
  return (
    <motion.section
      className="flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-6xl text-center xl:text-9xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-indigo-400 inline-block text-transparent bg-clip-text italic"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        style={{ x: titleX, opacity: titleOpacity }}
      >
        Family Travel
      </motion.h1>
    </motion.section>
  )
}
