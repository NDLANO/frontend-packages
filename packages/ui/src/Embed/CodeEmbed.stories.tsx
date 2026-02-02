/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { CodeEmbedData, CodeMetaData } from "@ndla/types-embed";
import type { Meta, StoryObj } from "@storybook/react";
import { CodeEmbed } from "./CodeEmbed";

const codeEmbedData: CodeEmbedData = {
  resource: "code-block",
  title: "Litt css i hverdagen",
  codeContent: `<div class="demo-content">
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
  codeFormat: "html",
};

const codeEmbed: CodeMetaData = {
  status: "success",
  resource: "code-block",
  embedData: codeEmbedData,
  data: {
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
    decodedContent: `<div class="demo-content">
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
  },
};

export default {
  title: "Embeds/CodeEmbed",
  component: CodeEmbed,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    embed: codeEmbed,
  },
} as Meta<typeof CodeEmbed>;

export const Default: StoryObj<typeof CodeEmbed> = {};

export const Failed: StoryObj<typeof CodeEmbed> = {
  args: {
    embed: {
      resource: "code-block",
      embedData: codeEmbedData,
      status: "error",
      message: "Something horrible happened",
    },
  },
};
