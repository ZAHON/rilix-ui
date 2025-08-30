import type { AlertDialogOverlayProps } from './alert-dialog-overlay.types';
import { component$, Slot } from '@builder.io/qwik';
import { DialogOverlay } from '@/components/dialog/parts/dialog-overlay';

/**
 * A layer that covers the inert portion of the view when the alert dialog is open.
 * Renders a `<div>` element.
 */
export const AlertDialogOverlay = component$<AlertDialogOverlayProps>((props) => {
  return (
    <DialogOverlay data-rilix-ui-alert-dialog-overlay data-rilix-ui-dialog-overlay={undefined} {...props}>
      <Slot />
    </DialogOverlay>
  );
});
