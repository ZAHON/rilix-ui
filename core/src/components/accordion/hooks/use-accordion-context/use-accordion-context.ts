import { useContext } from '@builder.io/qwik';
import { AccordionContext } from '../../contexts';

/**
 * A hook that provides access to the `Accordion` component internal context, exposing various properties
 * to interact with and react to the open/closed state of its items.
 */
export const useAccordionContext = () => {
  const { value, setValue$, type, collapsible, arrowNavigation, loop, disabled, dir, orientation } =
    useContext(AccordionContext);

  return {
    /**
     * A readonly signal whose value is an array of strings representing the currently expanded accordion item or items values.
     * This signal reflects the internal state of which accordion items are open.
     */
    value: value,

    /**
     * A `QRL` function used to programmatically set the open state of the accordion items.
     * This function takes an array of strings, where each string represents the value of the accordion items to be opened.
     */
    setValue$: setValue$,

    /**
     * A readonly signal whose value indicates whether the accordion allows a single accordion item or multiple accordion items to be open at once.
     */
    type: type,

    /**
     * A readonly signal whose value indicates whether the `collapsible` prop passed to the `Accordion.Root` component has been set to `true`.
     * This is relevant only when `type` is `"single"`, as it determines if the open accordion item can be closed by clicking its trigger again.
     */
    collapsible: collapsible,

    /**
     * A readonly signal whose value indicates whether keyboard arrow navigation is enabled for the accordion item triggers.
     */
    arrowNavigation: arrowNavigation,

    /**
     * A readonly signal whose value indicates whether keyboard navigation (using arrow keys) should loop back
     * to the first accordion item trigger after reaching the last one.
     * This is only applicable when the `arrowNavigation` readonly signal's value is `true`.
     */
    loop: loop,

    /**
     * A readonly signal whose value indicates whether the entire accordion is disabled.
     * When `true`, all interaction with the accordion and its items is prevented.
     */
    disabled: disabled,

    /**
     * A readonly signal whose value indicates the reading direction of the accordion.
     * This can be `"ltr"` (left-to-right) or `"rtl"` (right-to-left), affecting keyboard navigation and layout.
     */
    dir: dir,

    /**
     * A readonly signal whose value indicates the orientation of the accordion.
     * This determines whether the accordion items are arranged `"vertical"` (stacked) or `"horizontal"` (side-by-side).
     */
    orientation: orientation,
  };
};
