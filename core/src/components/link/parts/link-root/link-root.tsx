import type { LinkRootProps } from './link-root.types';
import { component$, useSignal, useComputed$, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { Render } from '@/_internal';
import { composeRefs } from '@/utilities';
import { LinkContext } from '../../contexts';

/**
 * Contains the content for the link.
 * Renders an `<a>` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { ref: _ref, href, disabled: _disabled, ...others } = props;

  const ref = useSignal<HTMLElement | undefined>(undefined);
  const disabled = useComputed$(() => _disabled ?? false);

  useTask$(({ track }) => {
    const isDisabled = track(() => disabled.value);

    const rootRef = ref.value;

    if (isBrowser && rootRef && rootRef.tagName === 'A') {
      if (isDisabled) {
        rootRef.setAttribute('role', 'link');
        rootRef.removeAttribute('href');
        rootRef.setAttribute('aria-disabled', 'true');
        rootRef.setAttribute('data-disabled', '');
      } else {
        rootRef.removeAttribute('role');
        rootRef.removeAttribute('aria-disabled');
        rootRef.removeAttribute('data-disabled');

        if (href) {
          rootRef.setAttribute('href', href);
        }
      }
    }
  });

  useContextProvider(LinkContext, { disabled });

  return (
    <Render
      as="a"
      ref={composeRefs([_ref, ref])}
      role={disabled.value ? 'link' : undefined}
      href={disabled.value ? undefined : href}
      aria-disabled={disabled.value ? 'true' : undefined}
      data-rilix-ui-link-root
      data-disabled={disabled.value ? '' : undefined}
      state={{ disabled }}
      defaultRender$={(props) => (
        <a {...props}>
          <Slot />
        </a>
      )}
      {...others}
    />
  );
});
