import type { AlertDialogTriggerProps } from './alert-dialog-trigger.types';
import { component$, Slot } from '@builder.io/qwik';
import { DialogTrigger } from '@/components/dialog/parts/dialog-trigger';

/**
 * A button that opens the alert dialog.
 * Renders a `<button>` element.
 */
export const AlertDialogTrigger = component$<AlertDialogTriggerProps>((props) => {
  return (
    <DialogTrigger data-rilix-ui-alert-dialog-trigger data-rilix-ui-dialog-trigger={undefined} {...props}>
      <Slot />
    </DialogTrigger>
  );
});
