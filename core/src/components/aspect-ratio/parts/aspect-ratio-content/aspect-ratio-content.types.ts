import type { PropsOf, FunctionComponent } from '@builder.io/qwik';

export interface AspectRatioContentProps extends PropsOf<'div'> {
  /**
   * The component that this component should render as.
   */
  as?: FunctionComponent;
}
