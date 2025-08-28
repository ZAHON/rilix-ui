import type { ReadonlySignal } from '@builder.io/qwik';

export interface DialogCloseContextValue {
  /**
   * A readonly signal that indicates whether the close button is disabled.
   * Its value is `true` if the button is disabled, preventing user interaction.
   */
  disabled: ReadonlySignal<boolean>;
}
