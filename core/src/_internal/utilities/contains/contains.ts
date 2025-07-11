import type { ContainsParams } from './contains.types';

/**
 * Checks if an HTML element is a descendant of, or the same as, another HTML element.
 */
export const contains = (params: ContainsParams) => {
  const { container, element } = params;

  if (container.contains(element)) {
    return true;
  }

  let currentElement: HTMLElement | null = element;

  while (currentElement) {
    if (currentElement === container) {
      return true;
    }

    currentElement = currentElement.parentElement;
  }
  return false;
};
