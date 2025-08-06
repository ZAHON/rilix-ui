import { useContext } from '@builder.io/qwik';
import { CollapsiblePanelContext } from '../../contexts';

/**
 * A hook that provides access to the `Collapsible.Panel` component internal context.
 * This allows descendant components to retrieve shared state related to the panel's behavior.
 */
export const useCollapsiblePanelContext = () => {
  const { presence } = useContext(CollapsiblePanelContext);

  return {
    /**
     * A readonly signal whose value indicates the collapsible panel's current presence state.
     * This signal reflects the different phases of the panel's visibility, especially during animations.
     *
     * - `"showing"`: The panel is currently animating open.
     * - `"shown"`: The panel is fully open and not animating.
     * - `"hiding"`: The panel is currently animating closed.
     * - `"hidden"`: The panel is fully closed and not animating.
     * - `undefined`: Initial state or no animation is configured/running.
     */
    presence: presence,
  };
};
