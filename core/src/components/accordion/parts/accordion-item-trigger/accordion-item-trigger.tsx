import type { AccordionItemTriggerProps } from './accordion-item-trigger.types';
import { component$, $, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useAccordionContext, useAccordionItemContext } from '../../contexts';

/**
 * Toggles the collapsed state of its associated item.
 * It should be nested inside of an `Accordion.ItemHeader`.
 * Renders a `<button>` element.
 */
export const AccordionItemTrigger = component$<AccordionItemTriggerProps>((props) => {
  const { onClick$, ...others } = props;

  const { onItemOpen$, onItemClose$, type, collapsible, orientation } = useAccordionContext();
  const { value, open, disabled, ids } = useAccordionItemContext();

  const handleClick$ = $((event: PointerEvent) => {
    if (!event.defaultPrevented && !disabled.value) {
      if (!open.value) {
        onItemOpen$(value.value);
      } else {
        onItemClose$(value.value);
      }
    }
  });

  return (
    <Render
      as="button"
      id={ids.trigger}
      type="button"
      disabled={disabled.value}
      aria-controls={ids.panel}
      aria-expanded={ids.panel ? open.value : undefined}
      aria-disabled={(type.value === 'single' && open.value && !collapsible.value) || undefined}
      data-rilix-ui-accordion-item-trigger
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      data-orientation={orientation.value}
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
