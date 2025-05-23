import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveColgroupProps extends PropsOf<'colgroup'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
