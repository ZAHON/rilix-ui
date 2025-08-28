import type { DialogCloseProps } from './dialog-close.types';
import { component$, useComputed$, $, useContextProvider, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useDialogContext, DialogCloseContext } from '../../contexts';

/**
 * A button that closes the dialog.
 * Renders a `<button>` element.
 */
export const DialogClose = component$<DialogCloseProps>((props) => {
  const { disabled: _disabled, onClick$, ...others } = props;

  const { setOpen$ } = useDialogContext();

  const disabled = useComputed$(() => _disabled ?? false);

  const handleClick$ = $((event: PointerEvent) => {
    if (!event.defaultPrevented && !disabled.value) {
      setOpen$(false);
    }
  });

  useContextProvider(DialogCloseContext, { disabled });

  return (
    <Render
      as="button"
      type="button"
      disabled={disabled.value}
      data-rilix-ui-dialog-close
      data-disabled={disabled.value ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      state={{ disabled }}
      defaultRender$={(props) => (
        <button {...props}>
          <Slot />
        </button>
      )}
      {...others}
    />
  );
});
