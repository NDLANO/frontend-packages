/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const codeLanguageOptions: Array<ICodeLangugeOption> = [
  {
    title: "Bash",
    format: "bash",
  },
  {
    title: "C",
    format: "c",
  },
  {
    title: "CSharp",
    format: "csharp",
  },
  {
    title: "CSS",
    format: "css",
  },
  {
    title: "Diff",
    format: "diff",
  },
  {
    title: "HTML",
    format: "markup",
  },
  {
    title: "Ini",
    format: "ini",
  },
  {
    title: "Java",
    format: "java",
  },
  {
    title: "Javascript",
    format: "js",
  },
  {
    title: "JSON",
    format: "json",
  },
  {
    title: "JSX",
    format: "jsx",
  },
  {
    title: "Kotlin",
    format: "kotlin",
  },
  {
    title: "LUA",
    format: "lua",
  },
  {
    title: "Markdown",
    format: "markdown",
  },
  {
    title: "Matlab",
    format: "matlab",
  },
  {
    title: "NSIS",
    format: "nsis",
  },
  {
    title: "PHP",
    format: "php",
  },
  {
    title: "Powershell",
    format: "powershell",
  },
  {
    title: "Python",
    format: "python",
  },
  {
    title: "Ruby",
    format: "ruby",
  },
  {
    title: "Rust",
    format: "rust",
  },
  {
    title: "SQL",
    format: "sql",
  },
  {
    title: "Text",
    format: "text",
  },
  {
    title: "VHDL",
    format: "vhdl",
  },
  {
    title: "XML",
    format: "xml",
  },
];

export interface ICodeLangugeOption {
  title: string;
  format: string;
}
