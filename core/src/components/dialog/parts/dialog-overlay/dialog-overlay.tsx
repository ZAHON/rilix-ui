import type { DialogOverlayProps } from './dialog-overlay.types';
import { component$, useSignal, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { isDev, isBrowser } from '@builder.io/qwik/build';
import { composeRefs, combineStyle } from '@/utilities';
import { addEventListenerOnce, warn, Render } from '@/_internal';
import { useDialogContext, DialogOverlayContext } from '../../contexts';

/**
 * A layer that covers the inert portion of the view when the dialog is open.
 * Renders a `<div>` element.
 */
export const DialogOverlay = component$<DialogOverlayProps>((props) => {
  const { ref: _ref, onOpenChangeComplete$, style, ...others } = props;

  const { open } = useDialogContext();

  const ref = useSignal<HTMLElement | undefined>(undefined);
  const state = useSignal<'open' | 'closed'>('closed');
  const presence = useSignal<'showing' | 'shown' | 'hiding' | 'hidden'>('hidden');

  useTask$(({ track, cleanup }) => {
    const isOpen = track(() => open.value);

    const overlayRef = ref.value;

    if (isBrowser && overlayRef && 'popover' in HTMLElement.prototype) {
      if (isOpen) {
        overlayRef.showPopover();

        state.value = 'open';
        overlayRef.setAttribute('data-state', 'open');

        presence.value = 'showing';
        overlayRef.setAttribute('data-presence', 'showing');

        cleanup(() => {
          state.value = 'closed';
          overlayRef.setAttribute('data-state', 'closed');

          presence.value = 'hiding';
          overlayRef.setAttribute('data-presence', 'hiding');
        });
      }

      const applyFinalState = () => {
        if (isOpen) {
          presence.value = 'shown';
          overlayRef.setAttribute('data-presence', 'shown');
        } else {
          overlayRef.hidePopover();

          presence.value = 'hidden';
          overlayRef.setAttribute('data-presence', 'hidden');
        }

        if (onOpenChangeComplete$) {
          onOpenChangeComplete$(isOpen);
        }
      };

      const { animationDuration, transitionDuration } = getComputedStyle(overlayRef);

      if (isDev && animationDuration !== '0s' && transitionDuration !== '0s') {
        let componentName: string;

        if (overlayRef.hasAttribute('data-rilix-ui-dialog-overlay')) {
          componentName = `'Dialog.Overlay'`;
        } else if (overlayRef.hasAttribute('data-rilix-ui-alert-dialog-overlay')) {
          componentName = `'AlertDialog.Overlay'`;
        } else {
          componentName = "'AlertDialog.Overlay' or 'Dialog.Overlay'";
        }

        warn(
          `CSS transitions and CSS animations both detected on ${componentName} component.`,
          `Only one of either animation type should be used.`
        );

        applyFinalState();
      } else if (animationDuration !== '0s') {
        const removeAnimationEndListener = addEventListenerOnce({
          target: overlayRef,
          type: 'animationend',
          listener: applyFinalState,
        });

        cleanup(() => {
          removeAnimationEndListener();
        });
      } else if (transitionDuration !== '0s') {
        const removeTransitionEndListener = addEventListenerOnce({
          target: overlayRef,
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

  useContextProvider(DialogOverlayContext, { presence });

  return (
    <Render
      as="div"
      ref={composeRefs([_ref, ref])}
      popover="manual"
      role="presentation"
      aria-hidden="true"
      data-rilix-ui-dialog-overlay
      data-state={state.value}
      data-presence={presence.value}
      style={combineStyle(
        {
          position: 'fixed',
          inset: 0,
          width: 'unset',
          height: 'unset',
          color: 'unset',
          margin: 'unset',
          padding: 'unset',
          border: 'unset',
          overflow: 'unset',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        },
        style
      )}
      state={{ open, presence }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
