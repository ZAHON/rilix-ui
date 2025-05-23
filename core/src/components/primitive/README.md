# Primitive

`Primitive` offers base components that wrap standard HTML elements, providing their default behavior and props. Use the `as` prop to render these components using an alternative element type or your own component, enabling flexible composition and overriding the underlying element.

## Features

- Can be used to support your own `as` prop.

## Import

```tsx
import { Primitive } from 'rilix-ui';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Primitive } from 'rilix-ui';

const PrimitiveDemo = component$(() => {
  return (
    <>
      <Primitive.a />
      <Primitive.abbr />
      <Primitive.address />
      <Primitive.area />
      <Primitive.article />
      <Primitive.aside />
      <Primitive.audio />
      <Primitive.b />
      <Primitive.bdi />
      <Primitive.bdo />
      <Primitive.blockquote />
      <Primitive.br />
      <Primitive.button />
      <Primitive.canvas />
      <Primitive.caption />
      <Primitive.cite />
      <Primitive.code />
      <Primitive.col />
      <Primitive.colgroup />
      <Primitive.data />
      <Primitive.datalist />
      <Primitive.dd />
      <Primitive.del />
      <Primitive.details />
      <Primitive.dfn />
      <Primitive.dialog />
      <Primitive.div />
      <Primitive.dl />
      <Primitive.dt />
      <Primitive.em />
      <Primitive.embed />
      <Primitive.fieldset />
      <Primitive.figcaption />
      <Primitive.figure />
      <Primitive.footer />
      <Primitive.form />
      <Primitive.h1 />
      <Primitive.h2 />
      <Primitive.h3 />
      <Primitive.h4 />
      <Primitive.h5 />
      <Primitive.h6 />
      <Primitive.header />
      <Primitive.hgroup />
      <Primitive.hr />
      <Primitive.i />
      <Primitive.iframe />
      <Primitive.img />
      <Primitive.input />
      <Primitive.ins />
      <Primitive.kbd />
      <Primitive.label />
      <Primitive.legend />
      <Primitive.li />
      <Primitive.main />
      <Primitive.map />
      <Primitive.mark />
      <Primitive.menu />
      <Primitive.meter />
      <Primitive.nav />
      <Primitive.noscript />
      <Primitive.object />
      <Primitive.ol />
      <Primitive.optgroup />
      <Primitive.option />
      <Primitive.output />
      <Primitive.p />
      <Primitive.picture />
      <Primitive.pre />
      <Primitive.progress />
      <Primitive.q />
      <Primitive.rp />
      <Primitive.rt />
      <Primitive.ruby />
      <Primitive.s />
      <Primitive.samp />
      <Primitive.search />
      <Primitive.section />
      <Primitive.select />
      <Primitive.small />
      <Primitive.source />
      <Primitive.span />
      <Primitive.strong />
      <Primitive.sub />
      <Primitive.summary />
      <Primitive.sup />
      <Primitive.svg />
      <Primitive.table />
      <Primitive.tbody />
      <Primitive.td />
      <Primitive.template />
      <Primitive.textarea />
      <Primitive.tfoot />
      <Primitive.th />
      <Primitive.thead />
      <Primitive.time />
      <Primitive.tr />
      <Primitive.track />
      <Primitive.u />
      <Primitive.ul />
      <Primitive.var />
      <Primitive.video />
      <Primitive.wbr />
    </>
  );
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Primitive } from '@/components';

const PrimitiveDemo = component$(() => {
  return (
    <>
      <Primitive.p>This is a paragraph element.</Primitive.p>
      <Primitive.div>This is a div element.</Primitive.div>
      <Primitive.span>This is a span element.</Primitive.span>
    </>
  );
});
```

## API Reference

### a

A component that renders an `a` element. The `a` HTML element (or anchor element), with its `href` attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### abbr

A component that renders an `abbr` element. The `abbr` HTML element represents an abbreviation or acronym. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### address

A component that renders an `address` element. The `address` element indicates that the enclosed HTML provides contact information for a person or people, or for an organization. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### area

A component that renders an `area` element. The `area` HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext links. This element is used only within a `map` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### article

A component that renders an `article` element. The `article` HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### aside

A component that renders an `aside` element. The `aside` HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### audio

A component that renders an `audio` element. The `audio` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the `src` attribute or the `source` element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a `MediaStream`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### b

