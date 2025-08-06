import type { ReadonlySignal, QRL } from '@builder.io/qwik';

export interface PortalContextValue {
  /**
   * A readonly signal that reflects the current open state of the portal.
   * Its value reflects the `value` of the `open` prop passed to the `Portal.Root` component.
   * If the `open` prop is not provided to `Portal.Root`, this signal's value will be `false`.
   * Its value is `true` when the portal is displayed and `false` when it's hidden.
   */
  open: ReadonlySignal<boolean>;

  /**
   * A `QRL` function used to programmatically control the open state of the portal.
   * Calling this function with `true` will attempt to open the portal, while calling it with `false` will hide it.
   * This action directly changes the `value` of the signal passed via the `open` prop to the `Portal.Root` component,
   * but only if the `open` prop was actually provided to `Portal.Root`. Otherwise, calling this function with any value will have no effect.
   */
  setOpen$: QRL<(open: boolean) => void>;
}
