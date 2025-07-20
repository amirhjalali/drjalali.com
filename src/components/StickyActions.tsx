'use client';

import { useState, useEffect } from 'react';
import { Download, ExternalLink, BookOpen, Mail, ArrowUp } from 'lucide-react';
import Button from './Button';

interface StickyAction {
  id: string;
  label: string;
  icon: any;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  external?: boolean;
}

const stickyActions: StickyAction[] = [
  {
    id: 'contact',
    label: 'Contact Dr. Jalali',
    icon: Mail,
    href: '#contact',
    variant: 'primary'
  },
  {
    id: 'research',
    label: 'View Research',
    icon: BookOpen,
    href: '#research',
    variant: 'secondary'
  },
  {
    id: 'wikipedia',
    label: 'Wikipedia',
    icon: ExternalLink,
    href: 'https://en.wikipedia.org/wiki/Ali_Akbar_Jalali',
    variant: 'outline',
    external: true
  }
];

export default function StickyActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      const scrolled = window.scrollY;
      setIsVisible(scrolled > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Actions */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 p-4">
        <div className="flex space-x-2">
          {stickyActions.slice(0, 2).map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                href={action.href}
                variant={action.variant}
                size="md"
                className="flex-1 text-sm"
              >
                <Icon className="w-4 h-4 mr-2" />
                {action.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Desktop Floating Actions */}
      <div className="hidden md:block fixed bottom-8 left-8 z-40">
        <div className="flex flex-col space-y-3">
          {/* Expandable Actions */}
          <div 
            className={`transition-all duration-300 ease-out ${
              isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
            }`}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-gray-200 dark:border-neutral-700 p-3 space-y-2">
              {stickyActions.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.id}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors duration-200 text-gray-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 whitespace-nowrap"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{action.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Main Toggle Button */}
          <div className="flex items-center space-x-3">
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gray-100 dark:bg-neutral-700 rounded-full flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

            {/* Quick Actions Toggle */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`
                relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl
                ${isExpanded 
                  ? 'bg-primary-600 text-white scale-110' 
                  : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700'
                }
              `}
              title="Quick Actions"
            >
              {/* Background pulse effect */}
              <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20" />
              
              {/* Icon */}
              <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-45' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">{stickyActions.length}</span>
              </div>
            </button>
          </div>

          {/* Action Labels */}
          {isExpanded && (
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-neutral-400 font-medium">
                Quick Actions
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Enhanced sticky CTA for specific sections
interface SectionCTAProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
    icon?: any;
  };
  secondaryAction?: {
    label: string;
    href: string;
    icon?: any;
  };
  className?: string;
}

export function SectionCTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = ''
}: SectionCTAProps) {
  return (
    <div className={`bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-primary-100 dark:border-primary-800 ${className}`}>
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-neutral-400 mb-8">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href={primaryAction.href}
            variant="primary"
            size="lg"
            icon={primaryAction.icon ? "external" : "arrow"}
            glow={true}
          >
            {primaryAction.icon && <primaryAction.icon className="w-5 h-5 mr-2" />}
            {primaryAction.label}
          </Button>
          
          {secondaryAction && (
            <Button
              href={secondaryAction.href}
              variant="secondary"
              size="lg"
              icon="external"
            >
              {secondaryAction.icon && <secondaryAction.icon className="w-5 h-5 mr-2" />}
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}