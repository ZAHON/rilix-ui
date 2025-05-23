import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveCiteProps extends PropsOf<'cite'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
