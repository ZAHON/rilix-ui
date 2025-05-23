import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveAudioProps extends PropsOf<'audio'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
