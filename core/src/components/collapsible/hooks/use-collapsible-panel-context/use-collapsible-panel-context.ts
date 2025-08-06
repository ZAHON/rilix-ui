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
     * This signal reflects the different phases of the panel's lifecycle, especially during
     * animations. It can be one of the following:
     *
     * - `"showing"`: The panel is currently animating to an open state.
     * - `"shown"`: The panel is fully open and visible.
     * - `"hiding"`: The panel is currently animating to a closed state.
     * - `"hidden"`: The panel is fully closed and not visible.
     */
    presence: presence,
  };
};
