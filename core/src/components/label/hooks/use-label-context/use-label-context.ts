import { useContext } from '@builder.io/qwik';
import { LabelContext } from '../../contexts';

/**
 * A hook that gives access to a context object containing properties to interact with the label.
 */
export const useLabelContext = () => {
  const { preventDblClickTextSelection } = useContext(LabelContext);

  return {
    /**
     * When `true`, text selection is prevented when double clicking label.
     */
    preventDblClickTextSelection: preventDblClickTextSelection,
  };
};
