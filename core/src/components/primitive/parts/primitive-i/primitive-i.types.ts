import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveIProps extends PropsOf<'i'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
