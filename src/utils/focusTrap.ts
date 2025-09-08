export const focusTrap = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    const isTabPressed = e.key === 'Tab';
    
    if (!isTabPressed) return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable?.focus();
        e.preventDefault();
      }
    }
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      element.dispatchEvent(new CustomEvent('closeFocusTrap'));
    }
  };

  element.addEventListener('keydown', handleTabKey);
  element.addEventListener('keydown', handleEscapeKey);
  
  firstFocusable?.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
    element.removeEventListener('keydown', handleEscapeKey);
  };
};