'use client';

import { ReactNode } from 'react';

interface GridLayoutProps {
  children: ReactNode;
  variant?: 'masonry' | 'auto-fit' | 'auto-fill' | 'featured' | 'sidebar' | 'dashboard';
  minItemWidth?: string;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function GridLayout({
  children,
  variant = 'auto-fit',
  minItemWidth = '300px',
  gap = 'md',
  className = ''
}: GridLayoutProps) {
  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const getGridStyles = () => {
    switch (variant) {
      case 'masonry':
        return {
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
          gridAutoRows: 'min-content',
          alignItems: 'start'
        };

      case 'auto-fit':
        return {
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
        };

      case 'auto-fill':
        return {
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${minItemWidth}, 1fr))`
        };

      case 'featured':
        return {
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(4, minmax(200px, auto))',
          gridTemplateAreas: `
            "featured featured featured featured featured featured sidebar sidebar sidebar sidebar sidebar sidebar"
            "featured featured featured featured featured featured item1 item1 item1 item2 item2 item2"
            "item3 item3 item4 item4 item5 item5 item6 item6 item7 item7 item8 item8"
            "item9 item9 item9 item10 item10 item10 item11 item11 item11 item12 item12 item12"
          `
        };

      case 'sidebar':
        return {
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto auto'
          }
        };

      case 'dashboard':
        return {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gridAutoRows: 'minmax(200px, auto)'
        };

      default:
        return {
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
        };
    }
  };

  return (
    <div
      className={`${gapStyles[gap]} ${className}`}
      style={getGridStyles()}
    >
      {children}
    </div>
  );
}

// Specialized grid item components
interface GridItemProps {
  children: ReactNode;
  area?: string;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

export function GridItem({ 
  children, 
  area, 
  colSpan, 
  rowSpan, 
  className = '' 
}: GridItemProps) {
  const gridStyles: React.CSSProperties = {};
  
  if (area) gridStyles.gridArea = area;
  if (colSpan) gridStyles.gridColumn = `span ${colSpan}`;
  if (rowSpan) gridStyles.gridRow = `span ${rowSpan}`;

  return (
    <div className={className} style={gridStyles}>
      {children}
    </div>
  );
}

// Featured layout with predefined areas
export function FeaturedGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div 
      className={`grid gap-6 ${className}`}
      style={{
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(auto-fit, minmax(200px, auto))',
        gridTemplateAreas: `
          "featured featured featured featured featured featured featured featured sidebar sidebar sidebar sidebar"
          "item1 item1 item1 item2 item2 item2 item3 item3 item3 item4 item4 item4"
          "item5 item5 item6 item6 item7 item7 item8 item8 item9 item9 item10 item10"
        `
      }}
    >
      {children}
    </div>
  );
}

// Responsive masonry layout
export function MasonryGrid({ 
  children, 
  columns = 3, 
  gap = 'md',
  className = '' 
}: { 
  children: ReactNode; 
  columns?: number;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  return (
    <div 
      className={`${gapStyles[gap]} ${className}`}
      style={{
        columnCount: columns,
        columnGap: gap === 'sm' ? '1rem' : gap === 'md' ? '1.5rem' : gap === 'lg' ? '2rem' : '3rem'
      }}
    >
      {children}
    </div>
  );
}

// Auto-sizing card grid
export function CardGrid({ 
  children, 
  minWidth = '280px',
  maxWidth = '400px',
  gap = 'md',
  className = '' 
}: { 
  children: ReactNode; 
  minWidth?: string;
  maxWidth?: string;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  return (
    <div 
      className={`grid ${gapStyles[gap]} ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, ${maxWidth}))`
      }}
    >
      {children}
    </div>
  );
}