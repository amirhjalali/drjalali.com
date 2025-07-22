'use client';

import { useState, useEffect } from 'react';
import { ChevronUp, Home, User, BookOpen, FileText, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: any;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home, href: '#' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'research', label: 'Research', icon: BookOpen, href: '#research' },
  { id: 'publications', label: 'Publications', icon: FileText, href: '#publications' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / totalHeight) * 100;
      
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
      setIsVisible(scrolled > 300);

      // Determine active section
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string, id: string) => {
    if (href === '#') {
      scrollToTop();
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(id);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-40">
      {/* Progress Ring */}
      <div className="relative mb-2 sm:mb-4">
        <svg
          width="48"
          height="48"
          className="transform -rotate-90 sm:w-[60px] sm:h-[60px]"
        >
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="transparent"
            className="text-gray-200 dark:text-neutral-700"
          />
          {/* Progress circle */}
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="transparent"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
            strokeLinecap="round"
            className="text-primary-500 transition-all duration-300 ease-out"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
            }}
          />
        </svg>
        
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 flex items-center justify-center w-full h-full bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200 dark:border-neutral-700"
          title="Scroll to top"
          aria-label="Scroll to top of page"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </button>
        
        {/* Progress percentage - hidden on mobile */}
        <div className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <span className="text-xs font-medium text-gray-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 px-2 py-1 rounded-full shadow-sm border border-gray-200 dark:border-neutral-700">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="bg-white dark:bg-neutral-800 rounded-full p-1.5 sm:p-2 shadow-lg border border-gray-200 dark:border-neutral-700" role="navigation" aria-label="Page section navigation">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleNavClick(item.href, item.id)}
                className={`
                  block w-8 h-8 sm:w-10 sm:h-10 rounded-full mb-1 last:mb-0 transition-all duration-300 
                  flex items-center justify-center relative overflow-hidden
                  ${isActive 
                    ? 'bg-primary-500 text-white shadow-lg scale-110' 
                    : 'bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105'
                  }
                `}
                title={item.label}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20" />
                )}
              </button>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 dark:bg-neutral-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {item.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-neutral-700"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}