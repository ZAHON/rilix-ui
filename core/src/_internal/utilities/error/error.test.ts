import { describe, it, expect } from 'vitest';
import { error } from '.';

describe('error', () => {
  it('should throw an error with the correct prefix and message', () => {
    const errorMessage = 'This is a test error.';
    expect(() => error(errorMessage)).toThrow('Rilix UI: This is a test error.');
  });

  it('should throw an error when given multiple message parts', () => {
    expect(() => error('Error', 'with', 'multiple', 'parts.')).toThrow('Rilix UI: Error with multiple parts.');
  });

  it('should throw an error with an empty message if no arguments are provided', () => {
    expect(() => error()).toThrow('Rilix UI: ');
  });
});
