'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-neutral-300 dark:bg-neutral-600 animate-pulse" />
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      onClick={toggleTheme}
      className="
        relative flex items-center justify-center w-12 h-12 rounded-full
        bg-neutral-200 dark:bg-neutral-700 
        border-2 border-neutral-300 dark:border-neutral-600
        hover:border-primary-400 dark:hover:border-primary-500
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-4 focus:ring-primary-500/30
        group
      "
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon with smooth transition */}
      <Icon 
        className={`
          w-5 h-5 transition-all duration-300 ease-out
          ${isDark 
            ? 'text-yellow-500 rotate-0 scale-100' 
            : 'text-slate-600 dark:text-slate-300 rotate-180 scale-110'
          }
          group-hover:scale-125
        `} 
      />
      
      {/* Rotating background indicator */}
      <div 
        className={`
          absolute inset-1 rounded-full border-2 border-transparent
          transition-all duration-500 ease-out
          ${isDark 
            ? 'border-t-yellow-400 rotate-180' 
            : 'border-t-slate-400 rotate-0'
          }
        `} 
      />
    </button>
  );
}