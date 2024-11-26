import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to providing users with the best Web3 service
              experience and building a secure and reliable blockchain
              ecosystem.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.com"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://telegram.org"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  href="https://medium.com"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Medium
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white border-gray-700 focus:ring-purple-500"
              />
              <Button
                variant="default"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Web3 Example. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
