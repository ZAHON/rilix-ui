import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveCanvasProps extends PropsOf<'canvas'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