A component that renders a `b` element. The `b` HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use `b` for styling text or granting importance. If you wish to create boldface text, you should use the CSS `font-weight` property. If you wish to indicate an element is of special importance, you should use the `strong` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### bdi

A component that renders a `bdi` element. The `bdi` HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### bdo

A component that renders a `bdo` element. The `bdo` HTML element overrides the current directionality of text, so that the text within is rendered in a different direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### blockquote

A component that renders a `blockquote` element. The `blockquote` HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation. A URL for the source of the quotation may be given using the `cite` attribute, while a text representation of the source can be given using the `cite` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### br

A component that renders a `br` element. The `br` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### button

A component that renders a `button` element. The `button` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### canvas

A component that renders a `canvas` element. Use the HTML `canvas` element with either the canvas scripting API or the WebGL API to draw graphics and animations. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### caption

A component that renders a `caption` element. The `caption` HTML element specifies the caption (or title) of a table, providing the table an accessible description. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### cite

A component that renders a `cite` element. The `cite` HTML element is used to mark up the title of a creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### code

A component that renders a `code` element. The `code` HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### col

A component that renders a `col` element. The `col` HTML element defines one or more columns in a column group represented by its parent `colgroup` element. The `col` element is only valid as a child of a `colgroup` element that has no `span` attribute defined. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### colgroup

A component that renders a `colgroup` element. The `colgroup` HTML element defines a group of columns within a table. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### data

A component that renders a `data` element. The `data` HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the `time` element must be used. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### datalist

A component that renders a `datalist` element. The `datalist` HTML element contains a set of `option` elements that represent the permissible or recommended options available to choose from within other controls. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### dd

A component that renders a `dd` element. The `dd` HTML element provides the description, definition, or value for the preceding term (`dt`) in a description list (`dl`). See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### del

A component that renders a `del` element. The `del` HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The `ins` element can be used for the opposite purpose: to indicate text that has been added to the document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### details

A component that renders a `details` element. The `details` HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an open state. A summary or label must be provided using the `summary` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### dfn

A component that renders a `dfn` element. The `dfn` HTML element indicates a term to be defined. The `dfn` element should be used in a complete definition statement, where the full definition of the term can be one of the following:

- The ancestor paragraph (a block of text, sometimes marked by a `p` element).
- The `dt`/`dd` pairing.
- The nearest section ancestor of the `dfn` element.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### dialog

A component that renders a `dialog` element. The `dialog` HTML element represents a modal or non-modal dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### div

A component that renders a `div` element. The `div` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g., styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element). See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### dl

A component that renders a `dl` element. The `dl` HTML element represents a description list. The element encloses a list of groups of terms (specified using the `dt` element) and descriptions (provided by `dd` elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs). See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### dt

A component that renders a `dt` element. The `dt` HTML element specifies a term in a description or definition list, and as such must be used inside a `dl` element. It is usually followed by a `dd` element; however, multiple `dt` elements in a row indicate several terms that are all defined by the immediate next `dd` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### em

A component that renders an `em` element. The `em` HTML element marks text that has stress emphasis. The `em` element can be nested, with each level of nesting indicating a greater degree of emphasis. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### embed

A component that renders an `embed` element. The `embed` HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### fieldset

A component that renders a `fieldset` element. The `fieldset` HTML element is used to group several controls as well as labels (`label`) within a web form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### figcaption

A component that renders a `figcaption` element. The `figcaption` HTML element represents a caption or legend describing the rest of the contents of its parent `figure` element, providing the `figure` an accessible description. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### figure

A component that renders a `figure` element. The `figure` HTML element represents self-contained content, potentially with an optional caption, which is specified using the `figcaption` element. The figure, its caption, and its contents are referenced as a single unit. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### footer

A component that renders a `footer` element. The `footer` HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A `footer` typically contains information about the author of the section, copyright data or links to related documents. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### form

A component that renders a `form` element. The `form` HTML element represents a document section containing interactive controls for submitting information. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### h1

A component that renders an `h1` element. The `h1` to `h6` HTML elements represent six levels of section headings. `h1` is the highest section level and `h6` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### h2

A component that renders an `h2` element. The `h1` to `h6` HTML elements represent six levels of section headings. `h1` is the highest section level and `h6` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### h3

A component that renders an `h3` element. The `h1` to `h6` HTML elements represent six levels of section headings. `h1` is the highest section level and `h6` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### h4

A component that renders an `h4` element. The `h1` to `h6` HTML elements represent six levels of section headings. `h1` is the highest section level and `h6` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### h5

