import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSpanProps extends PropsOf<'span'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
