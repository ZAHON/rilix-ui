import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSvgProps extends PropsOf<'svg'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
