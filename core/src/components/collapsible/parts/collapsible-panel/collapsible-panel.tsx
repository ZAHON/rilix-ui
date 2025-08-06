import type { CollapsiblePanelProps } from './collapsible-panel.types';
import { component$, useSignal, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { isBrowser, isDev } from '@builder.io/qwik/build';
import { composeRefs, combineStyle } from '@/utilities';
import { Render } from '@/_internal';
import { useCollapsibleContext, CollapsiblePanelContext } from '../../contexts';

/**
 * The expandable and collapsible wrapper for the actual content.
 * Renders a `<div>` element.
 */
export const CollapsiblePanel = component$<CollapsiblePanelProps>((props) => {
  const { ref: _ref, onOpenChangeComplete$, style, ...others } = props;

  const { open, disabled, ids } = useCollapsibleContext();

  const ref = useSignal<HTMLElement | undefined>(undefined);
  const hidden = useSignal(!open.value);
  const presence = useSignal<'showing' | 'shown' | 'hiding' | 'hidden'>(open.value ? 'shown' : 'hidden');
  const isContentOverflowHidden = useSignal(!open.value);
  const preventInitialAnimation = useSignal(true);

  useTask$(({ track, cleanup }) => {
    const _open = track(() => open.value);
    const _ref = track(() => ref.value);

    if (isBrowser && _ref) {
      if (preventInitialAnimation.value) {
        preventInitialAnimation.value = false;

        _ref.style.removeProperty('animation-duration');
        _ref.style.removeProperty('transition-duration');
      }

      if (_open) {
        hidden.value = false;

        const { transitionDuration } = getComputedStyle(_ref);

        if (transitionDuration !== '0s') {
          _ref.style.setProperty('display', 'grid');
          _ref.style.setProperty('grid-template-rows', '0fr');

          setTimeout(() => {
            _ref.style.setProperty('grid-template-rows', '1fr');
          }, 0);
        }

        _ref.setAttribute('data-presence', 'showing');
      } else {
        isContentOverflowHidden.value = true;

        _ref.setAttribute('data-presence', 'hiding');
      }

      const applyFinalState = () => {
        if (_open) {
          presence.value = 'shown';
          isContentOverflowHidden.value = false;

          _ref.setAttribute('data-presence', 'shown');
        } else {
          hidden.value = true;
          presence.value = 'hidden';

          _ref.setAttribute('data-presence', 'hidden');
        }

        if (onOpenChangeComplete$) {
          onOpenChangeComplete$(_open);
        }
      };

      const { animationDuration, transitionDuration } = getComputedStyle(_ref);

      if (isDev && animationDuration !== '0s' && transitionDuration !== '0s') {
        console.warn(
          `Rilix UI: CSS transitions and CSS animations both detected on 'Collapsible.Panel' component. Only one of either animation type should be used.`
        );
      } else if (animationDuration !== '0s') {
        _ref.addEventListener('animationend', applyFinalState, { once: true });

        cleanup(() => {
          _ref.removeEventListener('animationend', applyFinalState);
        });
      } else if (transitionDuration !== '0s') {
        _ref.addEventListener('transitionend', applyFinalState, { once: true });

        cleanup(() => {
          _ref.removeEventListener('transitionend', applyFinalState);
        });
      } else {
        applyFinalState();
      }
    }
  });

  useContextProvider(CollapsiblePanelContext, { presence, isContentOverflowHidden });

  return (
    <Render
      as="div"
      ref={composeRefs([_ref, ref])}
      id={ids.panel}
      hidden={hidden.value}
      data-rilix-ui-collapsible-panel
      data-state={open.value ? 'open' : 'closed'}
      data-presence={presence.value}
      data-disabled={disabled.value ? '' : undefined}
      style={combineStyle(
        {
          display: hidden.value ? 'none' : 'grid',
          gridTemplateRows: hidden.value ? undefined : open.value ? '1fr' : '0fr',
          animationDuration: preventInitialAnimation.value ? '0s' : undefined,
          transitionDuration: preventInitialAnimation.value ? '0s' : undefined,
        },
        style
      )}
      state={{ open, disabled, presence }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
