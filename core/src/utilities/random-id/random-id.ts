import type { RandomIdParams } from './random-id.types';

/**
 * A utility function that return random id.
 */
export const randomId = (params: RandomIdParams = {}) => {
  const { prefix = 'rilix-ui-' } = params;

  const uuid = `${prefix}${crypto.randomUUID().slice(0, 13)}`;

  return { uuid };
};
