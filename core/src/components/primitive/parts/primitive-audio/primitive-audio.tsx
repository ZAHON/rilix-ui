import type { PrimitiveAudioProps } from './primitive-audio.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders an `audio` element.
 * The `audio` HTML element is used to embed sound content in documents.
 * It may contain one or more audio sources, represented using the `src` attribute or the `source` element:
 * the browser will choose the most suitable one. It can also be the destination for streamed media, using a `MediaStream`.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).
 */
export const PrimitiveAudio = component$<PrimitiveAudioProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'audio';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
