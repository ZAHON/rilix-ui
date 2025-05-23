import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveH1Props extends PropsOf<'h1'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
