import type { PropsOf, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface AccordionItemIndicatorProps extends PropsOf<'span'> {
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
       * A readonly signal whose value indicates whether the accordion item is currently open (`true`) or closed (`false`).
       */
      open: ReadonlySignal<boolean>;

      /**
       * A readonly signal whose value specifies if the accordion item is in a disabled state (`true`), preventing user interaction.
       */
      disabled: ReadonlySignal<boolean>;
    }
  ) => JSXOutput;
}
