import type { DialogDescriptionProps } from './dialog-description.types';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useDialogContext } from '../../contexts';

/**
 * An optional accessible description to be announced when the dialog is opened. If you want to remove the description
 * entirely, remove this part and pass `aria-describedby={undefined}` to `Dialog.Content` component,
 * or pass `ids={{ description: undefined }}` to `Dialog.Root`.
 * Renders a `<p>` element.
 */
export const DialogDescription = component$<DialogDescriptionProps>((props) => {
  const { ids } = useDialogContext();

  return (
    <Render
      as="p"
      id={ids.description}
      data-rilix-ui-dialog-description
      defaultRender$={(props) => (
        <p {...props}>
          <Slot />
        </p>
      )}
      {...props}
    />
  );
});
