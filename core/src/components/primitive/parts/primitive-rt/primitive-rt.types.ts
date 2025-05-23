import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveRtProps extends PropsOf<'rt'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
