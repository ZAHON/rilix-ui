import type { UsePreviousParams } from './use-previous.types';
import type { ReadonlySignal } from '@builder.io/qwik';
import { useSignal, useTask$ } from '@builder.io/qwik';

/**
 * Tracks and returns the previous value of a given signal.
 */
export const usePrevious = <T>(params: UsePreviousParams<T>) => {
  const { value } = params;

  const currentValue = useSignal<T>(value.value);
  const previousValue = useSignal<T | undefined>(undefined);

  useTask$(({ track }) => {
    track(() => value.value);

    if (currentValue.value !== value.value) {
      previousValue.value = currentValue.value;
      currentValue.value = value.value;
    }
  });

  return previousValue as ReadonlySignal<typeof previousValue.value>;
};
