import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveEmProps extends PropsOf<'em'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
