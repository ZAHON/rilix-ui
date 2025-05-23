import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveOutputProps extends PropsOf<'output'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
