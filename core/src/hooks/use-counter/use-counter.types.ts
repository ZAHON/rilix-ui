import type { QRL } from '@builder.io/qwik';

export interface UseCounterParams {
  /**
   * The initial numeric value for the counter.
   * The counter's value will be clamped between `min` and `max` at initialization.
   * @default 0
   */
  initialValue?: number;

  /**
   * The amount by which the counter's value will be incremented or decremented.
   * @default 1
   */
  step?: number;

  /**
   * The minimum allowed value for the counter.
   * The counter's value will not go below this number.
   * @default -Infinity
   */
  min?: number;

  /**
   * The maximum allowed value for the counter.
   * The counter's value will not exceed this number.
   * @default Infinity
   */
  max?: number;

  /**
   * A callback function that triggers whenever the counter's value changes.
   * The current count is passed as an argument to this function.
   */
  onCountChange$?: QRL<(count: number) => void>;
}
