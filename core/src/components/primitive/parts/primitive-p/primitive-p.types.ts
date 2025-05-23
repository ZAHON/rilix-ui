import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitivePProps extends PropsOf<'p'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
