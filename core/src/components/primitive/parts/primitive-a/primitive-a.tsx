import type { PrimitiveAProps } from './primitive-a.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders an `a` element.
 * The `a` HTML element (or anchor element), with its `href` attribute, creates a hyperlink to
 * web pages, files, email addresses, locations in the same page, or anything else a URL can address.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
 */
export const PrimitiveA = component$<PrimitiveAProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'a';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
