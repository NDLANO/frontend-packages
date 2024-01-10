/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";

export const Wrapper = styled.div`
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

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: row;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 18px;
  color: #757575;
  b {
    font-weight: bold;
    color: #444444;
  }
  > div {
    padding: 15px 10px;
  }
  > div:last-of-type {
    padding-right: 30px;
  }
  > div:first-of-type {
    padding-left: 30px;
  }
`;

export const FlexElement = styled.div<{ widthPercentage?: number }>`
  width: ${(p) => p.widthPercentage || 25}%;
  select,
  input {
    width: 100%;
  }
`;
