'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Eye, EyeOff, Menu, X } from 'lucide-react'

export function Navbar() {
  const LinkItem = [
    { name: 'Profile', link: '/web3-example/profile' },
    { name: 'Events', link: '/web3-example/events' },
    { name: 'News', link: '/web3-example/news' },
    { name: 'NFT Market', link: '/web3-example/nft-market' }
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginClick, setIsLoginClick] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLogin = () => setIsLoginClick(!isLoginClick)

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-black">
        <Link href="/" className="md:pl-10 text-xl font-bold">
          Web3 Example
        </Link>
        <div className="hidden md:flex items-center space-x-5">
          {LinkItem.map((item, index) => (
            <div key={index}>
              <Link href={item.link} className="text-gray-300 hover:text-white">
                {item.name}
              </Link>
            </div>
          ))}
          <Button
            className="text-purple-300 font-bold hover:scale-125 transition-transform duration-500"
            onClick={toggleLogin}
          >
            Login/SignUp
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden z-50">
          {isMenuOpen ? (
            <X
              className="h-6 w-6 hover:rotate-90 duration-300"
              onClick={toggleMenu}
              aria-label="Close Menu"
            />
          ) : (
            <Menu
              className="h-6 w-6"
              onClick={toggleMenu}
              aria-label="Open Menu"
            />
          )}
          {isMenuOpen && (
            <nav className="absolute top-14 left-0 right-0 flex flex-col items-start px-10 space-y-6 w-full py-8 bg-black opacity-75">
              {LinkItem.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-gray-100 hover:text-white hover:border-b-2"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-8 w-full border-2 bg-white rounded-lg" />
              <Button
                className="text-purple-300 font-bold hover:scale-125 transition-transform duration-500"
                onClick={toggleLogin}
              >
                Login/SignUp
              </Button>
            </nav>
          )}
        </div>

        {/* LoginWindows */}
        {isLoginClick && <LoginWindows toggleLogin={toggleLogin} />}
      </nav>
    </header>
  )
}

function LoginWindows({ toggleLogin }: { toggleLogin: () => void }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const toggleSignUp = () => setIsSignUp(!isSignUp)

  return (
    <div className="fixed inset-0 flex items-center justify-center round-2xl z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={toggleLogin}
        role="presentation"
      />
      <section className="bg-slate-800 p-8 rounded-lg shadow-lg w-96 relative">
        <X
          className="h-6 w-6 absolute top-2 right-2 text-gray-400 hover:rotate-90 duration-300"
          onClick={toggleLogin}
          aria-label="Close Dialog"
        />
        {isSignUp ? (
          <SignUp toggleSignUp={toggleSignUp} />
        ) : (
          <Login toggleSignUp={toggleSignUp} />
        )}
      </section>
    </div>
  )
}

function Login({ toggleSignUp }: { toggleSignUp: () => void }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form className="flex flex-col space-y-4">
      <header className="flex justify-center mb-4">
        <h2 className="text-2xl font-bold text-white">Login</h2>
      </header>
      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Email"
        name="email"
      />

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Password"
          name="password"
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide Password' : 'Show Password'}
        >
          {showPassword ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </button>
      </div>

      <button
        type="submit"
        className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300"
      >
        Login
      </button>

      <footer className="flex justify-center items-center space-x-2 text-sm text-gray-400">
        <span>Don&apos;t have an account?</span>
        <button
          type="button"
          className="text-purple-400 hover:text-purple-300"
          onClick={toggleSignUp}
        >
          Sign Up
        </button>
      </footer>
    </form>
  )
}

function SignUp({ toggleSignUp }: { toggleSignUp: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <form className="flex flex-col space-y-4">
      <header className="flex justify-center mb-4">
        <h2 className="text-2xl font-bold text-white">Sign Up</h2>
      </header>
      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Email"
        name="email"
      />

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Password"
          name="password"
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide Password' : 'Show Password'}
        >
          {showPassword ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Password Confirm"
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Confirm Password"
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          aria-label={
            showConfirmPassword
              ? 'Hide Confirm Password'
              : 'Show Confirm Password'
          }
        >
          {showConfirmPassword ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </button>
      </div>

      <button
        type="submit"
        className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300"
      >
        Sign Up
      </button>

      <footer className="flex justify-center items-center space-x-2 text-sm text-gray-400">
        <span>Have an account?</span>
        <button
          type="button"
          className="text-purple-400 hover:text-purple-300"
          onClick={toggleSignUp}
        >
          Login
        </button>
      </footer>
    </form>
  )
}