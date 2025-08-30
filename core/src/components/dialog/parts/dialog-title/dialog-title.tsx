import type { DialogTitleProps } from './dialog-title.types';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useDialogContext } from '../../contexts';

/**
 * An accessible title to be announced when the dialog is opened. If you want to remove the title
 * entirely, remove this part and pass `aria-labelledby={undefined}` to `Dialog.Content` component,
 * or pass `ids={{ title: undefined }}` to `Dialog.Root`. If you remove the title, ensure you
 * provide a descriptive `aria-label` directly on the `Dialog.Content` component to provide an accessible label.
 * Renders an `<h2>` element.
 */
export const DialogTitle = component$<DialogTitleProps>((props) => {
  const { ids } = useDialogContext();

  return (
    <Render
      as="h2"
      id={ids.title}
      data-rilix-ui-dialog-title
      defaultRender$={(props) => (
        <h2 {...props}>
          <Slot />
        </h2>
      )}
      {...props}
    />
  );
});
