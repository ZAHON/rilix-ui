import type { GetScrollDimensionsParams } from './get-scroll-dimensions.types';
import { isDev, isServer } from '@builder.io/qwik/build';

/**
 * Retrieves various scroll-related dimensions for a given HTML element along a specified axis.
 */
export const getScrollDimensions = (params: GetScrollDimensionsParams) => {
  const { element, axis } = params;

  if (isDev && isServer) {
    throw Error(
      `Rilix UI: The 'getScrollDimensions' utility function cannot be used on the server. This function is designed for client-side use only.`
    );
  }

  switch (axis) {
    case 'x':
      return {
        /**
         * The inner width of the element in pixels, including padding but not borders or scrollbars.
         */
        clientSize: element.clientWidth,

        /**
         * The number of pixels that the content of an element is scrolled from its left edge.
         */
        scrollOffset: element.scrollLeft,

        /**
         * The entire scrollable width of an element in pixels.
         */
        scrollSize: element.scrollWidth,
      };
    case 'y':
      return {
        /**
         * The inner height of the element in pixels, including padding but not borders or scrollbars.
         */
        clientSize: element.clientHeight,

        /**
         * The number of pixels that the content of an element is scrolled from its top edge.
         */
        scrollOffset: element.scrollTop,

        /**
         * The entire scrollable height of an element in pixels.
         */
        scrollSize: element.scrollHeight,
      };
  }
};
