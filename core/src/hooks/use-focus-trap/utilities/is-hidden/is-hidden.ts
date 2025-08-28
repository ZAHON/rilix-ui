import type { IsHiddenParams } from './is-hidden.types';

/**
 * Determines if a given HTML element or any of its ancestors in the DOM tree is hidden.
 * An element is considered hidden if its computed style has `visibility: hidden` or `display: none`.
 * The check can be optionally limited to a specific ancestor element.
 */
export const isHidden = (params: IsHiddenParams) => {
  let { element } = params;
  const { upTo } = params;

  if (getComputedStyle(element).visibility === 'hidden') return true;

  while (element) {
    // We traverse up the DOM tree from `element` towards its ancestors.
    // If `upTo` is provided, we will stop the traversal *before* checking `upTo` itself.
    // This means `upTo` is treated as a boundary: if `element` or any of its ancestors
    // up to (but not including) `upTo` has `display: none`, we return true.
    // If we reach `upTo` without finding `display: none`, it means the path to `upTo` is visible,
    // and we return false, as `upTo` itself is considered the "visible container" for the check.
    if (upTo !== undefined && element === upTo) return false;
    if (getComputedStyle(element).display === 'none') return true;

    element = element.parentElement as HTMLElement;
  }

  return false;
};
