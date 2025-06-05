import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { Alert } from '.';

const ALERT_ROOT_TESTID = 'ALERT_ROOT_TESTID';

describe('Alert', () => {
  describe('Root', () => {
    it('should be <div> element by default', async () => {
      await render(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      expect(screen.getByTestId(ALERT_ROOT_TESTID).tagName).toBe('DIV');
    });

    it('should render a custom element when `render$` prop is used', async () => {
      await render(<Alert.Root render$={(props) => <span {...props} />} data-testid={ALERT_ROOT_TESTID} />);
      expect(screen.getByTestId(ALERT_ROOT_TESTID).tagName).not.toBe('DIV');
      expect(screen.getByTestId(ALERT_ROOT_TESTID).tagName).toBe('SPAN');
    });

    it('should contain passed children', async () => {
      const ALERT_ROOT_TEXT = 'ALERT_ROOT_TEXT';

      await render(<Alert.Root data-testid={ALERT_ROOT_TESTID}>{ALERT_ROOT_TEXT}</Alert.Root>);
      expect(screen.getByTestId(ALERT_ROOT_TESTID)).toHaveTextContent(ALERT_ROOT_TEXT);
    });

    it('should have attribute role with value "alert"', async () => {
      await render(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      expect(screen.getByTestId(ALERT_ROOT_TESTID)).toHaveAttribute('role', 'alert');
    });

    it('should have attribute data-rilix-ui-alert-root with empty value', async () => {
      await render(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      expect(screen.getByTestId(ALERT_ROOT_TESTID)).toHaveAttribute('data-rilix-ui-alert-root', '');
    });

    it('should have attribute data-scope with value "alert"', async () => {
      await render(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      expect(screen.getByTestId(ALERT_ROOT_TESTID)).toHaveAttribute('data-scope', 'alert');
    });

    it('should have attribute data-part with value "root"', async () => {
      await render(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      expect(screen.getByTestId(ALERT_ROOT_TESTID)).toHaveAttribute('data-part', 'root');
    });
  });
});
