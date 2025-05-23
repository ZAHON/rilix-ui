import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveNoscriptProps extends PropsOf<'noscript'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
