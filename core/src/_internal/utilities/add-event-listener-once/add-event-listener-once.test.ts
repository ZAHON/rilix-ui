import { describe, it, expect, vi } from 'vitest';
import { addEventListenerOnce } from './add-event-listener-once';

describe('addEventListenerOnce', () => {
  it('should add an event listener that fires only once on an HTMLElement', () => {
    const div = document.createElement('div');
    const listener = vi.fn();

    addEventListenerOnce({ target: div, type: 'click', listener });

    div.dispatchEvent(new MouseEvent('click'));
    expect(listener).toHaveBeenCalledTimes(1);

    div.dispatchEvent(new MouseEvent('click'));
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should add an event listener that fires only once on the Document', () => {
    const listener = vi.fn();
    addEventListenerOnce({ target: document, type: 'DOMContentLoaded', listener });

    document.dispatchEvent(new Event('DOMContentLoaded'));
    expect(listener).toHaveBeenCalledTimes(1);

    document.dispatchEvent(new Event('DOMContentLoaded'));
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should add an event listener that fires only once on the Window', () => {
    const listener = vi.fn();
    addEventListenerOnce({ target: window, type: 'load', listener });

    window.dispatchEvent(new Event('load'));
    expect(listener).toHaveBeenCalledTimes(1);

    window.dispatchEvent(new Event('load'));
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should pass correct event object to the listener', () => {
    const div = document.createElement('div');
    const listener = vi.fn();
    addEventListenerOnce({ target: div, type: 'mouseover', listener });

    const mockEvent = new MouseEvent('mouseover', { bubbles: true, cancelable: true });
    div.dispatchEvent(mockEvent);

    expect(listener).toHaveBeenCalledWith(mockEvent);
  });

  it('should pass correct `this` context to the listener', () => {
    const div = document.createElement('div');
    const listener = vi.fn(function (this: HTMLElement) {
      expect(this).toBe(div);
    });
    addEventListenerOnce({ target: div, type: 'mousedown', listener });

    div.dispatchEvent(new MouseEvent('mousedown'));
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should respect additional options passed, except for `once`', () => {
    const div = document.createElement('div');
    const listener = vi.fn();
    addEventListenerOnce({ target: div, type: 'click', listener, options: { capture: true } });

    div.dispatchEvent(new MouseEvent('click'));
    expect(listener).toHaveBeenCalledTimes(1);

    div.dispatchEvent(new MouseEvent('click'));
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should allow options like `passive` to be passed to the underlying addEventListener', () => {
    const div = document.createElement('div');
    const listener = vi.fn();

    const originalAddEventListener = div.addEventListener;
    div.addEventListener = vi.fn(originalAddEventListener);

    addEventListenerOnce({ target: div, type: 'scroll', listener, options: { passive: true } });

    expect(div.addEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      expect.objectContaining({ passive: true, once: true })
    );

    div.dispatchEvent(new Event('scroll'));
    expect(listener).toHaveBeenCalledTimes(1);

    div.dispatchEvent(new Event('scroll'));
    expect(listener).toHaveBeenCalledTimes(1);

    div.addEventListener = originalAddEventListener;
  });

  it('should allow options like `capture` to be passed to the underlying addEventListener', () => {
    const div = document.createElement('div');
    const listener = vi.fn();

    const originalAddEventListener = div.addEventListener;
    div.addEventListener = vi.fn(originalAddEventListener);

    addEventListenerOnce({ target: div, type: 'click', listener, options: { capture: true } });

    expect(div.addEventListener).toHaveBeenCalledWith(
      'click',
      expect.any(Function),
      expect.objectContaining({ capture: true, once: true })
    );

    div.dispatchEvent(new MouseEvent('click'));
    expect(listener).toHaveBeenCalledTimes(1);
    div.dispatchEvent(new MouseEvent('click'));
    expect(listener).toHaveBeenCalledTimes(1);

    div.addEventListener = originalAddEventListener;
  });

  it('should work correctly with custom events', () => {
    const div = document.createElement('div');
    const listener = vi.fn();

    addEventListenerOnce({ target: div, type: 'myCustomEvent' as any, listener });

    const customEvent = new CustomEvent('myCustomEvent', { detail: 'hello' });
    div.dispatchEvent(customEvent);
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(customEvent);

    div.dispatchEvent(customEvent);
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should not interfere with other listeners of the same type on the same target', () => {
    const div = document.createElement('div');
    const listenerOnce = vi.fn();
    const regularListener = vi.fn();

    addEventListenerOnce({ target: div, type: 'click', listener: listenerOnce });
    div.addEventListener('click', regularListener);

    div.dispatchEvent(new MouseEvent('click'));
    expect(listenerOnce).toHaveBeenCalledTimes(1);
    expect(regularListener).toHaveBeenCalledTimes(1);

    div.dispatchEvent(new MouseEvent('click'));
    expect(listenerOnce).toHaveBeenCalledTimes(1);
    expect(regularListener).toHaveBeenCalledTimes(2);
  });

  it('should clean up the listener after it fires for the first time (internal check)', () => {
    const div = document.createElement('div');
    const listener = vi.fn();

    const originalRemoveEventListener = div.removeEventListener;
    div.removeEventListener = vi.fn(originalRemoveEventListener);

    addEventListenerOnce({ target: div, type: 'keyup', listener });

    div.dispatchEvent(new KeyboardEvent('keyup'));
    expect(listener).toHaveBeenCalledTimes(1);

    expect(div.removeEventListener).not.toHaveBeenCalled();

    div.dispatchEvent(new KeyboardEvent('keyup'));
    expect(listener).toHaveBeenCalledTimes(1);

    div.removeEventListener = originalRemoveEventListener;
  });
});
