import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveAreaProps extends PropsOf<'area'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
