// Focus management utilities for improved accessibility

/**
 * Traps focus within a specified element
 */
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  const handleKeyDown = (e: KeyboardEvent) => {
    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement?.focus();
        e.preventDefault();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement?.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);

  // Focus first element
  firstFocusableElement?.focus();

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Restores focus to a previously focused element
 */
export function restoreFocus(previouslyFocusedElement: HTMLElement | null) {
  if (previouslyFocusedElement && document.body.contains(previouslyFocusedElement)) {
    previouslyFocusedElement.focus();
  }
}

/**
 * Manages focus for modal-like components
 */
export function useFocusManager(isOpen: boolean, modalRef: React.RefObject<HTMLElement>) {
  const previouslyFocusedElement = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (isOpen && modalRef.current) {
      // Store currently focused element
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      // Trap focus
      const cleanup = trapFocus(modalRef.current);

      return () => {
        cleanup();
        // Restore focus when closing
        restoreFocus(previouslyFocusedElement.current);
      };
    }
  }, [isOpen, modalRef]);
}

/**
 * Skip link functionality for keyboard navigation
 */
export function handleSkipLink(targetId: string) {
  const target = document.getElementById(targetId);
  if (target) {
    target.focus();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

import React from 'react';
export { React };