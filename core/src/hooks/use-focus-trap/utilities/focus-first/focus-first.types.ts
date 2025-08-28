export interface FocusFirstParams {
  /**
   * An array of HTML elements that are candidates for receiving focus. The function will attempt
   * to focus them in the order they appear in this array until one successfully gains focus.
   */
  candidates: HTMLElement[];

  /**
   * If `true`, and the successfully focused `HTMLElement` is an `HTMLInputElement`,
   * its content will be selected after focusing. This behavior is delegated to the
   * internal `focus` utility function.
   */
  select?: boolean;
}
