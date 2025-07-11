import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { AspectRatio } from '.';

const ASPECT_RATIO_ROOT_TESTID = 'ASPECT_RATIO_ROOT_TESTID';
const ASPECT_RATIO_CONTENT_TESTID = 'ASPECT_RATIO_CONTENT_TESTID';

describe('AspectRatio', () => {
  describe('Root', () => {
    it('should be <div> element by default', async () => {
      await render(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID).tagName).toBe('DIV');
    });

    it('should render a custom element when `render$` prop is used', async () => {
      await render(
        <AspectRatio.Root render$={(props) => <span {...props} />} data-testid={ASPECT_RATIO_ROOT_TESTID} />
      );
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID).tagName).not.toBe('DIV');
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID).tagName).toBe('SPAN');
    });

    it('should contain passed children', async () => {
      const ASPECT_RATIO_ROOT_TEXT = 'ASPECT_RATIO_ROOT_TEXT';

      await render(
        <AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID}>{ASPECT_RATIO_ROOT_TEXT}</AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveTextContent(ASPECT_RATIO_ROOT_TEXT);
    });

    it('should have inline style position with value "relative"', async () => {
      await render(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveStyle(`position: relative`);
    });

    it('should have inline style width with value "100%"', async () => {
      await render(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveStyle(`width: 100%`);
    });

    it('should apply correct padding-bottom style calculated from the ratio prop', async () => {
      const ASPECT_RATIO_ROOT_RATIO = 16 / 9;

      await render(<AspectRatio.Root ratio={ASPECT_RATIO_ROOT_RATIO} data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveStyle(
        `padding-bottom: ${(1 / ASPECT_RATIO_ROOT_RATIO) * 100}%`
      );
    });

    it('should have inline style provided via style prop as object', async () => {
      const ASPECT_RATIO_ROOT_COLOR = 'rgb(1, 2, 3)';

      await render(
        <AspectRatio.Root style={{ color: ASPECT_RATIO_ROOT_COLOR }} data-testid={ASPECT_RATIO_ROOT_TESTID} />
      );
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveStyle(`color: ${ASPECT_RATIO_ROOT_COLOR}`);
    });

    it('should have inline style provided via style prop as string', async () => {
      const ASPECT_RATIO_ROOT_COLOR = 'rgb(1, 2, 3)';

      await render(
        <AspectRatio.Root style={`color: ${ASPECT_RATIO_ROOT_COLOR}`} data-testid={ASPECT_RATIO_ROOT_TESTID} />
      );
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveStyle(`color: ${ASPECT_RATIO_ROOT_COLOR}`);
    });

    it('should set the data-aspect attribute to the calculated aspect ratio percentage', async () => {
      const ASPECT_RATIO_ROOT_RATIO = 16 / 9;

      await render(<AspectRatio.Root ratio={ASPECT_RATIO_ROOT_RATIO} data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveAttribute(
        'data-aspect',
        ((1 / ASPECT_RATIO_ROOT_RATIO) * 100).toString()
      );
    });

    it('should have attribute data-rilix-ui-aspect-ratio-root with empty value', async () => {
      await render(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveAttribute('data-rilix-ui-aspect-ratio-root', '');
    });

    it('should have attribute data-scope with value "aspect-ratio"', async () => {
      await render(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveAttribute('data-scope', 'aspect-ratio');
    });

    it('should have attribute data-part with value "root"', async () => {
      await render(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      expect(screen.getByTestId(ASPECT_RATIO_ROOT_TESTID)).toHaveAttribute('data-part', 'root');
    });
  });

  describe('Content', () => {
    it('should be <div> element by default', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID).tagName).toBe('DIV');
    });

    it('should render a custom element when `render$` prop is used', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content render$={(props) => <span {...props} />} data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID).tagName).not.toBe('DIV');
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID).tagName).toBe('SPAN');
    });

    it('should contain passed children', async () => {
      const ASPECT_RATIO_CONTENT_TEXT = 'ASPECT_RATIO_CONTENT_TEXT';

      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID}>
            {ASPECT_RATIO_CONTENT_TEXT}
          </AspectRatio.Content>
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveTextContent(ASPECT_RATIO_CONTENT_TEXT);
    });

    it('should have inline style position with value "absolute"', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveStyle(`position: absolute`);
    });

    it('should have inline style top with value "0px"', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveStyle(`top: 0px`);
    });

    it('should have inline style right with value "0px"', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveStyle(`right: 0px`);
    });

    it('should have inline style bottom with value "0px"', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveStyle(`bottom: 0px`);
    });

    it('should have inline style left with value "0px"', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveStyle(`left: 0px`);
    });

    it('should have inline style provided via style prop as object', async () => {
      const ASPECT_RATIO_CONTENT_COLOR = 'rgb(1, 2, 3)';

      await render(
        <AspectRatio.Root>
          <AspectRatio.Content
            style={{ color: ASPECT_RATIO_CONTENT_COLOR }}
            data-testid={ASPECT_RATIO_CONTENT_TESTID}
          />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveStyle(`color: ${ASPECT_RATIO_CONTENT_COLOR}`);
    });

    it('should have inline style provided via style prop as string', async () => {
      const ASPECT_RATIO_CONTENT_COLOR = 'rgb(1, 2, 3)';

      await render(
        <AspectRatio.Root>
          <AspectRatio.Content
            style={`color: ${ASPECT_RATIO_CONTENT_COLOR}`}
            data-testid={ASPECT_RATIO_CONTENT_TESTID}
          />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveStyle(`color: ${ASPECT_RATIO_CONTENT_COLOR}`);
    });

    it('should set the data-aspect attribute to the calculated aspect ratio percentage', async () => {
      const ASPECT_RATIO_ROOT_RATIO = 16 / 9;

      await render(
        <AspectRatio.Root ratio={ASPECT_RATIO_ROOT_RATIO}>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveAttribute(
        'data-aspect',
        ((1 / ASPECT_RATIO_ROOT_RATIO) * 100).toString()
      );
    });

    it('should have attribute data-rilix-ui-aspect-ratio-content with empty value', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveAttribute('data-rilix-ui-aspect-ratio-content', '');
    });

    it('should have attribute data-scope with value "aspect-ratio"', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveAttribute('data-scope', 'aspect-ratio');
    });

    it('should have attribute data-part with value "content"', async () => {
      await render(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      expect(screen.getByTestId(ASPECT_RATIO_CONTENT_TESTID)).toHaveAttribute('data-part', 'content');
    });
  });
});
