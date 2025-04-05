import type { UseIdParams } from './use-id.types';
import { useId as useQwikId } from '@builder.io/qwik';

/**
 * Generates a unique identifier with an optional prefix, supporting custom id overrides.
 */
export const useId = (params: UseIdParams = {}) => {
  const { id, prefix = 'rilix-ui-' } = params;

  /** When, `id` prop has been passed the hook go returns its value as `uuid`. */
  if (id) {
    return {
      /**
       * A unique id.
       * Either the custom `id` provided via parameters, or an auto-generated one prefixed with the given `prefix`.
       */
      uuid: id,
    };
  }

  const autoId = useQwikId();

  return {
    /**
     * A unique id.
     * Either the custom `id` provided via parameters, or an auto-generated one prefixed with the given `prefix`.
     */
    uuid: `${prefix}${autoId}`,
  };
};
