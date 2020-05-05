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
import { injectT } from '@ndla/i18n';
import { Code } from '@ndla/icons/editor';
import Button from '@ndla/button';

import { highlight, languages } from 'prismjs/components/prism-core';

// what languages to load in editorial?
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

// https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism.min.css
const Wrapper = styled.div`
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
  > div:last-child {
    justify-content: flex-end;
    padding-right: 30px;
  }
  > div {
    padding: 15px 20px;
  }
  > div:first-child {
    padding-left: 30px;
  }
`;

const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex: 1;
  span {
    max-width: 250px;
    padding-right: 10px;
  }
`;

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split('\n')
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join('\n');

const CodeBlockEditor = ({ onSave, onAbort, t }) => {
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
          {t('codeEditor.title')}
          <br />
          <b>
            <Code />
            &nbsp;{t('codeEditor.subtitle')}
          </b>
        </HeaderColumn>
        <HeaderRow>
          <span>{t('codeEditor.languageSelect')}:&nbsp;</span>
          <select onChange={handleChange}>
            <option value="text">{t('codeEditor.languageOptions.text')}</option>
            <option value="js">{t('codeEditor.languageOptions.js')}</option>
            <option value="jsx">{t('codeEditor.languageOptions.jsx')}</option>
            <option value="markup">
              {t('codeEditor.languageOptions.markup')}
            </option>
            <option value="css">{t('codeEditor.languageOptions.css')}</option>
            <option value="php">{t('codeEditor.languageOptions.php')}</option>
          </select>
        </HeaderRow>
        <HeaderRow>
          <Button onClick={() => onSave(codeContent)}>
            <span>{t('codeEditor.save')}</span>
          </Button>
          &nbsp;
          <Button outline onClick={() => onAbort()}>
            <span>{t('codeEditor.abort')}</span>
          </Button>
        </HeaderRow>
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

export default injectT(CodeBlockEditor);
