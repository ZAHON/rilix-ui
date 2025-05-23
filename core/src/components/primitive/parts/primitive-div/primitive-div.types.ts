import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDivProps extends PropsOf<'div'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
