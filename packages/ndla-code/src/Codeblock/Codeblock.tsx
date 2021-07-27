/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { FC, useState, useEffect } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { colors } from '@ndla/core';
import styled from '@emotion/styled';
import { copyTextToClipboard } from '@ndla/util';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
import { Copy } from '@ndla/icons/action';
import { Done } from '@ndla/icons/editor';
import { getTitleFromFormat } from '../CodeBlockEditor';

const Wrapper = styled.div`
  margin: 15px 0;
  code {
    margin:0;
    padding:0;
  }
  [class^="language-"] { {
    & > span:first-of-type {
      margin-top: 10px;
      display:block;
    }
  }
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.text.primary};
  margin: 5px 0;
`;

const syntaxHighlighterStyle = {
  ...coy,
  'code[class*="language-"]': {
    ...coy['code[class*="language-"]'],
    fontFamily: 'Source Code Pro, Monaco',
    fontSize: '14px',
    background: colors.brand.greyLighter,
    borderLeft: `4px solid ${colors.brand.dark}`,
    padding: '0',
  },
};

const lineNumberContainerStyle = {
  padding: '10px',
  float: 'left',
  borderRight: '1px solid #D8D8D8',
  borderLeft: 0,
  marginRight: '10px',
  userSelect: 'none',
  color: '#979797',
};

type Props = {
  code: string;
  format: string;
  title?: string | null;
  actionButton?: JSX.Element | null;
  showCopy?: boolean;
};

export const Codeblock: FC<Props & tType> = ({ actionButton, code, format, showCopy = false, t, title }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setInterval(() => setIsCopied(false), 3000);
      // ensure interval is cleared - also if unmounted
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCopied]);

  return (
    <Wrapper>
      <TitleBar>
        <Title>{title || getTitleFromFormat(format)}</Title>
        {actionButton}
      </TitleBar>
      <SyntaxHighlighter
        lineNumberContainerStyle={lineNumberContainerStyle}
        style={syntaxHighlighterStyle}
        language={format}
        wrapLines
        showInlineLineNumbers={false}
        showLineNumbers>
        {code}
      </SyntaxHighlighter>
      {showCopy && (
        <Button
          title={t('codeBlock.copyButton')}
          disabled={isCopied}
          data-copied-title={t('codeBlock.copiedCode')}
          data-copy-string={code}
          onClick={() => {
            copyTextToClipboard(code);
            setIsCopied(true);
          }}>
          {isCopied ? <Done /> : <Copy />} {isCopied ? t('codeBlock.copiedCode') : t('codeBlock.copyCode')}
        </Button>
      )}
    </Wrapper>
  );
};

export default injectT(Codeblock);
