/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// what languages to load in editorial?
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-ini';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-matlab';
import 'prismjs/components/prism-nsis';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-vhdl';

export interface ICodeLangugeOption {
  title: string;
  format: string;
}

export const languageOptions: Array<ICodeLangugeOption> = [
  {
    title: 'C',
    format: 'c',
  },
  {
    title: 'CSharp',
    format: 'csharp',
  },
  {
    title: 'CSS',
    format: 'css',
  },
  {
    title: 'Diff',
    format: 'diff',
  },
  {
    title: 'HTML',
    format: 'markup',
  },
  {
    title: 'Ini',
    format: 'ini',
  },
  {
    title: 'Java',
    format: 'java',
  },
  {
    title: 'Javascript',
    format: 'js',
  },
  {
    title: 'JSON',
    format: 'json',
  },
  {
    title: 'JSX',
    format: 'jsx',
  },
  {
    title: 'Kotlin',
    format: 'kotlin',
  },
  {
    title: 'LUA',
    format: 'lua',
  },
  {
    title: 'Markdown',
    format: 'markdown',
  },
  {
    title: 'Matlab',
    format: 'matlab',
  },
  {
    title: 'NSIS',
    format: 'nsis',
  },
  {
    title: 'PHP',
    format: 'php',
  },
  {
    title: 'Powershell',
    format: 'powershell',
  },
  {
    title: 'Python',
    format: 'python',
  },
  {
    title: 'Ruby',
    format: 'ruby',
  },
  {
    title: 'Rust',
    format: 'rust',
  },
  {
    title: 'SQL',
    format: 'sql',
  },
  {
    title: 'Text',
    format: 'text',
  },
  {
    title: 'VHDL',
    format: 'vhdl',
  },
  {
    title: 'XML',
    format: 'xml',
  },
];
