import { useContext } from '@builder.io/qwik';
import { DialogOverlayContext } from '@/components/dialog/contexts/dialog-overlay-context';

/**
 * A hook that provides access to the `AlertDialog.Overlay` component's internal state.
 * It exposes readonly signals that allow descendant components to react to the alert dialog's overlay state and behavior.
 */
export const useAlertDialogOverlayContext = () => {
  const { presence } = useContext(DialogOverlayContext);

  return {
    /**
     * A readonly signal whose value indicates the alert dialog overlay's current presence state.
     * This signal reflects the different phases of the overlay's lifecycle, especially during
     * animations. It can be one of the following:
     *
     * - `"showing"`: The overlay is currently animating to an open state.
     * - `"shown"`: The overlay is fully open and visible.
     * - `"hiding"`: The overlay is currently animating to a closed state.
     * - `"hidden"`: The overlay is fully closed and not visible.
     */
    presence: presence,
  };
};
