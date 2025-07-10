import type { SetStylePropertyParams } from './set-style-property.types';

/**
 * This utility sets an inline CSS property on an HTML element and returns a function to revert it.
 */
export const setStyleProperty = (params: SetStylePropertyParams) => {
  const { element, property, value } = params;

  const originalPropertyValue = element.style.getPropertyValue(property);

  element.style.setProperty(property, value);

  return () => {
    element.style.setProperty(property, originalPropertyValue);

    if (element.style.length === 0) {
      element.removeAttribute('style');
    }
  };
};
