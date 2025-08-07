import type { PropsOf, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface AccordionItemProps extends PropsOf<'div'> {
  /**
   * A unique identifier for the accordion item.
   * This is used to identify the item and control its open/closed state within the accordion component.
   */
  value: string;

  /**
   * When `true`, prevents the user from interacting with the accordion item.
   * @default false
   */
  disabled?: boolean;

  /**
   * An optional object to override the default generated IDs for internal elements.
   * This is useful when you need to ensure specific, predictable IDs for integration with external tools,
   * testing frameworks, or for more fine-grained control over accessibility attributes.
   */
  ids?: Partial<{
    /**
     * The ID of the trigger element for the accordion item.
     * This ID is used to associate the trigger with its corresponding panel for accessibility purposes.
     */
    trigger: string;

    /**
     * The ID of the panel element for the accordion item.
     * This ID is used for accessibility to connect the panel with its trigger.
     */
    panel: string;
  }>;

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
       * A readonly signal whose value is the unique identifier for the accordion item.
       * This is used to identify the item and control its open/closed state within the accordion component.
       */
      value: ReadonlySignal<string>;

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
