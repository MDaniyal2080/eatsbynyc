import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eat This - NYC Eats & Experiences',
  description: 'Discover the best food experiences in New York City. From hidden gems to iconic eateries, we guide you through NYC\'s culinary landscape.',
  keywords: 'NYC food, New York restaurants, food experiences, dining guide, NYC eats',
  authors: [{ name: 'Eat This NYC' }],
  openGraph: {
    title: 'Eat This - NYC Eats & Experiences',
    description: 'Discover the best food experiences in New York City',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eat This - NYC Eats & Experiences',
    description: 'Discover the best food experiences in New York City',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
