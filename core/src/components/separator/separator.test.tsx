import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { Separator } from '.';

const SEPARATOR_ROOT_TESTID = 'SEPARATOR_ROOT_TESTID';

describe('Separator', () => {
  describe('Root', () => {
    it('should render as a <div> element by default', async () => {
      await render(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID).tagName).toBe('DIV');
    });

    it('should render a custom element when `render$` prop is provided', async () => {
      await render(<Separator.Root render$={(props) => <span {...props} />} data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID).tagName).not.toBe('DIV');
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID).tagName).toBe('SPAN');
    });

    it('should display children content', async () => {
      const SEPARATOR_ROOT_TEXT = 'SEPARATOR_ROOT_TEXT';

      await render(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID}>{SEPARATOR_ROOT_TEXT}</Separator.Root>);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveTextContent(SEPARATOR_ROOT_TEXT);
    });

    it('should apply default orientation "horizontal" when not explicitly set', async () => {
      await render(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('should not have `aria-orientation` attribute when `decorative` is true', async () => {
      await render(<Separator.Root decorative={true} data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).not.toHaveAttribute('aria-orientation');
    });

    it('should not have `aria-orientation` attribute when `decorative` is false and `orientation` is "horizontal"', async () => {
      await render(<Separator.Root decorative={false} orientation="horizontal" data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).not.toHaveAttribute('aria-orientation');
    });

    it('should have `aria-orientation="vertical"` when `decorative` is false and `orientation` is "vertical"', async () => {
      await render(<Separator.Root decorative={false} orientation="vertical" data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('should have `role="none"` when `decorative` is true', async () => {
      await render(<Separator.Root decorative={true} orientation="vertical" data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('role', 'none');
    });

    it('should have `role="separator"` when `decorative` is false', async () => {
      await render(<Separator.Root decorative={false} orientation="vertical" data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('role', 'separator');
    });

    it('should have `data-orientation="horizontal"` when `orientation` is "horizontal"', async () => {
      await render(<Separator.Root orientation="horizontal" data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('should have `data-orientation="vertical"` when `orientation` is "vertical"', async () => {
      await render(<Separator.Root orientation="vertical" data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('data-orientation', 'vertical');
    });

    it('should have `data-rilix-ui-separator-root` attribute', async () => {
      await render(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('data-rilix-ui-separator-root', '');
    });

    it('should have `data-scope="separator"` attribute', async () => {
      await render(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('data-scope', 'separator');
    });

    it('should have `data-part="root"` attribute', async () => {
      await render(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      expect(screen.getByTestId(SEPARATOR_ROOT_TESTID)).toHaveAttribute('data-part', 'root');
    });
  });
});
