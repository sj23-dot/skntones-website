'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-skntones-dark border-b border-gray-800 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-skntones-accent">
          SKINTONES.CO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-skntones-accent transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-skntones-accent transition-colors">Shop</Link>
          <Link href="/gallery" className="hover:text-skntones-accent transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-skntones-accent transition-colors">About</Link>
          <Link href="/events" className="hover:text-skntones-accent transition-colors">Events</Link>
          <Link href="/contact" className="hover:text-skntones-accent transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-skntones-dark border-t border-gray-800 py-4">
          <div className="container-custom flex flex-col gap-4">
            <Link href="/" className="hover:text-skntones-accent">Home</Link>
            <Link href="/shop" className="hover:text-skntones-accent">Shop</Link>
            <Link href="/gallery" className="hover:text-skntones-accent">Gallery</Link>
            <Link href="/about" className="hover:text-skntones-accent">About</Link>
            <Link href="/events" className="hover:text-skntones-accent">Events</Link>
            <Link href="/contact" className="hover:text-skntones-accent">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
