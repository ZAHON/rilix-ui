import type { PrimitiveFigureProps } from './primitive-figure.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `figure` element.
 * The `figure` HTML element represents self-contained content, potentially with an optional caption,
 * which is specified using the `figcaption` element. The figure, its caption, and its contents are referenced as a single unit.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure).
 */
export const PrimitiveFigure = component$<PrimitiveFigureProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'figure';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
