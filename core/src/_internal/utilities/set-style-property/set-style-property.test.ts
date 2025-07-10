import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { setStyleProperty } from '.';

describe('setStyleProperty', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should set the specified CSS property on the element', () => {
    const revert = setStyleProperty({ element, property: 'color', value: 'red' });
    expect(element.style.color).toBe('red');
    revert();
  });

  it('should return a function that reverts the property to its original value', () => {
    element.style.setProperty('font-size', '16px');
    const originalFontSize = element.style.fontSize;

    const revert = setStyleProperty({ element, property: 'font-size', value: '24px' });
    expect(element.style.fontSize).toBe('24px');

    revert();
    expect(element.style.fontSize).toBe(originalFontSize);
  });

  it('should revert to an empty string if the property was not initially set', () => {
    expect(element.style.backgroundColor).toBe('');
    const revert = setStyleProperty({ element, property: 'background-color', value: 'blue' });
    expect(element.style.backgroundColor).toBe('blue');

    revert();
    expect(element.style.backgroundColor).toBe('');
  });

  it('should remove the style attribute if all inline styles are cleared after revert', () => {
    const revert = setStyleProperty({ element, property: 'width', value: '100px' });
    expect(element.style.width).toBe('100px');
    expect(element.hasAttribute('style')).toBe(true);

    revert();
    expect(element.style.width).toBe('');
    expect(element.hasAttribute('style')).toBe(false);
  });

  it('should not remove the style attribute if other inline styles remain after revert', () => {
    element.style.setProperty('height', '50px');
    element.style.setProperty('border', '1px solid black');

    const revert = setStyleProperty({ element, property: 'height', value: '100px' });
    expect(element.style.height).toBe('100px');
    expect(element.hasAttribute('style')).toBe(true);

    revert();
    expect(element.style.height).toBe('50px');
    expect(element.style.border).toBe('1px solid black');
    expect(element.hasAttribute('style')).toBe(true);
  });

  it('should handle custom CSS properties (variables)', () => {
    const revert = setStyleProperty({ element, property: '--my-color', value: 'var(--primary-color)' });
    expect(element.style.getPropertyValue('--my-color')).toBe('var(--primary-color)');
    revert();
    expect(element.style.getPropertyValue('--my-color')).toBe('');
  });

  it('should correctly handle numeric values without units for properties that accept them', () => {
    const revert = setStyleProperty({ element, property: 'opacity', value: '0.5' });
    expect(element.style.opacity).toBe('0.5');
    revert();
    expect(element.style.opacity).toBe('');
  });

  it('should correctly handle values with different units', () => {
    const revert = setStyleProperty({ element, property: 'margin-left', value: '10em' });
    expect(element.style.marginLeft).toBe('10em');
    revert();
    expect(element.style.marginLeft).toBe('');
  });

  it('should return the correct original value even if property was set using shorthand before', () => {
    element.style.margin = '10px 20px';
    const originalMarginLeft = element.style.marginLeft;

    const revert = setStyleProperty({ element, property: 'margin-left', value: '30px' });
    expect(element.style.marginLeft).toBe('30px');

    revert();
    expect(element.style.marginLeft).toBe(originalMarginLeft);
  });

  it('should handle multiple calls to setStyleProperty on the same element/property sequentially', () => {
    const revert1 = setStyleProperty({ element, property: 'width', value: '100px' });
    expect(element.style.width).toBe('100px');

    const revert2 = setStyleProperty({ element, property: 'width', value: '200px' });
    expect(element.style.width).toBe('200px');

    revert2();
    expect(element.style.width).toBe('100px');

    revert1();
    expect(element.style.width).toBe('');
  });

  it('should maintain other styles when only one is reverted', () => {
    element.style.padding = '5px';
    element.style.border = '1px solid black';

    const revert = setStyleProperty({ element, property: 'background-color', value: 'green' });
    expect(element.style.backgroundColor).toBe('green');
    expect(element.style.padding).toBe('5px');
    expect(element.style.border).toBe('1px solid black');

    revert();
    expect(element.style.backgroundColor).toBe('');
    expect(element.style.padding).toBe('5px');
    expect(element.style.border).toBe('1px solid black');
  });
});
