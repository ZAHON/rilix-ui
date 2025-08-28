/**
 * Creates and returns an object that manages the stacking order of top-level UI elements
 * like dialogs, modals, and popovers. It ensures that only one element at a time is
 * considered the "active" top layer. This is essential for controlling event handling,
 * such as preventing multiple dialogs from reacting to the same global events,
 * like the `Escape` key press.
 */
const createTopLayersStack = () => {
  const stack: string[] = [];

  const add = (id: string) => {
    stack.push(id);
  };

  const remove = (id: string) => {
    const index = stack.indexOf(id);

    if (index !== -1) {
      stack.splice(index, 1);
    }
  };

  const isActive = (id: string) => {
    return stack[stack.length - 1] === id;
  };

  const clear = () => {
    stack.length = 0;
  };

  return {
    /**
     * Adds a layer to the top of the stack.
     * This function is used to register a new element, like a dialog or modal,
     * that needs to be treated as the currently active top layer.
     * Only the top-most layer in the stack can receive certain events,
     * such as a pointer-down event on the backdrop or an "Escape" key press.
     * This mechanism ensures that event handling is limited to the
     * highest-priority element currently on the screen.
     */
    add: add,

    /**
     * Removes a layer from the stack by its unique identifier.
     * This function is typically called when a top-layer element,
     * such as a dialog, is closed or unmounted.
     * Removing the element from the stack ensures that it's no longer
     * considered the active top layer, which allows the next element
     * in the stack (if any) to take its place and handle events.
     */
    remove: remove,

    /**
     * Checks if a specific layer is the currently active top layer.
     * The function returns `true` if the provided `id` matches the identifier
     * of the element at the very top of the stack.
     * This is a crucial check used to prevent lower-priority elements
     * from reacting to events while a higher-priority one is active.
     * For example, a dialog will only handle an `Escape` key press
     * if it's the active top layer, preventing multiple dialogs from closing at once.
     */
    isActive: isActive,

    /**
     * Removes all layers from the stack.
     * This function is useful for resetting the state of the top layers stack,
     * for example, during cleanup in testing environments or when navigating to a new page
     * where all previous top-level UI elements should be dismissed.
     * It ensures a clean slate, preventing any old layers from unexpectedly
     * being considered active.
     */
    clear: clear,
  };
};

/**
 * A global, singleton instance of the top layers stack. It provides a centralized
 * and consistent way to manage the priority of overlapping UI components across the application.
 * All components that need to be treated as top-level elements (e.g., dialogs, alerts)
 * should use this instance to register and unregister themselves, ensuring
 * that only the highest-priority element can handle certain user interactions.
 */
export const topLayersStack = createTopLayersStack();
