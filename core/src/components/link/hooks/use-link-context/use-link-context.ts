import { useContext } from '@builder.io/qwik';
import { LinkContext } from '../../contexts';

/**
 * A hook that gives access to a context object containing properties to interact with the link.
 */
export const useLinkContext = () => {
  const { disabled } = useContext(LinkContext);

  return {
    /**
     * A readonly signal whose value indicates whether the link is disabled.
     */
    disabled: disabled,
  };
};
