/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Editor from 'react-simple-code-editor';
import { Select } from '@ndla/forms';
import { Code } from '@ndla/icons/editor';

import { highlight, languages } from 'prismjs/components/prism-core';

// what languages to load in editorial?
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

// import { languages } from 'prismjs/components/prism-core';

const Wrapper = styled.div`
  /* https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism.min.css */
  .editor {
    counter-reset: line;
    border: 1px solid #ced4da;
    line-height: 1.25;
  }

  .editor #codeArea {
    outline: none;
    padding-left: 60px !important;
  }

  .editor pre {
    padding-left: 60px !important;
  }

  .editor .editorLineNumber {
    position: absolute;
    left: 0px;
    color: #cccccc;
    text-align: right;
    width: 40px;
    font-weight: 100;
  }
  /* generic syntax highlighting */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #90a4ae;
  }
  .token.punctuation {
    color: #9e9e9e;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #e91e63;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #4caf50;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #795548;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #3f51b5;
  }
  .token.function {
    color: #f44336;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #ff9800;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 18px;
  color: #757575;
  b {
    font-weight: bold;
    color: #444444;
  }
`;

const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px 30px;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 15px 20px;
  flex: 1;
  span {
    max-width: 250px;
    padding-right: 10px;
  }
  select {
    width: 200px;
  }
`;

// https://codesandbox.io/s/charming-moore-wy240?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.js:412-608

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split('\n')
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join('\n');

const CodeBlockEditor = () => {
  const [codeContent, setCodeContent] = useState({
    code: '',
    language: 'text',
  });
  const handleChange = event => {
    setCodeContent({ ...codeContent, language: event.target.value });
  };
  
  return (
    <Wrapper>
      <Header>
        <HeaderColumn>
          LEGG TIL
          <br />
          <b>
            <Code />
            &nbsp;kodeeksempel
          </b>
        </HeaderColumn>
        <HeaderRow>
          <span>Velg kodespråk:&nbsp;</span>
          <Select onChange={handleChange}>
            <option value="text">Tekst</option>
            <option value="js">Javascript</option>
            <option value="jsx">JSX</option>
            <option value="markup">HTML/Markup</option>
            <option value="css">CSS</option>
            <option value="php">PHP</option>
          </Select>
        </HeaderRow>
        <HeaderColumn>some actions here.</HeaderColumn>
      </Header>
      <Editor
        className="editor"
        value={codeContent.code}
        comment=""
        onValueChange={code => {
          setCodeContent({ ...codeContent, code });
        }}
        highlight={code =>
          hightlightWithLineNumbers(
            code,
            languages[codeContent.language]
              ? languages[codeContent.language]
              : '',
          )
        }
        padding={10}
        textareaId="codeArea"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
          outline: 0,
        }}
      />
    </Wrapper>
  );
};

export default CodeBlockEditor;
