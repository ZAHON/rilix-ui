import type { ReadonlySignal } from '@builder.io/qwik';

export interface LinkContextValue {
  /**
   * A readonly signal whose value indicates whether the link is disabled.
   */
  disabled: ReadonlySignal<boolean | undefined>;
}
