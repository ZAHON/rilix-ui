import type { DialogContextValue } from './dialog-context.types';
import { createContextId, useContext } from '@builder.io/qwik';

/**
 * Provides the context for the `Dialog` component, allowing descendant
 * components to access internal state without prop drilling.
 */
export const DialogContext = createContextId<DialogContextValue>('rilix-ui-dialog-context');

/**
 * A hook that provides access to the `Dialog` component's internal context,
 * exposing readonly signals and `QRL` functions to interact with and react to the component's state.
 */
export const useDialogContext = () => {
  const context = useContext(DialogContext);

  return context;
};
