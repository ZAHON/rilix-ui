import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSupProps extends PropsOf<'sup'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
