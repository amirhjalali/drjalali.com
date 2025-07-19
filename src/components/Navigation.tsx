'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-700">
              Dr. Ali Akbar Jalali
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="#academic" className="text-gray-700 hover:text-primary-600 transition-colors">
              Academic Career
            </Link>
            <Link href="#research" className="text-gray-700 hover:text-primary-600 transition-colors">
              Research
            </Link>
            <Link href="#media" className="text-gray-700 hover:text-primary-600 transition-colors">
              Media
            </Link>
            <Link href="#news" className="text-gray-700 hover:text-primary-600 transition-colors">
              News
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                About
              </Link>
              <Link href="#academic" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Academic Career
              </Link>
              <Link href="#research" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Research
              </Link>
              <Link href="#media" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Media
              </Link>
              <Link href="#news" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                News
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}