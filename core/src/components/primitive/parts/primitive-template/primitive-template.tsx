import type { PrimitiveTemplateProps } from './primitive-template.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `template` element.
 * The `template` HTML element serves as a mechanism for holding HTML fragments,
 * which can either be used later via JavaScript or generated immediately into shadow DOM.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td).
 */
export const PrimitiveTemplate = component$<PrimitiveTemplateProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'template';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
