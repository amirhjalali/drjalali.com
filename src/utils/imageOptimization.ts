// Image optimization utilities

export const generateBlurDataURL = async (imagePath: string): Promise<string> => {
  // This would typically use a service or library to generate blur data URLs
  // For now, returning a default blur placeholder
  return 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=';
};

export const getImageDimensions = (aspectRatio: string): { width: number; height: number } => {
  const ratios: Record<string, { width: number; height: number }> = {
    '1:1': { width: 500, height: 500 },
    '16:9': { width: 1920, height: 1080 },
    '4:3': { width: 800, height: 600 },
    '3:2': { width: 900, height: 600 },
    '21:9': { width: 2560, height: 1080 },
  };
  
  return ratios[aspectRatio] || ratios['16:9'];
};

export const getResponsiveSizes = (maxWidth: number = 1200): string => {
  return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${maxWidth}px`;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => imageObserver.observe(img));
  }
};