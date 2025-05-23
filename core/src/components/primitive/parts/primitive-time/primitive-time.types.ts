import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTimeProps extends PropsOf<'time'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
