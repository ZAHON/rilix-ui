import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveFigureProps extends PropsOf<'figure'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
