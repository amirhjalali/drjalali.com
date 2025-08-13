'use client';

import { useEffect, useState } from 'react';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  className?: string;
  showPercentage?: boolean;
}

export default function ScrollProgress({
  color = 'bg-gradient-to-r from-primary-500 to-primary-600',
  height = 3,
  className = '',
  showPercentage = false
}: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Progress bar - Hidden on mobile */}
      <div 
        className={`hidden md:block fixed top-0 left-0 z-40 transition-all duration-150 ease-out ${className}`}
        style={{ height: `${height}px` }}
      >
        <div
          className={`h-full ${color} shadow-lg transition-all duration-150 ease-out`}
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
        />
      </div>

      {/* Optional percentage indicator */}
      {showPercentage && (
        <div className="fixed top-4 right-4 z-40 bg-white dark:bg-neutral-800 rounded-full px-3 py-1 shadow-lg border border-gray-200 dark:border-neutral-700">
          <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      )}
    </>
  );
}

// Circular progress variant
export function CircularScrollProgress({
  size = 60,
  strokeWidth = 4,
  className = ''
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
      <div className="relative">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-gray-200 dark:text-neutral-700"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-primary-500 transition-all duration-150 ease-out"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
            }}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700 dark:text-neutral-300">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </div>
  );
}