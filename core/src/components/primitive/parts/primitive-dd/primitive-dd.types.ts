import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDdProps extends PropsOf<'dd'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
