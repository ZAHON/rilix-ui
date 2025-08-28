import { useContext } from '@builder.io/qwik';
import { DialogContext } from '../../contexts';

/**
 * A hook that provides access to the `Dialog` component's internal state.
 * It exposes readonly signals and `QRL` functions to interact with the dialog's state,
 * allowing descendant components to control or react to its open/closed state.
 */
export const useDialogContext = () => {
  const { open, setOpen$ } = useContext(DialogContext);

  return {
    /**
     * A readonly signal whose value indicates the dialog's current open state.
     * It is `true` when the dialog is open, and `false` when closed.
     */
    open: open,

    /**
     * A `QRL` function used to programmatically set the open state of the dialog.
     * When invoked with `true`, the dialog will open; with `false`, it will close.
     */
    setOpen$: setOpen$,
  };
};
