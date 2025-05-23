import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveWbrProps extends PropsOf<'wbr'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
