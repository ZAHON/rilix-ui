import type { CollapsibleHeaderProps } from './collapsible-header.types';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useCollapsibleContext } from '../../contexts';

/**
 * Wraps a `Collapsible.Trigger`.
 * Use the `render$` prop to update it to the appropriate heading level for your page.
 * Renders an `<h3>` element.
 */
export const CollapsibleHeader = component$<CollapsibleHeaderProps>((props) => {
  const { open, disabled } = useCollapsibleContext();

  return (
    <Render
      as="h3"
      data-rilix-ui-collapsible-header
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      state={{ open, disabled }}
      defaultRender$={(props) => (
        <h3 {...props}>
          <Slot />
        </h3>
      )}
      {...props}
    />
  );
});
