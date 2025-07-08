import type { IsScrollContainerParams } from './is-scroll-container.types';

/**
 * Checks if a given HTML element acts as a scroll container along a specified axis.
 */
export const isScrollContainer = (params: IsScrollContainerParams) => {
  const { element, axis } = params;

  const styles = getComputedStyle(element);
  const overflow = axis === 'x' ? styles.overflowX : styles.overflowY;

  return overflow === 'auto' || overflow === 'scroll' || (element.tagName === 'HTML' && overflow === 'visible');
};
