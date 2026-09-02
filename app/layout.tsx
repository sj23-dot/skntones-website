import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Skntones - Art, Fashion & Community',
  description: 'Skntones is a multidisciplinary creative agency and community hub based in Minneapolis, blending retail fashion with art, culture, and community initiatives.',
  keywords: 'fashion, art, community, minneapolis, apparel, creative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-skntones-dark text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
