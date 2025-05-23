import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTableProps extends PropsOf<'table'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
