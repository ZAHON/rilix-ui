import type { SignalOrReadonlySignal } from '@/types';
import type { PropsOf, QRL, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface DialogContentProps extends PropsOf<'dialog'> {
  /**
   * When `true`, enables "looping" behavior.
   * If the user presses `Tab` from the last focusable element, focus will cycle
   * back to the first. If `Shift + Tab` from the first, focus will go to the last.
   * @default true
   */
  loop?: boolean;

  /**
   * Specifies the element that should receive focus when the dialog is opened.
   * If `initialFocus` is not passed or its `value` is `undefined` or `null`,
   * the first tabbable element within the dialog content will receive focus.
   * If the dialog content itself does not contain any tabbable elements, focus will then fall back to the dialog content itself.
   */
  initialFocus?: SignalOrReadonlySignal<HTMLElement | undefined | null>;

  /**
   * Specifies the element that should receive focus when the dialog is closed.
   * If `finalFocus` is not passed or its `value` is `undefined` or `null`, and the dialog's trigger exists, focus will
   * always return to the trigger element. Otherwise, focus will attempt to return to the element that was focused before the dialog was opened.
   */
  finalFocus?: SignalOrReadonlySignal<HTMLElement | undefined | null>;

  /**
   * When `true`, enables automatic scrolling to the element that receives focus after the dialog is closed.
   * This is useful to ensure the final focused element (e.g., dialog's trigger) is visible within the viewport.
   * @default true
   */
  scrollToFinalFocus?: boolean;

  /**
   * When `true`, prevents scrolling of the page's `<body>` element when the dialog is open.
   * @default true
   */
  preventScroll?: boolean;

  /**
   * When `true`, enables closing the dialog by pressing the `Escape` key.
   * @default true
   */
  closeOnEscapeKeyDown?: boolean;

  /**
   * When `true`, the dialog will close automatically if the user clicks or taps outside of the dialog content.
   * @default true
   */
  closeOnPointerDownOutside?: boolean;

  /**
   * A `QRL` callback function invoked when the `Escape` key is pressed while the dialog is open.
   * This can be used to perform side effects, such as logging or analytics, without
   * affecting the default close behavior.
   */
  onEscapeKeyDown$?: QRL<() => void>;

  /**
   * A `QRL` callback function invoked when a pointerdown event is detected outside the dialog content.
   * This can be used to perform side effects, such as logging or analytics, without
   * affecting the default close behavior.
   */
  onPointerDownOutside$?: QRL<() => void>;

  /**
   * A `QRL` callback function invoked after the dialog content's open or close animation/transition has fully completed.
   * Use this to react once the content has settled in its final open or closed state, regardless of whether it was animated
   * with CSS `animation` or `transition` properties.
   */
  onOpenChangeComplete$?: QRL<(open: boolean) => void>;

  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   * Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.
   */
  render$?: (
    /**
     * These are the standard HTML attributes and properties that should be applied to your custom rendered element.
     * Spreading these props ensures that your component maintains its intended behavior, accessibility features, and proper integration with the DOM.
     */
    props: Record<string, unknown>,

    /**
     * An object that provides access to the internal state of the component.
     */
    state: {
      /**
       * A readonly signal whose value indicates the dialog's current open state.
       * It is `true` when the dialog is open, and `false` when closed.
       */
      open: ReadonlySignal<boolean>;

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
    }
  ) => JSXOutput;
}
