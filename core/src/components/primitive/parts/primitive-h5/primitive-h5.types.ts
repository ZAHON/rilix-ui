import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveH5Props extends PropsOf<'h5'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
