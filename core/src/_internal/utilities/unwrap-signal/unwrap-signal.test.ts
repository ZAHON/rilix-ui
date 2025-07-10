import type { Signal, ReadonlySignal } from '@builder.io/qwik';
import { describe, it, expect, vi } from 'vitest';
import { QRL } from '@builder.io/qwik';
import { unwrapSignal } from '.';

vi.mock('@builder.io/qwik', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@builder.io/qwik')>();
  return {
    ...actual,
    isSignal: vi.fn((value): value is Signal<any> | ReadonlySignal<any> => {
      return (
        typeof value === 'object' && value !== null && 'value' in value && (value as any).__test__isSignal === true
      );
    }),
  };
});

const createTestSignal = <T>(initialValue: T): Signal<T> => {
  let _value = initialValue;
  const mockSignal = {
    get value() {
      return _value;
    },
    set value(newValue: T) {
      _value = newValue;
    },
    __test__isSignal: true,
    __brand: 'Signal',
    __qrl: null as QRL<any> | null,
  };
  return mockSignal as Signal<T>;
};

describe('unwrapSignal', () => {
  it('should return the value directly if it is not a signal', () => {
    const stringValue = 'hello';
    const numberValue = 123;
    const booleanValue = true;
    const objectValue = { a: 1 };
    const arrayValue = [1, 2, 3];
    const nullValue = null;
    const undefinedValue = undefined;
    const emptyString = '';
    const zeroNumber = 0;
    const falseBoolean = false;
    const emptyObject = {};
    const emptyArray: any[] = [];
    const symbolValue = Symbol('test');
    const funcValue = () => {};
    const dateValue = new Date();
    const regexValue = /abc/g;

    expect(unwrapSignal(stringValue)).toBe(stringValue);
    expect(unwrapSignal(numberValue)).toBe(numberValue);
    expect(unwrapSignal(booleanValue)).toBe(booleanValue);
    expect(unwrapSignal(objectValue)).toBe(objectValue);
    expect(unwrapSignal(arrayValue)).toBe(arrayValue);
    expect(unwrapSignal(nullValue)).toBe(nullValue);
    expect(unwrapSignal(undefinedValue)).toBe(undefinedValue);
    expect(unwrapSignal(emptyString)).toBe(emptyString);
    expect(unwrapSignal(zeroNumber)).toBe(zeroNumber);
    expect(unwrapSignal(falseBoolean)).toBe(falseBoolean);
    expect(unwrapSignal(emptyObject)).toEqual(emptyObject);
    expect(unwrapSignal(emptyArray)).toEqual(emptyArray);
    expect(unwrapSignal(symbolValue)).toBe(symbolValue);
    expect(unwrapSignal(funcValue)).toBe(funcValue);
    expect(unwrapSignal(dateValue)).toBe(dateValue);
    expect(unwrapSignal(regexValue)).toBe(regexValue);
  });

  it('should return the value of a writable signal', () => {
    const mySignal = createTestSignal('initialValue');
    expect(unwrapSignal(mySignal)).toBe('initialValue');

    mySignal.value = 'newValue';
    expect(unwrapSignal(mySignal)).toBe('newValue');
  });

  it('should return the value of a readonly signal', () => {
    const myReadonlySignal = createTestSignal(42) as ReadonlySignal<number>;
    expect(unwrapSignal(myReadonlySignal)).toBe(42);

    (myReadonlySignal as Signal<number>).value = 100;
    expect(unwrapSignal(myReadonlySignal)).toBe(100);
  });

  it('should handle different types of signal values', () => {
    const stringSignal = createTestSignal('test string');
    const numberSignal = createTestSignal(123.45);
    const booleanSignal = createTestSignal(false);
    const objectSignal = createTestSignal({ name: 'Qwik' });
    const arraySignal = createTestSignal([10, 20]);
    const functionSignal = createTestSignal(() => 'hello from signal');
    const dateSignal = createTestSignal(new Date('2023-01-01T10:00:00Z'));
    const regexSignal = createTestSignal(/test/i);

    expect(unwrapSignal(stringSignal)).toBe('test string');
    expect(unwrapSignal(numberSignal)).toBe(123.45);
    expect(unwrapSignal(booleanSignal)).toBe(false);
    expect(unwrapSignal(objectSignal)).toEqual({ name: 'Qwik' });
    expect(unwrapSignal(arraySignal)).toEqual([10, 20]);
    expect(unwrapSignal(functionSignal)()).toBe('hello from signal');
    expect(unwrapSignal(dateSignal)).toEqual(new Date('2023-01-01T10:00:00Z'));
    expect(unwrapSignal(regexSignal)).toEqual(/test/i);
  });

  it('should correctly handle a signal whose value is null or undefined', () => {
    const nullSignal = createTestSignal<string | null>(null);
    const undefinedSignal = createTestSignal<number | undefined>(undefined);

    expect(unwrapSignal(nullSignal)).toBeNull();
    expect(unwrapSignal(undefinedSignal)).toBeUndefined();
  });

  it('should handle a signal whose value is an empty object', () => {
    const emptyObjectSignal = createTestSignal({});
    expect(unwrapSignal(emptyObjectSignal)).toEqual({});
  });

  it('should handle a signal whose value is an empty array', () => {
    const emptyArraySignal = createTestSignal<any[]>([]);
    expect(unwrapSignal(emptyArraySignal)).toEqual([]);
  });

  it('should handle a signal whose value is a complex nested object', () => {
    const complexObject = {
      user: {
        id: 1,
        name: 'John Doe',
        address: {
          street: '123 Main St',
          city: 'Anytown',
        },
      },
      items: [
        { id: 'a', qty: 2 },
        { id: 'b', qty: 1 },
      ],
    };
    const complexObjectSignal = createTestSignal(complexObject);
    expect(unwrapSignal(complexObjectSignal)).toEqual(complexObject);
  });

  it('should handle a signal whose value is a complex nested array', () => {
    const complexArray = [
      [1, 2, 3],
      ['a', 'b', 'c'],
      [{ key: 'value' }, { another: 'one' }],
    ];
    const complexArraySignal = createTestSignal(complexArray);
    expect(unwrapSignal(complexArraySignal)).toEqual(complexArray);
  });

  it('should reflect multiple updates to a signal value', () => {
    const counterSignal = createTestSignal(0);
    expect(unwrapSignal(counterSignal)).toBe(0);

    counterSignal.value = 10;
    expect(unwrapSignal(counterSignal)).toBe(10);

    counterSignal.value = -5;
    expect(unwrapSignal(counterSignal)).toBe(-5);

    counterSignal.value = 1000;
    expect(unwrapSignal(counterSignal)).toBe(1000);
  });

  it('should handle a signal whose value is a Symbol', () => {
    const mySymbol = Symbol('unique');
    const symbolSignal = createTestSignal(mySymbol);
    expect(unwrapSignal(symbolSignal)).toBe(mySymbol);
  });

  it('should handle a signal whose value is another signal (one level deep)', () => {
    const innerSignal = createTestSignal('inner value');
    const outerSignal = createTestSignal(innerSignal);
    // unwrapSignal only unwraps one level
    expect(unwrapSignal(outerSignal)).toBe(innerSignal);
    expect(unwrapSignal(outerSignal).value).toBe('inner value');
  });

  it('should handle a signal whose value changes to a non-signal type', () => {
    const dynamicSignal = createTestSignal<string | number>('initial string');
    expect(unwrapSignal(dynamicSignal)).toBe('initial string');

    dynamicSignal.value = 12345;
    expect(unwrapSignal(dynamicSignal)).toBe(12345);
  });
});
