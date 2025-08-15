import { useContext } from '@builder.io/qwik';
import { LabelContext } from '../../contexts';

/**
 * A hook that provides access to the `Label` component's internal context,
 * exposing a readonly signals to interact with and react to the component's state.
 */
export const useLabelContext = () => {
  const { preventDblClickTextSelection } = useContext(LabelContext);

  return {
    /**
     * A readonly signal whose value indicates whether text selection is prevented when double-clicking the label.
     */
    preventDblClickTextSelection: preventDblClickTextSelection,
  };
};
