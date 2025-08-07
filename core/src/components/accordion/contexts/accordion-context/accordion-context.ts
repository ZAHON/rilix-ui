import type { AccordionContextValue } from './accordion-context.types';
import { createContextId, useContext } from '@builder.io/qwik';

/**
 * Context ID for the `Accordion` component.
 * It holds the shared state and functions for all accordion-related components.
 * Consumers of this context will receive an object conforming to `AccordionContextValue`.
 */
export const AccordionContext = createContextId<AccordionContextValue>('rilix-ui-accordion-context');

/**
 * A hook to access the `AccordionContext`.
 * This allows child components of `Accordion.Root` to consume the shared state
 * and functions provided by the accordion context, such as current expanded items,
 * type (single/multiple), and interaction handlers.
 */
export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  return context;
};
