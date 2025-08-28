import { isElementInDOM, isElementTabbable } from '@/_internal';

/**
 * Checks if a given HTML element is a valid candidate to receive focus upon the deactivation of a focus trap.
 * An element is considered valid if it exists in the DOM, is not null or undefined, and is tabbable.
 */
export const isValidFinalFocus = (element: HTMLElement | undefined | null) => {
  if (element && isElementInDOM(element) && isElementTabbable(element)) {
    return true;
  }

  return false;
};
