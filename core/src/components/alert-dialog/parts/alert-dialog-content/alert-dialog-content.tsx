import type { AlertDialogContentProps } from './alert-dialog-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { DialogContent } from '@/components/dialog/parts/dialog-content';

/**
 * Contains content to be rendered in the open alert dialog.
 * Renders a `<dialog>` element.
 */
export const AlertDialogContent = component$<AlertDialogContentProps>((props) => {
  const { closeOnPointerDownOutside, ...others } = props;

  return (
    <DialogContent
      role="alertdialog"
      closeOnPointerDownOutside={closeOnPointerDownOutside ?? false}
      data-rilix-ui-alert-dialog-content
      data-rilix-ui-dialog-content={false}
      {...others}
    >
      <Slot />
    </DialogContent>
  );
});
