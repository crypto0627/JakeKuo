import Link from 'next/link'
import { BrainCircuit, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BrainCircuit className="h-6 w-6 mr-2" />
              Master FE
            </h3>
            <p className="text-sm text-gray-300">
              Frontend interview questions and notes for the demander.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/crypto0627' },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/lai-hung-kuo-83b186245'
                }
              ].map(({ icon: Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Master FE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
