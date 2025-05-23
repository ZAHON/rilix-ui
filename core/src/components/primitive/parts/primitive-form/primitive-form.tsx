import type { PrimitiveFormProps } from './primitive-form.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `form` element.
 * The `form` HTML element represents a document section containing interactive controls for submitting information.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form).
 */
export const PrimitiveForm = component$<PrimitiveFormProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'form';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
