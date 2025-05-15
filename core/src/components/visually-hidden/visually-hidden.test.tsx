import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { VisuallyHidden } from '.';

const VISUALLY_HIDDEN_TESTID = 'VISUALLY_HIDDEN_TESTID';

describe('VisuallyHidden', () => {
  describe('Root', () => {
    it('should be <span> element by default', async () => {
      await render(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be element provided via as prop', async () => {
      const VISUALLY_HIDDEN_TEXT = 'VISUALLY_HIDDEN_TEXT';

      const Primitive = component$((props: PropsOf<'fiv'>) => {
        return (
          <div {...props}>
            <Slot />
          </div>
        );
      });

      await render(
        <VisuallyHidden.Root as={Primitive} data-testid={VISUALLY_HIDDEN_TESTID}>
          {VISUALLY_HIDDEN_TEXT}
        </VisuallyHidden.Root>
      );
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).not.toBeInstanceOf(HTMLSpanElement);
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toBeInstanceOf(HTMLDivElement);
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toHaveTextContent(VISUALLY_HIDDEN_TEXT);
    });

    it('should contain passed children', async () => {
      const VISUALLY_HIDDEN_TEXT = 'VISUALLY_HIDDEN_TEXT';

      await render(
        <VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID}>{VISUALLY_HIDDEN_TEXT}</VisuallyHidden.Root>
      );
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toHaveTextContent(VISUALLY_HIDDEN_TEXT);
    });

    it('should have visually hidden inline style', async () => {
      await render(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toHaveStyle(`
				position: absolute;
				border: 0px;
				width: 1px;
				height: 1px;
				padding: 0px;
				margin: -1px;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				white-space: nowrap;
  			word-wrap: normal
			`);
    });

    it('should have inline style provided via style prop as objects', async () => {
      const VISUALLY_HIDDEN_COLOR = 'rgb(255, 0, 0)';

      await render(
        <VisuallyHidden.Root style={{ color: VISUALLY_HIDDEN_COLOR }} data-testid={VISUALLY_HIDDEN_TESTID} />
      );
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toHaveStyle(`color: ${VISUALLY_HIDDEN_COLOR}`);
    });

    it('should have inline style provided via style prop as string', async () => {
      const VISUALLY_HIDDEN_COLOR = 'rgb(255, 0, 0)';

      await render(
        <VisuallyHidden.Root style={`color: ${VISUALLY_HIDDEN_COLOR}`} data-testid={VISUALLY_HIDDEN_TESTID} />
      );
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toHaveStyle(`color: ${VISUALLY_HIDDEN_COLOR}`);
    });

    it('should have attribute data-rilix-ui-visually-hidden-root with empty value', async () => {
      await render(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toHaveAttribute('data-rilix-ui-visually-hidden-root', '');
    });

    it('should have attribute data-scope with value "visually-hidden"', async () => {
      await render(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toHaveAttribute('data-scope', 'visually-hidden');
    });

    it('should have attribute data-part with value "root"', async () => {
      await render(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      expect(screen.getByTestId(VISUALLY_HIDDEN_TESTID)).toHaveAttribute('data-part', 'root');
    });
  });
});
