import type { SetStyleParams } from './set-style.types';
import { isDev, isServer } from '@builder.io/qwik/build';

/**
 * Applies a set of inline CSS styles to an HTML element and returns a function to revert them.
 * This utility allows for easy application and removal of temporary inline styles.
 */
export const setStyle = (params: SetStyleParams) => {
  const { element, style } = params;

  if (isDev && isServer) {
    throw Error(
      `Rilix UI: The 'setStyle' utility function cannot be used on the server. This function is designed for client-side use only.`
    );
  }

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
