import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSectionProps extends PropsOf<'section'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
