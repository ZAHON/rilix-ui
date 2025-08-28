import type { DialogOverlayContextValue } from './dialog-overlay-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the context for the `Dialog.Overlay` component, allowing descendant
 * components to access internal state without prop drilling.
 */
export const DialogOverlayContext = createContextId<DialogOverlayContextValue>('rilix-ui-dialog-overlay-context');
