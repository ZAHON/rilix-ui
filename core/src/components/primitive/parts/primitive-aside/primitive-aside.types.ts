import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveAsideProps extends PropsOf<'aside'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
