import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveButtonProps extends PropsOf<'button'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
