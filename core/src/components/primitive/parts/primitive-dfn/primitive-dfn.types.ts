import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDfnProps extends PropsOf<'dfn'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
