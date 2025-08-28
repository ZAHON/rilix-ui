import { FindVisibleParams } from './find-visible.types';
import { isHidden } from '../is-hidden';

/**
 * Finds the first visible HTML element from a given list within a specified container.
 * An element is considered visible if it, or any of its ancestors up to (but not including)
 * the `container` element, does not have `display: none` or `visibility: hidden`.
 * The search stops and returns the first element found to be visible.
 */
export const findVisible = (params: FindVisibleParams) => {
  const { container, elements } = params;

  for (const element of elements) {
    // We stop checking if it's hidden at the `container` level (excluding).
    if (!isHidden({ element, upTo: container })) return element;
  }
};
