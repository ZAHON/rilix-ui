export interface GetScrollDimensionsParams {
  /**
   * The HTML element for which to get the scroll dimensions.
   */
  element: HTMLElement;

  /**
   * The axis along which to measure the scroll dimensions.
   */
  axis: 'x' | 'y';
}
