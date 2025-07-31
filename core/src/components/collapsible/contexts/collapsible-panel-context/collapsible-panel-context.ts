import type { CollapsiblePanelContextValue } from './collapsible-panel-context.types';
import { createContextId, useContext } from '@builder.io/qwik';

/**
 * The unique ID for the `Collapsible.Panel`'s context.
 * It allows descendant components to access the panel's animation `presence` state.
 */
export const CollapsiblePanelContext = createContextId<CollapsiblePanelContextValue>(
  'rilix-ui-collapsible-panel-context'
);

/**
 * A hook that provides access to the `Collapsible.Panel`'s internal context,
 * exposing various properties related to its animation state and content overflow management
 */
export const useCollapsiblePanelContext = () => {
  const context = useContext(CollapsiblePanelContext);

  return context;
};
