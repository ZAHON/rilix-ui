import type { FocusFirstParams } from './focus-first.types';
import { focus } from '../focus';

/**
 * Attempts to apply focus to the first focusable element within a provided list of candidates.
 * It iterates through the `candidates` array and tries to focus each element using the
 * `focus` utility function. The process stops and returns as soon as an element
 * successfully receives focus (i.e., `document.activeElement` changes).
 */
export const focusFirst = (params: FocusFirstParams) => {
  const { candidates, select } = params;

  const previouslyFocusedElement = document.activeElement;

  for (const candidate of candidates) {
    focus({ element: candidate, select });

    if (document.activeElement !== previouslyFocusedElement) return;
  }
};
