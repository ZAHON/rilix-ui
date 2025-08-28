import type { DialogRootProps } from './dialog-root.types';
import { component$, useId, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
import { isDev, isServer } from '@builder.io/qwik/build';
import { useUncontrolled } from '@/hooks';
import { error } from '@/_internal';
import { DialogContext } from '../../contexts';

/**
 * Contains all the parts of a dialog.
 * Doesn’t render its own HTML element.
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 * 	<Dialog.Trigger />
 * 	<Dialog.Overlay />
 * 	<Dialog.Content>
 * 		<Dialog.Title />
 * 		<Dialog.Description />
 * 		<Dialog.Close />
 * 	</Dialog.Content>
 * </Dialog.Root>
 * ```
 */
export const DialogRoot = component$<DialogRootProps>((props) => {
  const { defaultOpen, open: _open, onOpenChange$, ids: _ids } = props;

  const { state: open, setState$: setOpen$ } = useUncontrolled({
    uncontrolledValue: defaultOpen,
    controlledSignal: _open,
    finalValue: false,
    onChange$: onOpenChange$,
  });

  const id = useId();
  const triggerRef = useSignal<HTMLElement | undefined>(undefined);

  const ids = {
    content: `rilix-ui-dialog-content-${id}`,
    title: `rilix-ui-dialog-title-${id}`,
    description: `rilix-ui-dialog-description-${id}`,
    ..._ids,
  };

  if (isDev && isServer && open.value) {
    error(
      `The 'Dialog' component, which internally uses the native HTML <dialog> element, cannot be rendered in an open state on the server.`,
      `The native <dialog> element requires client-side interaction to open.`,
      `Please ensure 'open' or 'defaultOpen' is false during server-side rendering.`
    );
  }

  useContextProvider(DialogContext, { open, setOpen$, triggerRef, ids });

  return <Slot />;
});
