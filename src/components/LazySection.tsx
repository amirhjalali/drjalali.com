'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import LoadingState from './LoadingState';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  loadingType?: 'section' | 'inline';
}

export default function LazySection({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
  loadingType = 'section'
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Simulate content loading
          setTimeout(() => setIsLoaded(true), 300);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, threshold, rootMargin]);

  return (
    <div ref={sectionRef} className={className}>
      {!isVisible ? (
        <div className="min-h-[200px] flex items-center justify-center">
          {fallback || <LoadingState type={loadingType} />}
        </div>
      ) : (
        <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      )}
    </div>
  );
}