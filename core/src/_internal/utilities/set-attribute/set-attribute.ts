import type { SetAttributeParams } from './set-attribute.types';

/**
 * Sets an attribute on an HTML element and returns a function to revert the change.
 * This utility allows for easy application and restoration of element attributes.
 */
export const setAttribute = (params: SetAttributeParams) => {
  const { element, attribute, value } = params;

  const originalAttributeValue = element.getAttribute(attribute);

  element.setAttribute(attribute, value);

  return () => {
    if (!originalAttributeValue) {
      element.removeAttribute(attribute);
    } else {
      element.setAttribute(attribute, originalAttributeValue);
    }
  };
};
