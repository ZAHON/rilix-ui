import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveFormProps extends PropsOf<'form'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
