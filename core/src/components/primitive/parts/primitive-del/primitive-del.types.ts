import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDelProps extends PropsOf<'del'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
