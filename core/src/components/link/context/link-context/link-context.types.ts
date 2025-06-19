import type { ReadonlySignal } from '@builder.io/qwik';

export interface LinkContextValue {
  /**
   * Whether the link is disabled.
   */
  disabled?: ReadonlySignal<boolean | undefined>;
}
