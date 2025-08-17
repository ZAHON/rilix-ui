import { describe, it, expect, beforeEach } from 'vitest';
import { setAttribute } from '.';

let element: HTMLElement;

beforeEach(() => {
  element = document.createElement('div');
});

describe('setAttribute', () => {
  it('should set a new attribute with a given value', () => {
    const attributeName = 'data-test';
    const attributeValue = 'some-value';

    setAttribute({
      element,
      attribute: attributeName,
      value: attributeValue,
    });

    expect(element.getAttribute(attributeName)).toBe(attributeValue);
  });

  it('should override an existing attribute with a new value', () => {
    const attributeName = 'class';
    const originalValue = 'old-class';
    const newValue = 'new-class';

    element.setAttribute(attributeName, originalValue);

    setAttribute({
      element,
      attribute: attributeName,
      value: newValue,
    });

    expect(element.getAttribute(attributeName)).toBe(newValue);
  });

  it('should return a cleanup function that restores the original attribute value', () => {
    const attributeName = 'id';
    const originalValue = 'element-id';
    const newValue = 'temp-id';

    element.setAttribute(attributeName, originalValue);

    const cleanup = setAttribute({
      element,
      attribute: attributeName,
      value: newValue,
    });

    expect(element.getAttribute(attributeName)).toBe(newValue);
    cleanup();
    expect(element.getAttribute(attributeName)).toBe(originalValue);
  });

  it('should return a cleanup function that removes a newly added attribute', () => {
    const attributeName = 'data-state';
    const attributeValue = 'active';

    const cleanup = setAttribute({
      element,
      attribute: attributeName,
      value: attributeValue,
    });

    expect(element.getAttribute(attributeName)).toBe(attributeValue);
    cleanup();
    expect(element.getAttribute(attributeName)).toBeNull();
  });

  it('should return a cleanup function that restores a null attribute to its original null state', () => {
    const attributeName = 'data-initial-state';

    const cleanup = setAttribute({
      element,
      attribute: attributeName,
      value: 'new-value',
    });

    expect(element.getAttribute(attributeName)).toBe('new-value');
    cleanup();
    expect(element.getAttribute(attributeName)).toBeNull();
  });
});
