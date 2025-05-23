import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveH2Props extends PropsOf<'h2'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
