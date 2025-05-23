import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveBdoProps extends PropsOf<'bdo'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
