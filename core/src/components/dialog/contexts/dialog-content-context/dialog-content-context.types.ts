import type { ReadonlySignal } from '@builder.io/qwik';

export interface DialogContentContextValue {
  /**
   * A readonly signal whose value indicates the dialog content's current presence state.
   * This signal reflects the different phases of the content's lifecycle, especially during
   * animations. It can be one of the following:
   *
   * - `"showing"`: The content is currently animating to an open state.
   * - `"shown"`: The content is fully open and visible.
   * - `"hiding"`: The content is currently animating to a closed state.
   * - `"hidden"`: The content is fully closed and not visible.
   */
  presence: ReadonlySignal<'showing' | 'shown' | 'hiding' | 'hidden'>;

  /**
   * A readonly signal whose value indicates whether the focus trap should have looping behavior.
   * When `true`, focus will cycle from the last to the first tabbable element and vice versa.
   */
  loop: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value indicates whether automatic scrolling to the final focused element is enabled.
   */
  scrollToFinalFocus: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value indicates whether scrolling of the page's `<body>` element is prevented when the dialog is open.
   */
  preventScroll: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value indicates whether the dialog can be closed by pressing the `Escape` key.
   */
  closeOnEscapeKeyDown: ReadonlySignal<boolean>;

  /**
   * A readonly signal whose value indicates whether the dialog can be closed by clicking or tapping outside of the dialog content.
   */
  closeOnPointerDownOutside: ReadonlySignal<boolean>;
}
