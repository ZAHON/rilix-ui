import type { PropsOf, QRL, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface CollapsiblePanelProps extends PropsOf<'div'> {
  /**
   * When `true`, the panel content will be hidden using the `hidden="until-found"` attribute.
   * This is a browser feature that defers rendering of content until it is scrolled into view
   * or a find-in-page operation matches content within it. It can improve initial page load performance.
   * @default false
   */
  hiddenUntilFound?: boolean;

  /**
   * A `QRL` callback function invoked after the collapsible panel's expansion or collapse animation/transition has fully completed.
   * Use this to react once the panel has settled in its final open or closed state, regardless of whether it was animated
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
       * A readonly signal whose value indicates the collapsible's current open state.
       * It is `true` when the collapsible panel is open, and `false` when closed.
       */
      open: ReadonlySignal<boolean>;

      /**
       * A readonly signal whose value indicates the collapsible's current disabled state.
       * It is `true` when the collapsible is prevented from user interaction.
       */
      disabled: ReadonlySignal<boolean>;

      /**
       * A readonly signal whose value indicates the collapsible panel's current presence state.
       * This signal reflects the different phases of the panel's visibility, especially during animations.
       *
       * - `"showing"`: The panel is currently animating open.
       * - `"shown"`: The panel is fully open and not animating.
       * - `"hiding"`: The panel is currently animating closed.
       * - `"hidden"`: The panel is fully closed and not animating.
       * - `undefined`: Initial state or no animation is configured/running.
       */
      presence: ReadonlySignal<'showing' | 'shown' | 'hiding' | 'hidden' | undefined>;
    }
  ) => JSXOutput;
}
