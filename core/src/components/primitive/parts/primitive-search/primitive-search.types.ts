import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSearchProps extends PropsOf<'search'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
