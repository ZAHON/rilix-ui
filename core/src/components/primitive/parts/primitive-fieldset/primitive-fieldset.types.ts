import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveFieldsetProps extends PropsOf<'fieldset'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
