'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="relative">
      <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1 border border-neutral-300 dark:border-neutral-600 shadow-sm">
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`
              relative flex items-center justify-center w-9 h-9 rounded-md transition-all duration-200
              ${theme === value
                ? 'bg-white dark:bg-neutral-700 shadow-md border border-neutral-300 dark:border-neutral-500 text-primary-600 dark:text-primary-400 scale-105'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700'
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