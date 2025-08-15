import { useContext } from '@builder.io/qwik';
import { LabelContext } from '../../contexts';

/**
 * A hook that gives access to a context object containing properties to interact with the label.
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
