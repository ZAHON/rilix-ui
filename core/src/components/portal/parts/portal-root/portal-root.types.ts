import type { PropsOf, Signal, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface PortalRootProps extends PropsOf<'div'> {
  /**
   * Controls the open state of the portal.
   * When the value of the signal passed to this prop is set to `true`, the portal will be displayed using the Popover API's `showPopover()` method.
   * Setting it to `false` will hide the content via `hidePopover()`.
   * **Opening the portal is only possible in a browser environment**.
   */
  open?: Signal<boolean>;

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
       * A readonly signal whose value indicates whether the portal is currently open (`true`) or closed (`false`).
       * Its value reflects the `value` of the `open` prop passed to `Portal.Root` component.
       * If the `open` prop is not provided to `Portal.Root`, this signal's value will default to `false`.
       */
      open: ReadonlySignal<boolean>;
    }
  ) => JSXOutput;
}
