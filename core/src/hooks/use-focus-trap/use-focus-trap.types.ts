import type { SignalOrReadonlySignal } from '@/types';
import type { QRL } from '@builder.io/qwik';

export interface UseFocusTrapParams {
  /**
   * The signal that resolves to the HTML element in which focus should be trapped.
   */
  element: SignalOrReadonlySignal<HTMLElement | undefined | null>;

  /**
   * When `true`, enables "looping" behavior for the focus trap.
   * If the user presses `Tab` from the last focusable element, focus will cycle
   * back to the first. If `Shift + Tab` from the first, focus will go to the last.
   * @default false
   */
  loop?: boolean | SignalOrReadonlySignal<boolean>;

  /**
   * Specifies the element that should receive focus when the focus trap is activated.
   * This can be a `Signal` that resolves to an element, or a `QRL` function that returns
   * an element (or a `Promise` resolving to one). If the provided `initialFocus` is not
   * a tabbable element, or if not provided, the first tabbable element within the `element`
   * will be focused. If the `element` itself does not contain any tabbable elements,
   * focus will then fall back to the `element` itself.
   */
  initialFocus?:
    | SignalOrReadonlySignal<HTMLElement | undefined | null>
    | QRL<() => HTMLElement | undefined | null>
    | QRL<() => Promise<HTMLElement | undefined | null>>;

  /**
   * Specifies the element that should receive focus when the focus trap is deactivated.
   * This can be a `Signal` resolving to an element, or a `QRL` function that returns
   * an element (or a `Promise` resolving to one). If not provided or if the provided
   * `finalFocus` is not a tabbable element, focus will attempt to return to the
   * element that was focused before the trap was activated, or to `document.body` as a fallback.
   */
  finalFocus?:
    | SignalOrReadonlySignal<HTMLElement | undefined | null>
    | QRL<() => HTMLElement | undefined | null>
    | QRL<() => Promise<HTMLElement | undefined | null>>;

  /**
   * Optional `QRL` callback function invoked when the focus trap is successfully activated
   * and the `initialFocus` (or the first tabbable element) has received focus.
   * This can be used for side effects, like logging or setting internal state,
   * after the trap's initial focus routine completes.
   */
  onInitialFocus$?: QRL<() => void>;

  /**
   * Optional `QRL` callback function invoked when the focus trap is successfully deactivated
   * and focus has been returned to the `finalFocus` or the previously
   * focused element. This is useful for cleanup or state updates after the
   * trap's deactivation routine finishes.
   */
  onFinalFocus$?: QRL<() => void>;
}

export interface FocusTrapAPI {
  /**
   * Indicates whether the focus trap is currently paused.
   * When `true`, the focus trap will not actively manage focus.
   */
  paused: boolean;

  /**
   * Pauses the focus trap. When paused, the trap will temporarily stop
   * controlling focus, allowing focus to move freely outside the trapped element.
   */
  pause$: QRL<(this: FocusTrapAPI) => void>;

  /**
   * Resumes the focus trap. This will reactivate the focus trap's behavior,
   * ensuring focus is confined to the trapped element again.
   */
  resume$: QRL<(this: FocusTrapAPI) => void>;
}
