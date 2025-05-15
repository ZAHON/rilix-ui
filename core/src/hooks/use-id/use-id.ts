import type { UseIdParams } from './use-id.types';
import { useId as useQwikId } from '@builder.io/qwik';

/**
 * Generates a unique identifier with an optional prefix, supporting custom id overrides.
 */
export const useId = (params: UseIdParams = {}) => {
  const { id, prefix = 'rilix-ui-' } = params;

  const autoId = useQwikId();

  return id ? id : `${prefix}${autoId}`;
};
