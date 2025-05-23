import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSelectProps extends PropsOf<'select'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
