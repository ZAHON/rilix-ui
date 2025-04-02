import type { Signal, QRL } from '@builder.io/qwik';

export interface UseUncontrolledParams<T> {
  /**
   * Default value used when the state is uncontrolled.
   * Ignored if `controlledSignal` is provided.
   */
  uncontrolledValue: T | undefined;

  /**
   * A reactive signal that fully controls the component's state.
   * Requires `onChange$` to propagate updates.
   */
  controlledSignal: Signal<T> | undefined;

  /**
   * A fallback value that is used when neither `uncontrolledValue` nor `controlledSignal` are set.
   */
  finalValue: T;

  /**
   * Callback triggered when the state changes.
   * Used to synchronize controlled state updates.
   */
  onChange$: QRL<(value: T) => void> | undefined;
}
