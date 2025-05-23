import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveKbdProps extends PropsOf<'kbd'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
