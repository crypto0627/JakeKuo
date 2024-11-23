'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <nav className="bg-green-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold">Jake Kuo</span>
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
        className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <NavLinks onClose={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  )
}

const NavLinks = ({ onClose }: { onClose: () => void }) => (
  <>
    {['master-trip'].map(
      (section) => (
        <a
          key={section}
          href={`/${section}`}
          className="block py-2 hover:text-green-200"
          onClick={onClose}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      )
    )}
  </>
)
