import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveFigcaptionProps extends PropsOf<'figcaption'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
