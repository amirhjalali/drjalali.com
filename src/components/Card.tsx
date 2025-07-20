'use client';

import { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'neumorphism' | 'elevated' | 'minimal';
  hover?: 'lift' | 'glow' | 'scale' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export default function Card({
  children,
  variant = 'default',
  hover = 'lift',
  padding = 'md',
  className = '',
  onClick,
  interactive = false
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (variant === 'neumorphism' || hover === 'glow') {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Base styles
  const baseStyles = `
    relative rounded-xl transition-all duration-300 ease-out transform-gpu
    ${interactive || onClick ? 'cursor-pointer' : ''}
    ${onClick ? 'focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-primary-500/50' : ''}
  `;

  // Padding variations
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  // Variant styles
  const variantStyles = {
    default: `
      bg-white dark:bg-neutral-800 
      border border-gray-200 dark:border-neutral-700
      shadow-md hover:shadow-lg dark:shadow-neutral-900/20
    `,
    glass: `
      bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg
      border border-white/20 dark:border-neutral-700/50
      shadow-lg shadow-black/10 dark:shadow-black/30
      hover:bg-white/90 dark:hover:bg-neutral-700/90
    `,
    neumorphism: `
      bg-gray-100 dark:bg-neutral-800
      shadow-[8px_8px_16px_#d1d5db,_-8px_-8px_16px_#ffffff] 
      dark:shadow-[8px_8px_16px_#1f2937,_-8px_-8px_16px_#374151]
      border border-gray-200/50 dark:border-neutral-600/50
      hover:shadow-[12px_12px_24px_#d1d5db,_-12px_-12px_24px_#ffffff]
      dark:hover:shadow-[12px_12px_24px_#1f2937,_-12px_-12px_24px_#374151]
    `,
    elevated: `
      bg-white dark:bg-neutral-800
      shadow-xl shadow-black/10 dark:shadow-black/30
      border border-gray-100 dark:border-neutral-700
      hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/40
    `,
    minimal: `
      bg-transparent
      border border-gray-200 dark:border-neutral-700
      hover:border-gray-300 dark:hover:border-neutral-600
      hover:bg-gray-50 dark:hover:bg-neutral-800/50
    `
  };

  // Hover effects
  const hoverStyles = {
    lift: isHovered ? 'transform translate-y-[-4px]' : '',
    glow: '',
    scale: isHovered ? 'transform scale-105' : '',
    none: ''
  };

  // Special effects based on variant and hover
  const getSpecialEffects = () => {
    const effects = [];

    // Glow effect
    if (hover === 'glow' && isHovered) {
      effects.push(
        <div
          key="glow"
          className="absolute inset-0 rounded-xl bg-gradient-radial from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        />
      );
    }

    // Shine effect for glass cards
    if (variant === 'glass' && isHovered) {
      effects.push(
        <div
          key="shine"
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ease-out"
          style={{
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
          }}
        />
      );
    }

    // Neumorphism inner shadow
    if (variant === 'neumorphism' && isHovered) {
      effects.push(
        <div
          key="inner-shadow"
          className="absolute inset-2 rounded-lg opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.5 : 0,
            boxShadow: `inset 4px 4px 8px rgba(0,0,0,0.1), inset -4px -4px 8px rgba(255,255,255,0.8)`
          }}
        />
      );
    }

    return effects;
  };

  // Combined styles
  const combinedStyles = `
    ${baseStyles}
    ${paddingStyles[padding]}
    ${variantStyles[variant]}
    ${hoverStyles[hover]}
    ${className}
    group
  `;

  return (
    <div
      className={combinedStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Special effects */}
      {getSpecialEffects()}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Border highlight for interactive cards */}
      {(interactive || onClick) && (
        <div className="absolute inset-0 rounded-xl border-2 border-primary-500/0 group-hover:border-primary-500/20 transition-colors duration-300" />
      )}
    </div>
  );
}