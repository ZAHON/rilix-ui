import type { PortalContextValue } from './portal-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * This context is used to provide the `open` state and the `setOpen$` function
 * from the `Portal.Root` component down to its descendant components.
 * Consumers can use this context to programmatically control the portal's visibility
 * or react to its current open state without prop drilling.
 */
export const PortalContext = createContextId<PortalContextValue>('rilix-ui-portal-context');
