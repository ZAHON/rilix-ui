import type { DialogCloseContextValue } from './dialog-close-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the context for the `Dialog.Close` component, allowing descendant
 * components to access internal state without prop drilling.
 */
export const DialogCloseContext = createContextId<DialogCloseContextValue>('rilix-ui-dialog-close-context');
