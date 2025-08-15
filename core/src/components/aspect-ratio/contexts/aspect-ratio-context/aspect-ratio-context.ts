import type { AspectRatioContextValue } from './aspect-ratio-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the context for the `AspectRatio` component, allowing descendant
 * components to access internal state without prop drilling.
 */
export const AspectRatioContext = createContextId<AspectRatioContextValue>('rilix-ui-aspect-ratio-context');
