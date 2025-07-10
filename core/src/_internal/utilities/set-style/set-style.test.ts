import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { setStyle } from '.';

describe('setStyle', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should apply the specified inline styles to the element', () => {
    const stylesToApply = {
      color: 'red',
      backgroundColor: 'blue',
      fontSize: '16px',
    };

    setStyle({ element, style: stylesToApply });

    expect(element.style.color).toBe('red');
    expect(element.style.backgroundColor).toBe('blue');
    expect(element.style.fontSize).toBe('16px');
  });

  it('should return a function to revert the applied styles', () => {
    const stylesToApply = {
      color: 'green',
    };

    const revertStyles = setStyle({ element, style: stylesToApply });

    expect(element.style.color).toBe('green');

    revertStyles();

    expect(element.style.color).toBe('');
  });

  it('should revert to the original styles if they existed', () => {
    element.style.setProperty('padding', '10px');
    element.style.setProperty('border', '1px solid black');

    const stylesToApply = {
      padding: '20px',
      border: '2px dotted red',
    };

    const revertStyles = setStyle({ element, style: stylesToApply });

    expect(element.style.padding).toBe('20px');
    expect(element.style.border).toBe('2px dotted red');

    revertStyles();

    expect(element.style.padding).toBe('10px');
    expect(element.style.border).toBe('1px solid black');
  });

  it('should remove the style attribute if all styles are reverted and no original styles existed', () => {
    const stylesToApply = {
      width: '100px',
    };

    const revertStyles = setStyle({ element, style: stylesToApply });

    expect(element.hasAttribute('style')).toBe(true);

    revertStyles();

    expect(element.hasAttribute('style')).toBe(false);
  });

  it('should not remove the style attribute if original styles still exist after reverting', () => {
    element.style.setProperty('margin', '5px');

    const stylesToApply = {
      width: '50px',
    };

    const revertStyles = setStyle({ element, style: stylesToApply });

    expect(element.style.width).toBe('50px');
    expect(element.style.margin).toBe('5px');
    expect(element.hasAttribute('style')).toBe(true);

    revertStyles();

    expect(element.style.width).toBe('');
    expect(element.style.margin).toBe('5px');
    expect(element.hasAttribute('style')).toBe(true);
  });

  it('should handle multiple style applications and reverts correctly', () => {
    element.style.setProperty('opacity', '0.5');

    const revert1 = setStyle({ element, style: { opacity: '1' } });
    expect(element.style.opacity).toBe('1');

    const revert2 = setStyle({ element, style: { color: 'purple' } });
    expect(element.style.color).toBe('purple');

    revert2();
    expect(element.style.color).toBe('');
    expect(element.style.opacity).toBe('1');

    revert1();
    expect(element.style.opacity).toBe('0.5');
  });

  it('should handle an empty style object without errors', () => {
    const revertStyles = setStyle({ element, style: {} });
    expect(element.hasAttribute('style')).toBe(false);
    revertStyles();
    expect(element.hasAttribute('style')).toBe(false);
  });
});
