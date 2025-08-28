import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isValidInitialFocus } from '.';

describe('isValidInitialFocus', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should return false if element is undefined', () => {
    const result = isValidInitialFocus({ element: undefined, container });
    expect(result).toBe(false);
  });

  it('should return false if element is null', () => {
    const result = isValidInitialFocus({ element: null, container });
    expect(result).toBe(false);
  });

  it('should return false if element is not in DOM', () => {
    const element = document.createElement('button');
    const result = isValidInitialFocus({ element, container });
    expect(result).toBe(false);
  });

  it('should return false if element is not a descendant of the container', () => {
    const element = document.createElement('button');
    const otherContainer = document.createElement('div');
    document.body.appendChild(otherContainer);
    otherContainer.appendChild(element);
    const result = isValidInitialFocus({ element, container });
    expect(result).toBe(false);
    document.body.removeChild(otherContainer);
  });

  it('should return false if element is in DOM and within container but not tabbable', () => {
    const span = document.createElement('span');
    container.appendChild(span);
    const result = isValidInitialFocus({ element: span, container });
    expect(result).toBe(false);
  });

  it('should return false if element has tabindex="-1" even if in DOM and within container', () => {
    const element = document.createElement('div');
    element.setAttribute('tabindex', '-1');
    container.appendChild(element);
    const result = isValidInitialFocus({ element, container });
    expect(result).toBe(false);
  });

  it('should return false for a disabled button within the container', () => {
    const button = document.createElement('button');
    button.disabled = true;
    container.appendChild(button);
    const result = isValidInitialFocus({ element: button, container });
    expect(result).toBe(false);
  });

  it('should return false for an input with type="hidden" within the container', () => {
    const input = document.createElement('input');
    input.type = 'hidden';
    container.appendChild(input);
    const result = isValidInitialFocus({ element: input, container });
    expect(result).toBe(false);
  });

  it('should return false for an element with "display: none" style within the container', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '0');
    div.style.display = 'none';
    container.appendChild(div);
    const result = isValidInitialFocus({ element: div, container });
    expect(result).toBe(false);
  });

  it('should return false for an element with "visibility: hidden" style within the container', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '0');
    div.style.visibility = 'hidden';
    container.appendChild(div);
    const result = isValidInitialFocus({ element: div, container });
    expect(result).toBe(false);
  });

  it('should return false for an element inside a parent with "display: none" within the container', () => {
    const parent = document.createElement('div');
    parent.style.display = 'none';
    const child = document.createElement('button');
    parent.appendChild(child);
    container.appendChild(parent);
    const result = isValidInitialFocus({ element: child, container });
    expect(result).toBe(false);
  });

  it('should return false for an element inside a parent with "visibility: hidden" within the container', () => {
    const parent = document.createElement('div');
    parent.style.visibility = 'hidden';
    const child = document.createElement('input');
    child.setAttribute('tabindex', '0');
    parent.appendChild(child);
    container.appendChild(parent);
    const result = isValidInitialFocus({ element: child, container });
    expect(result).toBe(false);
  });

  it('should return false for a disabled select element within the container', () => {
    const select = document.createElement('select');
    select.disabled = true;
    container.appendChild(select);
    const result = isValidInitialFocus({ element: select, container });
    expect(result).toBe(false);
  });

  it('should return false for a disabled textarea element within the container', () => {
    const textarea = document.createElement('textarea');
    textarea.disabled = true;
    container.appendChild(textarea);
    const result = isValidInitialFocus({ element: textarea, container });
    expect(result).toBe(false);
  });

  it('should return false for an anchor without href within the container', () => {
    const anchor = document.createElement('a');
    container.appendChild(anchor);
    const result = isValidInitialFocus({ element: anchor, container });
    expect(result).toBe(false);
  });
});
