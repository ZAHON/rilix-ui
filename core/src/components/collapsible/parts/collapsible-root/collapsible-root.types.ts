import type { PropsOf, Signal, QRL, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface CollapsibleRootProps extends PropsOf<'div'> {
  /**
   * The open state of the collapsible when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the collapsible.
   * Must be used in conjunction with `onOpenChange$`.
   */
  open?: Signal<boolean>;

  /**
   * Event handler called when the open state of the collapsible changes.
   */
  onOpenChange$?: QRL<(open: boolean) => void>;

  /**
   * When `true`, prevents the user from interacting with the collapsible.
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
     * The unique ID for the collapsible panel element.
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
       * A readonly signal whose value indicates the collapsible's current open state.
       * It is `true` when the collapsible is open, and `false` when closed.
       */
      open: ReadonlySignal<boolean>;

      /**
       * A readonly signal whose value indicates the collapsible's current disabled state.
       * It is `true` when the collapsible is prevented from user interaction.
       */
      disabled: ReadonlySignal<boolean>;
    }
  ) => JSXOutput;
}
