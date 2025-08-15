import type { ReadonlySignal } from '@builder.io/qwik';

export interface AspectRatioContextValue {
  /**
   * The current aspect ratio (in %).
   */
  aspect: ReadonlySignal<number>;
}
