export interface SetAttributeParams {
  /**
   * The HTML element on which to set the attribute.
   */
  element: HTMLElement;

  /**
   * The name of the attribute to set (e.g., `class`, `data-id`).
   */
  attribute: string;

  /**
   * The new value for the attribute.
   */
  value: string;
}
