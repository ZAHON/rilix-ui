export interface FindVisibleParams {
  /**
   * The container element within which to search for visible elements.
   * The visibility check will stop at this element, meaning `isHidden` will not check
   * the `container` itself or any of its ancestors for `display: none`.
   */
  container: HTMLElement;

  /**
   * An array of HTML elements to check for visibility.
   * The function will return the first element in this array that is determined to be visible
   * within the context of the `container`.
   */
  elements: HTMLElement[];
}
