import type { Signal, QRL } from '@builder.io/qwik';

export interface UseUncontrolledParams<T> {
  /**
   * Initial value for uncontrolled state.
   * Use when you do not need to control the state.
   */
  uncontrolledValue: T | undefined;

  /**
   * The controlled signal.
   * Must be used in conjunction with `onChange$.
   */
  controlledSignal: Signal<T> | undefined;

  /**
   * Final value for state when `uncontrolledValue` and `controlledSignal` are not provided.
   */
  finalValue: T;

  /**
   * Controlled state handler.
   */
  onChange$: QRL<(value: T) => void> | undefined;
}
