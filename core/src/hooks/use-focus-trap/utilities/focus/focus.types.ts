export interface FocusParams {
  /**
   * The HTML element or an object with a `focus` method to which focus should be applied.
   * This allows focusing both standard DOM elements and objects that implement a `focus` method.
   */
  element: (HTMLElement | { focus: () => void }) | null | undefined;

  /**
   * If `true`, and the `element` is an `HTMLInputElement`, its content will be selected after focusing.
   * This is useful for input fields where the user might immediately want to type over existing text.
   */
  select?: boolean;
}
