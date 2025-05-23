import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSmallProps extends PropsOf<'small'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
