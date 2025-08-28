import type { DialogTriggerProps } from './dialog-trigger.types';
import { component$, useComputed$, $, useContextProvider, Slot } from '@builder.io/qwik';
import { composeRefs } from '@/utilities';
import { Render } from '@/_internal';
import { useDialogContext, DialogTriggerContext } from '../../contexts';

/**
 * A button that opens the dialog.
 * Renders a `<button>` element.
 */
export const DialogTrigger = component$<DialogTriggerProps>((props) => {
  const { ref: _ref, disabled: _disabled, onClick$, ...others } = props;

  const { open, setOpen$, triggerRef, ids } = useDialogContext();

  const disabled = useComputed$(() => _disabled ?? false);

  const handleClick$ = $((event: PointerEvent) => {
    if (!event.defaultPrevented && !disabled.value) {
      setOpen$(true);
    }
  });

  useContextProvider(DialogTriggerContext, { disabled });

  return (
    <Render
      as="button"
      ref={composeRefs([_ref, triggerRef])}
      type="button"
      disabled={disabled.value}
      aria-controls={ids.content}
      aria-haspopup={ids.content ? 'dialog' : undefined}
      aria-expanded={ids.content ? open.value : undefined}
      data-rilix-ui-dialog-trigger
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      state={{ open, disabled }}
      defaultRender$={(props) => (
        <button {...props}>
          <Slot />
        </button>
      )}
      {...others}
    />
  );
});
