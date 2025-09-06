import type { PropsOf, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface AvatarRootProps extends PropsOf<'span'> {
  /**
   * The strategy to use for determining when the avatar image should start loading.
   *
   * - `"intersection-observer"`: The image will begin loading when the avatar component becomes visible
   * within the viewport. This is the most efficient strategy as it defers loading until the element is needed.
   * - `"document-ready"`: The image will begin loading as soon as the main document has been
   * fully loaded and parsed.
   * - `"document-idle"`: The image will begin loading when the browser is in an idle state,
   * allowing other critical tasks to finish first.
   *
   * @default "intersection-observer"
   */
  strategy?: 'intersection-observer' | 'document-ready' | 'document-idle';

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
