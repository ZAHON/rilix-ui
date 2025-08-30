import type { AlertDialogDescriptionProps } from './alert-dialog-description.types';
import { component$, Slot } from '@builder.io/qwik';
import { DialogDescription } from '@/components/dialog/parts/dialog-description';

/**
 * An accessible description to be announced when the alert dialog is opened. If you want to remove the description
 * entirely, remove this part and pass `aria-describedby={undefined}` to `AlertDialog.Content` component,
 * or pass `ids={{ description: undefined }}` to `AlertDialog.Root`.
 * Renders a `<p>` element.
 */
export const AlertDialogDescription = component$<AlertDialogDescriptionProps>((props) => {
  return (
    <DialogDescription data-rilix-ui-alert-dialog-description data-rilix-ui-dialog-description={undefined} {...props}>
      <Slot />
    </DialogDescription>
  );
});
