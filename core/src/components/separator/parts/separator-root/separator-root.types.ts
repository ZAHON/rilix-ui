import type { PropsOf, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface SeparatorRootProps extends PropsOf<'div'> {
  /**
   * The orientation of the component.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Whether or not the component is purely decorative.
   * When `true`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.
   */
  decorative?: boolean;

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
       * The orientation of the component.
       */
      orientation: ReadonlySignal<'horizontal' | 'vertical'>;

      /**
       * Whether or not the component is purely decorative.
       * When `true`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.
       */
      decorative: ReadonlySignal<boolean | undefined>;
    }
  ) => JSXOutput;
}
