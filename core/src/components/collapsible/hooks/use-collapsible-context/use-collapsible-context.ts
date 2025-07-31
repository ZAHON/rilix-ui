import { useContext } from '@builder.io/qwik';
import { CollapsibleContext } from '../../contexts';

/**
 * A hook that provides access to the `Collapsible` component internal context, exposing various properties
 * to interact with and react to its open/closed state.
 */
export const useCollapsibleContext = () => {
  const { open, setOpen$, disabled } = useContext(CollapsibleContext);

  return {
    /**
     * A readonly signal whose value indicates the collapsible's current open state.
     * It is `true` when the collapsible panel is open, and `false` when closed.
     */
    open: open,

    /**
     * A `QRL` function used to programmatically set the open state of the collapsible.
     * When invoked with `true`, the collapsible will open; with `false`, it will close.
     */
    setOpen$: setOpen$,

    /**
     * A readonly signal whose value indicates the collapsible's current disabled state.
     * It is `true` when the collapsible is prevented from user interaction.
     */
    disabled: disabled,
  };
};
