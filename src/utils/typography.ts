// Typography utilities and system

export interface TypographyConfig {
  scale: 'minor-second' | 'major-second' | 'minor-third' | 'major-third' | 'perfect-fourth' | 'augmented-fourth' | 'perfect-fifth' | 'golden-ratio';
  baseFontSize: number;
  baseLineHeight: number;
  rhythm: number;
}

const typeScales = {
  'minor-second': 1.067,
  'major-second': 1.125,
  'minor-third': 1.2,
  'major-third': 1.25,
  'perfect-fourth': 1.333,
  'augmented-fourth': 1.414,
  'perfect-fifth': 1.5,
  'golden-ratio': 1.618,
};

export class TypographySystem {
  private config: TypographyConfig;

  constructor(config: Partial<TypographyConfig> = {}) {
    this.config = {
      scale: 'major-third',
      baseFontSize: 16,
      baseLineHeight: 1.5,
      rhythm: 24,
      ...config,
    };
  }

  private getScale(): number {
    return typeScales[this.config.scale];
  }

  public getFontSize(step: number): number {
    const scale = this.getScale();
    return Math.round(this.config.baseFontSize * Math.pow(scale, step) * 100) / 100;
  }

  public getLineHeight(fontSize: number): number {
    // Calculate optimal line height based on font size
    const ratio = fontSize / this.config.baseFontSize;
    
    if (ratio > 1.5) {
      return 1.2; // Tighter line height for large text
    } else if (ratio < 0.8) {
      return 1.6; // Looser line height for small text
    }
    
    return this.config.baseLineHeight;
  }

  public getSpacing(multiplier: number = 1): number {
    return this.config.rhythm * multiplier;
  }

  public generateCSSVariables(): Record<string, string> {
    const variables: Record<string, string> = {};
    
    // Font sizes from -2 to 6
    for (let i = -2; i <= 6; i++) {
      const fontSize = this.getFontSize(i);
      const lineHeight = this.getLineHeight(fontSize);
      
      variables[`--font-size-${i < 0 ? 'sm' : ''}${Math.abs(i)}`] = `${fontSize}px`;
      variables[`--line-height-${i < 0 ? 'sm' : ''}${Math.abs(i)}`] = `${lineHeight}`;
    }
    
    // Spacing values
    for (let i = 0; i <= 8; i++) {
      variables[`--spacing-${i}`] = `${this.getSpacing(i / 4)}px`;
    }
    
    return variables;
  }

  public generateTailwindConfig() {
    const fontSize: Record<string, [string, { lineHeight: string }]> = {};
    
    // Generate Tailwind font size configuration
    for (let i = -2; i <= 6; i++) {
      const size = this.getFontSize(i);
      const lineHeight = this.getLineHeight(size);
      const key = i < 0 ? `xs${Math.abs(i)}` : i === 0 ? 'base' : `xl${i}`;
      
      fontSize[key] = [`${size}px`, { lineHeight: `${lineHeight}` }];
    }
    
    return {
      fontSize,
      spacing: Object.fromEntries(
        Array.from({ length: 17 }, (_, i) => [i / 4, `${this.getSpacing(i / 4)}px`])
      ),
    };
  }
}

// Reading optimization utilities
export const getOptimalReadingWidth = (fontSize: number): number => {
  // Optimal reading width is 45-75 characters
  const avgCharWidth = fontSize * 0.5; // Approximate character width
  return Math.round(65 * avgCharWidth); // 65 characters for optimal reading
};

export const getContrastRatio = (foreground: string, background: string): number => {
  // Simplified contrast ratio calculation
  // In a real implementation, you'd parse the colors and calculate luminance
  return 4.5; // Placeholder - WCAG AA minimum
};

// Font loading optimization
export const preloadFonts = (fonts: string[]) => {
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Typography utilities for responsive design
export const getFluidFontSize = (
  minSize: number,
  maxSize: number,
  minViewport: number = 320,
  maxViewport: number = 1200
): string => {
  const slope = (maxSize - minSize) / (maxViewport - minViewport);
  const yAxisIntersection = -minViewport * slope + minSize;
  
  return `clamp(${minSize}px, ${yAxisIntersection}px + ${slope * 100}vw, ${maxSize}px)`;
};

// Export default typography system
export const defaultTypography = new TypographySystem();