export interface SetStylePropertyParams {
  /**
   * The HTML element on which the CSS property will be set.
   */
  element: HTMLElement;

  /**
   * The name of the CSS property to be set.
   * This should be a valid CSS property name, typically in kebab-case.
   */
  property: string;

  /**
   * The value to be assigned to the specified CSS property.
   * This value must be a valid CSS value for the given property, including units where necessary.
   */
  value: string;
}
