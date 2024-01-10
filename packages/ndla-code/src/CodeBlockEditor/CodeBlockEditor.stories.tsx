/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

//@ts-ignore
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-c";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-diff";
import "prismjs/components/prism-ini";
import "prismjs/components/prism-json";
import "prismjs/components/prism-java";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-matlab";
import "prismjs/components/prism-nsis";
import "prismjs/components/prism-python";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-vhdl";
import "prismjs/components/prism-bash";
import { Meta, StoryObj } from "@storybook/react";
import CodeBlockEditor from "./CodeBlockEditor";
import { defaultParameters } from "../../../../stories/defaults";

const highlightCode = (code: string, language: string) => {
  const highlighted = highlight(code, languages[language], language);
  return highlighted;
};

export default {
  title: "Production System/CodeBlockEditor",
  tags: ["autodocs"],
  component: CodeBlockEditor,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    content: {
      code: 'const foo = "bar";',
      title: "Javascript",
      format: "js",
    },
    // eslint-disable-next-line no-console
    onSave: console.log,
    // eslint-disable-next-line no-console
    onAbort: console.log,
    highlight: highlightCode,
  },
} as Meta<typeof CodeBlockEditor>;

export const Default: StoryObj<typeof CodeBlockEditor> = {};
