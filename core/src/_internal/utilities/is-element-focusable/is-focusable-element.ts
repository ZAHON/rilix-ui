import { isElementVisible } from '@/_internal';

const focusableSelector =
  "input:not([type='hidden']):not([disabled]), select:not([disabled]), " +
  'textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], ' +
  'iframe, object, embed, area[href], audio[controls], video[controls], ' +
  "[contenteditable]:not([contenteditable='false']), details > summary:first-of-type";

/**
 * Checks if a given HTML element is currently focusable by a user.
 *
 * An element is considered focusable if it matches a set of standard focusable selectors,
 * is not within an inert subtree (e.g., using the `inert` attribute), and is visually visible on the page.
 * This utility combines common criteria for determining interactive focusability,
 * making it suitable for accessibility checks or managing focus within UI components.
 */
export const isElementFocusable = (element: HTMLElement) => {
  if (element.closest('[inert]')) return false;
  return element.matches(focusableSelector) && isElementVisible(element);
};
