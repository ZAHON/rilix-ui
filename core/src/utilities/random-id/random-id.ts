import type { RandomIdParams } from './random-id.types';

/**
 * A utility function that generates a unique identifier with an optional prefix.
 */
export const randomId = (params: RandomIdParams = {}) => {
  const { prefix = 'rilix-ui-' } = params;

  const uuid = `${prefix}${crypto.randomUUID().slice(0, 13)}`;

  return { uuid };
};
