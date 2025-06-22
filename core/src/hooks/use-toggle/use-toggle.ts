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
     * A `ReadonlySignal` containing the current active value from the `options` array.
     * This signal is read-only, meaning its value can only be changed by calling `toggle$` or `set$`.
     */
    value: value as ReadonlySignal<typeof value.value>,

    /**
     * A function that, when called, advances the `value` to the next item in the `options` array.
     * If the current value is the last one in the array, it cycles back to the first item.
     */
    toggle$,

    /**
     * A function that takes a `newValue` as an argument.
     * It sets the `value` directly to this `newValue`, but only if `newValue` is present in the `options` array provided to the hook.
     * If `newValue` is not one of the valid options, the `value` remains unchanged.
     */
    set$,
  };
};
