import type { PossibleRef } from './compose-refs.types';
import type { Signal } from '@builder.io/qwik';
import { $, isSignal, noSerialize } from '@builder.io/qwik';

/**
 * A utility function that allows assigning a single DOM element to multiple refs.
 */
export const composeRefs = <T extends Element = Element>(refs: PossibleRef<T>[]) => {
  const _refs = noSerialize(refs);

  return $((node: T) => {
    _refs?.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== undefined && isSignal(ref)) {
        (ref as Signal<T>).value = node;
      }
    });
  });
};
