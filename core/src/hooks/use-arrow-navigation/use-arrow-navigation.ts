import type { UseArrowNavigationParams } from './use-arrow-navigation.types';
import type { ReadonlySignal } from '@builder.io/qwik';
import { useSignal, useTask$, $ } from '@builder.io/qwik';
import { isBrowser, isDev, isServer } from '@builder.io/qwik/build';
import { unwrapSignal, isElementInDOM, isElementTabbable, error } from '@/_internal';

/**
 * A hook for enabling keyboard arrow navigation between focusable items within a specified element.
 */
export const useArrowNavigation = (params: UseArrowNavigationParams) => {
  const { element, itemSelectors, preventScroll, loop, dir, orientation } = params;

  const active = useSignal(false);

  useTask$(({ track, cleanup }) => {
    const _active = track(() => unwrapSignal(active));
    const _element = track(() => unwrapSignal(element));
    const _itemSelectors = track(() => unwrapSignal(itemSelectors));
    const _preventScroll = track(() => unwrapSignal(preventScroll) ?? true);
    const _loop = track(() => unwrapSignal(loop) ?? true);
    const _dir = track(() => unwrapSignal(dir) ?? 'ltr');
    const _orientation = track(() => unwrapSignal(orientation) ?? 'horizontal');

    if (isBrowser && _active && _element && isElementInDOM(_element)) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.defaultPrevented) return;

        const target = event.target as HTMLElement;
        const allItems = Array.from(_element.querySelectorAll<HTMLElement>(_itemSelectors));
        const itemCollection = allItems.filter(
          (item) => isElementTabbable(item) && !['INPUT', 'TEXTAREA'].includes(item.nodeName)
        );
        const itemIndex = itemCollection.findIndex((item) => item === target);
        const itemCount = itemCollection.length;

        if (itemIndex === -1) return;

        const allowedKeys = (() => {
          if (_orientation === 'horizontal') {
            return ['Home', 'End', 'ArrowLeft', 'ArrowRight'];
          } else {
            return ['Home', 'End', 'ArrowUp', 'ArrowDown'];
          }
        })();

        if (!allowedKeys.includes(event.key)) return;
        if (_preventScroll) event.preventDefault();

        let nextIndex = itemIndex;

        const homeIndex = 0;
        const endIndex = itemCount - 1;

        const getNextIndex = (currentIndex: number) => {
          const newIndex = currentIndex + 1;

          if (newIndex > endIndex) {
            return _loop ? homeIndex : endIndex;
          }

          return newIndex;
        };

        const getPrevIndex = (currentIndex: number) => {
          const newIndex = currentIndex - 1;

          if (newIndex < homeIndex) {
            return _loop ? endIndex : homeIndex;
          }

          return newIndex;
        };

        switch (event.key) {
          case 'Home':
            nextIndex = homeIndex;
            break;
          case 'End':
            nextIndex = endIndex;
            break;
          case 'ArrowRight':
            if (_orientation === 'horizontal') {
              if (_dir === 'ltr') {
                nextIndex = getNextIndex(itemIndex);
              } else {
                nextIndex = getPrevIndex(itemIndex);
              }
            }
            break;
          case 'ArrowDown':
            if (_orientation === 'vertical') {
              nextIndex = getNextIndex(itemIndex);
            }
            break;
          case 'ArrowLeft':
            if (_orientation === 'horizontal') {
              if (_dir === 'ltr') {
                nextIndex = getPrevIndex(itemIndex);
              } else {
                nextIndex = getNextIndex(itemIndex);
              }
            }
            break;
          case 'ArrowUp':
            if (_orientation === 'vertical') {
              nextIndex = getPrevIndex(itemIndex);
            }
            break;
        }

        const finalIndex = Math.max(homeIndex, Math.min(endIndex, nextIndex));

        if (itemCollection[finalIndex]) {
          itemCollection[finalIndex].focus();
        }
      };

      _element.addEventListener('keydown', handleKeyDown);
      _element.setAttribute('data-rilix-ui-arrow-navigation', '');

      cleanup(() => {
        _element.removeEventListener('keydown', handleKeyDown);
        _element.removeAttribute('data-rilix-ui-arrow-navigation');
      });
    }
  });

  const activate$ = $(() => {
    if (isDev && isServer) {
      error(
        `The 'activate$' QRL function from the 'useArrowNavigation' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    if (!active.value) {
      active.value = true;
    }
  });

  const deactivate$ = $(() => {
    if (isDev && isServer) {
      error(
        `The 'deactivate$' QRL function from the 'useArrowNavigation' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    if (active.value) {
      active.value = false;
    }
  });

  return {
    /**
     * A readonly signal whose value indicates whether the arrow navigation is currently active.
     */
    active: active as ReadonlySignal<typeof active.value>,

    /**
     * A `QRL` function to activate the arrow navigation functionality, enabling keyboard control.
     */
    activate$: activate$,

    /**
     * A `QRL` function to deactivate the arrow navigation functionality, disabling keyboard control.
     */
    deactivate$: deactivate$,
  };
};
