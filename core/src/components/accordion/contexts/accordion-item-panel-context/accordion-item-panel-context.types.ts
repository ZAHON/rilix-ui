import type { ReadonlySignal } from '@builder.io/qwik';

export interface AccordionItemPanelContextValue {
  /**
   * A readonly signal indicating the accordion item panel's current logical state.
   * Unlike `presence`, which tracks the dynamic animation phases (e.g., `"showing"`, `"hiding"`),
   * this signal provides a simple, binary status: `"open"` or `"closed"`. It is useful for
   * styling or conditional rendering based on the overall, non-transient state of the panel.
   *
   * Possible values:
   * - `"open"`: The panel is fully expanded and visible.
   * - `"closed"`: The panel is fully collapsed and hidden.
   */
  state: ReadonlySignal<'open' | 'closed'>;

  /**
   * A readonly signal whose value indicates the accordion item panel's current presence state.
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
   * inline style to the accordion item content. This is crucial for preventing unwanted scrollbars
   * and ensuring smooth `grid-template-rows` animations during the panel's collapse and expansion.
   * When `true`, content outside the visible area of the panel will be clipped.
   */
  isContentOverflowHidden: ReadonlySignal<boolean>;
}
