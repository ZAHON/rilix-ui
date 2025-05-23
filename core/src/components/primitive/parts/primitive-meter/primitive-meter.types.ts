import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveMeterProps extends PropsOf<'meter'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
