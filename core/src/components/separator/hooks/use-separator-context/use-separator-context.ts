import { useContext } from '@builder.io/qwik';
import { SeparatorContext } from '../../context';

/**
 * A hook that gives access to a context object containing properties to interact with the separator.
 */
export const useSeparatorContext = () => {
  const { orientation, decorative } = useContext(SeparatorContext);

  return {
    /**
     * The orientation of the component.
     */
    orientation: orientation,

    /**
     * Whether or not the component is purely decorative.
     * When `true`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.
     */
    decorative: decorative,
  };
};
