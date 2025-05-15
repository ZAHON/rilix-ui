import type { PossibleStyle } from './combine-style.types';
import { stringStyleToObject } from '@/utilities';

/**
 * Combines two style values, whether inline CSS strings or style objects, into one.
 */
export const combineStyle = (style1: PossibleStyle, style2: PossibleStyle) => {
  if (typeof style1 === 'string') {
    if (typeof style2 === 'string') return `${style1};${style2}`;

    style1 = stringStyleToObject(style1);
  } else if (typeof style2 === 'string') {
    style2 = stringStyleToObject(style2);
  }

  return { ...style1, ...style2 };
};
