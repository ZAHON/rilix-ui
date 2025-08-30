import { useContext } from '@builder.io/qwik';
import { DialogTriggerContext } from '@/components/dialog/contexts/dialog-trigger-context';

/**
 * A hook that provides access to the `AlertDialog.Trigger` component's internal state.
 * It exposes readonly signals that allow descendant components to interact with and react to the trigger's state.
 */
export const useAlertDialogTriggerContext = () => {
  const { disabled } = useContext(DialogTriggerContext);

  return {
    /**
     * A readonly signal that indicates whether the trigger is disabled.
     * Its value is `true` if the trigger is disabled, preventing user interaction.
     */
    disabled: disabled,
  };
};
