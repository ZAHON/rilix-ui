import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTheadProps extends PropsOf<'thead'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
