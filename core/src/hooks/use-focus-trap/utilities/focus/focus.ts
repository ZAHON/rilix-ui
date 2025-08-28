import type { FocusParams } from './focus.types';

/**
 * Applies focus to a specified HTML element or an object implementing a `focus` method.
 * It intelligently handles focusable elements and provides an option to select text in input fields.
 * The function prevents page scrolling during focus to ensure a smooth user experience.
 */
export const focus = (params: FocusParams) => {
  const { element, select } = params;

  // Ensure the element exists and is focusable before attempting to focus it.
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;

    // Focus the element, preventing the page from scrolling.
    // This minimizes jarring transitions for users by keeping the current scroll position.
    element.focus({ preventScroll: true });

    // If the element is an input field and selection is explicitly requested,
    // select its content only if it wasn't the previously focused element.
    // This avoids redundant operations and enhances the user experience.
    if (element !== previouslyFocusedElement && element instanceof HTMLInputElement && 'select' in element && select) {
      element.select();
    }
  }
};
