import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isValidFinalFocus } from '.';

describe('isValidFinalFocus', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should return false if element is undefined', () => {
    const result = isValidFinalFocus(undefined);
    expect(result).toBe(false);
  });

  it('should return false if element is null', () => {
    const result = isValidFinalFocus(null);
    expect(result).toBe(false);
  });

  it('should return false if element is not in DOM', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '0');
    const result = isValidFinalFocus(div);
    expect(result).toBe(false);
  });

  it('should return false if element is in DOM but not tabbable', () => {
    const span = document.createElement('span');
    container.appendChild(span);
    const result = isValidFinalFocus(span);
    expect(result).toBe(false);
  });

  it('should return false if element is neither in DOM nor tabbable', () => {
    const div = document.createElement('div');
    const result = isValidFinalFocus(div);
    expect(result).toBe(false);
  });

  it('should return false for an element with tabindex="-1" even if in DOM', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '-1');
    container.appendChild(div);
    const result = isValidFinalFocus(div);
    expect(result).toBe(false);
  });

  it('should return false for a disabled button in DOM', () => {
    const button = document.createElement('button');
    button.disabled = true;
    container.appendChild(button);
    const result = isValidFinalFocus(button);
    expect(result).toBe(false);
  });

  it('should return false for an input with type="hidden" in DOM', () => {
    const input = document.createElement('input');
    input.type = 'hidden';
    container.appendChild(input);
    const result = isValidFinalFocus(input);
    expect(result).toBe(false);
  });

  it('should return false for an element with "display: none" style in DOM', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '0');
    div.style.display = 'none';
    container.appendChild(div);
    const result = isValidFinalFocus(div);
    expect(result).toBe(false);
  });

  it('should return false for an element with "visibility: hidden" style in DOM', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '0');
    div.style.visibility = 'hidden';
    container.appendChild(div);
    const result = isValidFinalFocus(div);
    expect(result).toBe(false);
  });

  it('should return false for an element inside a parent with "display: none"', () => {
    const parent = document.createElement('div');
    parent.style.display = 'none';
    const child = document.createElement('button');
    parent.appendChild(child);
    container.appendChild(parent);
    const result = isValidFinalFocus(child);
    expect(result).toBe(false);
  });

  it('should return false for an element inside a parent with "visibility: hidden"', () => {
    const parent = document.createElement('div');
    parent.style.visibility = 'hidden';
    const child = document.createElement('input');
    child.setAttribute('tabindex', '0');
    parent.appendChild(child);
    container.appendChild(parent);
    const result = isValidFinalFocus(child);
    expect(result).toBe(false);
  });

  it('should return false for a disabled select element in DOM', () => {
    const select = document.createElement('select');
    select.disabled = true;
    container.appendChild(select);
    const result = isValidFinalFocus(select);
    expect(result).toBe(false);
  });

  it('should return false for a disabled textarea element in DOM', () => {
    const textarea = document.createElement('textarea');
    textarea.disabled = true;
    container.appendChild(textarea);
    const result = isValidFinalFocus(textarea);
    expect(result).toBe(false);
  });

  it('should return false for an anchor without href in DOM', () => {
    const anchor = document.createElement('a');
    container.appendChild(anchor);
    const result = isValidFinalFocus(anchor);
    expect(result).toBe(false);
  });
});
