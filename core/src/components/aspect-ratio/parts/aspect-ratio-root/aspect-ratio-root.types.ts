import type { PropsOf, Component } from '@builder.io/qwik';

export interface AspectRatioRootProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.
   */
  as?: Component;

  /**
   * The desired ratio, e.g. `16 / 9`.
   * @default 1
   */
  ratio?: number;
}
