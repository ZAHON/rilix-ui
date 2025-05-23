import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveRpProps extends PropsOf<'rp'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
