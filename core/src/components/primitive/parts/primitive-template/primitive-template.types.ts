import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTemplateProps extends PropsOf<'template'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
