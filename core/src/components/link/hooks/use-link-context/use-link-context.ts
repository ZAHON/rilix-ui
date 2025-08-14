import { useContext } from '@builder.io/qwik';
import { LinkContext } from '../../contexts';

/**
 * A hook that provides access to the `Link` component's internal context,
 * allowing descendant components to interact with its state.
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
