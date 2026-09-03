'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-light text-black">
          SKINTONES.CO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="font-light hover:text-gray-600 transition-colors">Home</Link>
          <Link href="/shop" className="font-light hover:text-gray-600 transition-colors">Shop</Link>
          <Link href="/gallery" className="font-light hover:text-gray-600 transition-colors">Gallery</Link>
          <Link href="/about" className="font-light hover:text-gray-600 transition-colors">About</Link>
          <Link href="/events" className="font-light hover:text-gray-600 transition-colors">Events</Link>
          <Link href="/contact" className="font-light hover:text-gray-600 transition-colors">Contact</Link>
          <Link href="/booking" className="px-6 py-2 bg-black text-white font-light tracking-widest text-sm hover:bg-gray-900 transition-all">
            BOOK HERE
          </Link>
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
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container-custom flex flex-col gap-4">
            <Link href="/" className="font-light hover:text-gray-600">Home</Link>
            <Link href="/shop" className="font-light hover:text-gray-600">Shop</Link>
            <Link href="/gallery" className="font-light hover:text-gray-600">Gallery</Link>
            <Link href="/about" className="font-light hover:text-gray-600">About</Link>
            <Link href="/events" className="font-light hover:text-gray-600">Events</Link>
            <Link href="/contact" className="font-light hover:text-gray-600">Contact</Link>
            <Link href="/booking" className="px-6 py-2 bg-black text-white font-light tracking-widest text-sm hover:bg-gray-900 transition-all inline-block">
              BOOK HERE
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
