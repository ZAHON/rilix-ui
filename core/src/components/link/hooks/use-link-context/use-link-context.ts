import { useContext } from '@builder.io/qwik';
import { LinkContext } from '../../context';

/**
 * A hook that gives access to a context object containing properties to interact with the link.
 */
export const useLinkContext = () => {
  const { disabled } = useContext(LinkContext);

  return {
    /**
     * Whether the link is disabled.
     */
    disabled: disabled,
  };
};
