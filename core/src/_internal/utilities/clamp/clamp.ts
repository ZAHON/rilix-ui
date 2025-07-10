import type { ClampParams } from './clamp.types';
import { isDev } from '@builder.io/qwik/build';

/**
 * Clamps a given number to a specified range, ensuring it does not exceed the minimum or maximum bounds.
 */
export const clamp = (params: ClampParams) => {
  const { value, min, max } = params;

  if (isDev && min > max) {
    throw new Error(
      `Rilix UI: Invalid range for 'clamp' utility. The 'min' param (${min}) must be less than or equal to the 'max' param (${max}).`
    );
  }

  return Math.min(max, Math.max(min, value));
};
