import type { ReadonlySignal, Signal } from '@builder.io/qwik';
import { isSignal } from '@builder.io/qwik';

/**
 * Unwraps a signal, returning its current value.
 * If the provided value is not a signal, it is returned as is.
 */
export const unwrapSignal = <T>(maybeSignal: T | Signal<T> | ReadonlySignal<T>): T => {
  return isSignal(maybeSignal) ? maybeSignal.value : maybeSignal;
};
