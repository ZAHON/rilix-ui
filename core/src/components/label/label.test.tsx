import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@noma.to/qwik-testing-library';
import { userEvent } from '@testing-library/user-event';
import { mock$ } from '@noma.to/qwik-mock';
import { Label } from '.';

const LABEL_ROOT_TESTID = 'LABEL_ROOT_TESTID';

describe('Label', () => {
  describe('Root', () => {
    it('should be <label> element by default', async () => {
      await render(<Label.Root data-testid={LABEL_ROOT_TESTID} />);
      expect(screen.getByTestId(LABEL_ROOT_TESTID).tagName).toBe('LABEL');
    });

    it('should render a custom element when `render$` prop is used', async () => {
      await render(<Label.Root render$={(props) => <span {...props} />} data-testid={LABEL_ROOT_TESTID} />);
      expect(screen.getByTestId(LABEL_ROOT_TESTID).tagName).not.toBe('LABEL');
      expect(screen.getByTestId(LABEL_ROOT_TESTID).tagName).toBe('SPAN');
    });

    it('should contain passed children', async () => {
      const LABEL_ROOT_TEXT = 'LABEL_ROOT_TEXT';

      await render(<Label.Root data-testid={LABEL_ROOT_TESTID}>{LABEL_ROOT_TEXT}</Label.Root>);
      expect(screen.getByTestId(LABEL_ROOT_TESTID)).toHaveTextContent(LABEL_ROOT_TEXT);
    });

    it('should prevent text selection when double clicking by default', async () => {
      const user = userEvent.setup();
      const LABEL_ROOT_TEXT = 'LABEL_ROOT_TEXT';

      await render(<Label.Root data-testid={LABEL_ROOT_TESTID}>{LABEL_ROOT_TEXT}</Label.Root>);

      const element = screen.getByText(LABEL_ROOT_TEXT);

      await user.dblClick(element);

      const clipboard = await user.copy();

      expect(clipboard).toBeUndefined();
    });

    it('should not prevent text selection when double clicking when preventDblClickTextSelection prop is set to false', async () => {
      const user = userEvent.setup();
      const LABEL_ROOT_TEXT = 'LABEL_ROOT_TEXT';

      await render(
        <Label.Root preventDblClickTextSelection={false} data-testid={LABEL_ROOT_TESTID}>
          {LABEL_ROOT_TEXT}
        </Label.Root>
      );

      const element = screen.getByText(LABEL_ROOT_TEXT);

      await user.dblClick(element);

      const clipboard = await user.copy();

      let clipboardText = '';

      clipboard?.items[0].getAsString((string) => (clipboardText = string));

      expect(clipboardText).toEqual(`${LABEL_ROOT_TEXT}`);
    });

    it('should prevent text selection when double clicking when preventDblClickTextSelection prop is set to true', async () => {
      const user = userEvent.setup();
      const LABEL_ROOT_TEXT = 'LABEL_ROOT_TEXT';

      await render(
        <Label.Root preventDblClickTextSelection={true} data-testid={LABEL_ROOT_TESTID}>
          {LABEL_ROOT_TEXT}
        </Label.Root>
      );

      const element = screen.getByText(LABEL_ROOT_TEXT);

      await user.dblClick(element);

      const clipboard = await user.copy();

      expect(clipboard).toBeUndefined();
    });

    it('should call onMouseDown$ event handler', async () => {
      const handleMouseDown$ = mock$(() => {});

      const user = userEvent.setup();
      await render(<Label.Root onMouseDown$={handleMouseDown$} data-testid={LABEL_ROOT_TESTID} />);

      await user.pointer({ target: screen.getByTestId(LABEL_ROOT_TESTID), keys: '[MouseLeft]' });
      await waitFor(() => expect(handleMouseDown$.resolve()).resolves.toBeCalledTimes(1));
    });

    it('should have not attribute data-prevent-dbl-click-text-selection when preventDblClickTextSelection prop is set to false', async () => {
      await render(<Label.Root preventDblClickTextSelection={false} data-testid={LABEL_ROOT_TESTID} />);
      expect(screen.getByTestId(LABEL_ROOT_TESTID)).not.toHaveAttribute('data-prevent-dbl-click-text-selection');
    });

    it('should have attribute data-prevent-dbl-click-text-selection with empty value when preventDblClickTextSelection prop is set to true', async () => {
      await render(<Label.Root preventDblClickTextSelection={true} data-testid={LABEL_ROOT_TESTID} />);
      expect(screen.getByTestId(LABEL_ROOT_TESTID)).toHaveAttribute('data-prevent-dbl-click-text-selection', '');
    });

    it('should have attribute data-rilix-ui-label-root with empty value', async () => {
      await render(<Label.Root data-testid={LABEL_ROOT_TESTID} />);
      expect(screen.getByTestId(LABEL_ROOT_TESTID)).toHaveAttribute('data-rilix-ui-label-root', '');
    });

    it('should have attribute data-scope with value "label"', async () => {
      await render(<Label.Root data-testid={LABEL_ROOT_TESTID} />);
      expect(screen.getByTestId(LABEL_ROOT_TESTID)).toHaveAttribute('data-scope', 'label');
    });

    it('should have attribute data-part with value "root"', async () => {
      await render(<Label.Root data-testid={LABEL_ROOT_TESTID} />);
      expect(screen.getByTestId(LABEL_ROOT_TESTID)).toHaveAttribute('data-part', 'root');
    });
  });
});
