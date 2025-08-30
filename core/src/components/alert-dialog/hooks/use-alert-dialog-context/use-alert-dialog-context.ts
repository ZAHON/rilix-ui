import { useContext } from '@builder.io/qwik';
import { DialogContext } from '@/components/dialog/contexts/dialog-context';

/**
 * A hook that provides access to the `AlertDialog` component's internal state.
 * It exposes readonly signals and `QRL` functions to interact with the alert dialog's state,
 * allowing descendant components to control or react to its open/closed state.
 */
export const useAlertDialogContext = () => {
  const { open, setOpen$ } = useContext(DialogContext);

  return {
    /**
     * A readonly signal whose value indicates the alert dialog's current open state.
     * It is `true` when the dialog is open, and `false` when closed.
     */
    open: open,

    /**
     * A `QRL` function used to programmatically set the open state of the alert dialog.
     * When invoked with `true`, the alert dialog will open; with `false`, it will close.
     */
    setOpen$: setOpen$,
  };
};
