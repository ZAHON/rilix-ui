import type { LinkContextValue } from './link-context.types';
import { createContextId } from '@builder.io/qwik';

export const LinkContext = createContextId<LinkContextValue>('rilix-ui-link-context');
