import type { PrimitiveTrackProps } from './primitive-track.types';
import { component$ } from '@builder.io/qwik';

/**
 * A component that renders a `track` element.
 * The `track` HTML element is used as a child of the media elements, `audio` and `video`.
 * Each track element lets you specify a timed text track (or time-based data) that can be
 * displayed in parallel with the media element, for example to overlay subtitles or closed
 * captions on top of a video or alongside audio tracks.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track).
 */
export const PrimitiveTrack = component$<PrimitiveTrackProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'track';

  return <Component {...others} />;
});
