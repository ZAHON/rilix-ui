import type { PropsOf, Signal, QRL, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface AccordionRootProps extends PropsOf<'div'> {
  /**
   * Determines whether one or multiple accordion items can be opened at the same time.
   */
  type: 'single' | 'multiple';

  /**
   * The value of the accordion item or items to expand when initially rendered.
   * When `type` is `"single"`, this array should contain at most one element.
   * Use when you do not need to control the state of the accordion items.
   */
  defaultValue?: string[];

  /**
   * The controlled value of the accordion item or items to expand.
   * When `type` is `"single"`, this array should contain at most one element.
   * Must be used in conjunction with `onValueChange$`.
   */
  value?: Signal<string[]>;

  /**
   * Event handler called when the expanded state of an accordion item or items changes.
   */
  onValueChange$?: QRL<(value: string[]) => void>;

  /**
   * When `type` is set to `"single"`, this prop determines if the currently open accordion item can be closed by clicking its trigger.
   * If `true`, clicking the trigger of an open accordion item will close it.
   * @default false
   */
  collapsible?: boolean;

  /**
   * When `true`, enables keyboard navigation using arrow keys between the accordion's item triggers.
   * @default true
   */
  arrowNavigation?: boolean;

  /**
   * When `arrowNavigation` is `true`, this determines whether keyboard focus should loop back
   * to the first accordion item trigger when the end of the list is reached (and vice-versa).
   * @default true
   */
  loop?: boolean;

  /**
   * When `true`, prevents the user from interacting with the accordion and all its items.
   * @default false
   */
  disabled?: boolean;

  /**
   * The reading direction of the accordion when applicable.
   * If omitted, assumes LTR (left-to-right) reading mode.
   * @default "ltr"
   */
  dir?: 'ltr' | 'rtl';

  /**
   * The orientation of the accordion.
   * @default "vertical"
   */
  orientation?: 'horizontal' | 'vertical';

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
       * A readonly signal whose value is an array of strings representing the currently expanded accordion item or items values.
       * This reflects the internal state of which accordion items are open.
       */
      value: ReadonlySignal<string[]>;

      /**
       * A readonly signal whose value indicates whether the entire accordion is disabled.
       * When `true`, interaction with all accordion items is prevented.
       */
      disabled: ReadonlySignal<boolean>;
    }
  ) => JSXOutput;
}
