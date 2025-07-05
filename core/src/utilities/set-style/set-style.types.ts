export interface SetStyleParams {
  /**
   * The HTML element to which the styles will be applied.
   */
  element: HTMLElement;

  /**
   * An object containing the CSS properties and their values to be applied to the element.
   */
  style: Partial<CSSStyleDeclaration>;
}
