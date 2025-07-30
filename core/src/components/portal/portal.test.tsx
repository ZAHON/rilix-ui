import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { Portal } from '.';

const PORTAL_ROOT_TESTID = 'PORTAL_ROOT_TESTID';

describe('Portal', () => {
  describe('Root', () => {
    it('should be <span> element by default', async () => {
      await render(<Portal.Root data-testid={PORTAL_ROOT_TESTID} />);
      expect(screen.getByTestId(PORTAL_ROOT_TESTID).tagName).toBe('DIV');
    });

    it('should render a custom element when `render$` prop is used', async () => {
      await render(<Portal.Root render$={(props) => <span {...props} />} data-testid={PORTAL_ROOT_TESTID} />);
      expect(screen.getByTestId(PORTAL_ROOT_TESTID).tagName).not.toBe('DIV');
      expect(screen.getByTestId(PORTAL_ROOT_TESTID).tagName).toBe('SPAN');
    });

    it('should contain passed children', async () => {
      const PORTAL_ROOT_TEXT = 'PORTAL_ROOT_TEXT';

      await render(<Portal.Root data-testid={PORTAL_ROOT_TESTID}>{PORTAL_ROOT_TEXT}</Portal.Root>);
      expect(screen.getByTestId(PORTAL_ROOT_TESTID)).toHaveTextContent(PORTAL_ROOT_TEXT);
    });

    it('should have attribute popover with value "manual"', async () => {
      await render(<Portal.Root data-testid={PORTAL_ROOT_TESTID} />);
      expect(screen.getByTestId(PORTAL_ROOT_TESTID)).toHaveAttribute('popover', 'manual');
    });

    it('should have attribute data-rilix-ui-portal-root with empty value', async () => {
      await render(<Portal.Root data-testid={PORTAL_ROOT_TESTID} />);
      expect(screen.getByTestId(PORTAL_ROOT_TESTID)).toHaveAttribute('data-rilix-ui-portal-root', '');
    });
  });
});
