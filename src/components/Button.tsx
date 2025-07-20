'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ExternalLink, Download, Mail } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'minimal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: 'arrow' | 'external' | 'download' | 'mail' | 'none';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  ripple?: boolean;
  glow?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  href,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  ripple = true,
  glow = false
}: ButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const rippleId = useRef(0);

  const createRipple = (event: React.MouseEvent) => {
    if (!ripple || disabled || loading) return;

    const button = buttonRef.current || linkRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRipple = {
      id: rippleId.current++,
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  // Base styles
  const baseStyles = `
    relative inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 ease-out transform-gpu
    focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    overflow-hidden group
    ${isPressed ? 'scale-95' : 'hover:scale-105'}
    ${glow ? 'hover:shadow-2xl' : 'hover:shadow-xl'}
  `;

  // Size variations
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3'
  };

  // Variant styles
  const variantStyles = {
    primary: `
      text-white bg-gradient-to-r from-primary-600 to-primary-700 
      hover:from-primary-700 hover:to-primary-800 
      dark:from-primary-500 dark:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-700
      shadow-lg hover:shadow-primary-500/25 dark:hover:shadow-primary-400/25
      focus:ring-primary-500 dark:focus:ring-primary-400
      ${glow ? 'shadow-primary-500/25 hover:shadow-primary-500/40' : ''}
    `,
    secondary: `
      text-primary-700 dark:text-primary-300 bg-white dark:bg-neutral-800 
      border-2 border-primary-200 dark:border-primary-600 
      hover:border-primary-300 dark:hover:border-primary-500 
      hover:bg-primary-50 dark:hover:bg-neutral-700
      shadow-lg hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10
      focus:ring-primary-500 dark:focus:ring-primary-400
    `,
    outline: `
      text-gray-700 dark:text-neutral-300 bg-transparent 
      border-2 border-gray-300 dark:border-neutral-600
      hover:border-gray-400 dark:hover:border-neutral-500
      hover:bg-gray-50 dark:hover:bg-neutral-800
      shadow-md hover:shadow-lg
      focus:ring-gray-500 dark:focus:ring-neutral-400
    `,
    glass: `
      text-gray-900 dark:text-neutral-100 
      bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg
      border border-white/20 dark:border-neutral-700/50
      hover:bg-white/90 dark:hover:bg-neutral-700/90
      shadow-lg hover:shadow-xl
      focus:ring-gray-500 dark:focus:ring-neutral-400
    `,
    minimal: `
      text-gray-700 dark:text-neutral-300 bg-transparent
      hover:bg-gray-100 dark:hover:bg-neutral-800
      hover:text-primary-600 dark:hover:text-primary-400
      focus:ring-gray-500 dark:focus:ring-neutral-400
    `
  };

  // Icon components
  const IconComponent = {
    arrow: ChevronRight,
    external: ExternalLink,
    download: Download,
    mail: Mail,
    none: null
  }[icon];

  // Loading spinner
  const LoadingSpinner = () => (
    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
  );

  // Combined styles
  const combinedStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `;

  // Event handlers
  const handleClick = (e: React.MouseEvent) => {
    createRipple(e);
    if (onClick && !disabled && !loading) {
      onClick();
    }
  };

  // Ripple effect component
  const RippleEffect = () => (
    <>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animationDuration: '600ms'
          }}
        />
      ))}
    </>
  );

  // Button content
  const content = (
    <>
      <RippleEffect />
      
      {/* Background glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <>
            <LoadingSpinner />
            <span>Loading...</span>
          </>
        ) : (
          <>
            <span>{children}</span>
            {IconComponent && (
              <IconComponent 
                className={`
                  w-5 h-5 transition-transform duration-300 group-hover:translate-x-1
                  ${size === 'sm' ? 'w-4 h-4' : size === 'xl' ? 'w-6 h-6' : 'w-5 h-5'}
                `}
              />
            )}
          </>
        )}
      </span>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </>
  );

  // Render as link or button
  if (href) {
    return (
      <a
        ref={linkRef}
        href={href}
        className={combinedStyles}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        target={icon === 'external' ? '_blank' : undefined}
        rel={icon === 'external' ? 'noopener noreferrer' : undefined}
        style={{ pointerEvents: disabled || loading ? 'none' : 'auto' }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={combinedStyles}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
      type="button"
    >
      {content}
    </button>
  );
}