import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-xl font-bold">
        Web3
      </Link>
    </nav>
  )
}
