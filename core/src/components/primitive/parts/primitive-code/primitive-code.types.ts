import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveCodeProps extends PropsOf<'code'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
