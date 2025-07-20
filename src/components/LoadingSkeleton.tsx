'use client';

interface LoadingSkeletonProps {
  variant?: 'text' | 'circle' | 'rectangle' | 'card' | 'avatar' | 'button';
  width?: string | number;
  height?: string | number;
  lines?: number;
  className?: string;
  animated?: boolean;
}

export default function LoadingSkeleton({
  variant = 'text',
  width,
  height,
  lines = 1,
  className = '',
  animated = true
}: LoadingSkeletonProps) {
  const baseStyles = `
    bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
    dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700
    ${animated ? 'animate-pulse' : ''}
    ${className}
  `;

  const getVariantStyles = () => {
    switch (variant) {
      case 'text':
        return 'h-4 rounded';
      case 'circle':
        return 'rounded-full aspect-square';
      case 'rectangle':
        return 'rounded-lg';
      case 'card':
        return 'rounded-xl min-h-48';
      case 'avatar':
        return 'rounded-full w-12 h-12';
      case 'button':
        return 'rounded-xl h-12';
      default:
        return 'h-4 rounded';
    }
  };

  const getDimensions = () => {
    const styles: React.CSSProperties = {};
    if (width) styles.width = typeof width === 'number' ? `${width}px` : width;
    if (height) styles.height = typeof height === 'number' ? `${height}px` : height;
    return styles;
  };

  // For multiple text lines
  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseStyles} ${getVariantStyles()}`}
            style={{
              ...getDimensions(),
              width: index === lines - 1 ? '60%' : width || '100%'
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseStyles} ${getVariantStyles()}`}
      style={getDimensions()}
    />
  );
}

// Preset skeleton components
export function TextSkeleton({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return <LoadingSkeleton variant="text" lines={lines} className={className} />;
}

export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <LoadingSkeleton variant="rectangle" height={200} />
      <LoadingSkeleton variant="text" lines={2} />
      <LoadingSkeleton variant="button" width="40%" />
    </div>
  );
}

export function AvatarSkeleton({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <LoadingSkeleton 
      variant="circle" 
      width={size} 
      height={size} 
      className={className} 
    />
  );
}

export function PublicationSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`border border-gray-200 dark:border-neutral-700 rounded-lg p-6 space-y-3 ${className}`}>
      <LoadingSkeleton variant="text" width="80%" />
      <LoadingSkeleton variant="text" width="60%" />
      <LoadingSkeleton variant="text" lines={2} />
      <div className="flex space-x-2">
        <LoadingSkeleton variant="button" width={80} height={24} />
        <LoadingSkeleton variant="button" width={60} height={24} />
      </div>
    </div>
  );
}

export function TimelineSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-8 ${className}`}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-start space-x-4">
          <LoadingSkeleton variant="circle" width={16} height={16} />
          <div className="flex-1 space-y-2">
            <LoadingSkeleton variant="text" width="30%" />
            <LoadingSkeleton variant="text" width="90%" />
            <LoadingSkeleton variant="text" width="70%" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResearchCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-gray-50 dark:bg-neutral-800 p-6 rounded-lg space-y-4 ${className}`}>
      <div className="flex items-start space-x-3">
        <LoadingSkeleton variant="text" width={40} height={40} />
        <LoadingSkeleton variant="text" width="70%" />
      </div>
      <LoadingSkeleton variant="text" lines={3} />
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <LoadingSkeleton key={index} variant="button" width={80} height={24} />
        ))}
      </div>
    </div>
  );
}