'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProfessionalPhotoProps {
  src?: string;
  alt?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export default function ProfessionalPhoto({ 
  src, 
  alt = "Dr. Ali Akbar Jalali", 
  className = "",
  loading = "eager"
}: ProfessionalPhotoProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Professional placeholder when no image is provided or image fails to load
  const renderPlaceholder = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-500 rounded-full flex items-center justify-center overflow-hidden">
      {/* Professional Pattern Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="professional-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-400 dark:text-neutral-400"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#professional-grid)" />
        </svg>
      </div>
      
      {/* Professional Avatar */}
      <div className="relative z-10 text-center">
        {/* Professional Icon */}
        <div className="mb-4">
          <svg className="w-24 h-24 mx-auto text-primary-600 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        
        {/* Name Initials */}
        <div className="text-primary-700 dark:text-neutral-200 text-4xl font-bold mb-2 tracking-wider">
          Dr. A.A.J
        </div>
        
        {/* Professional Title */}
        <div className="text-primary-600 dark:text-neutral-400 text-sm font-medium opacity-80 max-w-48 mx-auto leading-relaxed">
          Professor of Electrical Engineering
        </div>
        
        {/* Subtle indicator */}
        <div className="mt-3 text-xs text-primary-500 dark:text-neutral-500 opacity-60">
          Professional Photo
        </div>
      </div>
      
      {/* Subtle Academic Decoration */}
      <div className="absolute top-6 right-6 opacity-20 dark:opacity-30">
        <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,5H19A2,2 0 0,1 21,7V17A2,2 0 0,1 19,19H5A2,2 0 0,1 3,17V7A2,2 0 0,1 5,5M7,7V17H17V7H7Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-6 left-6 opacity-20 dark:opacity-30">
        <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
        </svg>
      </div>
    </div>
  );

  // If no source provided, show placeholder
  if (!src) {
    return (
      <div className={`relative ${className}`}>
        {renderPlaceholder()}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Show placeholder while loading or if error */}
      {(!imageLoaded || hasError) && renderPlaceholder()}
      
      {/* Actual professional photo */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          className={`rounded-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setHasError(true)}
          priority={loading === "eager"}
          loading={loading}
          sizes="(max-width: 768px) 300px, 400px"
        />
      )}
      
      {/* Professional photo overlay */}
      {imageLoaded && !hasError && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      )}
    </div>
  );
}