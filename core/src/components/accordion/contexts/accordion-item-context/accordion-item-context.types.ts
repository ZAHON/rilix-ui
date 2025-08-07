import type { ReadonlySignal } from '@builder.io/qwik';

export interface AccordionItemContextValue {
  /**
   * A readonly signal whose value is the unique identifier for the specific accordion item.
   * This is used to identify the item and control its open/closed state within the accordion component.
   */
  value: ReadonlySignal<string>;

  /**
   * A readonly signal whose value indicates whether the accordion item is currently in an open (expanded) state.
   * A value of `true` means the item's panel is visible, while `false` means it's hidden.
   */
  open: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value specifies if the accordion item is disabled.
   * When `true`, the item cannot be interacted with by the user, and its trigger might be visually
   * styled to reflect this inactive state.
   */
  disabled: ReadonlySignal<boolean>;

  /**
   * An object containing the generated unique IDs for the internal elements of the accordion item.
   */
  ids: {
    /**
     * The unique ID for the accordion item's trigger element.
     * This ID is used for accessibility purposes, particularly to link the trigger
     * to its associated content panel using `aria-controls`.
     */
    trigger: string;

    /**
     * The unique ID for the accordion item's collapsible content panel.
     * This ID is essential for accessibility, allowing the panel to be referenced by its
     * trigger via `aria-labelledby` and for managing its visibility state.
     */
    panel: string;
  };
}
