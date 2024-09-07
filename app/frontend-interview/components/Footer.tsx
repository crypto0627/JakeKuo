import Link from 'next/link'
import { BrainCircuit } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/sales"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ai-chat"
                  className="text-gray-600 hover:text-gray-900"
                >
                  AI Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/interview-prep"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex items-center justify-center">
          <BrainCircuit className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-sm text-gray-500">
            © 2023 MyShell AI. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
