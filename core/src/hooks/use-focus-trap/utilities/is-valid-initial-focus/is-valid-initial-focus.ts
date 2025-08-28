import type { IsValidInitialFocusParams } from './is-valid-initial-focus.types';
import { isElementInDOM, isElementTabbable } from '@/_internal';

/**
 * Checks if a given HTML element is a valid candidate to receive focus when a focus trap is activated.
 * An element is considered valid if it is not null or undefined, is present in the DOM,
 * a descendant of the specified container, and tabbable by the user.
 */
export const isValidInitialFocus = (params: IsValidInitialFocusParams) => {
  const { element, container } = params;

  if (element && isElementInDOM(element) && container.contains(element) && isElementTabbable(element)) {
    return true;
  }

  return false;
};
