export interface IsScrollContainerParams {
  /**
   * The DOM element to analyze for scroll capabilities.
   */
  element: HTMLElement;

  /**
   * The axis along which to check for scrollability.
   * Use 'x' for horizontal scrollability (overflow-x)
   * or 'y' for vertical scrollability (overflow-y).
   */
  axis: 'x' | 'y';
}
