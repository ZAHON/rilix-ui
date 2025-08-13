import { useContext } from '@builder.io/qwik';
import { SeparatorContext } from '../../contexts';

/**
 * A hook that provides access to the `Separator` component's internal context, exposing readonly
 * signals to interact with and react to the component's state, such as its orientation and decorative status.
 */
export const useSeparatorContext = () => {
  const { orientation, decorative } = useContext(SeparatorContext);

  return {
    /**
     * A readonly signal whose value is the orientation of the component.
     */
    orientation: orientation,

    /**
     * A readonly signal whose value indicates whether or not the component is purely decorative.
     * When `true`, accessibility-related attributes are updated so that the rendered element is removed from the accessibility tree.
     */
    decorative: decorative,
  };
};
