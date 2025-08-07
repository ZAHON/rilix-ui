import type { AccordionItemProps } from './accordion-item.types';
import { component$, useId, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useAccordionContext, AccordionItemContext } from '../../contexts';

/**
 * Contains all the parts of a collapsible section.
 * Renders a `<div>` element.
 */
export const AccordionItem = component$<AccordionItemProps>((props) => {
  const { value: _value, disabled: _disabled, ids: _ids, ...others } = props;

  const { value: rootValue, disabled: rootDisabled, orientation } = useAccordionContext();

  const id = useId();
  const value = useComputed$(() => _value);
  const open = useComputed$(() => rootValue.value.includes(_value));
  const disabled = useComputed$(() => (rootDisabled.value || _disabled) ?? false);

  const ids = {
    trigger: `rilix-ui-accordion-item-trigger-${id}`,
    panel: `rilix-ui-accordion-item-panel-${id}`,
    ..._ids,
  };

  useContextProvider(AccordionItemContext, { value, open, disabled, ids });

  return (
    <Render
      as="div"
      data-rilix-ui-accordion-item
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      data-orientation={orientation.value}
      state={{ value, open, disabled }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
