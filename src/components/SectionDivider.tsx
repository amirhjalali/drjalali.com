'use client';

import { ChevronDown, ArrowDown, TrendingDown } from 'lucide-react';

interface SectionDividerProps {
  variant?: 'arrow' | 'wave' | 'dots' | 'line' | 'chevron';
  color?: 'primary' | 'secondary' | 'neutral';
  animated?: boolean;
  className?: string;
}

export default function SectionDivider({
  variant = 'chevron',
  color = 'primary',
  animated = true,
  className = ''
}: SectionDividerProps) {
  const colorClasses = {
    primary: 'text-primary-500 dark:text-primary-400',
    secondary: 'text-gray-400 dark:text-neutral-500',
    neutral: 'text-neutral-400 dark:text-neutral-600'
  };

  const animationClass = animated ? 'animate-bounce' : '';

  if (variant === 'arrow') {
    return (
      <div className={`flex justify-center py-8 ${className}`}>
        <div className={`${colorClasses[color]} ${animationClass}`}>
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    );
  }

  if (variant === 'chevron') {
    return (
      <div className={`flex justify-center py-8 ${className}`}>
        <div className={`${colorClasses[color]} ${animationClass}`}>
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className={`w-full py-8 ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`w-full h-12 ${colorClasses[color]}`}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={`fill-current ${animated ? 'animate-pulse' : ''}`}
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={`fill-current ${animated ? 'animate-pulse delay-75' : ''}`}
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`flex justify-center py-8 ${className}`}>
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${colorClasses[color]} ${
                animated ? `animate-pulse delay-${i * 100}` : ''
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'line') {
    return (
      <div className={`flex justify-center py-8 ${className}`}>
        <div className={`w-24 h-px ${colorClasses[color]} bg-current`} />
      </div>
    );
  }

  return null;
}

// Visual anchor component for section numbers
interface SectionAnchorProps {
  number: string | number;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionAnchor({ 
  number, 
  title, 
  subtitle, 
  className = '' 
}: SectionAnchorProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {/* Section Number */}
      <div className="relative inline-block mb-6">
        <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl transform scale-150" />
        <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
          {number}
        </div>
      </div>
      
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-neutral-100 mb-4">
        {title}
      </h2>
      
      {/* Section Subtitle */}
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      
      {/* Decorative Line */}
      <div className="mt-6 flex justify-center">
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
      </div>
    </div>
  );
}

// Directional flow indicator
interface FlowIndicatorProps {
  direction?: 'down' | 'right' | 'left';
  text?: string;
  className?: string;
}

export function FlowIndicator({ 
  direction = 'down', 
  text = 'Continue Reading',
  className = '' 
}: FlowIndicatorProps) {
  const getIcon = () => {
    switch (direction) {
      case 'right':
        return <TrendingDown className="w-5 h-5 transform rotate-[-45deg]" />;
      case 'left':
        return <TrendingDown className="w-5 h-5 transform rotate-[135deg]" />;
      default:
        return <ChevronDown className="w-5 h-5" />;
    }
  };

  return (
    <div className={`flex items-center justify-center text-primary-600 dark:text-primary-400 ${className}`}>
      <div className="flex items-center space-x-2 group cursor-pointer">
        <span className="text-sm font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
          {text}
        </span>
        <div className="group-hover:scale-110 transition-transform animate-bounce">
          {getIcon()}
        </div>
      </div>
    </div>
  );
}