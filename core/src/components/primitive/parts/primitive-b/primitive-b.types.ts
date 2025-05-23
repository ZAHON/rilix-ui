import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveBProps extends PropsOf<'b'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
