import type { DialogContentContextValue } from './dialog-content-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the context for the `Dialog.Content` component, allowing descendant
 * components to access internal state without prop drilling.
 */
export const DialogContentContext = createContextId<DialogContentContextValue>('rilix-ui-dialog-content-context');
