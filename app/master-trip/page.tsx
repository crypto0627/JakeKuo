'use client'
import { useState, useCallback, useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring
} from 'framer-motion'
import Schedule from './components/shcedule'
import FlightInfo from './components/flightInfo'

const NavLists = [
  { title: 'schedule', link: 'schedule' },
  { title: 'security', link: 'security' }
]

const NavLinks = ({ onClose }: { onClose: () => void }) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault()
      onClose()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    [onClose]
  )

  return (
    <>
      {NavLists.map((item, index) => (
        <a
          key={index}
          href={`#${item.link}`}
          className="block py-2 hover:text-green-200"
          onClick={(e) => handleClick(e, item.link)}
        >
          {item.title}
        </a>
      ))}
    </>
  )
}

export default function MasterTrip() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const securityRef = useRef(null)
  const isSecurityInView = useInView(securityRef, { once: false, amount: 0.3 })
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 300], [0, 1])
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30
  })

  const titleX = useTransform(smoothProgress, [0, 1], [0, -100])
  const titleOpacity = useTransform(smoothProgress, [0, 1], [1, 0])

  return (
    <div className="min-h-screen flex flex-col text-green-900">
      <div className="bg-banner bg-cover bg-center bg-no-repeat h-screen relative">
        {/* Navbar */}
        <nav className="text-white p-4 absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <span className="text-2xl font-bold">Master Trip</span>
            <div className="hidden md:flex space-x-4">
              <NavLinks onClose={() => {}} />
            </div>
            <button
              className="md:hidden text-white focus:outline-none w-8 h-8 relative"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
              />
            </button>
          </div>
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}
          >
            <NavLinks onClose={() => setIsMenuOpen(false)} />
          </div>
        </nav>
        {/* Banner */}
        <motion.section
          className="flex flex-col items-center justify-center h-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl xl:text-9xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-indigo-400 inline-block text-transparent bg-clip-text italic"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ x: titleX, opacity: titleOpacity }}
          >
            Family Travel
          </motion.h1>
        </motion.section>
      </div>
      {/* Flight Info */}
      <FlightInfo />

      {/* Schedule */}
      <section id="schedule">
        <Schedule />
      </section>
      {/* Security */}
      <motion.section
        id="security"
        ref={securityRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isSecurityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-900">
          Security
        </h2>
        {/* Add your security content here */}
      </motion.section>
      {/* Footer */}
      <footer className="bg-gray-300 text-white py-4 px-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold">Master Trip</div>
          </div>
          <p className="text-sm">
            &copy; 2024 Master Trip. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
