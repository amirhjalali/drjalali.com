'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative">
        <div className="flex items-center bg-neutral-200 dark:bg-neutral-700 rounded-lg p-1 border-2 border-neutral-400 dark:border-neutral-500 shadow-lg">
          <div className="w-10 h-10 rounded-md bg-neutral-300 dark:bg-neutral-600 animate-pulse" />
          <div className="w-10 h-10 rounded-md bg-neutral-300 dark:bg-neutral-600 animate-pulse ml-1" />
          <div className="w-10 h-10 rounded-md bg-neutral-300 dark:bg-neutral-600 animate-pulse ml-1" />
        </div>
      </div>
    );
  }

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="relative">
      <div className="flex items-center bg-neutral-200 dark:bg-neutral-700 rounded-lg p-1 border-2 border-neutral-400 dark:border-neutral-500 shadow-lg">
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`
              relative flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 font-medium
              ${theme === value
                ? 'bg-primary-600 dark:bg-primary-500 shadow-lg text-white scale-110'
                : 'text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-300 dark:hover:bg-neutral-600'
              }
            `}
            title={label}
            aria-label={`Switch to ${label.toLowerCase()} theme`}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}