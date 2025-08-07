import type { AccordionItemPanelContextValue } from './accordion-item-panel-context.types';
import { createContextId, useContext } from '@builder.io/qwik';

/**
 * Creates a unique context ID for the `Accordion.ItemPanel`.
 * This context is used to share the presence state of an individual
 * `Accordion.ItemPanel` component with its descendants. It ensures consistent
 * behavior, especially for animations and managing the item panel's visibility.
 */
export const AccordionItemPanelContext = createContextId<AccordionItemPanelContextValue>(
  'rilix-ui-accordion-item-panel-context'
);

/**
 * A hook that provides access to the `Accordion.ItemPanel`'s internal context,
 * exposing various properties related to its animation state and content overflow management
 */
export const useAccordionItemPanelContext = () => {
  const context = useContext(AccordionItemPanelContext);

  return context;
};
