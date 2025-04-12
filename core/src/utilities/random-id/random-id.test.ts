import { describe, it, expect } from 'vitest';
import { randomId } from '.';

describe('randomId', () => {
  const getUuidsArray = (lenght: number) =>
    Array(lenght)
      .fill(0)
      .map(() => randomId().uuid);

  it('should return random id', () => {
    const uuids = getUuidsArray(100000);

    const isUnique = (arr: string[]): boolean => {
      return (
        arr.reduce<{ set: Set<string>; hasDuplicate: boolean }>(
          (acc, str) => {
            if (acc.set.has(str)) {
              acc.hasDuplicate = true;
            }
            acc.set.add(str);
            return acc;
          },
          { set: new Set(), hasDuplicate: false }
        ).hasDuplicate === false
      );
    };

    expect(isUnique(uuids)).toBe(true);
  });

  it('should return a random identifier of length 22 by default', () => {
    const uuids = getUuidsArray(1000);

    uuids.forEach((uuid) => {
      expect(uuid).toHaveLength(22);
    });
  });

  it('should return random id with "rilix-ui-" prefix', () => {
    const { uuid } = randomId();

    expect(uuid.includes('rilix-ui-')).toBe(true);
    expect(uuid).toHaveLength(22);
  });

  it('should support custom prefix', () => {
    const customPrefix = 'custom-prefix-';
    const { uuid } = randomId({ prefix: customPrefix });

    expect(uuid.includes(customPrefix)).toBe(true);
    expect(uuid).toHaveLength(27);
  });
});
