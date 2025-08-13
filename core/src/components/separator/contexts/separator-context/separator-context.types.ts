import type { ReadonlySignal } from '@builder.io/qwik';

export interface SeparatorContextValue {
  /**
   * The orientation of the component.
   */
  orientation: ReadonlySignal<'horizontal' | 'vertical'>;

  /**
   * Whether or not the component is purely decorative.
   * When `true`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.
   */
  decorative: ReadonlySignal<boolean | undefined>;
}
