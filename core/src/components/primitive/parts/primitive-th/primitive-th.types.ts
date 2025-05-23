import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveThProps extends PropsOf<'th'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
