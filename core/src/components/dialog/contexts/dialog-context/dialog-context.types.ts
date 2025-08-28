import type { ReadonlySignal, Signal, QRL } from '@builder.io/qwik';

export interface DialogContextValue {
  /**
   * A readonly signal whose value indicates the dialog's current open state.
   * It is `true` when the dialog is open, and `false` when closed.
   */
  open: ReadonlySignal<boolean>;

  /**
   * A `QRL` function used to programmatically set the open state of the dialog.
   * When invoked with `true`, the dialog will open; with `false`, it will close.
   */
  setOpen$: QRL<(open: boolean) => void>;

  /**
   * A signal to the HTML element that serves as the dialog's trigger.
   * It holds a reference to the DOM element that controls the opening and closing of the dialog.
   */
  triggerRef: Signal<HTMLElement | undefined>;

  /**
   * An object containing unique IDs for internal dialog elements for accessibility purposes.
   * These IDs are used to establish relationships between elements via ARIA attributes.
   */
  ids: {
    /**
     * The unique ID for the dialog's content element.
     * It is used to connect the dialog content with its trigger.
     */
    content: string;

    /**
     * The unique ID for the dialog's title element.
     * It is used to associate the title with the dialog content for screen readers.
     */
    title: string;

    /**
     * The unique ID for the dialog's description element.
     * It is used to associate the description with the dialog content for screen readers.
     */
    description: string;
  };
}
