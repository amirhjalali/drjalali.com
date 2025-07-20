'use client';

import { ReactNode } from 'react';

interface GlassEffectProps {
  children: ReactNode;
  variant?: 'light' | 'dark' | 'colored' | 'frosted' | 'minimal';
  intensity?: 'low' | 'medium' | 'high';
  border?: boolean;
  shadow?: boolean;
  className?: string;
}

export default function GlassEffect({
  children,
  variant = 'light',
  intensity = 'medium',
  border = true,
  shadow = true,
  className = ''
}: GlassEffectProps) {
  const getBlurIntensity = () => {
    switch (intensity) {
      case 'low':
        return 'backdrop-blur-sm';
      case 'medium':
        return 'backdrop-blur-md';
      case 'high':
        return 'backdrop-blur-lg';
      default:
        return 'backdrop-blur-md';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'light':
        return 'bg-white/20 dark:bg-white/10';
      
      case 'dark':
        return 'bg-black/20 dark:bg-black/30';
      
      case 'colored':
        return 'bg-primary-500/20 dark:bg-primary-400/20';
      
      case 'frosted':
        return 'bg-white/30 dark:bg-neutral-800/30';
      
      case 'minimal':
        return 'bg-white/10 dark:bg-white/5';
      
      default:
        return 'bg-white/20 dark:bg-white/10';
    }
  };

  const getBorderStyles = () => {
    if (!border) return '';
    
    switch (variant) {
      case 'light':
        return 'border border-white/30 dark:border-white/20';
      
      case 'dark':
        return 'border border-black/30 dark:border-black/40';
      
      case 'colored':
        return 'border border-primary-500/30 dark:border-primary-400/30';
      
      case 'frosted':
        return 'border border-white/40 dark:border-neutral-600/40';
      
      case 'minimal':
        return 'border border-white/20 dark:border-white/10';
      
      default:
        return 'border border-white/30 dark:border-white/20';
    }
  };

  const getShadowStyles = () => {
    if (!shadow) return '';
    
    switch (variant) {
      case 'light':
        return 'shadow-lg shadow-black/10 dark:shadow-black/20';
      
      case 'dark':
        return 'shadow-xl shadow-black/30 dark:shadow-black/50';
      
      case 'colored':
        return 'shadow-lg shadow-primary-500/20 dark:shadow-primary-400/20';
      
      case 'frosted':
        return 'shadow-xl shadow-black/20 dark:shadow-black/30';
      
      case 'minimal':
        return 'shadow-md shadow-black/5 dark:shadow-black/10';
      
      default:
        return 'shadow-lg shadow-black/10 dark:shadow-black/20';
    }
  };

  const combinedClasses = `
    ${getBlurIntensity()}
    ${getVariantStyles()}
    ${getBorderStyles()}
    ${getShadowStyles()}
    ${className}
  `.trim();

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}

// Preset glass components
export function GlassCard({ 
  children, 
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  className?: string;
} & Partial<GlassEffectProps>) {
  return (
    <GlassEffect 
      variant="frosted" 
      className={`rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </GlassEffect>
  );
}

export function GlassNavbar({ 
  children, 
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  className?: string;
} & Partial<GlassEffectProps>) {
  return (
    <GlassEffect 
      variant="light" 
      intensity="high"
      className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      {...props}
    >
      {children}
    </GlassEffect>
  );
}

export function GlassModal({ 
  children, 
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  className?: string;
} & Partial<GlassEffectProps>) {
  return (
    <GlassEffect 
      variant="frosted" 
      intensity="high"
      className={`rounded-2xl p-8 max-w-lg mx-auto ${className}`}
      {...props}
    >
      {children}
    </GlassEffect>
  );
}

export function GlassButton({ 
  children, 
  onClick,
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  onClick?: () => void;
  className?: string;
} & Partial<GlassEffectProps>) {
  return (
    <button onClick={onClick}>
      <GlassEffect 
        variant="light" 
        className={`rounded-lg px-6 py-3 transition-all duration-300 hover:bg-white/30 dark:hover:bg-white/20 ${className}`}
        {...props}
      >
        {children}
      </GlassEffect>
    </button>
  );
}

// Advanced glass effects with gradients
export function GradientGlass({ 
  children, 
  from = 'from-white/20',
  to = 'to-white/10',
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  from?: string;
  to?: string;
  className?: string;
} & Partial<GlassEffectProps>) {
  return (
    <div className={`bg-gradient-to-br ${from} ${to} backdrop-blur-lg border border-white/20 rounded-xl ${className}`}>
      {children}
    </div>
  );
}

// Glass effect with noise texture
export function TexturedGlass({ 
  children, 
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  className?: string;
} & Partial<GlassEffectProps>) {
  return (
    <div className={`relative ${className}`}>
      <GlassEffect {...props}>
        {children}
      </GlassEffect>
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px'
        }}
      />
    </div>
  );
}