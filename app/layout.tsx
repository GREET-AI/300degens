import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '300 SPARTA - Memecoin Warriors',
  description: '300 DEGENS. 1 SOLANA EACH. THIS IS SPARTA! Join the legendary battle on PumpFun.',
  keywords: '300, sparta, memecoin, pumpfun, solana, crypto, warriors',
  openGraph: {
    title: '300 SPARTA - Memecoin Warriors',
    description: '300 DEGENS. 1 SOLANA EACH. THIS IS SPARTA!',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '300 SPARTA - Memecoin Warriors',
    description: '300 DEGENS. 1 SOLANA EACH. THIS IS SPARTA!',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-sparta-dark">
          {children}
        </div>
      </body>
    </html>
  )
} 