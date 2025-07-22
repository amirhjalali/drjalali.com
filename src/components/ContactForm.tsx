'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const email = 'drjalali@gmail.com';
  
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailOptions(true);
  };

  const socialLinks: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
    color: string;
    onClick?: (e: React.MouseEvent) => void;
  }> = [
    {
      name: 'Email',
      href: '#email',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: 'hover:text-blue-600',
      onClick: handleEmailClick
    },
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
        </svg>
      ),
      color: 'hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aliakbar-jalali-4569405/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-600'
    },
    {
      name: 'IEEE Xplore',
      href: 'https://ieeexplore.ieee.org/author/37300412300',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          {/* IEEE Official Logo Style */}
          <path d="M2 2h20v20H2V2zm18 18V4H4v16h16zM6 6h4v1.5H6V6zm0 2.5h4V10H6V8.5zM6 11h4v1.5H6V11zm6-5h4v1.5h-4V6zm0 2.5h4V10h-4V8.5zm0 2.5h4v1.5h-4V11zM6 13.5h4V15H6v-1.5zm6 0h4V15h-4v-1.5zM6 16h10v1.5H6V16z" fill="currentColor"/>
          <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
        </svg>
      ),
      color: 'hover:text-blue-700'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@Professor.Aliakbar.Jalali',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'hover:text-red-600'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/drjalali_ict/?hl=en',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'hover:text-pink-500'
    },
    {
      name: 'Wikipedia',
      href: 'https://en.wikipedia.org/wiki/Ali_Akbar_Jalali',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          {/* Wikipedia W Logo - Official Style */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.5 8.5h1.8l1.2 6L12 10l1.5 4.5 1.2-6h1.8L15 18h-1.5L12 12l-1.5 6H9L7.5 8.5z" fill="currentColor"/>
        </svg>
      ),
      color: 'hover:text-gray-700'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with Dr. Jalali through email or social media
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center">
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className={`
                      flex items-center justify-center w-16 h-16 rounded-full
                      bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl
                      border-2 border-gray-100 dark:border-neutral-700
                      text-gray-600 dark:text-neutral-400 ${link.color}
                      transition-all duration-300 hover:scale-110 hover:-translate-y-1
                    `}
                    aria-label={link.name === 'Email' ? 'Email Dr. Jalali' : `Visit Dr. Jalali's ${link.name} profile`}
                  >
                    {link.icon}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`
                      flex items-center justify-center w-16 h-16 rounded-full
                      bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl
                      border-2 border-gray-100 dark:border-neutral-700
                      text-gray-600 dark:text-neutral-400 ${link.color}
                      transition-all duration-300 hover:scale-110 hover:-translate-y-1
                    `}
                    aria-label={link.name === 'Email' ? 'Email Dr. Jalali' : `Visit Dr. Jalali's ${link.name} profile`}
                  >
                    {link.icon}
                  </a>
                )}
                
                {/* Tooltip on hover */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900 dark:bg-neutral-700 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    {link.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900 dark:border-b-neutral-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Email Options Modal */}
        {showEmailOptions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowEmailOptions(false)}>
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-md w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100 mb-4">Contact Dr. Jalali</h3>
              <p className="text-gray-600 dark:text-neutral-400 mb-6">Email: {email}</p>
              
              <div className="space-y-3">
                {/* Copy to clipboard */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(email);
                    alert('Email address copied to clipboard!');
                    setShowEmailOptions(false);
                  }}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Email Address
                </button>
                
                {/* Open in default mail client */}
                <a
                  href={`mailto:${email}`}
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Open Email Client
                </a>
                
                {/* Open Gmail */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-neutral-300 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  Open in Gmail
                </a>
                
                {/* Cancel */}
                <button
                  onClick={() => setShowEmailOptions(false)}
                  className="w-full px-4 py-3 text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;