A component that renders an `h5` element. The `h1` to `h6` HTML elements represent six levels of section headings. `h1` is the highest section level and `h6` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### h6

A component that renders an `h6` element. The `h1` to `h6` HTML elements represent six levels of section headings. `h1` is the highest section level and `h6` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### header

A component that renders a `header` element. The `header` HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### hgroup

A component that renders an `hgroup` element. The `hgroup` HTML element represents a heading and related content. It groups a single `h1` – `h6` element with one or more `p`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### hr

A component that renders an `hr` element. The `hr` HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### i

A component that renders an `i` element. The `i` HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the `i` naming of this element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### iframe

A component that renders an `iframe` element. The `iframe` HTML element represents a nested browsing context, embedding another HTML page into the current one. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### img

A component that renders an `img` element. The `img` HTML element embeds an image into the document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### input

A component that renders an `input` element. The `input` HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The `input` element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### ins

A component that renders an `ins` element. The `ins` HTML element represents a range of text that has been added to a document. You can use the `del` element to similarly represent a range of text that has been deleted from the document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### kbd

A component that renders a `kbd` element. The `kbd` HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a `kbd` element using its default monospace font, although this is not mandated by the HTML standard. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### label

A component that renders a `label` element. The `label` HTML element represents a caption for an item in a user interface. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### legend

A component that renders a `legend` element. The `legend` HTML element represents a caption for the content of its parent `fieldset`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### li

A component that renders an `li` element. The `li` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (`ol`), an unordered list (`ul`), or a menu (`menu`). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### main

A component that renders a `main` element. The `main` HTML element represents the dominant content of the `body` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### map

A component that renders a `map` element. The `map` HTML element is used with `area` elements to define an image map (a clickable link area). See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### mark

A component that renders a `mark` element. The `mark` HTML element represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### menu

A component that renders a `menu` element. The `menu` HTML element is described in the HTML specification as a semantic alternative to `ul`, but treated by browsers (and exposed through the accessibility tree) as no different than `ul`. It represents an unordered list of items (which are represented by `li` elements). See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### meter

A component that renders a `meter` element. The `meter` HTML element represents either a scalar value within a known range or a fractional value. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### nav

A component that renders a `nav` element. The `nav` HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### noscript

A component that renders a `noscript` element. The `noscript` HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### object

A component that renders an `object` element. The `object` HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### ol

A component that renders an `ol` element. The `ol` HTML element represents an ordered list of items — typically rendered as a numbered list. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### optgroup

A component that renders an `optgroup` element. The `optgroup` HTML element creates a grouping of options within a `select` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### option

A component that renders an `option` element. The `option` HTML element is used to define an item contained in a `select`, an `optgroup`, or a `datalist` element. As such, `option` can represent menu items in popups and other lists of items in an HTML document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option).

| Prop          | Type        | Default | Description                                         |
| ------------- | ----------- | ------- | --------------------------------------------------- |
| `as`          | `Component` | `-`     | The component that this component should render as. |
| `textContent` | `string`    | `-`     | The text content of the option.                     |

### output

A component that renders an `output` element. The `output` HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### p

A component that renders a `p` element. The `p` HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### picture

A component that renders a `picture` element. The `picture` HTML element contains zero or more `source` elements and one `img` element to offer alternative versions of an image for different display/device scenarios. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### pre

A component that renders a `pre` element. The `pre` HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced font. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### progress

A component that renders a `progress` element. The `progress` HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### q

A component that renders a `q` element. The `q` HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the `blockquote` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### rp

A component that renders a `rp` element. The `rp` HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the `ruby` element. One `rp` element should enclose each of the opening and closing parentheses that wrap the `rt` element that contains the annotation's text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### rt

A component that renders a `rt` element. The `rt` HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The `rt` element must always be contained within a `ruby` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### ruby

A component that renders a `ruby` element. The `ruby` HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### s

A component that renders a `s` element. The `s` HTML element renders text with a strikethrough, or a line through it. Use the `s` element to represent things that are no longer relevant or no longer accurate. However, `s` is not appropriate when indicating document edits; for that, use the `del` and `ins` elements, as appropriate. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### samp

A component that renders a `samp` element. The `samp` HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### search

A component that renders a `search` element. The `search` HTML element is a container representing the parts of the document or application with form controls or other content related to performing a search or filtering operation. The `search` element semantically identifies the purpose of the element's contents as having search or filtering capabilities. The search or filtering functionality can be for the website or application, the current web page or document, or the entire Internet or subsection thereof. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### section

