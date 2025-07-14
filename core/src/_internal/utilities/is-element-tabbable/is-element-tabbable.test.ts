import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isElementTabbable } from '.';

describe('isElementTabbable', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  const createElement = (tagName: string, attributes: Record<string, string> = {}) => {
    const element = document.createElement(tagName);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    container.appendChild(element);
    return element;
  };

  it('should return false for an element with tabindex="-1"', () => {
    const div = createElement('div', { tabindex: '-1' });
    expect(isElementTabbable(div)).toBe(false);
  });

  it('should return false for an input with type="hidden"', () => {
    const input = createElement('input', { type: 'hidden' });
    expect(isElementTabbable(input)).toBe(false);
  });

  it('should return false for a disabled button', () => {
    const button = createElement('button', { disabled: '' });
    expect(isElementTabbable(button)).toBe(false);
  });

  it('should return false for an element with display: none', () => {
    const input = createElement('input');
    input.style.display = 'none';
    expect(isElementTabbable(input)).toBe(false);
  });

  it('should return false for an element with visibility: hidden', () => {
    const input = createElement('input');
    input.style.visibility = 'hidden';
    input.style.width = '10px';
    input.style.height = '10px';
    expect(isElementTabbable(input)).toBe(false);
  });

  it('should return false for an element with zero dimensions (not visible)', () => {
    const div = createElement('div', { tabindex: '0' });
    div.style.width = '0';
    div.style.height = '0';
    expect(isElementTabbable(div)).toBe(false);
  });

  it('should return false for an element within an [inert] subtree', () => {
    const inertContainer = createElement('div', { inert: '' });
    const button = document.createElement('button');
    button.textContent = 'Button';
    inertContainer.appendChild(button);
    expect(isElementTabbable(button)).toBe(false);
  });

  it('should return false for an element that is not generally focusable and has no tabindex', () => {
    const div = createElement('div');
    expect(isElementTabbable(div)).toBe(false);
  });

  it('should return false for an anchor without href', () => {
    const anchor = createElement('a');
    expect(isElementTabbable(anchor)).toBe(false);
  });

  it('should return false for audio without controls', () => {
    const audio = createElement('audio');
    expect(isElementTabbable(audio)).toBe(false);
  });

  it('should return false for video without controls', () => {
    const video = createElement('video');
    expect(isElementTabbable(video)).toBe(false);
  });

  it('should return false for contenteditable="false"', () => {
    const div = createElement('div', { contenteditable: 'false' });
    expect(isElementTabbable(div)).toBe(false);
  });

  it('should return false for a disabled select', () => {
    const select = createElement('select', { disabled: '' });
    expect(isElementTabbable(select)).toBe(false);
  });

  it('should return false for a disabled textarea', () => {
    const textarea = createElement('textarea', { disabled: '' });
    expect(isElementTabbable(textarea)).toBe(false);
  });

  it('should return false for an iframe with display none', () => {
    const iframe = createElement('iframe');
    iframe.style.display = 'none';
    expect(isElementTabbable(iframe)).toBe(false);
  });

  it('should return false for an object with visibility hidden', () => {
    const object = createElement('object');
    object.style.visibility = 'hidden';
    object.style.width = '10px';
    object.style.height = '10px';
    expect(isElementTabbable(object)).toBe(false);
  });

  it('should return false for an element whose parent has display: none', () => {
    const parent = createElement('div');
    parent.style.display = 'none';
    const child = document.createElement('button');
    child.textContent = 'Child Button';
    parent.appendChild(child);
    expect(isElementTabbable(child)).toBe(false);
  });

  it('should return false for an element whose ancestor has visibility: hidden', () => {
    const grandparent = createElement('div');
    grandparent.style.visibility = 'hidden';
    grandparent.style.width = '10px';
    grandparent.style.height = '10px';
    const parent = document.createElement('div');
    const child = document.createElement('input');
    child.type = 'text';
    child.style.width = '10px';
    child.style.height = '10px';
    parent.appendChild(child);
    grandparent.appendChild(parent);
    expect(isElementTabbable(child)).toBe(false);
  });

  it('should return false for a normal div with no tabindex or other focusable attributes', () => {
    const div = createElement('div');
    expect(isElementTabbable(div)).toBe(false);
  });

  it('should return false for a span element', () => {
    const span = createElement('span');
    expect(isElementTabbable(span)).toBe(false);
  });

  it('should return false for an element with negative tabIndex explicitly set via JS', () => {
    const div = document.createElement('div');
    div.tabIndex = -1;
    container.appendChild(div);
    expect(isElementTabbable(div)).toBe(false);
  });
});
