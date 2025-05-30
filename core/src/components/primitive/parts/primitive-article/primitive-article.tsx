import type { PrimitiveArticleProps } from './primitive-article.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders an `article` element.
 * The `article` HTML element represents a self-contained composition
 * in a document, page, application, or site, which is intended to be
 * independently distributable or reusable (e.g., in syndication).
 * Examples include: a forum post, a magazine or newspaper article,
 * or a blog entry, a product card, a user-submitted comment,
 * an interactive widget or gadget, or any other independent item of content.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article).
 */
export const PrimitiveArticle = component$<PrimitiveArticleProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'article';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
