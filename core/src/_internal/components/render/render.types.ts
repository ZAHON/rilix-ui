import type { JSXOutput, PropsOf } from '@builder.io/qwik';

export type RenderAsTag = 'a' | 'button' | 'div' | 'li' | 'nav' | 'ol' | 'span';

export type RenderProps<T extends RenderAsTag, S extends Record<string, unknown> = {}> = {
  /**
   * A string literal type used primarily for **type inference** to correctly
   * type the HTML attributes (`PropsOf<T>`) associated with the specified tag.
   * While it suggests a desired HTML element, the actual rendered element
   * depends on the implementation of `defaultRender$` or `render$`.
   */
  as: T;

  /**
   * The state of the component.
   * It will be used as a parameter for the `defaultRender$` ans `render$` callbacks.
   */
  state?: S;

  /**
   * This prop defines the default rendering logic for the component.
   * It will be used if the `render$` prop is not provided.
   */
  defaultRender$: (props: Record<string, unknown>, state: S) => JSXOutput;

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
    state: S
  ) => JSXOutput;
} & PropsOf<T>;
