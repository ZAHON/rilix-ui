import type { Signal } from '@builder.io/qwik';

export interface AvatarContextValue {
  /**
   * A signal whose value indicates the loading status of the avatar image.
   *
   * - `"idle"`: The initial state before the image has started loading.
   * - `"loading"`: The image is currently being fetched.
   * - `"loaded"`: The image has loaded successfully.
   * - `"error"`: The image failed to load.
   */
  imageLoadingStatus: Signal<'idle' | 'loading' | 'loaded' | 'error'>;

  /**
   * The strategy to use for determining when the avatar image should start loading.
   *
   * - `"intersection-observer"`: The image will begin loading when the avatar component becomes visible
   * within the viewport. This is the most efficient strategy as it defers loading
   * until the element is needed.
   * - `"document-ready"`: The image will begin loading as soon as the main document has been
   * fully loaded and parsed.
   * - `"document-idle"`: The image will begin loading when the browser is in an idle state,
   * allowing other critical tasks to finish first.
   */
  strategy: 'intersection-observer' | 'document-ready' | 'document-idle';
}
