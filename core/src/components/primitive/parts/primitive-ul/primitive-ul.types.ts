import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveUlProps extends PropsOf<'ul'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
