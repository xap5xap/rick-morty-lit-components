---
layout: page.11ty.cjs
title: <my-element-xap> ⌲ Home
---

# &lt;my-element-xap>

`<my-element-xap>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<my-element-xap>` is just an HTML element. You can it anywhere you can use HTML!

```html
<my-element-xap></my-element-xap>
```

  </div>
  <div>

<my-element-xap></my-element-xap>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<my-element-xap>` can be configured with attributed in plain HTML.

```html
<my-element-xap name="HTML"></my-element-xap>
```

  </div>
  <div>

<my-element-xap name="HTML"></my-element-xap>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<my-element-xap>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;my-element-xap&gt;</h2>
    <my-element-xap .name=${name}></my-element-xap>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;my-element-xap&gt;</h2>
<my-element-xap name="lit-html"></my-element-xap>

  </div>
</section>
