import type { AccordionItemHeaderProps } from './accordion-item-header.types';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useAccordionContext, useAccordionItemContext } from '../../contexts';

/**
 * Wraps an `Accordion.ItemTrigger`.
 * Use the `render$` prop to update it to the appropriate heading level for your page.
 * Renders an `<h3>` element.
 */
export const AccordionItemHeader = component$<AccordionItemHeaderProps>((props) => {
  const { orientation } = useAccordionContext();
  const { open, disabled } = useAccordionItemContext();

  return (
    <Render
      as="h3"
      data-rilix-ui-accordion-item-header
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      data-orientation={orientation.value}
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
