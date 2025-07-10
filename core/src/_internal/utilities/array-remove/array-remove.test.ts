import { describe, it, expect } from 'vitest';
import { arrayRemove } from '.';

describe('arrayRemove', () => {
  it('should return a new array with the specified item removed when found', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const itemToRemove = 3;
    const expectedArray = [1, 2, 4, 5];

    const newArray = arrayRemove({ array: originalArray, item: itemToRemove });

    expect(newArray).toEqual(expectedArray);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return a new array that is a copy of the original if the item is not found', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const itemToRemove = 99;
    const expectedArray = [1, 2, 3, 4, 5];

    const newArray = arrayRemove({ array: originalArray, item: itemToRemove });

    expect(newArray).toEqual(expectedArray);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should remove only the first occurrence of a duplicate item', () => {
    const originalArray = [1, 2, 3, 2, 4];
    const itemToRemove = 2;
    const expectedArray = [1, 3, 2, 4];

    const newArray = arrayRemove({ array: originalArray, item: itemToRemove });

    expect(newArray).toEqual(expectedArray);
    expect(originalArray).toEqual([1, 2, 3, 2, 4]);
  });

  it('should return an empty array when trying to remove from an empty array', () => {
    const originalArray: number[] = [];
    const itemToRemove = 5;
    const expectedArray: number[] = [];

    const newArray = arrayRemove({ array: originalArray, item: itemToRemove });

    expect(newArray).toEqual(expectedArray);
    expect(originalArray).toEqual([]);
  });

  it('should return an empty array when removing the only item', () => {
    const originalArray = [10];
    const itemToRemove = 10;
    const expectedArray: number[] = [];

    const newArray = arrayRemove({ array: originalArray, item: itemToRemove });

    expect(newArray).toEqual(expectedArray);
    expect(originalArray).toEqual([10]);
  });

  it('should work correctly with string arrays', () => {
    const originalArray = ['apple', 'banana', 'cherry'];
    const itemToRemove = 'banana';
    const expectedArray = ['apple', 'cherry'];

    const newArray = arrayRemove({ array: originalArray, item: itemToRemove });

    expect(newArray).toEqual(expectedArray);
    expect(originalArray).toEqual(['apple', 'banana', 'cherry']);
  });

  it('should remove the exact object reference when working with object arrays', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const originalArray = [obj1, obj2, obj3];
    const itemToRemove = obj2;
    const expectedArray = [obj1, obj3];

    const newArray = arrayRemove({ array: originalArray, item: itemToRemove });

    expect(newArray).toEqual(expectedArray);
    expect(originalArray).toEqual([obj1, obj2, obj3]);

    const originalArrayWithDuplicateContent = [obj1, obj2, { id: 2 }];
    const newItemToRemove = { id: 2 };
    const newExpectedArray = [obj1, obj2, { id: 2 }];

    const resultArray = arrayRemove({ array: originalArrayWithDuplicateContent, item: newItemToRemove });
    expect(resultArray).toEqual(newExpectedArray);
  });
});
