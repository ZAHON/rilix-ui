import { describe, it, expect } from 'vitest';
import { clamp } from '.';

describe('clamp', () => {
  it('should return the value itself if it is within the range [min, max]', () => {
    expect(clamp({ value: 50, min: 0, max: 100 })).toBe(50);
  });

  it('should return the min value if the value is less than min', () => {
    expect(clamp({ value: -10, min: 0, max: 100 })).toBe(0);
  });

  it('should return the max value if the value is greater than max', () => {
    expect(clamp({ value: 150, min: 0, max: 100 })).toBe(100);
  });

  it('should handle negative min and max values correctly', () => {
    expect(clamp({ value: -5, min: -10, max: 0 })).toBe(-5);
  });

  it('should return min when value is at min boundary', () => {
    expect(clamp({ value: 0, min: 0, max: 100 })).toBe(0);
  });

  it('should return max when value is at max boundary', () => {
    expect(clamp({ value: 100, min: 0, max: 100 })).toBe(100);
  });

  it('should work with a range where min and max are the same', () => {
    expect(clamp({ value: 5, min: 10, max: 10 })).toBe(10);
    expect(clamp({ value: 10, min: 10, max: 10 })).toBe(10);
    expect(clamp({ value: 15, min: 10, max: 10 })).toBe(10);
  });

  it('should handle decimal numbers correctly', () => {
    expect(clamp({ value: 5.5, min: 0.1, max: 10.9 })).toBe(5.5);
    expect(clamp({ value: -0.5, min: 0.1, max: 10.9 })).toBe(0.1);
    expect(clamp({ value: 11.0, min: 0.1, max: 10.9 })).toBe(10.9);
  });

  it('should work with a large range', () => {
    expect(clamp({ value: 5000, min: 1000, max: 10000 })).toBe(5000);
    expect(clamp({ value: 500, min: 1000, max: 10000 })).toBe(1000);
    expect(clamp({ value: 15000, min: 1000, max: 10000 })).toBe(10000);
  });

  it('should throw an error if min is greater than max', () => {
    expect(() => clamp({ value: 50, min: 100, max: 0 })).toThrow(
      new Error(
        "Rilix UI Error: Invalid range for 'clamp' utility. The 'min' param (100) must be less than or equal to the 'max' param (0)."
      )
    );
    expect(() => clamp({ value: 10, min: 20, max: -5 })).toThrow(/Rilix UI Error: Invalid range for 'clamp' utility/);
  });

  it('should handle edge case where min, max, and value are all zero', () => {
    expect(clamp({ value: 0, min: 0, max: 0 })).toBe(0);
  });

  it('should correctly clamp negative value below negative min', () => {
    expect(clamp({ value: -20, min: -10, max: 0 })).toBe(-10);
  });

  it('should correctly clamp positive value above positive max when min is also positive', () => {
    expect(clamp({ value: 20, min: 5, max: 10 })).toBe(10);
  });

  it('should correctly clamp a value between a negative min and positive max', () => {
    expect(clamp({ value: -5, min: -10, max: 10 })).toBe(-5);
    expect(clamp({ value: -15, min: -10, max: 10 })).toBe(-10);
    expect(clamp({ value: 15, min: -10, max: 10 })).toBe(10);
  });

  it('should handle floating point precision close to boundaries', () => {
    expect(clamp({ value: 0.000000001, min: 0, max: 1 })).toBe(0.000000001);
    expect(clamp({ value: -0.000000001, min: 0, max: 1 })).toBe(0);
    expect(clamp({ value: 0.999999999, min: 0, max: 1 })).toBe(0.999999999);
    expect(clamp({ value: 1.000000001, min: 0, max: 1 })).toBe(1);
  });
});
