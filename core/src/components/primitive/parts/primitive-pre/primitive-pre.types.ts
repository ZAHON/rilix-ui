import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitivePreProps extends PropsOf<'pre'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
