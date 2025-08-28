import { useContext } from '@builder.io/qwik';
import { DialogCloseContext } from '../../contexts';

/**
 * A hook that provides access to the `Dialog.Close` component's internal state.
 * It exposes readonly signals that allow descendant components to interact with and react to the close button's state.
 */
export const useDialogCloseContext = () => {
  const { disabled } = useContext(DialogCloseContext);

  return {
    /**
     * A readonly signal that indicates whether the close button is disabled.
     * Its value is `true` if the button is disabled, preventing user interaction.
     */
    disabled: disabled,
  };
};
