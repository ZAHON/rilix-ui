import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { userEvent } from '@testing-library/user-event';
import { Link } from '.';

const LINK_ROOT_TESTID = 'LINK_ROOT_TESTID';
const LINK_ROOT_URL = 'https://github.com/ZAHON/rilix-ui/tree/main';

describe('Link', () => {
  describe('Root', () => {
    it('should be <a> element by default', async () => {
      await render(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID).tagName).toBe('A');
    });

    it('should render as the element specified by the "as" prop', async () => {
      const Primitive = component$((props: PropsOf<'div'>) => {
        return <div {...props} />;
      });

      await render(<Link.Root as={Primitive} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID).tagName).not.toBe('A');
      expect(screen.getByTestId(LINK_ROOT_TESTID).tagName).toBe('DIV');
    });

    it('should contain passed children', async () => {
      const LINK_ROOT_TEXT = 'LINK_ROOT_TEXT';

      await render(
        <Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveTextContent(LINK_ROOT_TEXT);
    });

    it('should have not attribute role when not disabled', async () => {
      await render(<Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).not.toHaveAttribute('role');
    });

    it('should have attribute role with value "link" when disabled', async () => {
      await render(<Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('role', 'link');
    });

    it('should have attribute href with value provided via href prop when not disabled', async () => {
      await render(<Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('href', LINK_ROOT_URL);
    });

    it('should have not attribute href when disabled', async () => {
      await render(<Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).not.toHaveAttribute('href');
    });

    it('should have not attribute aria-disabled when not disabled', async () => {
      await render(<Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).not.toHaveAttribute('aria-disabled');
    });

    it('should have attribute aria-disabled with value "true" when disabled', async () => {
      await render(<Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('aria-disabled', 'true');
    });

    it('should have not attribute data-disabled when not disabled', async () => {
      await render(<Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).not.toHaveAttribute('data-disabled');
    });

    it('should have attribute data-disabled with empty value when disabled', async () => {
      await render(<Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('data-disabled', '');
    });

    it('should be focusable when not disabled', async () => {
      const user = userEvent.setup();
      await render(<Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);

      await user.tab();
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveFocus();
    });

    it('should be not focusable when disabled', async () => {
      const user = userEvent.setup();
      await render(<Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);

      await user.tab();
      expect(screen.getByTestId(LINK_ROOT_TESTID)).not.toHaveFocus();
    });

    it('should have not attribute aria-current when not active', async () => {
      await render(<Link.Root active={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).not.toHaveAttribute('aria-current');
    });

    it('should have attribute aria-current with value "page" when active', async () => {
      await render(<Link.Root active={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('aria-current', 'page');
    });

    it('should have not attribute data-active when not active', async () => {
      await render(<Link.Root active={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).not.toHaveAttribute('data-active');
    });

    it('should have attribute data-active with empty value when active', async () => {
      await render(<Link.Root active={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('data-active', '');
    });

    it('should have attribute data-rilix-ui-link-root with empty value', async () => {
      await render(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('data-rilix-ui-link-root', '');
    });

    it('should have attribute data-scope with value "link"', async () => {
      await render(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('data-scope', 'link');
    });

    it('should have attribute data-part with value "root"', async () => {
      await render(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      expect(screen.getByTestId(LINK_ROOT_TESTID)).toHaveAttribute('data-part', 'root');
    });
  });
});
