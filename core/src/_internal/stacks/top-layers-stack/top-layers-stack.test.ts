import { describe, it, expect, beforeEach } from 'vitest';
import { topLayersStack } from '.';

describe('topLayersStack', () => {
  beforeEach(() => {
    topLayersStack.clear();
  });

  it('should add a layer and make it the active one', () => {
    topLayersStack.add('dialog-1');
    expect(topLayersStack.isActive('dialog-1')).toBe(true);

    topLayersStack.add('dialog-2');
    expect(topLayersStack.isActive('dialog-2')).toBe(true);
  });

  it('should not consider a layer active if it is not at the top', () => {
    topLayersStack.add('dialog-1');
    topLayersStack.add('dialog-2');
    expect(topLayersStack.isActive('dialog-1')).toBe(false);
  });

  it('should remove a layer from the stack and activate the previous one', () => {
    topLayersStack.add('dialog-1');
    topLayersStack.add('dialog-2');
    topLayersStack.remove('dialog-2');
    expect(topLayersStack.isActive('dialog-2')).toBe(false);
    expect(topLayersStack.isActive('dialog-1')).toBe(true);
  });

  it('should correctly remove a layer from the middle of the stack', () => {
    topLayersStack.add('dialog-1');
    topLayersStack.add('dialog-2');
    topLayersStack.add('dialog-3');

    topLayersStack.remove('dialog-2');

    expect(topLayersStack.isActive('dialog-3')).toBe(true);
    expect(topLayersStack.isActive('dialog-2')).toBe(false);
  });

  it('should do nothing when trying to remove a non-existent layer', () => {
    topLayersStack.add('dialog-1');
    topLayersStack.add('dialog-2');

    topLayersStack.remove('non-existent-id');

    expect(topLayersStack.isActive('dialog-2')).toBe(true);
  });

  it('should return false for isActive when the stack is empty', () => {
    expect(topLayersStack.isActive('any-id')).toBe(false);
  });

  it('should clear all layers from the stack', () => {
    topLayersStack.add('dialog-1');
    topLayersStack.add('dialog-2');

    topLayersStack.clear();

    expect(topLayersStack.isActive('dialog-1')).toBe(false);
    expect(topLayersStack.isActive('dialog-2')).toBe(false);
  });

  it('should allow adding new layers after the stack has been cleared', () => {
    topLayersStack.add('dialog-1');
    topLayersStack.clear();
    topLayersStack.add('dialog-new');
    expect(topLayersStack.isActive('dialog-new')).toBe(true);
  });

  it('should be empty after the last layer is removed', () => {
    topLayersStack.add('dialog-1');
    topLayersStack.remove('dialog-1');
    expect(topLayersStack.isActive('dialog-1')).toBe(false);
  });

  it('should handle duplicate IDs by removing the first occurrence', () => {
    topLayersStack.add('dialog-1');
    topLayersStack.add('dialog-2');
    topLayersStack.add('dialog-1');

    expect(topLayersStack.isActive('dialog-1')).toBe(true);

    topLayersStack.remove('dialog-1');

    expect(topLayersStack.isActive('dialog-1')).toBe(true);

    topLayersStack.remove('dialog-1');
    expect(topLayersStack.isActive('dialog-2')).toBe(true);
  });

  it('should handle clearing an already empty stack without errors', () => {
    expect(() => topLayersStack.clear()).not.toThrow();
    expect(topLayersStack.isActive('any-id')).toBe(false);
  });

  it('should maintain the correct active layer through a complex sequence of operations', () => {
    topLayersStack.add('dialog-A');
    topLayersStack.add('dialog-B');
    topLayersStack.add('dialog-C');
    expect(topLayersStack.isActive('dialog-C')).toBe(true);

    topLayersStack.remove('dialog-B');
    expect(topLayersStack.isActive('dialog-C')).toBe(true);

    topLayersStack.add('dialog-D');
    expect(topLayersStack.isActive('dialog-D')).toBe(true);

    topLayersStack.remove('dialog-C');
    expect(topLayersStack.isActive('dialog-D')).toBe(true);

    topLayersStack.remove('dialog-D');
    expect(topLayersStack.isActive('dialog-A')).toBe(true);

    topLayersStack.remove('dialog-A');
    expect(topLayersStack.isActive('dialog-A')).toBe(false);
  });
});
