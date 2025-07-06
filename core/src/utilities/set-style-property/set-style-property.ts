import type { SetStylePropertyParams } from './set-style-property.types';
import { isDev, isServer } from '@builder.io/qwik/build';

/**
 * This utility sets an inline CSS property on an HTML element and returns a function to revert it.
 */
export const setStyleProperty = (params: SetStylePropertyParams) => {
  const { element, property, value } = params;

  if (isDev && isServer) {
    throw Error(
      `Rilix UI: The 'setStyleProperty' utility function cannot be used on the server. This function is designed for client-side use only.`
    );
  }

  const originalPropertyValue = element.style.getPropertyValue(property);

  element.style.setProperty(property, value);

  return () => {
    element.style.setProperty(property, originalPropertyValue);

    if (element.style.length === 0) {
      element.removeAttribute('style');
    }
  };
};
