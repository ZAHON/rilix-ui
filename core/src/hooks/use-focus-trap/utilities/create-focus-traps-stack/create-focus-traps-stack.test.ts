import type { QRL } from '@builder.io/qwik';
import type { FocusTrapAPI } from '.';
import { describe, it, expect, vi } from 'vitest';
import { createFocusTrapsStack } from '.';

describe('createFocusTrapsStack', () => {
  const createMockFocusTrap = (): FocusTrapAPI => {
    const mockTrap: FocusTrapAPI = {
      paused: false,
      pause$: vi.fn(function (this: FocusTrapAPI) {
        mockTrap.paused = true;
      }) as unknown as QRL<() => void>,
      resume$: vi.fn(function (this: FocusTrapAPI) {
        mockTrap.paused = false;
      }) as unknown as QRL<() => void>,
    };
    return mockTrap;
  };

  it('should add a focus trap to the stack', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();

    stack.add(trap1);

    expect(trap1.pause$).not.toHaveBeenCalled();
    expect(trap1.resume$).not.toHaveBeenCalled();
    expect(trap1.paused).toBe(false);
  });

  it('should pause the previous active trap when a new one is added', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();
    const trap2 = createMockFocusTrap();

    stack.add(trap1);
    expect(trap1.paused).toBe(false);

    stack.add(trap2);

    expect(trap1.pause$).toHaveBeenCalledTimes(1);
    expect(trap1.paused).toBe(true);
    expect(trap2.pause$).not.toHaveBeenCalled();
    expect(trap2.paused).toBe(false);
  });

  it('should not pause the same trap if it is re-added while active', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();

    stack.add(trap1);
    expect(trap1.pause$).not.toHaveBeenCalled();

    stack.add(trap1);

    expect(trap1.pause$).not.toHaveBeenCalled();
    expect(trap1.resume$).not.toHaveBeenCalled();
    expect(trap1.paused).toBe(false);
  });

  it('should remove a focus trap from the stack', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();
    const trap2 = createMockFocusTrap();

    stack.add(trap1);
    stack.add(trap2); // trap2 is active, trap1 is paused

    stack.remove(trap2); // Remove active trap

    expect(trap2.resume$).not.toHaveBeenCalled();
    expect(trap1.resume$).toHaveBeenCalledTimes(1); // trap1 should be resumed as it's now top of stack
    expect(trap1.paused).toBe(false);
  });

  it('should resume the next trap when the active trap is removed', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();
    const trap2 = createMockFocusTrap();
    const trap3 = createMockFocusTrap();

    stack.add(trap1); // stack: [t1]
    stack.add(trap2); // stack: [t2, t1], t1.paused = true
    stack.add(trap3); // stack: [t3, t2, t1], t2.paused = true

    // Manually set initial paused states to match what stack.add would do
    trap1.paused = true;
    trap2.paused = true;
    trap3.paused = false;

    stack.remove(trap3); // stack: [t2, t1]

    expect(trap3.resume$).not.toHaveBeenCalled(); // Removed trap isn't resumed
    expect(trap2.resume$).toHaveBeenCalledTimes(1); // trap2 should be resumed
    expect(trap2.paused).toBe(false); // trap2's state should be active
    expect(trap1.resume$).not.toHaveBeenCalled(); // trap1 should remain paused
  });

  it('should handle removing the only trap in the stack', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();

    stack.add(trap1);
    expect(trap1.paused).toBe(false); // Should be active

    stack.remove(trap1);

    expect(trap1.resume$).not.toHaveBeenCalled(); // No other trap to resume, so trap1 isn't resumed
    expect(trap1.paused).toBe(false); // Its own state should remain active
  });

  it('should not resume any trap if the stack becomes empty after removal', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();

    stack.add(trap1);
    trap1.paused = false; // Ensure it's active

    stack.remove(trap1); // Stack becomes empty

    // No other traps to resume, so resume$ should not be called on any trap
    expect(trap1.resume$).not.toHaveBeenCalled();
  });

  // --- NEW TESTS START HERE ---

  it('should correctly handle nested traps being added and removed', () => {
    const stack = createFocusTrapsStack();
    const trapA = createMockFocusTrap();
    const trapB = createMockFocusTrap();
    const trapC = createMockFocusTrap();

    // Add A
    stack.add(trapA);
    expect(trapA.paused).toBe(false); // A is active
    vi.clearAllMocks(); // Clear for next phase

    // Add B (nested)
    stack.add(trapB);
    expect(trapA.pause$).toHaveBeenCalledTimes(1); // A is paused
    expect(trapA.paused).toBe(true);
    expect(trapB.paused).toBe(false); // B is active
    vi.clearAllMocks();

    // Add C (nested)
    stack.add(trapC);
    expect(trapB.pause$).toHaveBeenCalledTimes(1); // B is paused
    expect(trapB.paused).toBe(true);
    expect(trapC.paused).toBe(false); // C is active
    expect(trapA.pause$).not.toHaveBeenCalled(); // A remains paused
    expect(trapA.paused).toBe(true);
    vi.clearAllMocks();

    // Remove C
    stack.remove(trapC);
    expect(trapC.resume$).not.toHaveBeenCalled(); // C is removed, not resumed
    expect(trapB.resume$).toHaveBeenCalledTimes(1); // B is resumed
    expect(trapB.paused).toBe(false);
    expect(trapA.paused).toBe(true); // A remains paused
    vi.clearAllMocks();

    // Remove B
    stack.remove(trapB);
    expect(trapB.resume$).not.toHaveBeenCalled(); // B is removed, not resumed
    expect(trapA.resume$).toHaveBeenCalledTimes(1); // A is resumed
    expect(trapA.paused).toBe(false);
    vi.clearAllMocks();

    // Remove A
    stack.remove(trapA);
    expect(trapA.resume$).not.toHaveBeenCalled(); // A is removed, not resumed
  });

  it('should handle removing a trap that was re-added (its position moved to top)', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();
    const trap2 = createMockFocusTrap();

    stack.add(trap1); // stack: [t1]
    stack.add(trap2); // stack: [t2, t1], t1.paused=true

    // Re-add trap1, it should move to top
    stack.add(trap1); // stack: [t1, t2]. t2.paused=true (by trap1.add), t1.paused=false (because it's now active)

    // Manually set initial states reflecting stack.add behavior
    trap1.paused = false;
    trap2.paused = true;
    vi.clearAllMocks(); // Clear mocks before the remove action

    stack.remove(trap1); // trap1 was top, now it's removed. trap2 should resume.

    expect(trap1.resume$).not.toHaveBeenCalled(); // It was removed
    expect(trap2.resume$).toHaveBeenCalledTimes(1); // trap2 should be resumed
    expect(trap2.paused).toBe(false); // trap2 becomes active
  });

  it('should correctly handle adding and immediately removing a trap', () => {
    const stack = createFocusTrapsStack();
    const trap1 = createMockFocusTrap();
    const trap2 = createMockFocusTrap();

    stack.add(trap1); // stack: [t1]
    trap1.paused = false;
    vi.clearAllMocks();

    stack.add(trap2); // stack: [t2, t1], t1.paused=true
    expect(trap1.pause$).toHaveBeenCalledTimes(1);
    expect(trap1.paused).toBe(true);
    expect(trap2.paused).toBe(false);
    vi.clearAllMocks();

    stack.remove(trap2); // stack: [t1], t1.resume$ called, t1.paused=false
    expect(trap2.resume$).not.toHaveBeenCalled(); // Removed trap isn't resumed
    expect(trap1.resume$).toHaveBeenCalledTimes(1);
    expect(trap1.paused).toBe(false);
    vi.clearAllMocks();

    // Verify stack state is back to original
    expect(trap1.pause$).not.toHaveBeenCalled();
    expect(trap1.resume$).not.toHaveBeenCalled();
  });
});
