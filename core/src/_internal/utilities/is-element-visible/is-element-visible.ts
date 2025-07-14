/**
 * Checks if a given HTML element is considered visible on the page.
 *
 * An element is deemed visible if it meets the following criteria:
 * 1. Its computed style for `display` is not 'none'.
 * 2. Its computed style for `visibility` is not 'hidden'.
 * 3. It occupies actual space in the document layout, meaning either:
 * - Its `offsetWidth` is greater than 0, or
 * - Its `offsetHeight` is greater than 0, or
 * - It has at least one client rectangle (i.e., `getClientRects().length > 0`).
 */
export const isElementVisible = (element: HTMLElement) => {
  const style = window.getComputedStyle(element);

  if (style.display === 'none' || style.visibility === 'hidden') {
    return false;
  }

  return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
};
