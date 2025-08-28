import type { UseFocusTrapParams, FocusTrapAPI } from './use-focus-trap.types';
import type { ReadonlySignal } from '@builder.io/qwik';
import { useStore, $, useSignal, useTask$, isSignal } from '@builder.io/qwik';
import { isBrowser, isDev, isServer } from '@builder.io/qwik';
import { unwrapSignal, isElementInDOM, error } from '@/_internal';
import {
  createFocusTrapsStack,
  focus,
  focusFirst,
  getTabbableCandidates,
  isValidInitialFocus,
  isValidFinalFocus,
  getTabbableEdges,
} from './utilities';

/**
 * Manages a stack of active focus traps. The most recently activated trap is always at the top,
 * ensuring that only one trap is actively managing focus at a time. This is crucial for
 * handling nested components like modals or side panels correctly.
 */
const focusTrapsStack = createFocusTrapsStack();

/**
 * A hook for trapping keyboard focus within a given element, offering optional looping and control over initial and final focus.
 */
export const useFocusTrap = (params: UseFocusTrapParams) => {
  const { element, loop, initialFocus, finalFocus, onInitialFocus$, onFinalFocus$ } = params;

  const focusTrap = useStore<FocusTrapAPI>({
    paused: false,
    pause$: $(function (this: FocusTrapAPI) {
      this.paused = true;
    }),
    resume$: $(function (this: FocusTrapAPI) {
      this.paused = false;
    }),
  });

  const active = useSignal(false);
  const lastFocusedElementRef = useSignal<HTMLElement | null>(null);
  const originalElementTabIndex = useSignal<string | null>(null);

  useTask$(({ track, cleanup }) => {
    const isActive = track(() => active.value);
    const isPaused = track(() => focusTrap.paused);

    const elementRef = element.value;

    if (isBrowser && isActive) {
      const handleFocusIn = (event: FocusEvent) => {
        if (isPaused || !elementRef || !isElementInDOM(elementRef)) return;

        const target = event.target as HTMLElement | null;

        if (elementRef.contains(target)) {
          lastFocusedElementRef.value = target;
        } else {
          setTimeout(() => {
            if (lastFocusedElementRef.value) {
              focus({ element: lastFocusedElementRef.value, select: true });
            }
          }, 0);
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        if (focusTrap.paused || !elementRef || !isElementInDOM(elementRef)) return;

        const relatedTarget = event.relatedTarget as HTMLElement | null;

        // A `focusout` event with a `null` `relatedTarget` will happen in at least two cases:
        //
        // 1. When the user switches app/tabs/windows/the browser itself loses focus.
        // 2. In Google Chrome, when the focused element is removed from the DOM.
        //
        // We let the browser do its thing here because:
        //
        // 1. The browser already keeps a memory of what's focused for when the page gets refocused.
        // 2. In Google Chrome, if we try to focus the deleted focused element (as per below), it
        //    throws the CPU to 100%, so we avoid doing anything for this reason here too.
        if (relatedTarget === null) return;

        // If the focus has moved to an actual legitimate element (`relatedTarget !== null`)
        // that is outside the container, we move focus to the last valid focused element inside.
        if (!elementRef.contains(relatedTarget)) {
          focus({ element: lastFocusedElementRef.value, select: true });
        }
      };

      // When the focused element gets removed from the DOM, browsers move focus
      // back to the document.body. In this case, we move focus to the container
      // to keep focus trapped correctly.
      const handleMutations = (mutations: MutationRecord[]) => {
        const focusedElement = document.activeElement as HTMLElement | null;

        if (focusedElement !== document.body) return;

        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus({ element: elementRef });
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      const mutationObserver = new MutationObserver(handleMutations);

      if (elementRef && isElementInDOM(elementRef)) {
        mutationObserver.observe(elementRef, { childList: true, subtree: true });
      }

      cleanup(() => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
        mutationObserver.disconnect();
      });
    }
  });

  useTask$(async ({ track, cleanup }) => {
    const isActive = track(() => active.value);
    const _initialFocus = track(() => (isSignal(initialFocus) ? initialFocus.value : initialFocus));
    const _finalFocus = track(() => (isSignal(finalFocus) ? finalFocus.value : finalFocus));

    track(() => focusTrap);

    const elementRef = element.value;

    if (isBrowser && isActive && elementRef) {
      focusTrapsStack.add(focusTrap);
      elementRef.setAttribute('data-rilix-ui-focus-trap', '');

      const previouslyFocusedElement = document.activeElement as HTMLElement | null;
      const hasFocusedCandidate = elementRef.contains(previouslyFocusedElement);

      if (!hasFocusedCandidate || elementRef instanceof HTMLDialogElement) {
        // Remove the `inert` attribute to allow focus within the `<dialog>` element.
        // This is necessary because we are now ready to set the initial focus
        // using our custom logic, which requires the element to be interactive.
        if (elementRef instanceof HTMLDialogElement) {
          elementRef.inert = false;
        }

        const tabbableCandidates = getTabbableCandidates(elementRef);

        if (_initialFocus) {
          if (typeof _initialFocus === 'function') {
            try {
              const resolvedInitialFocus = await _initialFocus();

              if (isValidInitialFocus({ element: resolvedInitialFocus, container: elementRef })) {
                focus({ element: resolvedInitialFocus, select: true });
              } else {
                focusFirst({ candidates: tabbableCandidates, select: true });
              }
            } catch {
              focusFirst({ candidates: tabbableCandidates, select: true });
            }
          } else {
            if (isValidInitialFocus({ element: _initialFocus, container: elementRef })) {
              focus({ element: _initialFocus, select: true });
            } else {
              focusFirst({ candidates: tabbableCandidates, select: true });
            }
          }
        } else {
          focusFirst({ candidates: tabbableCandidates, select: true });
        }

        if (document.activeElement === previouslyFocusedElement) {
          focus({ element: elementRef });
        }

        if (onInitialFocus$) {
          onInitialFocus$();
        }
      }

      cleanup(() => {
        setTimeout(async () => {
          if (_finalFocus) {
            if (typeof _finalFocus === 'function') {
              try {
                const resolvedFinalFocus = await _finalFocus();

                if (isValidFinalFocus(resolvedFinalFocus)) {
                  focus({ element: resolvedFinalFocus, select: true });
                } else {
                  focus({ element: previouslyFocusedElement ?? document.body, select: true });
                }
              } catch {
                focus({ element: previouslyFocusedElement ?? document.body, select: true });
              }
            } else {
              if (isValidFinalFocus(_finalFocus)) {
                focus({ element: _finalFocus, select: true });
              } else {
                focus({ element: previouslyFocusedElement ?? document.body, select: true });
              }
            }
          } else {
            focus({ element: previouslyFocusedElement ?? document.body, select: true });
          }

          if (onFinalFocus$) {
            onFinalFocus$();
          }

          focusTrapsStack.remove(focusTrap);
          elementRef.removeAttribute('data-rilix-ui-focus-trap');
        }, 0);
      });
    }
  });

  useTask$(({ track, cleanup }) => {
    const isActive = track(() => active.value);
    const isLoop = track(() => unwrapSignal(loop));

    track(() => focusTrap.paused);

    const elementRef = element.value;

    if (isBrowser && isActive && elementRef) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!isLoop && !isActive) return;
        if (focusTrap.paused) return;

        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement as HTMLElement | null;

        if (isTabKey && focusedElement) {
          const container = event.currentTarget as HTMLElement;
          const [first, last] = getTabbableEdges(container);
          const hasTabbableElementsInside = first && last;

          if (!hasTabbableElementsInside) {
            if (focusedElement === container) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (isLoop) focus({ element: first, select: true });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (isLoop) focus({ element: last, select: true });
            }
          }
        }
      };

      elementRef.addEventListener('keydown', handleKeyDown);

      cleanup(() => {
        elementRef.removeEventListener('keydown', handleKeyDown);
      });
    }
  });

  const activate$ = $(() => {
    if (isDev && isServer) {
      error(
        `The 'activate$' QRL function from the 'useFocusTrap' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    const elementRef = element.value;

    if (!active.value && elementRef) {
      originalElementTabIndex.value = elementRef.getAttribute('tabindex');
      elementRef.setAttribute('tabindex', '-1');

      // Set the `inert` attribute to prevent the browser's native `<dialog>` element from
      // managing focus. We do this to take full control of focus management within the hook.
      if (elementRef instanceof HTMLDialogElement) {
        elementRef.inert = true;
      }

      active.value = true;
    }
  });

  const deactivate$ = $(() => {
    if (isDev && isServer) {
      error(
        `The 'deactivate$' QRL function from the 'useFocusTrap' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    const elementRef = element.value;

    if (active.value && elementRef) {
      if (originalElementTabIndex.value) {
        elementRef.setAttribute('tabindex', originalElementTabIndex.value);
      } else {
        elementRef.removeAttribute('tabindex');
      }

      active.value = false;
    }
  });

  return {
    /**
     * A readonly signal whose value indicates whether the focus trap is currently active.
     * When `true`, the trap is enabled and managing focus.
     */
    active: active as ReadonlySignal<typeof active.value>,

    /**
     * A `QRL` function to activate the focus trap. When called, it ensures that focus
     * is contained within the element. It attempts to move focus to the `initialFocus`
     * element (if specified), or to the first tabbable element within the container.
     */
    activate$: activate$,

    /**
     * A `QRL` function to deactivate the focus trap. This will disable the trap's
     * behavior and return focus to the `finalFocus` element (if specified) or to
     * the element that had focus before the trap was activated.
     */
    deactivate$: deactivate$,
  };
};
