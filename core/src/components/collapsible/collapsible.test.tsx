import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { Collapsible } from '.';

const COLLAPSIBLE_ROOT_TESTID = 'COLLAPSIBLE_ROOT_TESTID';
const COLLAPSIBLE_TRIGGER_TESTID = 'COLLAPSIBLE_TRIGGER_TESTID';

describe('Collapsible', () => {
  describe('Root', () => {
    it('should render as a <div> element by default', async () => {
      await render(<Collapsible.Root data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID).tagName).toBe('DIV');
    });

    it('should render a custom element when a `render$` prop is provided', async () => {
      await render(<Collapsible.Root render$={(props) => <span {...props} />} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID).tagName).not.toBe('DIV');
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID).tagName).toBe('SPAN');
    });

    it('should display children content', async () => {
      const COLLAPSIBLE_ROOT_TEXT = 'COLLAPSIBLE_ROOT_TEXT';

      await render(<Collapsible.Root data-testid={COLLAPSIBLE_ROOT_TESTID}>{COLLAPSIBLE_ROOT_TEXT}</Collapsible.Root>);
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID)).toHaveTextContent(COLLAPSIBLE_ROOT_TEXT);
    });

    it('should not have the `data-disabled` attribute when not disabled', async () => {
      await render(<Collapsible.Root disabled={false} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID)).not.toHaveAttribute('data-disabled');
    });

    it('should have the `data-disabled` attribute with an empty value when disabled', async () => {
      await render(<Collapsible.Root disabled={true} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID)).toHaveAttribute('data-disabled', '');
    });

    it('should have the `data-state` attribute with value "closed" when defaultOpen is false', async () => {
      await render(<Collapsible.Root defaultOpen={false} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID)).toHaveAttribute('data-state', 'closed');
    });

    it('should have the `data-state` attribute with value "open" when defaultOpen is true', async () => {
      await render(<Collapsible.Root defaultOpen={true} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID)).toHaveAttribute('data-state', 'open');
    });

    it('should have the `data-rilix-ui-collapsible-root` attribute with an empty value', async () => {
      await render(<Collapsible.Root defaultOpen={true} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      expect(screen.getByTestId(COLLAPSIBLE_ROOT_TESTID)).toHaveAttribute('data-rilix-ui-collapsible-root', '');
    });
  });

  describe('Trigger', () => {
    it('should render as a <button> element by default', async () => {
      await render(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      expect(screen.getByTestId(COLLAPSIBLE_TRIGGER_TESTID).tagName).toBe('BUTTON');
    });

    it('should render a custom element when a `render$` prop is provided', async () => {
      await render(
        <Collapsible.Root>
          <Collapsible.Trigger render$={(props) => <span {...props} />} data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      expect(screen.getByTestId(COLLAPSIBLE_TRIGGER_TESTID).tagName).not.toBe('BUTTON');
      expect(screen.getByTestId(COLLAPSIBLE_TRIGGER_TESTID).tagName).toBe('SPAN');
    });

    it('should display children content', async () => {
      const COLLAPSIBLE_TRIGGER_TEXT = 'COLLAPSIBLE_TRIGGER_TEXT';

      await render(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID}>{COLLAPSIBLE_TRIGGER_TEXT}</Collapsible.Trigger>
        </Collapsible.Root>
      );
      expect(screen.getByTestId(COLLAPSIBLE_TRIGGER_TESTID)).toHaveTextContent(COLLAPSIBLE_TRIGGER_TEXT);
    });
  });
});
