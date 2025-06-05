import type { RenderProps, RenderAsTag } from './render.types';

/**
 * The `Render` component offers a powerful and flexible way to compose component
 * functionalities onto various HTML elements or even other components.
 *
 * When developing components, you often encounter situations where you want
 * to allow users to either change the underlying HTML element of your component
 * or integrate your component's features with their own custom components.
 */
export const Render = <T extends RenderAsTag, S extends Record<string, unknown> = {}>(props: RenderProps<T, S>) => {
  const { state, defaultRender$, render$, ...others } = props;

  const finalOthers = { ...others };

  if ('as' in finalOthers) {
    delete (finalOthers as any).as;
  }

  const safeState = state === undefined ? ({} as S) : state;

  if (render$) {
    return render$(finalOthers as Record<string, unknown>, safeState);
  } else {
    return defaultRender$(finalOthers as Record<string, unknown>, safeState);
  }
};
