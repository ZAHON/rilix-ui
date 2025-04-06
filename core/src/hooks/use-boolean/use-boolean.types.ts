import type { QRL } from '@builder.io/qwik';

export interface UseBooleanParams {
  /**
   * The initial value for the boolean state.
   * @default false
   */
  initialState?: boolean;

  /**
   * Optional callback that is triggered whenever the boolean state changes.
   */
  onStateChange$?: QRL<(state: boolean) => void>;
}
