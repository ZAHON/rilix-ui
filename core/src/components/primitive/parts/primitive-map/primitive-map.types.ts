import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveMapProps extends PropsOf<'map'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
