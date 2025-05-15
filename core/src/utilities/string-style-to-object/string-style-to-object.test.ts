import { describe, it, expect } from 'vitest';
import { stringStyleToObject } from '.';

describe('stringStyleToObject', () => {
  it('should convert simple inline styles to object', () => {
    const input = 'color: red; font-size: 16px;';
    const result = stringStyleToObject(input);

    expect(result).toEqual({
      color: 'red',
      fontSize: '16px',
    });
  });

  it('should handle styles with custom properties', () => {
    const input = '--my-var: 10px; color: blue;';
    const result = stringStyleToObject(input);

    expect(result).toEqual({
      '--my-var': '10px',
      color: 'blue',
    });
  });

  it('should trim whitespace around keys and values', () => {
    const input = ' margin :  0 auto ; padding : 10px ; ';
    const result = stringStyleToObject(input);

    expect(result).toEqual({
      margin: '0 auto',
      padding: '10px',
    });
  });

  it('should return an empty object for empty string', () => {
    const input = '';
    const result = stringStyleToObject(input);

    expect(result).toEqual({});
  });

  it('should ignore invalid style declarations', () => {
    const input = 'color red; font-size:16px';
    const result = stringStyleToObject(input);

    expect(result).toEqual({
      fontSize: '16px',
    });
  });

  it('should handle values with colons', () => {
    const input = 'background-image: url(http://example.com/image.png);';
    const result = stringStyleToObject(input);

    expect(result).toEqual({
      backgroundImage: 'url(http://example.com/image.png)',
    });
  });

  it('should preserve !important in property values', () => {
    const input = 'color: red !important; font-weight: bold;';
    const result = stringStyleToObject(input);

    expect(result).toEqual({
      color: 'red !important',
      fontWeight: 'bold',
    });
  });

  it('should ignore CSS comments in the style string', () => {
    const input = 'color: red; /* background-color: green; */';
    const result = stringStyleToObject(input);

    expect(result).toEqual({
      color: 'red',
    });
  });
});
