// Performance monitoring utilities

interface PerformanceMetrics {
  FCP: number | null;  // First Contentful Paint
  LCP: number | null;  // Largest Contentful Paint
  FID: number | null;  // First Input Delay
  CLS: number | null;  // Cumulative Layout Shift
  TTFB: number | null; // Time to First Byte
  TTI: number | null;  // Time to Interactive
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    FCP: null,
    LCP: null,
    FID: null,
    CLS: null,
    TTFB: null,
    TTI: null,
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  private initializeObservers() {
    // Observe FCP and LCP
    this.observePaintMetrics();
    
    // Observe FID
    this.observeFirstInputDelay();
    
    // Observe CLS
    this.observeLayoutShift();
    
    // Measure TTFB
    this.measureTTFB();
    
    // Measure TTI
    this.measureTTI();
  }

  private observePaintMetrics() {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.FCP = Math.round(entry.startTime);
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            this.metrics.LCP = Math.round(entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    } catch (e) {
      console.warn('Paint metrics observation not supported');
    }
  }

  private observeFirstInputDelay() {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            this.metrics.FID = Math.round((entry as any).processingStart - entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observation not supported');
    }
  }

  private observeLayoutShift() {
    let clsScore = 0;
    let sessionEntries: any[] = [];
    let sessionValue = 0;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            const firstSessionEntry = sessionEntries[0];
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

            if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
              sessionValue += (entry as any).value;
              sessionEntries.push(entry);
            } else {
              sessionValue = (entry as any).value;
              sessionEntries = [entry];
            }

            if (sessionValue > clsScore) {
              clsScore = sessionValue;
              this.metrics.CLS = Math.round(clsScore * 1000) / 1000;
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observation not supported');
    }
  }

  private measureTTFB() {
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        this.metrics.TTFB = Math.round(navigationEntry.responseStart - navigationEntry.fetchStart);
      }
    } catch (e) {
      console.warn('TTFB measurement not supported');
    }
  }

  private measureTTI() {
    if ('PerformanceObserver' in window) {
      // Simplified TTI measurement
      setTimeout(() => {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          this.metrics.TTI = Math.round(navigationEntry.loadEventEnd - navigationEntry.fetchStart);
        }
      }, 5000);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public logMetrics() {
    console.group('📊 Performance Metrics');
    console.log('FCP:', this.metrics.FCP ? `${this.metrics.FCP}ms` : 'Not measured');
    console.log('LCP:', this.metrics.LCP ? `${this.metrics.LCP}ms` : 'Not measured');
    console.log('FID:', this.metrics.FID ? `${this.metrics.FID}ms` : 'Not measured');
    console.log('CLS:', this.metrics.CLS !== null ? this.metrics.CLS : 'Not measured');
    console.log('TTFB:', this.metrics.TTFB ? `${this.metrics.TTFB}ms` : 'Not measured');
    console.log('TTI:', this.metrics.TTI ? `${this.metrics.TTI}ms` : 'Not measured');
    console.groupEnd();
  }

  public sendToAnalytics(endpoint?: string) {
    const metrics = this.getMetrics();
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== null) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: key,
            value: Math.round(value),
            non_interaction: true,
          });
        }
      });
    }

    // Send to custom endpoint if provided
    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          metrics,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(console.error);
    }
  }
}

// Export singleton instance
export const performanceMonitor = typeof window !== 'undefined' ? new PerformanceMonitor() : null;