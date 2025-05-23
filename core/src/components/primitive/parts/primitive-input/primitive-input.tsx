import type { PrimitiveInputProps } from './primitive-input.types';
import { component$ } from '@builder.io/qwik';

/**
 * A component that renders an `input` element.
 * The `input` HTML element is used to create interactive controls for web-based forms in order to accept data from the user;
 * a wide variety of types of input data and control widgets are available, depending on the device and user agent.
 * The `input` element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input).
 */
export const PrimitiveInput = component$<PrimitiveInputProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'input';

  return <Component {...others} />;
});
