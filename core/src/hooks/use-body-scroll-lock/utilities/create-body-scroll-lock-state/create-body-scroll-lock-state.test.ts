import { describe, it, expect, vi } from 'vitest';
import { createBodyScrollLockState } from '.';

describe('createBodyScrollLockState', () => {
  it('should initialize with count as 0 and cleanup as undefined', () => {
    const state = createBodyScrollLockState();

    expect(state.getCount()).toBe(0);
    expect(state.getCleanup()).toBeUndefined();
  });

  it('should increment count correctly', () => {
    const state = createBodyScrollLockState();

    state.incrementCount();
    expect(state.getCount()).toBe(1);

    state.incrementCount();
    expect(state.getCount()).toBe(2);

    state.incrementCount();
    expect(state.getCount()).toBe(3);
  });

  it('should decrement count correctly', () => {
    const state = createBodyScrollLockState();

    // First increment to have something to decrement
    state.incrementCount();
    state.incrementCount();
    state.incrementCount();
    expect(state.getCount()).toBe(3);

    state.decrementCount();
    expect(state.getCount()).toBe(2);

    state.decrementCount();
    expect(state.getCount()).toBe(1);

    state.decrementCount();
    expect(state.getCount()).toBe(0);
  });

  it('should reset count to 0', () => {
    const state = createBodyScrollLockState();

    // Increment count multiple times
    state.incrementCount();
    state.incrementCount();
    state.incrementCount();
    expect(state.getCount()).toBe(3);

    // Reset count
    state.resetCount();
    expect(state.getCount()).toBe(0);
  });

  it('should reset count to 0 from any positive value', () => {
    const state = createBodyScrollLockState();

    // Increment count multiple times
    state.incrementCount();
    state.incrementCount();
    state.incrementCount();
    expect(state.getCount()).toBe(3);

    // Reset count
    state.resetCount();
    expect(state.getCount()).toBe(0);

    // Should also work when count is already 0
    state.resetCount();
    expect(state.getCount()).toBe(0);
  });

  it('should not allow count to go below 0', () => {
    const state = createBodyScrollLockState();

    // Try to decrement when count is 0
    state.decrementCount();
    expect(state.getCount()).toBe(0);

    state.decrementCount();
    expect(state.getCount()).toBe(0);

    // Increment and then try to decrement below 0
    state.incrementCount();
    expect(state.getCount()).toBe(1);

    state.decrementCount();
    expect(state.getCount()).toBe(0);

    state.decrementCount();
    expect(state.getCount()).toBe(0);
  });

  it('should set and get cleanup function correctly', () => {
    const state = createBodyScrollLockState();
    const mockCleanup = vi.fn();

    state.setCleanup(mockCleanup);
    expect(state.getCleanup()).toBe(mockCleanup);
  });

  it('should reset cleanup function to undefined', () => {
    const state = createBodyScrollLockState();
    const mockCleanup = vi.fn();

    state.setCleanup(mockCleanup);
    expect(state.getCleanup()).toBe(mockCleanup);

    state.resetCleanup();
    expect(state.getCleanup()).toBeUndefined();
  });

  it('should handle multiple increment and decrement operations correctly', () => {
    const state = createBodyScrollLockState();

    // Simulate multiple components requesting scroll lock
    state.incrementCount(); // Component 1
    state.incrementCount(); // Component 2
    state.incrementCount(); // Component 3
    expect(state.getCount()).toBe(3);

    // Simulate components releasing scroll lock
    state.decrementCount(); // Component 3 releases
    expect(state.getCount()).toBe(2);

    state.decrementCount(); // Component 2 releases
    expect(state.getCount()).toBe(1);

    state.decrementCount(); // Component 1 releases
    expect(state.getCount()).toBe(0);
  });

  it('should maintain independent state for multiple instances', () => {
    const state1 = createBodyScrollLockState();
    const state2 = createBodyScrollLockState();
    const mockCleanup1 = vi.fn();
    const mockCleanup2 = vi.fn();

    state1.incrementCount();
    state1.setCleanup(mockCleanup1);

    state2.incrementCount();
    state2.incrementCount();
    state2.setCleanup(mockCleanup2);

    expect(state1.getCount()).toBe(1);
    expect(state1.getCleanup()).toBe(mockCleanup1);

    expect(state2.getCount()).toBe(2);
    expect(state2.getCleanup()).toBe(mockCleanup2);
  });

  it('should preserve cleanup function when count changes', () => {
    const state = createBodyScrollLockState();
    const mockCleanup = vi.fn();

    state.setCleanup(mockCleanup);
    state.incrementCount();
    state.decrementCount();
    state.incrementCount();

    expect(state.getCleanup()).toBe(mockCleanup);
  });

  it('should allow overwriting cleanup function', () => {
    const state = createBodyScrollLockState();
    const mockCleanup1 = vi.fn();
    const mockCleanup2 = vi.fn();

    state.setCleanup(mockCleanup1);
    expect(state.getCleanup()).toBe(mockCleanup1);

    state.setCleanup(mockCleanup2);
    expect(state.getCleanup()).toBe(mockCleanup2);
  });

  it('should handle typical usage pattern correctly', () => {
    const state = createBodyScrollLockState();
    const mockCleanup = vi.fn();

    // Initial state
    expect(state.getCount()).toBe(0);
    expect(state.getCleanup()).toBeUndefined();

    // First component requests lock
    state.incrementCount();
    state.setCleanup(mockCleanup);
    expect(state.getCount()).toBe(1);
    expect(state.getCleanup()).toBe(mockCleanup);

    // Additional components request lock
    state.incrementCount();
    state.incrementCount();
    expect(state.getCount()).toBe(3);
    expect(state.getCleanup()).toBe(mockCleanup);

    // Components release lock one by one
    state.decrementCount();
    expect(state.getCount()).toBe(2);
    expect(state.getCleanup()).toBe(mockCleanup);

    state.decrementCount();
    expect(state.getCount()).toBe(1);
    expect(state.getCleanup()).toBe(mockCleanup);

    // Last component releases lock - cleanup should be called and reset
    state.decrementCount();
    expect(state.getCount()).toBe(0);
    // At this point, the consuming code would call getCleanup() and execute it
    const cleanup = state.getCleanup();
    cleanup?.();
    state.resetCleanup();

    expect(state.getCount()).toBe(0);
    expect(state.getCleanup()).toBeUndefined();
  });

  it('should handle emergency reset scenario correctly', () => {
    const state = createBodyScrollLockState();
    const mockCleanup = vi.fn();

    // Setup state with multiple increments
    state.incrementCount();
    state.incrementCount();
    state.incrementCount();
    state.setCleanup(mockCleanup);
    expect(state.getCount()).toBe(3);
    expect(state.getCleanup()).toBe(mockCleanup);

    // Emergency reset scenario
    state.resetCount();
    expect(state.getCount()).toBe(0);
    expect(state.getCleanup()).toBe(mockCleanup);

    // Cleanup and reset
    const cleanup = state.getCleanup();
    cleanup?.();
    state.resetCleanup();

    expect(state.getCount()).toBe(0);
    expect(state.getCleanup()).toBeUndefined();
  });

  it('should return all expected methods including resetCount', () => {
    const state = createBodyScrollLockState();

    expect(typeof state.getCount).toBe('function');
    expect(typeof state.incrementCount).toBe('function');
    expect(typeof state.decrementCount).toBe('function');
    expect(typeof state.resetCount).toBe('function');
    expect(typeof state.getCleanup).toBe('function');
    expect(typeof state.setCleanup).toBe('function');
    expect(typeof state.resetCleanup).toBe('function');
  });
});
