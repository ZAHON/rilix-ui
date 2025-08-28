import type { QRL } from '@builder.io/qwik';

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
  pause$: QRL<() => void>;

  /**
   * Resumes the focus trap. This will reactivate the focus trap's behavior,
   * ensuring focus is confined to the trapped element again.
   */
  resume$: QRL<() => void>;
}
