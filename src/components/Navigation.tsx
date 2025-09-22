'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'academic', 'research', 'publications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity" aria-label="Dr. Ali Akbar Jalali homepage">
              <span className="text-gray-900 dark:text-neutral-100">Dr.</span>{' '}
              <span className="text-primary-600 dark:text-primary-400">Ali Akbar</span>{' '}
              <span className="text-gray-900 dark:text-neutral-100">Jalali</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link
              href="#about"
              className={`relative text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline underline-offset-2 ${
                activeSection === 'about' ? 'text-primary-600 dark:text-primary-400 font-medium' : ''
              }`}
              aria-label="Navigate to About section"
              aria-current={activeSection === 'about' ? 'page' : undefined}
            >
              About
              {activeSection === 'about' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400" aria-hidden="true" />
              )}
            </Link>
            <Link
              href="#academic"
              className={`relative text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline underline-offset-2 ${
                activeSection === 'academic' ? 'text-primary-600 dark:text-primary-400 font-medium' : ''
              }`}
              aria-label="Navigate to Academic Career section"
              aria-current={activeSection === 'academic' ? 'page' : undefined}
            >
              Academic Career
              {activeSection === 'academic' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400" aria-hidden="true" />
              )}
            </Link>
            <Link
              href="#research"
              className={`relative text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline underline-offset-2 ${
                activeSection === 'research' ? 'text-primary-600 dark:text-primary-400 font-medium' : ''
              }`}
              aria-label="Navigate to Research section"
              aria-current={activeSection === 'research' ? 'page' : undefined}
            >
              Research
              {activeSection === 'research' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400" aria-hidden="true" />
              )}
            </Link>
            <Link
              href="#publications"
              className={`relative text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline underline-offset-2 ${
                activeSection === 'publications' ? 'text-primary-600 dark:text-primary-400 font-medium' : ''
              }`}
              aria-label="Navigate to Publications section"
              aria-current={activeSection === 'publications' ? 'page' : undefined}
            >
              Publications
              {activeSection === 'publications' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400" aria-hidden="true" />
              )}
            </Link>
            <Link
              href="#contact"
              className={`relative text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline underline-offset-2 ${
                activeSection === 'contact' ? 'text-primary-600 dark:text-primary-400 font-medium' : ''
              }`}
              aria-label="Navigate to Contact section"
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contact
              {activeSection === 'contact' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400" aria-hidden="true" />
              )}
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1 transition-colors"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300" role="menu" aria-label="Mobile navigation menu">
              <Link
                href="#about"
                className={`block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  activeSection === 'about' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : ''
                }`}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                About
              </Link>
              <Link
                href="#academic"
                className={`block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  activeSection === 'academic' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : ''
                }`}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === 'academic' ? 'page' : undefined}
              >
                Academic Career
              </Link>
              <Link
                href="#research"
                className={`block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  activeSection === 'research' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : ''
                }`}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === 'research' ? 'page' : undefined}
              >
                Research
              </Link>
              <Link
                href="#publications"
                className={`block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  activeSection === 'publications' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : ''
                }`}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === 'publications' ? 'page' : undefined}
              >
                Publications
              </Link>
              <Link
                href="#contact"
                className={`block px-3 py-2 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  activeSection === 'contact' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : ''
                }`}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
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