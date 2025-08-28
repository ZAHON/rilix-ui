export interface BodyScrollLockState {
  /**
   * The number of active scroll locks.
   * This counter prevents multiple components from enabling scroll lock at the same time and ensures it is only disabled when the last component releases it.
   */
  count: number;

  /**
   * A function to restore the body's original scroll state.
   * This function is created when scroll lock is applied and is called to revert the changes.
   */
  cleanup: (() => void) | undefined;
}
