import type { ReadonlySignal, QRL } from '@builder.io/qwik';

export interface AccordionContextValue {
  /**
   * A readonly signal whose value is an array of strings representing the currently expanded accordion item or items values.
   * This signal reflects the internal state of which accordion items are open.
   */
  value: ReadonlySignal<string[]>;

  /**
   * A `QRL` function used to programmatically set the open state of the accordion items.
   * This function takes an array of strings, where each string represents the value of the accordion items to be opened.
   */
  setValue$: QRL<(value: string[]) => void>;

  /**
   * A readonly signal whose value indicates whether the accordion allows a single accordion item or multiple accordion items to be open at once.
   */
  type: ReadonlySignal<'single' | 'multiple'>;

  /**
   * A readonly signal whose value indicates whether the `collapsible` prop passed to the `Accordion.Root` component has been set to `true`.
   * This is relevant only when `type` is `"single"`, as it determines if the open accordion item can be closed by clicking its trigger again.
   */
  collapsible: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value indicates whether keyboard arrow navigation is enabled for the accordion item triggers.
   */
  arrowNavigation: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value indicates whether keyboard navigation (using arrow keys) should loop back
   * to the first accordion item trigger after reaching the last one.
   * This is only applicable when the `arrowNavigation` readonly signal's value is `true`.
   */
  loop: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value indicates whether the entire accordion is disabled.
   * When `true`, all interaction with the accordion and its items is prevented.
   */
  disabled: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value indicates the reading direction of the accordion.
   * This can be `"ltr"` (left-to-right) or `"rtl"` (right-to-left), affecting keyboard navigation and layout.
   */
  dir: ReadonlySignal<'ltr' | 'rtl'>;

  /**
   * A readonly signal whose value indicates the orientation of the accordion.
   * This determines whether the accordion items are arranged `"vertical"` (stacked) or `"horizontal"` (side-by-side).
   */
  orientation: ReadonlySignal<'horizontal' | 'vertical'>;

  /**
   * A `QRL` callback invoked when an accordion item should be opened.
   */
  onItemOpen$: QRL<(itemValue: string) => void>;

  /**
   * A `QRL` callback invoked when an accordion item should be closed.
   */
  onItemClose$: QRL<(itemValue: string) => void>;
}
