/**
 * Checks if a given HTML element is currently present in the document (DOM).
 */
export const isElementInDOM = (element: HTMLElement) => {
  return document.body.contains(element);
};
