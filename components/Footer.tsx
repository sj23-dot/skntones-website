'use client'

import Link from 'next/link'
import { FaInstagram, FaTwitter, FaTiktok, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-skntones-accent mb-4">SKINTONES.CO</h3>
            <p className="text-gray-400 text-sm">Art, Fashion & Community Hub</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/shop" className="hover:text-skntones-accent">Shop</Link></li>
              <li><Link href="/gallery" className="hover:text-skntones-accent">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-skntones-accent">About</Link></li>
              <li><Link href="/events" className="hover:text-skntones-accent">Events</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/contact" className="hover:text-skntones-accent">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-skntones-accent">FAQ</Link></li>
              <li><Link href="#" className="hover:text-skntones-accent">Privacy</Link></li>
              <li><Link href="#" className="hover:text-skntones-accent">Terms</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a href="https://www.instagram.com/p/DQKbQGuEvUp/" target="_blank" rel="noopener noreferrer" className="hover:text-skntones-accent transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-skntones-accent transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-skntones-accent transition-colors">
                <FaTiktok />
              </a>
              <a href="mailto:skintones.co@gmail.com" className="hover:text-skntones-accent transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Skintones.co. All rights reserved.</p>
          <p className="mt-2">881 San Bruno Ave W, San Bruno, CA 94066</p>
        </div>
      </div>
    </footer>
  )
}
