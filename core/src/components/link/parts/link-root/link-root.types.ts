import type { PropsOf, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface LinkRootProps extends PropsOf<'a'> {
  /**
   * The URL that the hyperlink points to.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href).
   */
  href?: string;

  /**
   * Whether the link is disabled.
   * Native navigation will be disabled, and the link will be exposed as disabled to assistive technology.
   */
  disabled?: boolean;

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
       * Whether the link is disabled.
       */
      disabled: ReadonlySignal<boolean | undefined>;
    }
  ) => JSXOutput;
}
