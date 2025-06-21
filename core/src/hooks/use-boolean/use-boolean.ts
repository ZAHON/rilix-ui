import type { ReadonlySignal } from '@builder.io/qwik';
import { useSignal, $ } from '@builder.io/qwik';

/**
 * Custom hook that handles boolean state with useful utility functions.
 */
export const useBoolean = (initialState = false) => {
  const state = useSignal(initialState);

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
