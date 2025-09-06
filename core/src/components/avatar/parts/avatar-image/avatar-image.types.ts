import type { PropsOf, QRL, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface AvatarImageProps extends PropsOf<'img'> {
  /**
   * The image source URL.
   * When a valid URL is provided, the component will attempt to load the image.
   * If the URL is missing or invalid, the `Avatar.Fallback` component will be rendered.
   */
  src?: string;

  /**
   * A `QRL` callback function that providing information about the loading status of the image.
   * This is useful in case you want to control more precisely what to render as the image is loading.
   */
  onLoadingStatusChange$?: QRL<(status: 'idle' | 'loading' | 'loaded' | 'error') => void>;

  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   * Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.
   */
  render$?: (
    /**
     * These are the standard HTML attributes and properties that should be applied to your custom rendered element.
     * Spreading these props ensures that your component maintains its intended behavior, accessibility features, and proper integration with the DOM.
     */
    props: Record<string, unknown>,

    /**
     * An object that provides access to the internal state of the component.
     */
    state: {
      /**
       * A readonly signal whose value indicates the loading status of the avatar image.
       *
       * - `"idle"`: The initial state before the image has started loading.
       * - `"loading"`: The image is currently being fetched.
       * - `"loaded"`: The image has loaded successfully.
       * - `"error"`: The image failed to load.
       */
      imageLoadingStatus: ReadonlySignal<'idle' | 'loading' | 'loaded' | 'error'>;
    }
  ) => JSXOutput;
}
