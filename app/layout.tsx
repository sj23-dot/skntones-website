import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Skintones.co - Art, Fashion & Community',
  description: 'Thoughtfully crafted apparel celebrating art, culture, and community. Skintones.co is a collective of artists and designers.',
  keywords: 'fashion, art, community, apparel, skintones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}