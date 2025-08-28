export interface IsHiddenParams {
  /**
   * The HTML element to check for visibility.
   * The function will traverse up its parent chain to determine if it or any of its ancestors are hidden.
   */
  element: HTMLElement;

  /**
   * An optional ancestor element up to which the visibility check should be performed.
   * The function will stop checking at this element (excluding it). If `display: none` is found
   * on `element` or any ancestor *before* reaching `upTo`, the function returns `true`.
   * If `upTo` is reached without finding any hidden ancestors, it means the path to `upTo` is visible,
   * and the function returns `false`.
   */
  upTo?: HTMLElement;
}
