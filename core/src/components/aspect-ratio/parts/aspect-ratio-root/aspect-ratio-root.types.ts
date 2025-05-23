import type { PropsOf, Component } from '@builder.io/qwik';

export interface AspectRatioRootProps extends PropsOf<'div'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;

  /**
   * The desired ratio, e.g. `16 / 9`.
   * @default 1
   */
  ratio?: number;
}
