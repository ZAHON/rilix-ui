import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveHrProps extends PropsOf<'hr'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
