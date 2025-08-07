import type { AccordionItemContentProps } from './accordion-item-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { combineStyle } from '@/utilities';
import { Render } from '@/_internal';
import { useAccordionContext, useAccordionItemContext, useAccordionItemPanelContext } from '../../contexts';

/**
 * The component that contains the collapsible content for an item.
 * Must be nested inside `Accordion.ItemPanel`.
 * Renders a `<div>` element.
 */
export const AccordionItemContent = component$<AccordionItemContentProps>((props) => {
  const { style, ...others } = props;

  const { orientation } = useAccordionContext();
  const { open, disabled } = useAccordionItemContext();
  const { isContentOverflowHidden } = useAccordionItemPanelContext();

  return (
    <Render
      as="div"
      data-rilix-ui-accordion-item-content
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      data-orientation={orientation.value}
      style={combineStyle({ overflow: isContentOverflowHidden.value ? 'hidden' : undefined }, style)}
      state={{ open, disabled }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
