import type { SetStyleParams } from './set-style.types';

/**
 * Applies a set of inline CSS styles to an HTML element and returns a function to revert them.
 * This utility allows for easy application and removal of temporary inline styles.
 */
export const setStyle = (params: SetStyleParams) => {
  const { element, style } = params;

  const originalStyles: Partial<CSSStyleDeclaration> = {};

  for (const key in style) {
    originalStyles[key] = element.style[key];
  }

  Object.assign(element.style, style);

  return () => {
    Object.assign(element.style, originalStyles);

    if (element.style.length === 0) {
      element.removeAttribute('style');
    }
  };
};
