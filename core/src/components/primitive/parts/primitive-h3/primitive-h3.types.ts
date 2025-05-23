import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveH3Props extends PropsOf<'h3'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
