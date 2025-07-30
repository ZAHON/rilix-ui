import type { PortalContextValue } from './portal-context.types';
import { createContextId } from '@builder.io/qwik';

export const PortalContext = createContextId<PortalContextValue>('rilix-ui-portal-context');
