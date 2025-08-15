import { useContext } from '@builder.io/qwik';
import { AspectRatioContext } from '../../contexts';

/**
 * A hook that gives access to a context object containing properties to interact with the aspect ratio.
 */
export const useAspectRatioContext = () => {
  const { aspect } = useContext(AspectRatioContext);

  return {
    /**
     * The current aspect ratio (in %).
     */
    aspect: aspect,
  };
};
