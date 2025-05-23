import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveNavProps extends PropsOf<'nav'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
