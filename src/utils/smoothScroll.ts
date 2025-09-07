export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (!element) return;

  const offset = 80; // Navigation bar height
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

export const initSmoothScroll = () => {
  // Handle all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        smoothScrollTo(href);
        
        // Update URL without triggering scroll
        window.history.pushState(null, '', href);
        
        // Focus the target element for accessibility
        const target = document.querySelector(href);
        if (target) {
          (target as HTMLElement).setAttribute('tabindex', '-1');
          (target as HTMLElement).focus();
        }
      }
    });
  });
};

// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
};