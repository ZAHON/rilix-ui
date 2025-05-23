import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveMarkProps extends PropsOf<'mark'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
