import { useContext } from '@builder.io/qwik';
import { AspectRatioContext } from '../../contexts';

/**
 * A hook that provides access to the `AspectRatio` component's internal context,
 * exposing a readonly signals to interact with and react to the component's state.
 */
export const useAspectRatioContext = () => {
  const { aspect } = useContext(AspectRatioContext);

  return {
    /**
     * A readonly signal whose value represents the current aspect ratio (in %).
     */
    aspect: aspect,
  };
};
