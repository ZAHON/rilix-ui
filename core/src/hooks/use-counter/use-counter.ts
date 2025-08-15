import type { UseCounterParams } from './use-counter.types';
import type { ReadonlySignal } from '@builder.io/qwik';
import { useSignal, $ } from '@builder.io/qwik';
import { isDev } from '@builder.io/qwik/build';
import { error, clamp } from '@/_internal';

/**
 * A hook for managing a numeric counter with customizable minimum and maximum bounds.
 */
export const useCounter = (params: UseCounterParams = {}) => {
  const { initialValue = 0, step = 1, min = -Infinity, max = Infinity } = params;

  if (isDev && min > max) {
    error(
      `For the 'useCounter' hook, the 'min' parameter (${min}) cannot be greater than the 'max' parameter (${max}).`
    );
  }

  const count = useSignal(clamp({ value: initialValue, min, max }));

  const increment$ = $(() => {
    count.value = clamp({ value: count.value + step, min, max });
  });

  const decrement$ = $(() => {
    count.value = clamp({ value: count.value - step, min, max });
  });

  const set$ = $((value: number) => {
    count.value = clamp({ value, min, max });
  });

  const reset$ = $(() => {
    count.value = clamp({ value: initialValue, min, max });
  });

  return {
    /**
     * A readonly signal whose value indicates the current state of the counter.
     * Its value is always clamped between `min` and `max`.
     */
    count: count as ReadonlySignal<typeof count.value>,

    /**
     * A `QRL` function to increment the counter's value by the specified `step`.
     */
    increment$,

    /**
     * A `QRL` function to decrement the counter's value by the specified `step`.
     */
    decrement$,

    /**
     * A `QRL` function to set the counter to a specific `value`.
     * The provided `value` will be clamped between `min` and `max`.
     */
    set$,

    /**
     * A `QRL` function to reset the counter to its `initialValue`.
     * The `initialValue` itself is clamped between `min` and `max`.
     */
    reset$: reset$,
  };
};
