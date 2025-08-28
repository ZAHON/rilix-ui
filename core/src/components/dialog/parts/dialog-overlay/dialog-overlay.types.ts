import type { PropsOf, QRL, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface DialogOverlayProps extends PropsOf<'div'> {
  /**
   * A `QRL` callback function invoked after the dialog overlay's open or close animation/transition has fully completed.
   * Use this to react once the overlay has settled in its final open or closed state, regardless of whether it was animated
   * with CSS `animation` or `transition` properties.
   */
  onOpenChangeComplete$?: QRL<(open: boolean) => void>;

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
       * A readonly signal whose value indicates the dialog's current open state.
       * It is `true` when the dialog is open, and `false` when closed.
       */
      open: ReadonlySignal<boolean>;

      /**
       * A readonly signal whose value indicates the dialog overlay's current presence state.
       * This signal reflects the different phases of the overlay's lifecycle, especially during
       * animations. It can be one of the following:
       *
       * - `"showing"`: The overlay is currently animating to an open state.
       * - `"shown"`: The overlay is fully open and visible.
       * - `"hiding"`: The overlay is currently animating to a closed state.
       * - `"hidden"`: The overlay is fully closed and not visible.
       */
      presence: ReadonlySignal<'showing' | 'shown' | 'hiding' | 'hidden'>;
    }
  ) => JSXOutput;
}
