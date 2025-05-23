import type { AlertRootProps } from './alert-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Primitive } from '@/components';

/**
 * Contains the content for the alert.
 * This component is based on the `div` element.
 */
export const AlertRoot = component$<AlertRootProps>((props) => {
  const { as, ...others } = props;

  const Component = as || (Primitive.div as unknown as 'div');

  return (
    <Component role="alert" data-rilix-ui-alert-root="" data-scope="alert" data-part="root" {...others}>
      <Slot />
    </Component>
  );
});
