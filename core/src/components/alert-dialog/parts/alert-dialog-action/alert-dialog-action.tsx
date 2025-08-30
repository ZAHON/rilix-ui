import type { AlertDialogActionProps } from './alert-dialog-action.types';
import { component$, Slot } from '@builder.io/qwik';
import { DialogClose } from '@/components/dialog/parts/dialog-close';

/**
 * A button that closes the alert dialog.
 * These buttons should be distinguished visually from the `AlertDialog.Cancel` button.
 * Renders a `<button>` element.
 */
export const AlertDialogAction = component$<AlertDialogActionProps>((props) => {
  return (
    <DialogClose data-rilix-ui-alert-dialog-action data-rilix-ui-dialog-close={undefined} {...props}>
      <Slot />
    </DialogClose>
  );
});
