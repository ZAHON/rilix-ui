import type { ReadonlySignal } from '@builder.io/qwik';

export interface CollapsiblePanelContextValue {
  /**
   * A readonly signal whose value indicates the collapsible panel's current presence state.
   * This signal reflects the different phases of the panel's lifecycle, especially during
   * animations. It can be one of the following:
   *
   * - `"showing"`: The panel is currently animating to an open state.
   * - `"shown"`: The panel is fully open and visible.
   * - `"hiding"`: The panel is currently animating to a closed state.
   * - `"hidden"`: The panel is fully closed and not visible.
   */
  presence: ReadonlySignal<'showing' | 'shown' | 'hiding' | 'hidden'>;

  /**
   * A readonly signal indicating whether the `overflow: hidden` CSS property should be applied as an
   * inline style to the collapsible content. This is crucial for preventing unwanted scrollbars
   * and ensuring smooth `grid-template-rows` animations during the panel's collapse and expansion.
   * When `true`, content outside the visible area of the panel will be clipped.
   */
  isContentOverflowHidden: ReadonlySignal<boolean>;
}
