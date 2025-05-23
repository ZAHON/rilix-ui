import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveSummaryProps extends PropsOf<'summary'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
