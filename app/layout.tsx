import type { Metadata } from "next";
import Head from 'next/head';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jake Kuo - personal website",
  description: "jakekuo-personal website, frontend engineer, resume, portfolio, blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.jakekuo.com" />
        <meta name="author" content="Jake Kuo" />
        <meta name="keywords" content="jakekuo, Jake Kuo, web3, student DAO, blockchain, decentralized, students, xuedao, frontend, portfolio" />
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION_CODE} />
        {/* Google Analytics GTag Script */}
        <script async src={"https://www.googletagmanager.com/gtag/js?id="+ process.env.GA4}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.GA4});
            `,
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
