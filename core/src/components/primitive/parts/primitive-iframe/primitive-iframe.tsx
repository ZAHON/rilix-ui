import type { PrimitiveIframeProps } from './primitive-iframe.types';
import { component$ } from '@builder.io/qwik';

/**
 * A component that renders an `iframe` element.
 * The `iframe` HTML element represents a nested browsing context, embedding another HTML page into the current one.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).
 */
export const PrimitiveIframe = component$<PrimitiveIframeProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'iframe';

  return <Component {...others} />;
});
