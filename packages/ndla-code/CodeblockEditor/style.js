import styled from '@emotion/styled';

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

export const Header = styled.div`
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
  > div {
    padding: 15px 20px;
  }
  > div:last-of-type {
    justify-content: flex-end;
    padding-right: 30px;
  }
  > div:first-of-type {
    padding-left: 30px;
  }
`;

export const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex: 1;
  span.label {
    max-width: 250px;
    padding-right: 10px;
  }
  select {
    min-width: 150px;
  }
`;
