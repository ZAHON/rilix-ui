import { useContext } from '@builder.io/qwik';
import { DialogCloseContext } from '@/components/dialog/contexts/dialog-close-context';

/**
 * A hook that provides access to the `AlertDialog.Cancel` component's internal state.
 * It exposes readonly signals that allow descendant components to interact with and react to the cancel button's state.
 */
export const useAlertDialogCancelContext = () => {
  const { disabled } = useContext(DialogCloseContext);

  return {
    /**
     * A readonly signal that indicates whether the cancel button is disabled.
     * Its value is `true` if the cancel button is disabled, preventing user interaction.
     */
    disabled: disabled,
  };
};
