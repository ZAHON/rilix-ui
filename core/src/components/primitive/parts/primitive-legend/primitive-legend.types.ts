import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveLegendProps extends PropsOf<'legend'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
