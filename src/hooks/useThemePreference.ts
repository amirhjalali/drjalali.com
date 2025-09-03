import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useThemePreference() {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Load saved preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Detect system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateResolvedTheme = () => {
      const currentTheme = localStorage.getItem('theme') as Theme || 'system';
      
      if (currentTheme === 'system') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setResolvedTheme(currentTheme as 'light' | 'dark');
      }
    };

    updateResolvedTheme();

    // Listen for system preference changes
    mediaQuery.addEventListener('change', updateResolvedTheme);
    
    return () => {
      mediaQuery.removeEventListener('change', updateResolvedTheme);
    };
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update resolved theme
    if (newTheme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setResolvedTheme(isDark ? 'dark' : 'light');
    } else {
      setResolvedTheme(newTheme as 'light' | 'dark');
    }

    // Apply theme to document
    if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    theme,
    resolvedTheme,
    changeTheme,
    isSystemTheme: theme === 'system',
  };
}