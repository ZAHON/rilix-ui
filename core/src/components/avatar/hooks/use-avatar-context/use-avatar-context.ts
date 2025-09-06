import type { ReadonlySignal } from '@builder.io/qwik';
import { useContext } from '@builder.io/qwik';
import { AvatarContext } from '../../contexts';

/**
 * A hook that provides access to the `Avatar` component's internal state, such as the image loading status.
 * It must be used within an `Avatar.Root` component.
 */
export const useAvatarContext = () => {
  const { imageLoadingStatus } = useContext(AvatarContext);

  return {
    /**
     * A readonly signal whose value indicates the loading status of the avatar image.
     *
     * - `"idle"`: The initial state before the image has started loading.
     * - `"loading"`: The image is currently being fetched.
     * - `"loaded"`: The image has loaded successfully.
     * - `"error"`: The image failed to load.
     */
    imageLoadingStatus: imageLoadingStatus as ReadonlySignal<typeof imageLoadingStatus.value>,
  };
};
