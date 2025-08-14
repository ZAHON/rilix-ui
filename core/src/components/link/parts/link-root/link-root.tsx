import type { LinkRootProps } from './link-root.types';
import { component$, useSignal, useComputed$, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { composeRefs } from '@/utilities';
import { Render } from '@/_internal';
import { LinkContext } from '../../contexts';

/**
 * Contains the content for the link.
 * Renders an `<a>` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { ref: _ref, href, disabled: _disabled, ...others } = props;

  const ref = useSignal<HTMLElement | undefined>(undefined);
  const disabled = useComputed$(() => _disabled ?? false);

  /**
   * This task is responsible for dynamically managing HTML attributes on the root element
   * to handle the disabled state. Attributes like `href`, `role`, `aria-disabled`, and
   * `data-disabled` are managed here instead of directly in the JSX. This is necessary
   * because this behavior is likely caused by a bug in the implementation of Qwik's
   * component properties. While not 100% certain, this seems to be the most probable
   * reason. These attributes need to be completely removed or added based on the state,
   * which can be problematic to manage dynamically for `<a>` elements directly in JSX.
   *
   * When `disabled.value` is true:
   * - The `role` attribute is set to `link` to ensure accessibility.
   * - The `href` attribute is removed to prevent navigation.
   * - The `aria-disabled` and `data-disabled` attributes are added to reflect the state.
   *
   * When `disabled.value` is false:
   * - These attributes are explicitly removed, and the `href` is restored if it exists.
   */
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
