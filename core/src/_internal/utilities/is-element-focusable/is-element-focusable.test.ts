import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isElementFocusable } from '.';

describe('isElementFocusable', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should return false for hidden input', () => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.style.width = '100px';
    input.style.height = '30px';
    container.appendChild(input);
    expect(isElementFocusable(input)).toBe(false);
  });

  it('should return false for disabled input', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.disabled = true;
    input.style.width = '100px';
    input.style.height = '30px';
    container.appendChild(input);
    expect(isElementFocusable(input)).toBe(false);
  });

  it('should return false for input that is not visible', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.style.display = 'none';
    container.appendChild(input);
    expect(isElementFocusable(input)).toBe(false);
  });

  it('should return false for disabled select', () => {
    const select = document.createElement('select');
    select.innerHTML = '<option>Option 1</option>';
    select.disabled = true;
    select.style.width = '100px';
    select.style.height = '30px';
    container.appendChild(select);
    expect(isElementFocusable(select)).toBe(false);
  });

  it('should return false for disabled textarea', () => {
    const textarea = document.createElement('textarea');
    textarea.disabled = true;
    textarea.style.width = '100px';
    textarea.style.height = '60px';
    container.appendChild(textarea);
    expect(isElementFocusable(textarea)).toBe(false);
  });

  it('should return false for anchor without href', () => {
    const anchor = document.createElement('a');
    anchor.textContent = 'Not a link';
    container.appendChild(anchor);
    expect(isElementFocusable(anchor)).toBe(false);
  });

  it('should return false for disabled button', () => {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    button.disabled = true;
    container.appendChild(button);
    expect(isElementFocusable(button)).toBe(false);
  });

  it('should return false for audio without controls', () => {
    const audio = document.createElement('audio');
    audio.style.width = '200px';
    audio.style.height = '30px';
    container.appendChild(audio);
    expect(isElementFocusable(audio)).toBe(false);
  });

  it('should return false for video without controls', () => {
    const video = document.createElement('video');
    video.style.width = '200px';
    video.style.height = '100px';
    container.appendChild(video);
    expect(isElementFocusable(video)).toBe(false);
  });

  it('should return false for contenteditable="false"', () => {
    const div = document.createElement('div');
    div.contentEditable = 'false';
    div.textContent = 'Not editable';
    container.appendChild(div);
    expect(isElementFocusable(div)).toBe(false);
  });

  it('should return false for area without href', () => {
    const area = document.createElement('area');
    area.style.width = '50px';
    area.style.height = '50px';
    container.appendChild(area);
    expect(isElementFocusable(area)).toBe(false);
  });

  it('should return false for focusable element within inert container', () => {
    const inertContainer = document.createElement('div');
    inertContainer.setAttribute('inert', '');
    const button = document.createElement('button');
    button.textContent = 'Button';
    inertContainer.appendChild(button);
    container.appendChild(inertContainer);
    expect(isElementFocusable(button)).toBe(false);
  });

  it('should return false for inert element itself', () => {
    const button = document.createElement('button');
    button.textContent = 'Button';
    button.setAttribute('inert', '');
    container.appendChild(button);
    expect(isElementFocusable(button)).toBe(false);
  });

  it('should return false for element with inert ancestor', () => {
    const inertContainer = document.createElement('div');
    inertContainer.setAttribute('inert', '');
    const nestedContainer = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = 'Button';
    nestedContainer.appendChild(button);
    inertContainer.appendChild(nestedContainer);
    container.appendChild(inertContainer);
    expect(isElementFocusable(button)).toBe(false);
  });

  it('should return false for element with display: none', () => {
    const button = document.createElement('button');
    button.textContent = 'Button';
    button.style.display = 'none';
    container.appendChild(button);
    expect(isElementFocusable(button)).toBe(false);
  });

  it('should return false for element with zero dimensions', () => {
    const button = document.createElement('button');
    button.style.width = '0';
    button.style.height = '0';
    container.appendChild(button);
    expect(isElementFocusable(button)).toBe(false);
  });

  it('should return false for regular div without focusable attributes', () => {
    const div = document.createElement('div');
    div.textContent = 'Regular div';
    container.appendChild(div);
    expect(isElementFocusable(div)).toBe(false);
  });

  it('should return false for span element', () => {
    const span = document.createElement('span');
    span.textContent = 'Regular span';
    container.appendChild(span);
    expect(isElementFocusable(span)).toBe(false);
  });

  it('should return false for paragraph element', () => {
    const p = document.createElement('p');
    p.textContent = 'Regular paragraph';
    container.appendChild(p);
    expect(isElementFocusable(p)).toBe(false);
  });

  it('should return false for element with visibility: hidden', () => {
    const button = document.createElement('button');
    button.textContent = 'Button';
    button.style.visibility = 'hidden';
    button.style.width = '100px';
    button.style.height = '30px';
    container.appendChild(button);
    expect(isElementFocusable(button)).toBe(false);
  });
});
