import type { ReadonlySignal } from '@builder.io/qwik';
import type { UseUncontrolledParams } from './use-uncontrolled.types';
import { useSignal, $ } from '@builder.io/qwik';

/**
 * Manage state of both controlled and uncontrolled components.
 */
export const useUncontrolled = <T>(params: UseUncontrolledParams<T>) => {
  const { controlledSignal, uncontrolledValue, finalValue, onChange$ } = params;

  // If a controlled signal has been passed, we return it immediately.
  if (controlledSignal !== undefined) {
    const handleControlledChange$ = $((value: T) => {
      onChange$?.(value);
    });

    return {
      state: controlledSignal as ReadonlySignal<T>,
      setState$: handleControlledChange$,
      controlled: true,
    };
  }

  // If the controlled signal is not passed, we create our own signal and return it.
  const uncontrolledState = useSignal(uncontrolledValue !== undefined ? uncontrolledValue : finalValue);

  const handleUncontrolledChange$ = $((value: T) => {
    uncontrolledState.value = value;
    onChange$?.(value);
  });

  return {
    state: uncontrolledState as ReadonlySignal<T>,
    setState$: handleUncontrolledChange$,
    controlled: false,
  };
};
