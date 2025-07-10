import type { ArrayRemoveParams } from './array-remove.types';

/**
 * Creates a new array with the first occurrence of a specified item removed.
 * If the item is not found, the original array's contents are returned as a new array.
 * This function does not modify the original array.
 */
export const arrayRemove = <T>(params: ArrayRemoveParams<T>) => {
  const { array, item } = params;

  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);

  if (index !== -1) {
    updatedArray.splice(index, 1);
  }

  return updatedArray;
};
