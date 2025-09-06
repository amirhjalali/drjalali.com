'use client';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'card' | 'image' | 'button';
  lines?: number;
  animate?: boolean;
}

export default function SkeletonLoader({ 
  className = '', 
  variant = 'text', 
  lines = 1,
  animate = true 
}: SkeletonLoaderProps) {
  const baseClasses = `bg-gray-200 dark:bg-neutral-700 rounded ${
    animate ? 'animate-pulse' : ''
  }`;

  if (variant === 'text') {
    return (
      <div className={`space-y-2 ${className}`} role="status" aria-label="Loading content">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} h-4 ${
              index === lines - 1 ? 'w-4/5' : 'w-full'
            }`}
          />
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`${baseClasses} ${className}`} role="status" aria-label="Loading card">
        <div className="p-4 space-y-3">
          <div className={`${baseClasses} h-6 w-3/4`} />
          <div className={`${baseClasses} h-4 w-full`} />
          <div className={`${baseClasses} h-4 w-5/6`} />
          <div className={`${baseClasses} h-10 w-32 mt-4`} />
        </div>
        <span className="sr-only">Loading card content...</span>
      </div>
    );
  }

  if (variant === 'image') {
    return (
      <div 
        className={`${baseClasses} ${className} aspect-video`} 
        role="status" 
        aria-label="Loading image"
      >
        <span className="sr-only">Loading image...</span>
      </div>
    );
  }

  if (variant === 'button') {
    return (
      <div 
        className={`${baseClasses} h-10 w-24 ${className}`} 
        role="status" 
        aria-label="Loading button"
      >
        <span className="sr-only">Loading button...</span>
      </div>
    );
  }

  return null;
}