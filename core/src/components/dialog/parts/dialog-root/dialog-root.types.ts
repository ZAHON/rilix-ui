import type { Signal, QRL } from '@builder.io/qwik';

export interface DialogRootProps {
  /**
   * The open state of the dialog when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the dialog.
   * Must be used in conjunction with `onOpenChange$`.
   */
  open?: Signal<boolean>;

  /**
   * A `QRL` callback function that is called when the open state of the dialog changes.
   */
  onOpenChange$?: QRL<(open: boolean) => void>;

  /**
   * An optional object to override the default generated IDs for internal elements.
   * This is useful when you need to ensure specific, predictable IDs for integration with external tools,
   * testing frameworks, or for more fine-grained control over accessibility attributes.
   */
  ids?: {
    /**
     * The unique ID for the dialog content element.
     * This ID is used for accessibility to connect the dialog content with its trigger.
     */
    content?: string;

    /**
     * The unique ID for the dialog title element.
     * This ID is used for accessibility to associate the title with the dialog content.
     */
    title?: string;

    /**
     * The unique ID for the dialog description element.
     * This ID is used for accessibility to associate the description with the dialog content.
     */
    description?: string;
  };
}
