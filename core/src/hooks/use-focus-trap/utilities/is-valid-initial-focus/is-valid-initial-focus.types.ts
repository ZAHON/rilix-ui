export interface IsValidInitialFocusParams {
  /**
   * The HTML element to check if it's a valid candidate for initial focus.
   * This element must not be null or undefined to be considered valid.
   */
  element: HTMLElement | undefined | null;

  /**
   * The container HTML element within which the `element` should reside.
   * The initial focus element must be a descendant of this container.
   */
  container: HTMLElement;
}
