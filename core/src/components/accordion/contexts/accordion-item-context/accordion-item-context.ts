import type { AccordionItemContextValue } from './accordion-item-context.types';
import { createContextId, useContext } from '@builder.io/qwik';

/**
 * Creates a unique context ID for the `Accordion.Item`.
 * This context is used to share the internal state and properties of an individual
 * `Accordion.Item` component with its descendants, ensuring consistent behavior
 * and accessibility within that specific item.
 */
export const AccordionItemContext = createContextId<AccordionItemContextValue>('rilix-ui-accordion-item-context');

/**
 * A hook that provides access to the context values of the nearest `Accordion.Item` component.
 * Use this hook within an `AccordionItem`'s descendants to retrieve its current state,
 * such as its unique value, open/closed status, disabled state, and generated IDs for sub-elements.
 */
export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);

  return context;
};
