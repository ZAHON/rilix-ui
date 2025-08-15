import type { LabelContextValue } from './label-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the context for the `Label` component.
 * This context contains readonly signals for the component's internal state,
 * such as `preventDblClickTextSelection`, allowing descendant components
 * to access this value without prop drilling.
 */
export const LabelContext = createContextId<LabelContextValue>('rilix-ui-label-context');
