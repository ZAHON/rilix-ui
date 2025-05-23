import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveColProps extends PropsOf<'col'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
