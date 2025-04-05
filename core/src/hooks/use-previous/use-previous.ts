import type { UsePreviousParams } from './use-previous.types';
import type { ReadonlySignal } from '@builder.io/qwik';
import { useSignal, useTask$ } from '@builder.io/qwik';
import { isDev, isSignal } from '@builder.io/qwik';

/**
 * Tracks and returns the previous value of a given signal.
 */
export const usePrevious = <T>(params: UsePreviousParams<T>) => {
  const { value } = params;

  const currentValue = useSignal<T>(value.value);
  const previousValue = useSignal<T | undefined>(undefined);

  if (isDev && !isSignal(value)) {
    throw new Error('Rilix UI: usePrevious hook value param must be object of type Signal.');
  }

  useTask$(({ track }) => {
    track(() => value.value);

    if (currentValue.value !== value.value) {
      previousValue.value = currentValue.value;
      currentValue.value = value.value;
    }
  });

  return {
    /**
     * A readonly signal containing the previous value of the provided signal.
     * Initially, this signal has a value of `undefined` until the first change is detected.
     */
    previousValue: previousValue as ReadonlySignal<typeof previousValue.value>,
  };
};
