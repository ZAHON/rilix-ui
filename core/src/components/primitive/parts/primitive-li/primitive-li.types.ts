import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveLiProps extends PropsOf<'li'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
