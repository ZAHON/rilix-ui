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

  /**
   * A readonly signal indicating whether the `hidden="until-found"` attribute is applied to the collapsible panel.
   * When `true`, the collapsible panel remains hidden from view and rendering until a find-in-page operation
   * or scroll action reveals it. This helps improve initial page load performance by deferring rendering
   * of offscreen content.
   */
  hiddenUntilFound: ReadonlySignal<boolean>;
}
