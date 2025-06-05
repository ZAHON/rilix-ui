import { component$, Slot } from '@builder.io/qwik';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { Render } from '.';

const RENDER_TESTID = 'RENDER_TESTID';

const RENDER_WRAPPER = component$(() => {
  return <Slot />;
});

describe('Render', () => {
  it('should render the default element when `render$` prop is not provided', async () => {
    await render(
      <RENDER_WRAPPER>
        <Render as="div" defaultRender$={(props) => <div {...props} />} data-testid={RENDER_TESTID} />
      </RENDER_WRAPPER>
    );
    expect(screen.getByTestId(RENDER_TESTID).tagName).toBe('DIV');
  });

  it('should render the element defined by `render$` prop when it is provided', async () => {
    await render(
      <RENDER_WRAPPER>
        <Render
          as="div"
          defaultRender$={(props) => <div {...props} />}
          render$={(props) => <span {...props} />}
          data-testid={RENDER_TESTID}
        />
      </RENDER_WRAPPER>
    );
    expect(screen.getByTestId(RENDER_TESTID).tagName).not.toBe('DIV');
    expect(screen.getByTestId(RENDER_TESTID).tagName).toBe('SPAN');
  });
});
