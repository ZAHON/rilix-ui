import { $ } from '@builder.io/qwik';
import { isBrowser, isDev, isServer } from '@builder.io/qwik/build';
import { error, isIOS, setStyle, setStyleProperty } from '@/_internal';
import { createBodyScrollLockState, getPaddingProperty } from './utilities';

/**
 * A private, shared state for managing the scroll lock on the `<body>` element.
 * This state is used to track the number of active scroll locks and to store the cleanup function.
 */
const bodyScrollLockState = createBodyScrollLockState();

/**
 * A hook to enable and disable `<body>` element scrolling, preventing the content behind a modal or overlay from scrolling.
 */
export const useBodyScrollLock = () => {
  const disable$ = $(() => {
    if (isDev && isServer) {
      error(
        `The 'disable$' QRL function from the 'useBodyScrollLock' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    if (isBrowser) {
      bodyScrollLockState.incrementCount();

      if (document.body.hasAttribute('data-rilix-ui-body-scroll-lock')) return;

      const win = document.defaultView ?? window;
      const scrollbarWidth = win.innerWidth - document.documentElement.clientWidth;

      const paddingProperty = getPaddingProperty();
      const paddingPropertyValue = `calc(${window.getComputedStyle(document.body)[paddingProperty]} + ${scrollbarWidth}px)`;

      const restoreBodyStyleProperty = setStyleProperty({
        element: document.body,
        property: '--rilix-ui-body-scrollbar-width',
        value: `${scrollbarWidth}px`,
      });

      if (isIOS()) {
        const scrollX = win.screenX;
        const scrollY = win.screenY;

        const offsetLeft = win.visualViewport?.offsetLeft ?? 0;
        const offsetTop = win.visualViewport?.offsetTop ?? 0;

        const restoreBodyStyle = setStyle({
          element: document.body,
          style: {
            position: 'fixed',
            overflow: 'hidden',
            top: `${-(scrollY - Math.floor(offsetTop))}px`,
            left: `${-(scrollX - Math.floor(offsetLeft))}px`,
            right: '0',
            [paddingProperty]: paddingPropertyValue,
          },
        });

        bodyScrollLockState.setCleanup(() => {
          restoreBodyStyle();
          restoreBodyStyleProperty();

          win.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
        });
      } else {
        const restoreBodyStyle = setStyle({
          element: document.body,
          style: {
            overflow: 'hidden',
            [paddingProperty]: paddingPropertyValue,
          },
        });

        bodyScrollLockState.setCleanup(() => {
          restoreBodyStyle();
          restoreBodyStyleProperty();
        });
      }

      document.body.setAttribute('data-rilix-ui-body-scroll-lock', '');
    }
  });

  const enable$ = $(() => {
    if (isDev && isServer) {
      error(
        `The 'enable$' QRL function from the 'useBodyScrollLock' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    if (isBrowser) {
      bodyScrollLockState.decrementCount();

      if (bodyScrollLockState.getCount() !== 0) return;

      const cleanup = bodyScrollLockState.getCleanup();

      if (cleanup) {
        cleanup();
        document.body.removeAttribute('data-rilix-ui-body-scroll-lock');
        bodyScrollLockState.resetCleanup();
      }
    }
  });

  const clearAll$ = $(() => {
    if (isDev && isServer) {
      error(
        `The 'clearAll$' QRL function from the 'useBodyScrollLock' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    if (isBrowser) {
      if (document.body.hasAttribute('data-rilix-ui-body-scroll-lock')) {
        const cleanup = bodyScrollLockState.getCleanup();

        if (cleanup) {
          cleanup();
          document.body.removeAttribute('data-rilix-ui-body-scroll-lock');
          bodyScrollLockState.resetCleanup();
          bodyScrollLockState.resetCount();
        }
      }
    }
  });

  return {
    /**
     * A `QRL` function that disables scrolling on the `<body>` element.
     * This function safely handles requests from multiple components
     * to ensure the scroll lock is applied correctly across the application.
     */
    disable$: disable$,

    /**
     * A `QRL` function that enables scrolling on the `<body>` element.
     * Scrolling is re-enabled only after all components that requested a scroll lock
     * have released it.
     */
    enable$: enable$,

    /**
     * A `QRL` function that immediately clears any active scroll locks and restores
     * scrolling on the `<body>` element.
     */
    clearAll$: clearAll$,
  };
};
