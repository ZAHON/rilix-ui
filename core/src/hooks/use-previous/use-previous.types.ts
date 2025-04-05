import type { Signal } from '@builder.io/qwik';

export interface UsePreviousParams<T> {
  /**
   * The signal whose previous value should be tracked.
   */
  value: Signal<T>;
}
