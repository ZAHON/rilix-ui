import type { DialogContentProps } from './dialog-content.types';
import {
  component$,
  useId,
  useSignal,
  useComputed$,
  useTask$,
  $,
  sync$,
  useContextProvider,
  Slot,
} from '@builder.io/qwik';
import { isDev, isBrowser } from '@builder.io/qwik';
import { useBodyScrollLock, useFocusTrap } from '@/hooks';
import { composeRefs, combineStyle } from '@/utilities';
import {
  topLayersStack,
  isElementInDOM,
  isElementTabbable,
  error,
  warn,
  addEventListenerOnce,
  Render,
} from '@/_internal';
import { useDialogContext, DialogContentContext } from '../../contexts';

/**
 * Contains content to be rendered in the open dialog.
 * Renders a `<dialog>` element.
 */
export const DialogContent = component$<DialogContentProps>((props) => {
  const {
    ref: _ref,
    loop: _loop,
    initialFocus,
    finalFocus,
    scrollToFinalFocus: _scrollToFinalFocus,
    preventScroll: _preventScroll,
    closeOnEscapeKeyDown: _closeOnEscapeKeyDown,
    closeOnPointerDownOutside: _closeOnPointerDownOutside,
    onEscapeKeyDown$,
    onPointerDownOutside$,
    onOpenChangeComplete$,
    onCancel$,
    onKeyDown$,
    onPointerDown$,
    style,
    ...others
  } = props;

  const { open, setOpen$, triggerRef, ids } = useDialogContext();

  const topLayerId = useId();
  const ref = useSignal<HTMLElement | undefined>(undefined);
  const hidden = useSignal(true);
  const state = useSignal<'open' | 'closed'>('closed');
  const presence = useSignal<'showing' | 'shown' | 'hiding' | 'hidden'>('hidden');
  const loop = useComputed$(() => _loop ?? true);
  const scrollToFinalFocus = useComputed$(() => _scrollToFinalFocus ?? true);
  const preventScroll = useComputed$(() => _preventScroll ?? true);
  const closeOnEscapeKeyDown = useComputed$(() => _closeOnEscapeKeyDown ?? true);
  const closeOnPointerDownOutside = useComputed$(() => _closeOnPointerDownOutside ?? true);

  const { disable$: disableBodyScroll$, enable$: enableBodyScroll$ } = useBodyScrollLock();
  const { activate$: activateFocusTrap$, deactivate$: deactivateFocusTrap$ } = useFocusTrap({
    element: ref,
    loop,
    initialFocus: $(async () => {
      if (initialFocus && initialFocus.value) {
        return initialFocus.value;
      } else {
        if (ref.value?.hasAttribute('data-rilix-ui-alert-dialog-content')) {
          const contentRef = ref.value;
          const alertDialogCancelSelector = '[data-rilix-ui-alert-dialog-cancel]:not([data-disabled])';
          const alertDialogCancelRef = contentRef?.querySelector<HTMLElement>(alertDialogCancelSelector);

          if (alertDialogCancelRef) {
            return alertDialogCancelRef;
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      }
    }),
    finalFocus: $(async () => {
      const focusedElement = document.activeElement as HTMLElement | null;

      if (scrollToFinalFocus.value) {
        if (focusedElement && isElementInDOM(focusedElement) && isElementTabbable(focusedElement)) {
          focusedElement.blur();
          focusedElement.focus();
        }
      }

      if (finalFocus && finalFocus.value) {
        return finalFocus.value;
      } else {
        if (triggerRef.value) {
          return triggerRef.value;
        } else {
          return undefined;
        }
      }
    }),
  });

  useTask$(async ({ track, cleanup }) => {
    const isOpen = track(() => open.value);

    const contentRef = ref.value;

    if (isDev && isBrowser && contentRef && !(contentRef instanceof HTMLDialogElement)) {
      let componentName: string;

      if (contentRef.hasAttribute('data-rilix-ui-dialog-content')) {
        componentName = `'Dialog.Content'`;
      } else if (contentRef.hasAttribute('data-rilix-ui-alert-dialog-content')) {
        componentName = `'AlertDialog.Content'`;
      } else {
        componentName = "'AlertDialog.Content' or 'Dialog.Content'";
      }

      error(
        `The ${componentName} component must render a native '<dialog>' HTML element.`,
        `Ensure that your custom 'render$' function returns a '<dialog>' element.`
      );
    }

    if (isBrowser && contentRef instanceof HTMLDialogElement) {
      if (isOpen) {
        if (preventScroll.value) {
          await disableBodyScroll$();
        }

        await activateFocusTrap$();

        hidden.value = false;
        contentRef.style.removeProperty('display');

        contentRef.showModal();
        topLayersStack.add(topLayerId);

        state.value = 'open';
        contentRef.setAttribute('data-state', 'open');

        presence.value = 'showing';
        contentRef.setAttribute('data-presence', 'showing');

        cleanup(() => {
          state.value = 'closed';
          contentRef.setAttribute('data-state', 'closed');

          presence.value = 'hiding';
          contentRef.setAttribute('data-presence', 'hiding');
        });
      }

      const applyFinalState = () => {
        if (isOpen) {
          presence.value = 'shown';
          contentRef.setAttribute('data-presence', 'shown');
        } else {
          if (preventScroll.value) {
            enableBodyScroll$();
          }

          contentRef.close();
          topLayersStack.remove(topLayerId);

          deactivateFocusTrap$();

          hidden.value = true;
          contentRef.style.setProperty('display', 'none');

          presence.value = 'hidden';
          contentRef.setAttribute('data-presence', 'hidden');
        }

        if (onOpenChangeComplete$) {
          onOpenChangeComplete$(isOpen);
        }
      };

      const { animationDuration, transitionDuration } = getComputedStyle(contentRef);

      if (isDev && animationDuration !== '0s' && transitionDuration !== '0s') {
        let componentName: string;

        if (contentRef.hasAttribute('data-rilix-ui-dialog-content')) {
          componentName = `'Dialog.Content'`;
        } else if (contentRef.hasAttribute('data-rilix-ui-alert-dialog-content')) {
          componentName = `'AlertDialog.Content'`;
        } else {
          componentName = "'AlertDialog.Content' or 'Dialog.Content'";
        }

        warn(
          `CSS transitions and CSS animations both detected on ${componentName} component.`,
          `Only one of either animation type should be used.`
        );

        applyFinalState();
      } else if (animationDuration !== '0s') {
        const removeAnimationEndListener = addEventListenerOnce({
          target: contentRef,
          type: 'animationend',
          listener: applyFinalState,
        });

        cleanup(() => {
          removeAnimationEndListener();
        });
      } else if (transitionDuration !== '0s') {
        const removeTransitionEndListener = addEventListenerOnce({
          target: contentRef,
          type: 'transitionend',
          listener: applyFinalState,
        });

        cleanup(() => {
          removeTransitionEndListener();
        });
      } else {
        applyFinalState();
      }
    }
  });

  const handleCancelSync$ = sync$((event: Event) => {
    event.preventDefault();
  });

  const handleKeyDown$ = $((event: KeyboardEvent) => {
    if (event.defaultPrevented) return;

    const isOpen = open.value;
    const isActivetopLayer = topLayersStack.isActive(topLayerId);
    const isCloseOnEscapeKeyDown = closeOnEscapeKeyDown.value;

    if (isOpen && isActivetopLayer && event.key === 'Escape') {
      if (isCloseOnEscapeKeyDown) {
        setOpen$(false);
      }

      if (onEscapeKeyDown$) {
        onEscapeKeyDown$();
      }
    }
  });

  const handlePointerDown$ = $((event: PointerEvent, currentTarget: HTMLElement) => {
    if (event.defaultPrevented) return;

    const isOpen = open.value;
    const isActivetopLayer = topLayersStack.isActive(topLayerId);
    const isCloseOnPointerDownOutside = closeOnPointerDownOutside.value;

    const target = event.target as HTMLElement;

    if (isOpen && isActivetopLayer && target === currentTarget) {
      const rect = target.getBoundingClientRect();

      const isPointerDownOutside =
        rect.left > event.clientX ||
        rect.right < event.clientX ||
        rect.top > event.clientY ||
        rect.bottom < event.clientY;

      if (isPointerDownOutside) {
        if (isCloseOnPointerDownOutside) {
          setOpen$(false);
        }

        if (onPointerDownOutside$) {
          onPointerDownOutside$();
        }
      }
    }
  });

  useContextProvider(DialogContentContext, {
    presence,
    loop,
    scrollToFinalFocus,
    preventScroll,
    closeOnEscapeKeyDown,
    closeOnPointerDownOutside,
  });

  return (
    <Render
      as="dialog"
      ref={composeRefs([_ref, ref])}
      role="dialog"
      id={ids.content}
      tabIndex={-1}
      aria-labelledby={ids.title}
      aria-describedby={ids.description}
      data-rilix-ui-dialog-content
      data-state={state.value}
      data-presence={presence.value}
      onCancel$={[onCancel$, handleCancelSync$]}
      onKeyDown$={[onKeyDown$, handleKeyDown$]}
      onPointerDown$={[onPointerDown$, handlePointerDown$]}
      style={combineStyle({ display: hidden.value ? 'none' : undefined }, style)}
      state={{ open, presence }}
      defaultRender$={(props) => (
        <dialog {...props}>
          <Slot />
        </dialog>
      )}
      {...others}
    />
  );
});
