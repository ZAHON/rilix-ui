import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveVarProps extends PropsOf<'var'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
