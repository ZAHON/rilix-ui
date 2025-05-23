import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDtProps extends PropsOf<'dt'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
