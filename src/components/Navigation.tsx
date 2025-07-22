'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-[60] transition-all duration-200"
      >
        Skip to main content
      </a>
      
      <nav className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg border-b border-neutral-200 dark:border-neutral-800 fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-700 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
              Dr. Ali Akbar Jalali
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link href="#academic" className="text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Academic Career
            </Link>
            <Link href="#research" className="text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Research
            </Link>
            <Link href="#publications" className="text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Publications
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1 transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
              <Link href="#about" className="block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors">
                About
              </Link>
              <Link href="#academic" className="block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors">
                Academic Career
              </Link>
              <Link href="#research" className="block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors">
                Research
              </Link>
              <Link href="#publications" className="block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors">
                Publications
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
      </nav>
    </>
  )
}