import type { LinkContextValue } from './link-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the context for the `Link` component.
 * This context contains a readonly signal for the component's internal state,
 * such as `disabled`, allowing descendant components to access this value
 * without prop drilling.
 */
export const LinkContext = createContextId<LinkContextValue>('rilix-ui-link-context');
