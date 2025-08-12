import type { AlertRootProps } from './alert-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';

/**
 * Contains the content for the alert.
 * Renders a `<div>` element.
 */
export const AlertRoot = component$<AlertRootProps>((props) => {
  return (
    <Render
      as="div"
      role="alert"
      data-rilix-ui-alert-root
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...props}
    />
  );
});
