import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSampProps extends PropsOf<'samp'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
