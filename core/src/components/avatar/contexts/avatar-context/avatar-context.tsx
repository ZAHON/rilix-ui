import type { AvatarContextValue } from './avatar-context.types';
import { createContextId, useContext } from '@builder.io/qwik';

/**
 * The context ID for the avatar component.
 * It provides a way to share the avatar's internal state (such as image loading status) with its child components.
 */
export const AvatarContext = createContextId<AvatarContextValue>('rilix-ui-avatar-context');

/**
 * A hook that provides access to the internal state of the avatar component.
 */
export const useAvatarContext = () => {
  const context = useContext(AvatarContext);

  return context;
};
