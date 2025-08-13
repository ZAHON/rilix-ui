import type { ReadonlySignal } from '@builder.io/qwik';

export interface SeparatorContextValue {
  /**
   * A readonly signal whose value is the orientation of the component.
   */
  orientation: ReadonlySignal<'horizontal' | 'vertical'>;

  /**
   * A readonly signal whose value indicates whether or not the component is purely decorative.
   * When `true`, accessibility-related attributes are updated so that the rendered element is removed from the accessibility tree.
   */
  decorative: ReadonlySignal<boolean>;
}
