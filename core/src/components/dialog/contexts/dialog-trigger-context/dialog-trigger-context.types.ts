import type { ReadonlySignal } from '@builder.io/qwik';

export interface DialogTriggerContextValue {
  /**
   * A readonly signal that indicates whether the trigger is disabled.
   * Its value is `true` if the trigger is disabled, preventing user interaction.
   */
  disabled: ReadonlySignal<boolean>;
}
