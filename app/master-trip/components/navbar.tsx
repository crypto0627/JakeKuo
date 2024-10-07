'use client'
import { useCallback, useState } from 'react'

const NavLists = [
  { title: 'schedule', link: 'schedule' },
  { title: 'cuisine', link: 'cuisine' }
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
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
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
  )
}
