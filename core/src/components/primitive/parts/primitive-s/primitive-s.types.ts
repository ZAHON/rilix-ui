import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSProps extends PropsOf<'s'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
