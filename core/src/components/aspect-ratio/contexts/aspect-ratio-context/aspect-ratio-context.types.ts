import type { ReadonlySignal } from '@builder.io/qwik';

export interface AspectRatioContextValue {
  /**
   * A readonly signal whose value represents the current aspect ratio (in %).
   */
  aspect: ReadonlySignal<number>;
}
