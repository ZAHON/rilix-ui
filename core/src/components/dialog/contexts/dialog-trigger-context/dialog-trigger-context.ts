import type { DialogTriggerContextValue } from './dialog-trigger-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the context for the `Dialog.Trigger` component, allowing descendant
 * components to access internal state without prop drilling.
 */
export const DialogTriggerContext = createContextId<DialogTriggerContextValue>('rilix-ui-dialog-trigger-context');
