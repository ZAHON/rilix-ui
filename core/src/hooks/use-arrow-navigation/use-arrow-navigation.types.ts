import type { SignalOrReadonlySignal } from '@/types';

export interface UseArrowNavigationParams {
  /**
   * The container element within which arrow navigation will be active.
   */
  element: SignalOrReadonlySignal<HTMLElement | undefined | null>;

  /**
   * CSS selector(s) used to identify the navigable items within the container element.
   */
  itemSelectors: string | SignalOrReadonlySignal<string>;

  /**
   * Determines whether the default scroll behavior should be prevented when navigating.
   * @default true
   */
  preventScroll?: boolean | SignalOrReadonlySignal<boolean>;

  /**
   * Determines whether navigation should loop from the last item to the first, and vice-versa.
   * @default true
   */
  loop?: boolean | SignalOrReadonlySignal<boolean>;

  /**
   * Specifies the direction of navigation for `"horizontal"` orientation (`"ltr"` for left-to-right, `"rtl"` for right-to-left).
   * @default "ltr"
   */
  dir?: 'ltr' | 'rtl' | SignalOrReadonlySignal<'ltr' | 'rtl'>;

  /**
   * Specifies the orientation of arrow navigation.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical' | SignalOrReadonlySignal<'horizontal' | 'vertical'>;
}
