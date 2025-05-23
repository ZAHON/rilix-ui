import type { PrimitiveButtonProps } from './primitive-button.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `button` element.
 * The `button` HTML element is an interactive element activated by a user
 * with a mouse, keyboard, finger, voice command, or other assistive technology.
 * Once activated, it then performs an action, such as submitting a form or opening a dialog.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
 */
export const PrimitiveButton = component$<PrimitiveButtonProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'button';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
