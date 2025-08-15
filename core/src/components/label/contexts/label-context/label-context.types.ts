import type { ReadonlySignal } from '@builder.io/qwik';

export interface LabelContextValue {
  /**
   * A readonly signal whose value indicates whether text selection is prevented when double-clicking the label.
   */
  preventDblClickTextSelection: ReadonlySignal<boolean>;
}
