import { isElementFocusable } from '../is-element-focusable';

/**
 * Checks if a given HTML element is "tabbable" by a user, meaning it can be reached
 * using sequential keyboard navigation (e.g., by pressing the Tab key).
 */
export const isElementTabbable = (element: HTMLElement) => {
  if (element.tabIndex > 0) return true;
  return isElementFocusable(element) && !(parseInt(element.getAttribute('tabindex') || '0', 10) < 0);
};
