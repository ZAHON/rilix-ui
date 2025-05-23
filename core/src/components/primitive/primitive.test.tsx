import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@noma.to/qwik-testing-library';
import { Primitive } from '.';

const PRIMITIVE_TESTID = 'PRIMITIVE_TESTID';
const PRIMITIVE_TEXT = 'PRIMITIVE_TEXT';

const AS_COMPONENT = component$<PropsOf<'div'>>((props) => {
  return <xyz {...props} />;
});

describe('Primitive', () => {
  describe('a', () => {
    it('should be <a> element by default', async () => {
      await render(<Primitive.a data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('A');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.a as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('A');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.a data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.a>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('abbr', () => {
    it('should be <abbr> element by default', async () => {
      await render(<Primitive.abbr data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('ABBR');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.abbr as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('ABBR');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.abbr data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.abbr>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('address', () => {
    it('should be <address> element by default', async () => {
      await render(<Primitive.address data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('ADDRESS');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.address as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('ADDRESS');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.address data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.address>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('area', () => {
    it('should be <area> element by default', async () => {
      await render(<Primitive.area data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('AREA');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.area as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('AREA');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `area` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.area data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.area>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('article', () => {
    it('should be <article> element by default', async () => {
      await render(<Primitive.article data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('ARTICLE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.article as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('ARTICLE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.article data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.article>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('aside', () => {
    it('should be <aside> element by default', async () => {
      await render(<Primitive.aside data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('ASIDE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.aside as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('ASIDE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.aside data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.aside>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('audio', () => {
    it('should be <audio> element by default', async () => {
      await render(<Primitive.audio data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('AUDIO');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.audio as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('AUDIO');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.audio data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.audio>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('b', () => {
    it('should be <b> element by default', async () => {
      await render(<Primitive.b data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('B');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.b as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('B');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.b data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.b>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('bdi', () => {
    it('should be <bdi> element by default', async () => {
      await render(<Primitive.bdi data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('BDI');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.bdi as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('BDI');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.bdi data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.bdi>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('bdo', () => {
    it('should be <bdo> element by default', async () => {
      await render(<Primitive.bdo data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('BDO');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.bdo as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('BDO');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.bdo data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.bdo>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('blockquote', () => {
    it('should be <blockquote> element by default', async () => {
      await render(<Primitive.blockquote data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('BLOCKQUOTE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.blockquote as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('BLOCKQUOTE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.blockquote data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.blockquote>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('br', () => {
    it('should be <br> element by default', async () => {
      await render(<Primitive.br data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('BR');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.br as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('BR');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.br data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.br>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('button', () => {
    it('should be <button> element by default', async () => {
      await render(<Primitive.button data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('BUTTON');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.button as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('BUTTON');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.button data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.button>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('canvas', () => {
    it('should be <canvas> element by default', async () => {
      await render(<Primitive.canvas data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('CANVAS');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.canvas as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('CANVAS');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.canvas data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.canvas>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('caption', () => {
    it('should be <caption> element by default', async () => {
      await render(<Primitive.caption data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('CAPTION');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.caption as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('CAPTION');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.caption data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.caption>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('cite', () => {
    it('should be <cite> element by default', async () => {
      await render(<Primitive.cite data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('CITE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.cite as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('CITE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.cite data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.cite>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('code', () => {
    it('should be <code> element by default', async () => {
      await render(<Primitive.code data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('CODE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.code as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('CODE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.code data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.code>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('col', () => {
    it('should be <col> element by default', async () => {
      await render(<Primitive.col data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('COL');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.col as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('COL');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `col` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.col data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.col>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('colgroup', () => {
    it('should be <colgroup> element by default', async () => {
      await render(<Primitive.colgroup data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('COLGROUP');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.colgroup as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('COLGROUP');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.colgroup data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.colgroup>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('data', () => {
    it('should be <data> element by default', async () => {
      await render(<Primitive.data data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DATA');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.data as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DATA');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.data data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.data>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('datalist', () => {
    it('should be <datalist> element by default', async () => {
      await render(<Primitive.datalist data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DATALIST');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.datalist as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DATALIST');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.datalist data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.datalist>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('dd', () => {
    it('should be <dd> element by default', async () => {
      await render(<Primitive.dd data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DD');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.dd as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DD');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.dd data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.dd>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('del', () => {
    it('should be <del> element by default', async () => {
      await render(<Primitive.del data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DEL');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.del as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DEL');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.del data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.del>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('details', () => {
    it('should be <details> element by default', async () => {
      await render(<Primitive.details data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DETAILS');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.details as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DETAILS');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.details data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.details>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('dfn', () => {
    it('should be <dfn> element by default', async () => {
      await render(<Primitive.dfn data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DFN');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.dfn as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DFN');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.dfn data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.dfn>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('dialog', () => {
    it('should be <dialog> element by default', async () => {
      await render(<Primitive.dialog data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DIALOG');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.dialog as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DIALOG');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.dialog data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.dialog>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('div', () => {
    it('should be <div> element by default', async () => {
      await render(<Primitive.div data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DIV');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.div as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DIV');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.div data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.div>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('dl', () => {
    it('should be <dl> element by default', async () => {
      await render(<Primitive.dl data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DL');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.dl as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DL');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.dl data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.dl>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('dt', () => {
    it('should be <dt> element by default', async () => {
      await render(<Primitive.dt data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('DT');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.dt as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('DT');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.dt data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.dt>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('em', () => {
    it('should be <em> element by default', async () => {
      await render(<Primitive.em data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('EM');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.em as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('EM');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.em data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.em>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('embed', () => {
    it('should be <embed> element by default', async () => {
      await render(<Primitive.embed data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('EMBED');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.embed as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('EMBED');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `embed` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.embed data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.embed>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('fieldset', () => {
    it('should be <fieldset> element by default', async () => {
      await render(<Primitive.fieldset data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('FIELDSET');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.fieldset as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('FIELDSET');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.fieldset data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.fieldset>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('figcaption', () => {
    it('should be <figcaption> element by default', async () => {
      await render(<Primitive.figcaption data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('FIGCAPTION');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.figcaption as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('FIGCAPTION');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.figcaption data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.figcaption>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('figure', () => {
    it('should be <figure> element by default', async () => {
      await render(<Primitive.figure data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('FIGURE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.figure as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('FIGURE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.figure data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.figure>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('footer', () => {
    it('should be <footer> element by default', async () => {
      await render(<Primitive.footer data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('FOOTER');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.footer as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('FOOTER');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.footer data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.footer>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('form', () => {
    it('should be <form> element by default', async () => {
      await render(<Primitive.form data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('FORM');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.form as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('FORM');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.form data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.form>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('h1', () => {
    it('should be <h1> element by default', async () => {
      await render(<Primitive.h1 data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('H1');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.h1 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('H1');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.h1 data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.h1>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('h2', () => {
    it('should be <h2> element by default', async () => {
      await render(<Primitive.h2 data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('H2');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.h2 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('H2');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.h2 data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.h2>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('h3', () => {
    it('should be <h3> element by default', async () => {
      await render(<Primitive.h3 data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('H3');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.h3 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('H3');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.h3 data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.h3>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('h4', () => {
    it('should be <h4> element by default', async () => {
      await render(<Primitive.h4 data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('H4');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.h4 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('H4');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.h4 data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.h4>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('h5', () => {
    it('should be <h5> element by default', async () => {
      await render(<Primitive.h5 data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('H5');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.h5 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('H5');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.h5 data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.h5>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('h6', () => {
    it('should be <h6> element by default', async () => {
      await render(<Primitive.h6 data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('H6');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.h6 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('H6');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.h6 data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.h6>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('header', () => {
    it('should be <header> element by default', async () => {
      await render(<Primitive.header data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('HEADER');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.header as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('HEADER');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.header data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.header>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('hgroup', () => {
    it('should be <hgroup> element by default', async () => {
      await render(<Primitive.hgroup data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('HGROUP');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.hgroup as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('HGROUP');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.hgroup data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.hgroup>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('hr', () => {
    it('should be <hr> element by default', async () => {
      await render(<Primitive.hr data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('HR');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.hr as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('HR');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `hr` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.hr data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.hr>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('i', () => {
    it('should be <i> element by default', async () => {
      await render(<Primitive.i data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('I');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.i as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('I');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.i data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.i>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('iframe', () => {
    it('should be <iframe> element by default', async () => {
      await render(<Primitive.iframe data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('IFRAME');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.iframe as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('IFRAME');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `iframe` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.iframe data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.iframe>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('img', () => {
    it('should be <img> element by default', async () => {
      await render(<Primitive.img data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('IMG');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.img as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('IMG');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `img` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.img data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.img>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('input', () => {
    it('should be <input> element by default', async () => {
      await render(<Primitive.input data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('INPUT');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.input as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('INPUT');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `input` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.input data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.input>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('ins', () => {
    it('should be <ins> element by default', async () => {
      await render(<Primitive.ins data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('INS');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.ins as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('INS');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.ins data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.ins>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('kbd', () => {
    it('should be <kbd> element by default', async () => {
      await render(<Primitive.kbd data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('KBD');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.kbd as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('KBD');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.kbd data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.kbd>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('label', () => {
    it('should be <label> element by default', async () => {
      await render(<Primitive.label data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('LABEL');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.label as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('LABEL');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.label data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.label>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('legend', () => {
    it('should be <legend> element by default', async () => {
      await render(<Primitive.legend data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('LEGEND');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.legend as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('LEGEND');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.legend data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.legend>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('li', () => {
    it('should be <li> element by default', async () => {
      await render(<Primitive.li data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('LI');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.li as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('LI');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.li data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.li>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('main', () => {
    it('should be <main> element by default', async () => {
      await render(<Primitive.main data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('MAIN');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.main as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('MAIN');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.main data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.main>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('map', () => {
    it('should be <map> element by default', async () => {
      await render(<Primitive.map data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('MAP');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.map as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('MAP');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.map data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.map>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('mark', () => {
    it('should be <mark> element by default', async () => {
      await render(<Primitive.mark data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('MARK');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.mark as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('MARK');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.mark data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.mark>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('menu', () => {
    it('should be <menu> element by default', async () => {
      await render(<Primitive.menu data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('MENU');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.menu as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('MENU');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.menu data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.menu>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('meter', () => {
    it('should be <meter> element by default', async () => {
      await render(<Primitive.meter data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('METER');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.meter as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('METER');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.meter data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.meter>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('nav', () => {
    it('should be <nav> element by default', async () => {
      await render(<Primitive.nav data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('NAV');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.nav as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('NAV');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.nav data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.nav>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('noscript', () => {
    it('should be <noscript> element by default', async () => {
      await render(<Primitive.noscript data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('NOSCRIPT');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.noscript as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('NOSCRIPT');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.noscript data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.noscript>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('object', () => {
    it('should be <object> element by default', async () => {
      await render(<Primitive.object data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('OBJECT');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.object as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('OBJECT');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.object data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.object>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('ol', () => {
    it('should be <ol> element by default', async () => {
      await render(<Primitive.ol data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('OL');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.ol as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('OL');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.ol data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.ol>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('optgroup', () => {
    it('should be <optgroup> element by default', async () => {
      await render(<Primitive.optgroup data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('OPTGROUP');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.optgroup as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('OPTGROUP');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.optgroup data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.optgroup>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('option', () => {
    it('should be <option> element by default', async () => {
      await render(<Primitive.option data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('OPTION');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.option as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('OPTION');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed content provided via textContent prop', async () => {
      await render(<Primitive.option textContent={PRIMITIVE_TEXT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('output', () => {
    it('should be <output> element by default', async () => {
      await render(<Primitive.output data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('OUTPUT');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.output as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('OUTPUT');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.output data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.output>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('p', () => {
    it('should be <p> element by default', async () => {
      await render(<Primitive.p data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('P');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.p as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('P');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.p data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.p>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('picture', () => {
    it('should be <picture> element by default', async () => {
      await render(<Primitive.picture data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('PICTURE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.picture as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('PICTURE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.picture data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.picture>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('pre', () => {
    it('should be <pre> element by default', async () => {
      await render(<Primitive.pre data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('PRE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.pre as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('PRE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.pre data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.pre>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('progress', () => {
    it('should be <progress> element by default', async () => {
      await render(<Primitive.progress data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('PROGRESS');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.progress as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('PROGRESS');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.progress data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.progress>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('q', () => {
    it('should be <q> element by default', async () => {
      await render(<Primitive.q data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('Q');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.q as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('Q');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.q data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.q>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('rp', () => {
    it('should be <rp> element by default', async () => {
      await render(<Primitive.rp data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('RP');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.rp as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('RP');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.rp data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.rp>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('rt', () => {
    it('should be <rt> element by default', async () => {
      await render(<Primitive.rt data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('RT');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.rt as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('RT');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.rt data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.rt>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('ruby', () => {
    it('should be <ruby> element by default', async () => {
      await render(<Primitive.ruby data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('RUBY');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.ruby as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('RUBY');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.ruby data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.ruby>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('s', () => {
    it('should be <s> element by default', async () => {
      await render(<Primitive.s data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('S');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.s as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('S');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.s data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.s>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('samp', () => {
    it('should be <samp> element by default', async () => {
      await render(<Primitive.samp data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SAMP');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.samp as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SAMP');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.samp data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.samp>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('search', () => {
    it('should be <search> element by default', async () => {
      await render(<Primitive.search data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SEARCH');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.search as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SEARCH');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.search data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.search>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('section', () => {
    it('should be <section> element by default', async () => {
      await render(<Primitive.section data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SECTION');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.section as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SECTION');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.section data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.section>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('select', () => {
    it('should be <select> element by default', async () => {
      await render(<Primitive.select data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SELECT');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.select as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SELECT');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.select data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.select>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('small', () => {
    it('should be <small> element by default', async () => {
      await render(<Primitive.small data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SMALL');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.small as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SMALL');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.small data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.small>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('source', () => {
    it('should be <source> element by default', async () => {
      await render(<Primitive.source data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SOURCE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.source as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SOURCE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `source` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.source data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.source>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('span', () => {
    it('should be <span> element by default', async () => {
      await render(<Primitive.span data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SPAN');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.span as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SPAN');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.span data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.span>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('strong', () => {
    it('should be <strong> element by default', async () => {
      await render(<Primitive.strong data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('STRONG');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.strong as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('STRONG');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.strong data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.strong>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('sub', () => {
    it('should be <sub> element by default', async () => {
      await render(<Primitive.sub data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SUB');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.sub as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SUB');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.sub data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.sub>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('summary', () => {
    it('should be <summary> element by default', async () => {
      await render(<Primitive.summary data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SUMMARY');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.summary as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SUMMARY');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.summary data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.summary>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('sup', () => {
    it('should be <sup> element by default', async () => {
      await render(<Primitive.sup data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('SUP');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.sup as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('SUP');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.sup data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.sup>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('svg', () => {
    it('should be <svg> element by default', async () => {
      await render(<Primitive.svg data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('svg');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.svg as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('svg');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.svg data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.svg>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('table', () => {
    it('should be <table> element by default', async () => {
      await render(<Primitive.table data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TABLE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.table as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TABLE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.table data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.table>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('tbody', () => {
    it('should be <tbody> element by default', async () => {
      await render(<Primitive.tbody data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TBODY');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.tbody as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TBODY');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.tbody data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.tbody>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('td', () => {
    it('should be <td> element by default', async () => {
      await render(<Primitive.td data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TD');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.td as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TD');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.td data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.td>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('template', () => {
    it('should be <template> element by default', async () => {
      await render(<Primitive.template data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TEMPLATE');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.template as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TEMPLATE');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.template data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.template>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('textarea', () => {
    it('should be <textarea> element by default', async () => {
      await render(<Primitive.textarea data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TEXTAREA');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.textarea as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TEXTAREA');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `textarea` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.textarea data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.textarea>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('tfoot', () => {
    it('should be <tfoot> element by default', async () => {
      await render(<Primitive.tfoot data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TFOOT');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.tfoot as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TFOOT');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.tfoot data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.tfoot>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('th', () => {
    it('should be <th> element by default', async () => {
      await render(<Primitive.th data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TH');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.th as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TH');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.th data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.th>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('thead', () => {
    it('should be <thead> element by default', async () => {
      await render(<Primitive.thead data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('THEAD');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.thead as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('THEAD');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.thead data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.thead>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('time', () => {
    it('should be <time> element by default', async () => {
      await render(<Primitive.time data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TIME');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.time as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TIME');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.time data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.time>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('tr', () => {
    it('should be <tr> element by default', async () => {
      await render(<Primitive.tr data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TR');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.tr as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TR');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.tr data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.tr>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('track', () => {
    it('should be <track> element by default', async () => {
      await render(<Primitive.track data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('TRACK');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.track as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('TRACK');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    // The HTML's `track` element is a void element, meaning it cannot have any child nodes or content.
    // it('should contain passed children', async () => {
    //   await render(<Primitive.track data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.track>);
    //   expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    // });
  });

  describe('u', () => {
    it('should be <u> element by default', async () => {
      await render(<Primitive.u data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('U');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.u as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('U');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.u data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.u>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('ul', () => {
    it('should be <ul> element by default', async () => {
      await render(<Primitive.ul data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('UL');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.ul as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('UL');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.ul data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.ul>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('var', () => {
    it('should be <var> element by default', async () => {
      await render(<Primitive.var data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('VAR');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.var as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('VAR');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.var data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.var>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('video', () => {
    it('should be <video> element by default', async () => {
      await render(<Primitive.video data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('VIDEO');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.video as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('VIDEO');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.video data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.video>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });

  describe('wbr', () => {
    it('should be <wbr> element by default', async () => {
      await render(<Primitive.wbr data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('WBR');
    });

    it('should render as the element specified by the "as" prop', async () => {
      await render(<Primitive.wbr as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).not.toBe('WBR');
      expect(screen.getByTestId(PRIMITIVE_TESTID).tagName).toBe('XYZ');
    });

    it('should contain passed children', async () => {
      await render(<Primitive.wbr data-testid={PRIMITIVE_TESTID}>{PRIMITIVE_TEXT}</Primitive.wbr>);
      expect(screen.getByTestId(PRIMITIVE_TESTID)).toHaveTextContent(PRIMITIVE_TEXT);
    });
  });
});
