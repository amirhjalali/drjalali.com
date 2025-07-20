'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProfessionalPhoto from './ProfessionalPhoto';
import Button from './Button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-16 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-300 dark:text-neutral-600"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="heading-display text-fluid-7xl text-gray-900 dark:text-neutral-100">
                <span className="block">Dr. Ali Akbar</span>
                <span className="block bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                  Jalali
                </span>
              </h1>
              
              <div className="relative">
                <p className="caption-text text-fluid-2xl text-primary-600 dark:text-primary-400">
                  Father of Information Technology in Iran
                </p>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 rounded-full"></div>
              </div>
              
              <p className="body-large text-fluid-xl text-gray-700 dark:text-neutral-300 max-w-2xl">
                Professor of Electrical Engineering at Iran University of Science and Technology. 
                Pioneer in Internet of Things, Control Systems, and Information Technology with 
                over 30 years of academic excellence and 300+ published papers.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {['IoT Expert', 'Control Systems', '300+ Publications', '30+ Years Experience'].map((tag, index) => (
                  <span 
                    key={tag}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={`mt-10 flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Button
                href="#about"
                variant="primary"
                size="lg"
                icon="arrow"
                glow={true}
                className="text-lg"
              >
                Learn More
              </Button>
              <Button
                href="#research"
                variant="secondary"
                size="lg"
                icon="external"
                className="text-lg"
              >
                View Research
              </Button>
            </div>
          </div>
          
          {/* Professional Photo / Placeholder */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-blue-500 dark:from-primary-600 dark:to-blue-700 rounded-full opacity-20 dark:opacity-30 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500 blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary-300 dark:from-primary-500 to-transparent rounded-full opacity-30 dark:opacity-40"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-300 dark:from-blue-500 to-transparent rounded-full opacity-20 dark:opacity-30"></div>
              
              {/* Photo Container */}
              <div className="relative w-96 h-96 shadow-2xl ring-8 ring-white dark:ring-neutral-700 ring-opacity-50 dark:ring-opacity-60 group-hover:ring-opacity-70 dark:group-hover:ring-opacity-80 transition-all duration-500 transform group-hover:scale-105 rounded-full overflow-hidden">
                <ProfessionalPhoto 
                  className="w-full h-full"
                  alt="Dr. Ali Akbar Jalali - Professor of Electrical Engineering"
                />
              </div>
              
              {/* Floating Achievement Badges */}
              <div className="absolute -top-6 left-2 bg-white dark:bg-neutral-800 rounded-xl px-4 py-3 shadow-xl border border-gray-100 dark:border-neutral-700 transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-lg font-bold">30+</div>
                  <div className="text-xs font-medium text-gray-600 dark:text-neutral-300">Years</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-6 bg-white dark:bg-neutral-800 rounded-xl px-4 py-3 shadow-xl border border-gray-100 dark:border-neutral-700 transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-lg font-bold">300+</div>
                  <div className="text-xs font-medium text-gray-600 dark:text-neutral-300">Papers</div>
                </div>
              </div>
              
              <div className="absolute top-20 -left-8 bg-white dark:bg-neutral-800 rounded-xl px-4 py-3 shadow-xl border border-gray-100 dark:border-neutral-700 transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-lg font-bold">50+</div>
                  <div className="text-xs font-medium text-gray-600 dark:text-neutral-300">Books</div>
                </div>
              </div>
              
              <div className="absolute bottom-16 right-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl px-3 py-2 shadow-xl transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
                <div className="text-xs font-semibold">IT Pioneer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="currentColor"
            className="text-white dark:text-neutral-900"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}