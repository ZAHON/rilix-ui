import { describe, it, expect } from 'vitest';
import { combineStyle } from '.';

describe('combineStyle', () => {
  it('should combine two style strings', () => {
    const result = combineStyle('color:red', 'margin:10px');
    expect(result).toBe('color:red;margin:10px');
  });

  it('should combine a string and an object (string first)', () => {
    const result = combineStyle('color:red', { margin: '10px' });
    expect(result).toEqual({ color: 'red', margin: '10px' });
  });

  it('should combine an object and a string (string second)', () => {
    const result = combineStyle({ margin: '10px' }, 'color:red');
    expect(result).toEqual({ margin: '10px', color: 'red' });
  });

  it('should combine two style objects', () => {
    const result = combineStyle({ color: 'red' }, { margin: '10px' });
    expect(result).toEqual({ color: 'red', margin: '10px' });
  });

  it('should return the first style if the second is undefined', () => {
    const result = combineStyle({ color: 'red' }, undefined);
    expect(result).toEqual({ color: 'red' });
  });

  it('should return the second style if the first is undefined', () => {
    const result = combineStyle(undefined, { color: 'red' });
    expect(result).toEqual({ color: 'red' });
  });

  it('should return an empty object if both styles are undefined', () => {
    const result = combineStyle(undefined, undefined);
    expect(result).toEqual({});
  });
});
