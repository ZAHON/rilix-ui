import { getTabbableCandidates } from '../get-tabbable-candidates';
import { findVisible } from '../find-visible';

/**
 * Retrieves the first and last keyboard-tabbable and visible elements within a specified HTML element.
 *
 * This function first identifies all potential tabbable elements using `getTabbableCandidates`.
 * Then, it determines the first visible element among these candidates (in document order)
 * and the last visible element (by reversing the list of candidates and finding the first visible one).
 * The visibility check is performed using the `findVisible` utility, ensuring that
 * elements with `display: none` or `visibility: hidden` (or their ancestors) are excluded.
 */
export const getTabbableEdges = (element: HTMLElement) => {
  const candidates = getTabbableCandidates(element);
  const first = findVisible({ container: element, elements: candidates });
  const last = findVisible({ container: element, elements: candidates.reverse() });

  return [first, last] as const;
};
