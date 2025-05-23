import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTextareaProps extends PropsOf<'textarea'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
