import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveProgressProps extends PropsOf<'progress'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