A component that renders a `section` element. The `section` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### select

A component that renders a `select` element. The `select` HTML element represents a control that provides a menu of options. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### small

A component that renders a `small` element. The `small` HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from `small` to `x-small`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### source

A component that renders a `source` element. The `source` HTML element specifies one or more media resources for the `picture`, `audio`, and `video` elements. It is a void element, which means that it has no content and does not require a closing tag. This element is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### span

A component that renders a `span` element. The `span` HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. `span` is very much like a `div` element, but `div` is a block-level element whereas a `span` is an inline-level element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### strong

A component that renders a `strong` element. The `strong` HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### sub

A component that renders a `sub` element. The `sub` HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### summary

A component that renders a `summary` element. The `summary` HTML element specifies a summary, caption, or legend for a `details` element's disclosure box. Clicking the `summary` element toggles the state of the parent `details` element open and closed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### sup

A component that renders a `sup` element. The `sup` HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### svg

A component that renders a `svg` element. The `svg` SVG element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### table

A component that renders a `table` element. The `table` HTML element represents tabular data—that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### tbody

A component that renders a `tbody` element. The `tbody` HTML element encapsulates a set of table rows (`tr` elements), indicating that they comprise the body of a table's (main) data. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### td

A component that renders a `td` element. The `td` HTML element defines a cell of a table that contains data and may be used as a child of the `tr` element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### template

A component that renders a `template` element. The `template` HTML element serves as a mechanism for holding HTML fragments, which can either be used later via JavaScript or generated immediately into shadow DOM. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### textarea

A component that renders a `textarea` element. The `textarea` HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### tfoot

A component that renders a `tfoot` element. The `tfoot` HTML element encapsulates a set of table rows (`tr` elements), indicating that they comprise the foot of a table with information about the table's columns. This is usually a summary of the columns, e.g., a sum of the given numbers in a column. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### th

A component that renders a `th` element. The `th` HTML element defines a cell as the header of a group of table cells and may be used as a child of the `tr` element. The exact nature of this group is defined by the `scope` and `headers` attributes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### thead

A component that renders a `thead` element. The `thead` HTML element encapsulates a set of table rows (`tr` elements), indicating that they comprise the head of a table with information about the table's columns. This is usually in the form of column headers (`th` elements). See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### time

A component that renders a `time` element. The `time` HTML element represents a specific period in time. It may include the `datetime` attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### tr

A component that renders a `tr` element. The `tr` HTML element defines a row of cells in a table. The row's cells can then be established using a mix of `td` (data cell) and `th` (header cell) elements. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### track

A component that renders a `track` element. The `track` HTML element is used as a child of the media elements, `audio` and `video`. Each track element lets you specify a timed text track (or time-based data) that can be displayed in parallel with the media element, for example to overlay subtitles or closed captions on top of a video or alongside audio tracks. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### u

A component that renders a `u` element. The `u` HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a single solid underline, but may be altered using CSS. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### ul

A component that renders a `ul` element. The `ul` HTML element represents an unordered list of items, typically rendered as a bulleted list. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### var

A component that renders a `var` element. The `var` HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### video

A component that renders a `video` element. The `video` HTML element embeds a media player which supports video playback into the document. You can use `video` for audio content as well, but the `audio` element may provide a more appropriate user experience. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

### wbr

A component that renders a `wbr` element. The `wbr` HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr).

| Prop | Type        | Default | Description                                         |
| ---- | ----------- | ------- | --------------------------------------------------- |
| `as` | `Component` | `-`     | The component that this component should render as. |

## Examples

### Create your own `as` API

This example demonstrates how to leverage the as `prop` from `Primitive` components to build your own flexible component that can render different HTML elements or other components. This pattern allows you to create highly reusable and adaptable UI elements.

```tsx
import type { PropsOf, Component } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Primitive } from 'rilix-ui';

interface TextProps extends PropsOf<'p'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}

const Text = component$<TextProps>((props) => {
  const { as, ...others } = props;

  // If `as` prop is not passed this component will render the `p` element by default.
  const Component = as || Primitive.p;

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});

const TextDemo = component$(() => {
  return (
    <>
      <Text>This is a paragraph element.</Text>
      <Text as={Primitive.div}>This is a div element.</Text>
      <Text as={Primitive.span}>This is a span element.</Text>
    </>
  );
});
```
