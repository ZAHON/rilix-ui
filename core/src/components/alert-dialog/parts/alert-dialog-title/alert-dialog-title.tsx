import type { AlertDialogTitleProps } from './alert-dialog-title.types';
import { component$, Slot } from '@builder.io/qwik';
import { DialogTitle } from '@/components/dialog/parts/dialog-title';

/**
 * An accessible title to be announced when the alert dialog is opened. If you want to remove the title
 * entirely, remove this part and pass `aria-labelledby={undefined}` to `AlertDialog.Content` component,
 * or pass `ids={{ title: undefined }}` to `AlertDialog.Root`. If you remove the title, ensure you
 * provide a descriptive `aria-label` directly on the `AlertDialog.Content` component to provide an accessible label.
 * Renders an `<h2>` element.
 */
export const AlertDialogTitle = component$<AlertDialogTitleProps>((props) => {
  return (
    <DialogTitle data-rilix-ui-alert-dialog-title data-rilix-ui-dialog-title={undefined} {...props}>
      <Slot />
    </DialogTitle>
  );
});
