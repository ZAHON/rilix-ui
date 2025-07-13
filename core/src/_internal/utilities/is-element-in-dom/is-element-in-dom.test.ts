import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isElementInDOM } from '.';

describe('isElementInDOM', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should return true if the element is directly appended to document.body', () => {
    const element = document.createElement('span');
    document.body.appendChild(element);
    expect(isElementInDOM(element)).toBe(true);
    document.body.removeChild(element);
  });

  it('should return true if the element is a descendant of an element in the DOM', () => {
    const parentElement = document.createElement('div');
    const childElement = document.createElement('p');
    parentElement.appendChild(childElement);
    document.body.appendChild(parentElement);
    expect(isElementInDOM(childElement)).toBe(true);
  });

  it('should return false if the element is created but not appended to the DOM', () => {
    const element = document.createElement('section');
    expect(isElementInDOM(element)).toBe(false);
  });

  it('should return false if the element was in the DOM but has been removed', () => {
    const element = document.createElement('button');
    document.body.appendChild(element);
    expect(isElementInDOM(element)).toBe(true);
    document.body.removeChild(element);
    expect(isElementInDOM(element)).toBe(false);
  });

  it('should return false if the element is null or undefined', () => {
    expect(isElementInDOM(null as any)).toBe(false);
    expect(isElementInDOM(undefined as any)).toBe(false);
  });

  it('should return true for document.body itself', () => {
    expect(isElementInDOM(document.body)).toBe(true);
  });

  it('should return true for a deeply nested element', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const span = document.createElement('span');
    div1.appendChild(div2);
    div2.appendChild(span);
    document.body.appendChild(div1);
    expect(isElementInDOM(span)).toBe(true);
  });
});
