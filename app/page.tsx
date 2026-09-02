'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Luxury Minimalist */}
      <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center py-20">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light text-black mb-6 tracking-wide animate-slideUp">
            SKINTONES.CO
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto animate-slideUp leading-relaxed">
            Thoughtfully crafted apparel. Celebrating art, culture, and community.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-slideUp">
            <Link href="/shop" className="px-8 py-4 bg-black text-white font-light tracking-widest hover:bg-gray-900 transition-all duration-300">
              SHOP NOW
            </Link>
            <Link href="/about" className="px-8 py-4 border-2 border-black text-black font-light tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-5xl font-light text-black mb-16 text-center tracking-wide">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Graphic Tees', desc: 'Bold designs that tell a story' },
              { name: 'Hoodies', desc: 'Comfort meets refined style' },
              { name: 'Rugby Shirts', desc: 'Classic silhouettes with intention' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-200 h-64 rounded-sm mb-6 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                  <span className="text-gray-500 text-4xl font-light">Image</span>
                </div>
                <h3 className="text-2xl font-light text-black mb-2">{item.name}</h3>
                <p className="text-gray-500 mb-4 font-light">{item.desc}</p>
                <Link href="/shop" className="text-black font-light flex items-center gap-3 group-hover:gap-4 transition-all uppercase text-sm tracking-widest">
                  View <FaArrowRight className="text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-5xl font-light text-black mb-6 tracking-wide">Our Community</h2>
          <p className="text-gray-600 text-lg font-light mb-8 leading-relaxed">
            Skintones.co is more than apparel. We are a collective of artists, designers, and cultural visionaries committed to celebrating diversity through thoughtful design and authentic community engagement.
          </p>
          <Link href="/events" className="px-8 py-4 bg-black text-white font-light tracking-widest hover:bg-gray-900 transition-all duration-300 inline-block">
            EXPLORE EVENTS
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="container-custom text-center max-w-md mx-auto">
          <h2 className="text-4xl font-light text-black mb-4 tracking-wide">Stay Connected</h2>
          <p className="text-gray-600 mb-8 font-light">Subscribe for new releases and community updates</p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-6 py-3 bg-white border border-gray-300 text-black placeholder-gray-400 focus:border-black focus:outline-none font-light"
            />
            <button type="submit" className="px-6 py-3 bg-black text-white font-light tracking-widest hover:bg-gray-900 transition-all duration-300">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}