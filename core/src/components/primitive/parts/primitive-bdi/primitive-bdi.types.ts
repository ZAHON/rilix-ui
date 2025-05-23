import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveBdiProps extends PropsOf<'bdi'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
