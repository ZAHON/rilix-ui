import type { PrimitiveProgressProps } from './primitive-progress.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `progress` element.
 * The `progress` HTML element displays an indicator showing the
 * completion progress of a task, typically displayed as a progress bar.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress).
 */
export const PrimitiveProgress = component$<PrimitiveProgressProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'progress';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
