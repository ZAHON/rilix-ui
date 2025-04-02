import type { ReadonlySignal } from '@builder.io/qwik';
import type { UseUncontrolledParams } from './use-uncontrolled.types';
import { useSignal, $ } from '@builder.io/qwik';
import { isDev, isSignal } from '@builder.io/qwik';

/**
 * A hook for managing both controlled and uncontrolled state in a component.
 */
export const useUncontrolled = <T>(params: UseUncontrolledParams<T>) => {
  const { controlledSignal, uncontrolledValue, finalValue, onChange$ } = params;

  if (isDev && !isSignal(controlledSignal)) {
    throw new Error('Rilix UI: useUncontrolled hook controlledSignal prop must be object of type Signal.');
  }

  // If a controlled signal has been passed, we return it immediately.
  if (controlledSignal !== undefined) {
    const handleControlledChange$ = $((value: T) => {
      onChange$?.(value);
    });

    return {
      /**
       * A readonly signal representing the current state.
       * If `controlledSignal` is provided, it reflects the controlled state;
       * otherwise, it holds the internal unmanaged state.
       */
      state: controlledSignal as ReadonlySignal<T>,

      /**
       * Function to update the state.
       * Calls `onChange$` when the state is controlled, or updates the internal state otherwise.
       */
      setState$: handleControlledChange$,

      /**
       * Indicates whether the state is controlled or uncontrolled.
       */
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
    /**
     * A readonly signal representing the current state.
     * If `controlledSignal` is provided, it reflects the controlled state;
     * otherwise, it holds the internal unmanaged state.
     */
    state: uncontrolledState as ReadonlySignal<T>,

    /**
     * Function to update the state.
     * Calls `onChange$` when the state is controlled, or updates the internal state otherwise.
     */
    setState$: handleUncontrolledChange$,

    /**
     * Indicates whether the state is controlled or uncontrolled.
     */
    controlled: false,
  };
};
