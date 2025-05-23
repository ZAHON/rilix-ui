import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveAProps extends PropsOf<'a'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
