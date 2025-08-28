/**
 * Determines whether `paddingLeft` or `paddingRight` CSS property should be used
 * to compensate for a horizontal scrollbar. It checks the document's left edge
 * combined with horizontal scroll to infer scrollbar presence/position.
 */
export const getPaddingProperty = () => {
  const documentLeft = document.documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + document.documentElement.scrollLeft;

  return scrollbarX ? 'paddingLeft' : 'paddingRight';
};
