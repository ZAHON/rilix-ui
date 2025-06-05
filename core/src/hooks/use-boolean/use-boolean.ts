import type { UseBooleanParams } from './use-boolean.types';
import type { ReadonlySignal } from '@builder.io/qwik';
import { useSignal, useTask$, $ } from '@builder.io/qwik';

/**
 * Custom hook that handles boolean state with useful utility functions.
 */
export const useBoolean = (params: UseBooleanParams = {}) => {
  const { initialState = false, onStateChange$ } = params;

  const state = useSignal(initialState);

  useTask$(({ track }) => {
    track(() => state.value);

    if (onStateChange$) {
      onStateChange$(state.value);
    }
  });

  const setTrue$ = $(() => {
    if (!state.value) state.value = true;
  });

  const setFalse$ = $(() => {
    if (state.value) state.value = false;
  });

  const toggle$ = $(() => (state.value = !state.value));

  return {
    /**
     * A readonly signal containing the current boolean value.
     */
    state: state as ReadonlySignal<typeof state.value>,

    /**
     * Function to set the boolean state to `true`.
     */
    setTrue$: setTrue$,

    /**
     * Function to set the boolean state to `false`.
     */
    setFalse$: setFalse$,

    /**
     * Function to toggle the boolean `state`.
     */
    toggle$: toggle$,
  };
};
