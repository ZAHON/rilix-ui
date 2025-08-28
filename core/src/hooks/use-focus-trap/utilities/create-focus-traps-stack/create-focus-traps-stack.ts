import type { FocusTrapAPI } from './create-focus-traps-stack.types';
import { arrayRemove } from '@/_internal';

/**
 * Creates a stack-like structure to manage multiple, potentially nested focus traps.
 * This function returns an object with `add` and `remove` methods to ensure that
 * only the most recently activated focus trap is active, while others are paused.
 * This prevents conflicts and ensures correct focus behavior in complex UI components
 * like nested modals or dialogs.
 */
export const createFocusTrapsStack = () => {
  /**
   * A private array representing the stack of active focus traps.
   * The most recently activated (and thus currently active) focus trap is always at the top (index 0).
   * This ensures that only the topmost trap is actively managing focus, while others are paused.
   */
  let stack: FocusTrapAPI[] = [];

  const add = (focusTrap: FocusTrapAPI) => {
    // Pause the currently active focus trap (which is at the top of the stack).
    const activeFocusTrap = stack[0];

    // If the new focus trap is different from the current active one, pause the current one.
    // This prevents unnecessarily pausing and resuming the same trap if it's already active and being re-added.
    if (focusTrap !== activeFocusTrap) {
      activeFocusTrap?.pause$();
    }

    // Remove the focus trap from its current position in the stack (if it exists)
    // before re-adding it to the top. This ensures uniqueness and correct ordering.
    stack = arrayRemove({ array: stack, item: focusTrap });

    // Add the new focus trap to the top of the stack.
    stack.unshift(focusTrap);
  };

  const remove = (focusTrap: FocusTrapAPI) => {
    // Remove the specified focus trap from the stack.
    stack = arrayRemove({ array: stack, item: focusTrap });

    // Resume the focus trap that is now at the top of the stack (if one exists).
    // This activates the next logical focus trap in nested scenarios.
    stack[0]?.resume$();
  };

  return {
    /**
     * Adds a focus trap to the stack and activates it.
     *
     * When a new focus trap is added:
     * 1. The focus trap that was previously at the top of the stack (if any) is paused.
     * 2. The newly added focus trap is moved to the top of the stack (index 0),
     * making it the currently active trap. If the trap already existed in the stack,
     * it's moved to the top without being paused.
     */
    add: add,

    /**
     * Removes a focus trap from the stack and resumes the next available trap.
     *
     * When a focus trap is removed:
     * 1. It is taken out of the stack.
     * 2. The focus trap now at the top of the stack (if any) is resumed,
     * transferring focus management to it.
     */
    remove: remove,
  };
};
