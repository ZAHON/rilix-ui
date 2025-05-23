import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDetailsProps extends PropsOf<'details'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
