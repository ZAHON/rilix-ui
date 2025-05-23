import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveMainProps extends PropsOf<'main'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
