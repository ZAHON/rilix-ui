import type { LabelContextValue } from './label-context.types';
import { createContextId } from '@builder.io/qwik';

export const LabelContext = createContextId<LabelContextValue>('rilix-ui-label-context');
