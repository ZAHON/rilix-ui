import { useContext } from '@builder.io/qwik';
import { AccordionItemPanelContext } from '../../contexts';

/**
 * A hook that provides access to an individual `Accordion.ItemPanel` component internal context.
 * It exposes properties related to the panel's visibility and animation state.
 */
export const useAccordionItemPanelContext = () => {
  const { presence } = useContext(AccordionItemPanelContext);

  return {
    /**
     * A readonly signal whose value indicates the accordion item panel's current presence state.
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
