import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSubProps extends PropsOf<'sub'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
