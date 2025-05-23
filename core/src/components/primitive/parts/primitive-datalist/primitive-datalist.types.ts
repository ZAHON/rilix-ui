import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDatalistProps extends PropsOf<'datalist'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
