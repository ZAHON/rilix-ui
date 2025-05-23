import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSourceProps extends PropsOf<'source'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
