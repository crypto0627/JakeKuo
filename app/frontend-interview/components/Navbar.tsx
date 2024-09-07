'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-blue-200 transition-colors"
            >
              Master FE
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/explore"
                className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Explore
              </Link>
              <Link
                href="/frontend-questions"
                className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Frontend Questions
              </Link>
              <Link
                href="/chat"
                className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Chat
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/explore"
              className="block text-black hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Explore
            </Link>
            <Link
              href="/frontend-questions"
              className="block text-black hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Frontend Questions
            </Link>
            <Link
              href="/chat"
              className="block text-black hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Chat
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
