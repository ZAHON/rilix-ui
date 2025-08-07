import { useContext } from '@builder.io/qwik';
import { AccordionItemContext } from '../../contexts';

/**
 * A hook that provides access to an individual `Accordion.Item` component internal context
 * exposing properties related to its specific state and unique identification.
 */
export const useAccordionItemContext = () => {
  const { value, open, disabled } = useContext(AccordionItemContext);

  return {
    /**
     * A readonly signal whose value is the unique identifier for the specific accordion item.
     * This is used to identify the item and control its open/closed state within the accordion component.
     */
    value: value,

    /**
     * A readonly signal whose value indicates whether the accordion item is currently in an open (expanded) state.
     * A value of `true` means the item's panel is visible, while `false` means it's hidden.
     */
    open: open,

    /**
     * A readonly signal whose value specifies if the accordion item is disabled.
     * When `true`, the item cannot be interacted with by the user, and its trigger might be visually
     * styled to reflect this inactive state.
     */
    disabled: disabled,
  };
};
