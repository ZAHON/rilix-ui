import type { Signal, QRL } from '@builder.io/qwik';

export interface UseUncontrolledParams<T> {
  /**
   * A fallback value that is used when neither `uncontrolledValue` nor `controlledSignal` are set.
   */
  finalValue: T;

  /**
   * Default value used when the state is uncontrolled.
   * Ignored if `controlledSignal` is provided.
   */
  uncontrolledValue?: T;

  /**
   * A reactive signal that fully controls the component's state.
   * Requires `onChange$` to propagate updates.
   */
  controlledSignal?: Signal<T>;

  /**
   * Callback triggered when the state changes.
   * Used to synchronize controlled state updates.
   */
  onChange$?: QRL<(value: T) => void>;
}
