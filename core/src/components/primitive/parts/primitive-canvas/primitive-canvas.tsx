import type { PrimitiveCanvasProps } from './primitive-canvas.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `canvas` element.
 * Use the HTML `canvas` element with either the canvas scripting API or the WebGL API to draw graphics and animations.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas).
 */
export const PrimitiveCanvas = component$<PrimitiveCanvasProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'canvas';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
