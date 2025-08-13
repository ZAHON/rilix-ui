import type { SeparatorContextValue } from './separator-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the context for the `Separator` component.
 * This context contains readonly signals for the component's internal state,
 * such as `orientation` and `decorative`, allowing descendant components
 * to access these values without prop drilling.
 */
export const SeparatorContext = createContextId<SeparatorContextValue>('rilix-ui-separator-context');
