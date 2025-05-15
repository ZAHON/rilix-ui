import type { AspectRatioContextValue } from './aspect-ratio-context.types';
import { createContextId } from '@builder.io/qwik';

export const AspectRatioContext = createContextId<AspectRatioContextValue>('rilix-ui-aspect-ratio-context');
