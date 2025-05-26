import type { LinkRootProps } from './link-root.types';
import { component$, useSignal, useTask$, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { Primitive } from '@/components';
import { composeRefs } from '@/utilities';

/**
 * Contains the content for the link.
 * This component is based on the `a` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { as, ref: _ref, href, active, disabled, ...others } = props;

  const ref = useSignal<HTMLElement | undefined>(undefined);

  useTask$(({ track }) => {
    track(() => disabled);

    if (isBrowser && ref.value && ref.value.tagName === 'A') {
      if (disabled) {
        ref.value.setAttribute('role', 'link');
        ref.value.removeAttribute('href');
      } else {
        ref.value.removeAttribute('role');

        if (href) {
          ref.value.setAttribute('href', href);
        }
      }
    }
  });

  const Component = as || (Primitive.a as unknown as 'a');

  return (
    <Component
      ref={composeRefs([_ref, ref])}
      role={disabled ? 'link' : undefined}
      href={disabled ? undefined : href}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      data-rilix-ui-link-root=""
      data-scope="link"
      data-part="root"
      data-active={active ? '' : undefined}
      data-disabled={disabled ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
