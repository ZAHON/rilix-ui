import type { BodyScrollLockState } from './create-body-scroll-lock-state.types';

/**
 * Creates and manages a shared, private state for body scroll locking.
 * This state includes a counter to track the number of components that have requested a scroll lock
 * and a cleanup function to restore the body's original scroll behavior.
 */
export const createBodyScrollLockState = () => {
  const state: BodyScrollLockState = {
    count: 0,
    cleanup: undefined,
  };

  const getCount = () => {
    return state.count;
  };

  const incrementCount = () => {
    state.count += 1;
  };

  const decrementCount = () => {
    if (state.count > 0) {
      state.count -= 1;
    }
  };

  const resetCount = () => {
    state.count = 0;
  };

  const getCleanup = () => {
    return state.cleanup;
  };

  const setCleanup = (cleanup: () => void) => {
    state.cleanup = cleanup;
  };

  const resetCleanup = () => {
    state.cleanup = undefined;
  };

  return {
    /**
     * Returns the current number of active scroll locks.
     */
    getCount: getCount,

    /**
     * Increments the scroll lock counter by `1`.
     */
    incrementCount: incrementCount,

    /**
     * Decrements the scroll lock counter by `1`.
     * The count will never go below `0`.
     */
    decrementCount: decrementCount,

    /**
     * Resets the scroll lock counter to `0`.
     */
    resetCount: resetCount,

    /**
     * Returns the cleanup function for the scroll lock.
     */
    getCleanup: getCleanup,

    /**
     * Sets the cleanup function for the scroll lock.
     */
    setCleanup: setCleanup,

    /**
     * Resets the cleanup function to `undefined`.
     */
    resetCleanup: resetCleanup,
  };
};
