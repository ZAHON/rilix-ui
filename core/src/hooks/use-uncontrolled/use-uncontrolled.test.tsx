import type { Signal, QRL } from '@builder.io/qwik';
import { describe, it, expect } from 'vitest';
import { component$, useSignal, $ } from '@builder.io/qwik';
import { render, screen, waitFor } from '@noma.to/qwik-testing-library';
import { userEvent } from '@testing-library/user-event';
import { mock$ } from '@noma.to/qwik-mock';
import { useUncontrolled } from '.';

const DEMO_INPUT_TESTID = 'DEMO_INPUT_TESTID';
const DEMO_CONTROLLED_TESTID = 'DEMO_CONTROLLED_TESTID';

interface DemoProps {
  uncontrolledValue?: string;
  controlledSignal?: Signal<string>;
  finalValue: string;
  onChange$?: QRL<(value: string) => void>;
}

const Demo = component$<DemoProps>((props) => {
  const { uncontrolledValue, controlledSignal, finalValue, onChange$ } = props;

  const { state, setState$, controlled } = useUncontrolled({
    uncontrolledValue: uncontrolledValue,
    controlledSignal: controlledSignal,
    finalValue: finalValue,
    onChange$: onChange$,
  });

  return (
    <>
      <input
        type="text"
        value={state.value}
        onInput$={(event: Event, currentTarget: HTMLInputElement) => setState$(currentTarget.value)}
        data-testid={DEMO_INPUT_TESTID}
      />

      <span data-testid={DEMO_CONTROLLED_TESTID}>{controlled ? 'CONTROLLED' : 'UNCONTROLLED'}</span>
    </>
  );
});

describe('useUncontrolled', () => {
  describe('Controlled', () => {
    interface ControlledDemoProps {
      onChange$?: QRL<(value: string) => void>;
    }

    const ControlledDemo = component$<ControlledDemoProps>((props) => {
      const { onChange$ } = props;

      const controlledSignal = useSignal('controlledSignal');

      return (
        <Demo
          uncontrolledValue={undefined}
          controlledSignal={controlledSignal}
          finalValue="finalValue"
          onChange$={$((value) => {
            controlledSignal.value = value;
            onChange$?.(value);
          })}
        />
      );
    });

    it('should return state prop signal with value privided via controlledSignal when controlledSignal prop is privided', async () => {
      await render(<ControlledDemo />);
      expect(screen.getByTestId(DEMO_INPUT_TESTID)).toHaveValue('controlledSignal');
    });

    it('should return controlled prop with value true when uncontrolledValue prop is privided', async () => {
      await render(<ControlledDemo />);
      expect(screen.getByTestId(DEMO_CONTROLLED_TESTID)).toHaveTextContent('CONTROLLED');
    });

    it('should call setState$ prop function', async () => {
      const handleChangeMock$ = mock$(() => {});

      const user = userEvent.setup();
      await render(<ControlledDemo onChange$={handleChangeMock$} />);

      await user.type(screen.getByTestId(DEMO_INPUT_TESTID), '1');

      await waitFor(() => expect(handleChangeMock$.resolve()).resolves.toBeCalledTimes(1));
      await waitFor(() => expect(handleChangeMock$.resolve()).resolves.toBeCalledWith('controlledSignal1'));
      expect(screen.getByTestId(DEMO_INPUT_TESTID)).toHaveValue('controlledSignal1');
    });
  });

  describe('Uncontrolled', () => {
    it('should return state prop signal with value privided via uncontrolledValue when uncontrolledValue prop is privided', async () => {
      await render(<Demo uncontrolledValue="uncontrolledValue" finalValue="finalValue" />);
      expect(screen.getByTestId(DEMO_INPUT_TESTID)).toHaveValue('uncontrolledValue');
    });

    it('should return state prop signal with value privided via finalValue when when uncontrolledValue prop is not privided', async () => {
      await render(<Demo uncontrolledValue={undefined} finalValue="finalValue" />);
      expect(screen.getByTestId(DEMO_INPUT_TESTID)).toHaveValue('finalValue');
    });

    it('should return controlled prop with value false when uncontrolledValue prop is privided', async () => {
      await render(<Demo uncontrolledValue="uncontrolledValue" finalValue="finalValue" />);
      expect(screen.getByTestId(DEMO_CONTROLLED_TESTID)).toHaveTextContent('UNCONTROLLED');
    });

    it('should return controlled prop with value false when uncontrolledValue prop is not privided', async () => {
      await render(<Demo uncontrolledValue={undefined} finalValue="finalValue" />);
      expect(screen.getByTestId(DEMO_CONTROLLED_TESTID)).toHaveTextContent('UNCONTROLLED');
    });

    it('should call setState$ prop function', async () => {
      const handleChangeMock$ = mock$(() => {});

      const user = userEvent.setup();
      await render(
        <Demo uncontrolledValue="uncontrolledValue" finalValue="finalValue" onChange$={handleChangeMock$} />
      );

      await user.type(screen.getByTestId(DEMO_INPUT_TESTID), '1');

      await waitFor(() => expect(handleChangeMock$.resolve()).resolves.toBeCalledTimes(1));
      await waitFor(() => expect(handleChangeMock$.resolve()).resolves.toBeCalledWith('uncontrolledValue1'));
      expect(screen.getByTestId(DEMO_INPUT_TESTID)).toHaveValue('uncontrolledValue1');
    });
  });
});
