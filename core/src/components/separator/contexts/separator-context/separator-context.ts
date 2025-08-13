import type { SeparatorContextValue } from './separator-context.types';
import { createContextId } from '@builder.io/qwik';

export const SeparatorContext = createContextId<SeparatorContextValue>('rilix-ui-separator-context');
