import type { ReadonlySignal } from '@builder.io/qwik';

export interface LabelContextValue {
  /**
   * When `true`, text selection is prevented when double clicking label.
   */
  preventDblClickTextSelection: ReadonlySignal<boolean>;
}
