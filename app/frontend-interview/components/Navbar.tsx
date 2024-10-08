import Link from 'next/link'

export default function Navbar() {
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
        </div>
      </div>
    </nav>
  )
}
