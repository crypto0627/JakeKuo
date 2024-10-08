import type { Metadata } from 'next'
import Head from 'next/head'
import localFont from 'next/font/local'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Jake Kuo - personal website',
  description:
    'jakekuo-personal website, frontend engineer, resume, portfolio, blockchain',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.jakekuo.com" />
        <meta name="author" content="Jake Kuo" />
        <meta
          name="keywords"
          content="jakekuo, 郭來鴻, Jake Kuo, jake kuo, web3, student DAO, blockchain, decentralized, students, xuedao, frontend, portfolio"
        />
        {/* Google Analytics GTag Script */}
        <GoogleAnalytics gaId="G-VS5WGZP3LN" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        <>{children}</>
      </body>
    </html>
  )
}
