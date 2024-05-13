/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { IconButtonV2 } from "@ndla/button";
import { DeleteForever } from "@ndla/icons/editor";
import CodeBlock from "./CodeBlock";

export default {
  title: "Components/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    title: "CodeBlock",
    format: "html",
    highlightedCode: `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>is simply dummy text of the printing and typesetting industry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>is simply dummy text of the printing and typesetting industry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>is simply dummy text of the printing and typesetting industry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,
    code: `<div class="demo-content">
  <h2>Lorem ipsum</h2>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
</div>`,
    actionButton: (
      <IconButtonV2 aria-label="Slett" variant="ghost" colorTheme="danger">
        <DeleteForever />
      </IconButtonV2>
    ),
    showCopy: true,
  },
  argTypes: {
    actionButton: {
      table: {
        type: {
          detail: "Takes any ReactNode, but as the name implies: use a button component, preferably an icon-button",
        },
      },
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof CodeBlock>;

export const HTML: StoryFn<typeof CodeBlock> = (args) => {
  return <CodeBlock {...args} />;
};

export const CSS: StoryObj<typeof CodeBlock> = {
  args: {
    highlightedCode: `<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token unit">px</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode color">#ccc</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`,
    code: `body {
  padding: 20px;
  margin: 10px;
  background: #ccc;
}`,
    format: "css",
  },
};

export const JS: StoryObj<typeof CodeBlock> = {
  args: {
    highlightedCode: `<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"This"</span><span class="token punctuation">,</span> <span class="token string">"Little"</span><span class="token punctuation">,</span> <span class="token string">"Piggy"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token method function property-access">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>`,
    code: `const arr = ["This", "Little", "Piggy"];
const first = arr.shift();
console.log(first);`,
    format: "js",
  },
};

export const Text: StoryObj<typeof CodeBlock> = {
  args: {
    highlightedCode: `Pure text without highlighting and no title`,
    code: `Pure text without highlighting and no title`,
    format: "text",
  },
};
