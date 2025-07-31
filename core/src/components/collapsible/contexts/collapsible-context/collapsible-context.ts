import type { CollapsibleContextValue } from './collapsible-context.types';
import { createContextId, useContext } from '@builder.io/qwik';

/**
 * A unique identifier for the `Collapsible` component's shared state.
 * This context serves as the central point for managing and accessing
 * the collapsible's open/closed status, disabled state, and internal IDs
 * across its component tree. Use `useCollapsibleContext` to consume it.
 */
export const CollapsibleContext = createContextId<CollapsibleContextValue>('rilix-ui-collapsible-context');

/**
 * A hook to access the `Collapsible` component's state.
 * Use this hook in any component that needs to retrieve the current open/disabled state,
 * the `setOpen$` function, and internal `ids` of the collapsible from its context.
 */
export const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext);

  return context;
};
