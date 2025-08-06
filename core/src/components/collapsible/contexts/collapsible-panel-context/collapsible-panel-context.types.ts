import type { ReadonlySignal } from '@builder.io/qwik';

export interface CollapsiblePanelContextValue {
  /**
   * A readonly signal whose value indicates the collapsible panel's current presence state.
   * This signal reflects the different phases of the panel's visibility, especially during animations.
   *
   * - `"showing"`: The panel is currently animating open.
   * - `"shown"`: The panel is fully open and not animating.
   * - `"hiding"`: The panel is currently animating closed.
   * - `"hidden"`: The panel is fully closed and not animating.
   * - `undefined`: Initial state or no animation is configured/running.
   */
  presence: ReadonlySignal<'showing' | 'shown' | 'hiding' | 'hidden' | undefined>;

  /**
   * A readonly signal indicating whether the `overflow: hidden` CSS property should be applied as an
   * inline style to the collapsible content. This is crucial for preventing unwanted scrollbars
   * and ensuring smooth `grid-template-rows` animations during the panel's collapse and expansion.
   * When `true`, content outside the visible area of the panel will be clipped.
   */
  isContentOverflowHidden: ReadonlySignal<boolean>;
}
