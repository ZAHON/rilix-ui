import type { AlertDialogCancelProps } from './alert-dialog-cancel.types';
import { component$, Slot } from '@builder.io/qwik';
import { DialogClose } from '@/components/dialog/parts/dialog-close';

/**
 * A button that closes the alert dialog.
 * This button should be distinguished visually from `AlertDialog.Action` buttons.
 * Renders a `<button>` element.
 */
export const AlertDialogCancel = component$<AlertDialogCancelProps>((props) => {
  return (
    <DialogClose data-rilix-ui-alert-dialog-cancel data-rilix-ui-dialog-close={undefined} {...props}>
      <Slot />
    </DialogClose>
  );
});
