'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'flip';
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollAnimation({
  children,
  animation = 'fadeIn',
  duration = 600,
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !once) {
            setIsVisible(true);
            if (once) {
              setHasAnimated(true);
            }
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, once, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-${Math.min(duration, 1000)}`;
    const delayClass = delay > 0 ? `delay-${Math.min(delay, 1000)}` : '';

    const animationClasses = {
      fadeIn: isVisible 
        ? 'opacity-100' 
        : 'opacity-0',
      
      slideUp: isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-8 opacity-0',
      
      slideDown: isVisible 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-8 opacity-0',
      
      slideLeft: isVisible 
        ? 'translate-x-0 opacity-100' 
        : 'translate-x-8 opacity-0',
      
      slideRight: isVisible 
        ? 'translate-x-0 opacity-100' 
        : '-translate-x-8 opacity-0',
      
      scale: isVisible 
        ? 'scale-100 opacity-100' 
        : 'scale-95 opacity-0',
      
      rotate: isVisible 
        ? 'rotate-0 opacity-100' 
        : 'rotate-12 opacity-0',
      
      flip: isVisible 
        ? 'rotateY-0 opacity-100' 
        : 'rotateY-90 opacity-0'
    };

    return `${baseClasses} ${durationClass} ${delayClass} ${animationClasses[animation]}`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transformStyle: animation === 'flip' ? 'preserve-3d' : undefined
      }}
    >
      {children}
    </div>
  );
}

// Preset animation components for common use cases
export function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <ScrollAnimation animation="fadeIn" delay={delay} className={className}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <ScrollAnimation animation="slideUp" delay={delay} className={className}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideLeft({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <ScrollAnimation animation="slideLeft" delay={delay} className={className}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideRight({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <ScrollAnimation animation="slideRight" delay={delay} className={className}>
      {children}
    </ScrollAnimation>
  );
}

export function ScaleIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <ScrollAnimation animation="scale" delay={delay} className={className}>
      {children}
    </ScrollAnimation>
  );
}