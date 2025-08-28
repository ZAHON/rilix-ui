import { useContext } from '@builder.io/qwik';
import { DialogTriggerContext } from '../../contexts';

/**
 * A hook that provides access to the `Dialog.Trigger` component's internal state.
 * It exposes readonly signals that allow descendant components to interact with and react to the trigger's state.
 */
export const useDialogTriggerContext = () => {
  const { disabled } = useContext(DialogTriggerContext);

  return {
    /**
     * A readonly signal that indicates whether the trigger is disabled.
     * Its value is `true` if the trigger is disabled, preventing user interaction.
     */
    disabled: disabled,
  };
};
