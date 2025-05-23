import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveOptionProps extends PropsOf<'option'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;

  /**
   * The text content of the option.
   */
  textContent?: string;
}
