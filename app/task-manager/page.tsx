'use client'
import { useState, useEffect } from 'react'
import { CheckCircle, Clock, Filter } from 'lucide-react'
import { SignInForm, SignUpForm } from './components'
import AnimatedMenuIcon from './components/AnimatedMenuIcon'

function Feature({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function TodoApp() {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <div className="hidden md:flex space-x-4">
            <button
              className="hover:text-gray-300"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </button>
            <button
              className="hover:text-gray-300"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <div className="w-8 h-8" /> {/* 占位符 */}
          </div>
        </div>
      </header>

      {/* Mobile menu toggle button */}
      <div className="fixed top-4 right-6 z-50 md:hidden">
        <AnimatedMenuIcon isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-4 mt-12">
            {' '}
            {/* 增加顶部边距，为固定的按钮留出空间 */}
            <button
              className="w-full text-left py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200 relative overflow-hidden group"
              onClick={() => {
                setShowSignIn(true)
                setIsMenuOpen(false)
              }}
            >
              <span className="relative z-10">Sign In</span>
              <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
            <button
              className="w-full text-left py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200 relative overflow-hidden group"
              onClick={() => {
                setShowSignUp(true)
                setIsMenuOpen(false)
              }}
            >
              <span className="relative z-10">Sign Up</span>
              <span className="absolute inset-0 w-0 bg-green-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Todo App</h2>
          <p className="text-xl mb-8">
            Organize your tasks efficiently and boost your productivity.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Feature
              icon={<CheckCircle className="h-8 w-8 text-green-500" />}
              title="Stay Organized"
              description="Keep all your tasks in one place and never forget an important to-do."
            />
            <Feature
              icon={<Clock className="h-8 w-8 text-blue-500" />}
              title="Save Time"
              description="Quickly add, edit, and complete tasks to make the most of your day."
            />
            <Feature
              icon={<Filter className="h-8 w-8 text-purple-500" />}
              title="Easy Filtering"
              description="Focus on what matters by filtering tasks by their completion status."
            />
          </div>
        </div>
      </main>

      {/* SignIn and SignUp components (commented out for now) */}
      {showSignIn && (
        <SignInForm
          onSignIn={() => {}}
          onClose={() => setShowSignIn(false)}
          onForgotPassword={() => {}}
        />
      )}

      {showSignUp && (
        <SignUpForm
          onSignUp={() => {}}
          onClose={() => setShowSignUp(false)}
          onGoogleSignUp={() => {}}
          onGitHubSignUp={() => {}}
        />
      )}
    </div>
  )
}
