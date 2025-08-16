import type { ReadonlySignal } from '@builder.io/qwik';
import { useSignal, $ } from '@builder.io/qwik';

/**
 * An intuitive hook to manage cyclical state transitions, allowing you to define and switch between any sequence of values with ease.
 */
export const useToggle = <T>(options: readonly T[] = [false, true] as any) => {
  const value = useSignal<T>(options[0]);

  const toggle$ = $(() => {
    const currentIndex = options.indexOf(value.value);
    const nextIndex = (currentIndex + 1) % options.length;

    value.value = options[nextIndex];
  });

  const set$ = $((newValue: T) => {
    if (options.includes(newValue)) {
      value.value = newValue;
    }
  });

  return {
    /**
     * A readonly signal whose value represents the currently active option from the provided array.
     * This signal is read-only, which means its value can only be changed by calling the `toggle$` or `set$` functions, ensuring predictable state transitions.
     */
    value: value as ReadonlySignal<typeof value.value>,

    /**
     * A `QRL` function that advances the value to the next option in the sequence.
     * Once the end of the `options` array is reached, it automatically cycles back to the first item, creating a loop.
     */
    toggle$,

    /**
     * A `QRL` function that directly sets the `value` to a new option.
     * This function includes a built-in validation check, and the value will only be updated if the `newValue` argument is present in the original `options` array provided to the hook.
     */
    set$,
  };
};
