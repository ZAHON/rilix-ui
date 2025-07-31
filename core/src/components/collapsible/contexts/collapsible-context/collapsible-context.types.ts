import type { ReadonlySignal, QRL } from '@builder.io/qwik';

export interface CollapsibleContextValue {
  /**
   * A readonly signal whose value indicates the collapsible's current open state.
   * It is `true` when the collapsible panel is open, and `false` when closed.
   */
  open: ReadonlySignal<boolean>;

  /**
   * A `QRL` function used to programmatically set the open state of the collapsible.
   * When invoked with `true`, the collapsible will open; with `false`, it will close.
   */
  setOpen$: QRL<(open: boolean) => void>;

  /**
   * A readonly signal whose value indicates the collapsible's current disabled state.
   * It is `true` when the collapsible is prevented from user interaction.
   */
  disabled: ReadonlySignal<boolean>;

  /**
   * An object containing IDs for internal elements of the collapsible.
   */
  ids: {
    /**
     * The unique ID for the collapsible panel element.
     */
    panel: string;
  };
}
