import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveInputProps extends PropsOf<'input'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
