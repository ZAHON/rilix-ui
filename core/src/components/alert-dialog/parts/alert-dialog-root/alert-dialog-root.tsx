import type { AlertDialogRootProps } from './alert-dialog-root.types';
import { component$, useId, Slot } from '@builder.io/qwik';
import { isDev, isServer } from '@builder.io/qwik/build';
import { error } from '@/_internal';
import { DialogRoot } from '@/components/dialog/parts/dialog-root';

/**
 * Contains all the parts of an alert dialog.
 * Doesn’t render its own HTML element.
 *
 * @example
 * ```tsx
 * <AlertDialog.Root>
 * 	<AlertDialog.Trigger />
 * 	<AlertDialog.Overlay />
 * 	<AlertDialog.Content>
 * 		<AlertDialog.Title />
 * 		<AlertDialog.Description />
 * 		<AlertDialog.Cancel />
 * 		<AlertDialog.Action />
 * 	</AlertDialog.Content>
 * </AlertDialog.Root>
 * ```
 */
export const AlertDialogRoot = component$<AlertDialogRootProps>((props) => {
  const { defaultOpen, open, ids: _ids, ...others } = props;

  const id = useId();

  const ids = {
    content: `rilix-ui-alert-dialog-content-${id}`,
    title: `rilix-ui-alert-dialog-title-${id}`,
    description: `rilix-ui-alert-dialog-description-${id}`,
    ..._ids,
  };

  if (isDev && isServer && (defaultOpen || open?.value)) {
    error(
      `The 'AlertDialog' component, which internally uses the native HTML <dialog> element, cannot be rendered in an open state on the server.`,
      `The native <dialog> element requires client-side interaction to open.`,
      `Please ensure 'open' or 'defaultOpen' is false during server-side rendering.`
    );
  }

  return (
    <DialogRoot defaultOpen={defaultOpen} open={open} ids={ids} {...others}>
      <Slot />
    </DialogRoot>
  );
});
