import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setStyleProperty } from '.';

let mockIsDev = false;
let mockIsServer = false;

vi.mock('@builder.io/qwik/build', () => ({
  get isDev() {
    return mockIsDev;
  },
  get isServer() {
    return mockIsServer;
  },
}));

describe('setStyleProperty', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
    element.removeAttribute('style');

    mockIsDev = false;
    mockIsServer = false;
  });

  it('should set the CSS property on the element', () => {
    setStyleProperty({ element, property: 'color', value: 'red' });
    expect(element.style.color).toBe('red');
  });

  it('should return a function to revert the CSS property', () => {
    const revert = setStyleProperty({ element, property: 'background-color', value: 'blue' });
    expect(element.style.backgroundColor).toBe('blue');
    revert();
    expect(element.style.backgroundColor).toBe('');
  });

  it('should revert the CSS property to its original value', () => {
    element.style.setProperty('font-size', '16px');
    const revert = setStyleProperty({ element, property: 'font-size', value: '20px' });
    revert();
    expect(element.style.fontSize).toBe('16px');
  });

  it('should remove the style attribute if no other inline styles remain after reverting', () => {
    const revert = setStyleProperty({ element, property: 'width', value: '100px' });
    revert();
    expect(element.hasAttribute('style')).toBe(false);
  });

  it('should not remove the style attribute if other inline styles remain after reverting', () => {
    element.style.setProperty('border', '1px solid black');
    const revert = setStyleProperty({ element, property: 'height', value: '50px' });
    revert();
    expect(element.hasAttribute('style')).toBe(true);
  });

  it('should not throw an error when used on the server in production mode', () => {
    mockIsDev = false;
    mockIsServer = true;
    expect(() => {
      setStyleProperty({ element, property: 'opacity', value: '0.5' });
    }).not.toThrow();
  });

  it('should not throw an error when used on the client in development mode', () => {
    mockIsDev = true;
    mockIsServer = false;
    expect(() => {
      setStyleProperty({ element, property: 'opacity', value: '0.5' });
    }).not.toThrow();
  });

  it('should handle custom CSS properties (CSS variables)', () => {
    setStyleProperty({ element, property: '--my-color', value: 'var(--red)' });
    expect(element.style.getPropertyValue('--my-color')).toBe('var(--red)');
  });

  it('should correctly revert custom CSS properties', () => {
    element.style.setProperty('--spacing', '10px');
    const revert = setStyleProperty({ element, property: '--spacing', value: '20px' });
    expect(element.style.getPropertyValue('--spacing')).toBe('20px');
    revert();
    expect(element.style.getPropertyValue('--spacing')).toBe('10px');
  });

  it('should handle empty string as a valid value', () => {
    setStyleProperty({ element, property: 'display', value: '' });
    expect(element.style.display).toBe('');
  });

  it('should revert correctly when the original property value was an empty string', () => {
    element.style.setProperty('padding', '');
    const revert = setStyleProperty({ element, property: 'padding', value: '10px' });
    expect(element.style.padding).toBe('10px');
    revert();
    expect(element.style.padding).toBe('');
  });

  it('should handle setting a property that does not exist on the style object directly (e.g., shorthand property values)', () => {
    setStyleProperty({ element, property: 'margin', value: '10px 20px' });
    expect(element.style.margin).toBe('10px 20px');
    expect(element.style.marginTop).toBe('10px');
    expect(element.style.marginRight).toBe('20px');
  });

  it('should correctly revert a property that was not originally set', () => {
    const revert = setStyleProperty({ element, property: 'border-radius', value: '5px' });
    expect(element.style.borderRadius).toBe('5px');
    revert();
    expect(element.style.borderRadius).toBe('');
  });

  it('should handle multiple calls and their respective revert functions independently', () => {
    const revertColor = setStyleProperty({ element, property: 'color', value: 'green' });
    const revertFontSize = setStyleProperty({ element, property: 'font-size', value: '24px' });

    expect(element.style.color).toBe('green');
    expect(element.style.fontSize).toBe('24px');

    revertColor();
    expect(element.style.color).toBe('');
    expect(element.style.fontSize).toBe('24px');

    revertFontSize();
    expect(element.style.color).toBe('');
    expect(element.style.fontSize).toBe('');
    expect(element.hasAttribute('style')).toBe(false);
  });

  it('should handle setting the same property multiple times with different values before reverting', () => {
    const revertOne = setStyleProperty({ element, property: 'opacity', value: '0.1' });
    const revertTwo = setStyleProperty({ element, property: 'opacity', value: '0.5' });
    const revertThree = setStyleProperty({ element, property: 'opacity', value: '1' });

    expect(element.style.opacity).toBe('1');

    revertThree();
    expect(element.style.opacity).toBe('0.5');

    revertTwo();
    expect(element.style.opacity).toBe('0.1');

    revertOne();
    expect(element.style.opacity).toBe('');
    expect(element.hasAttribute('style')).toBe(false);
  });
});
