/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { FC, useState, useEffect } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { colors } from '@ndla/core';
import styled from '@emotion/styled';
import { copyTextToClipboard } from '@ndla/util';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { Copy } from '@ndla/icons/action';
// @ts-ignore
import { Done } from '@ndla/icons/editor';
import { getTitleFromFormat } from '../CodeBlockEditor';

const Wrapper = styled.div`
  padding: 20px 52px;
  background: ${colors.brand.greyLighter};
  margin: 15px 0;
  code {
    margin:0;
    padding:0;
  }
  [class^="language-"] { {
    border-left: 4px solid ${colors.brand.primary};
    padding: 0;
    background: #fff;
    font-family: 'Source Code Pro';
    font-size: 16px !important;
    code:first-of-type {
      border-right: 2px solid ${colors.brand.greyLightest};
      margin-right: 10px;
      user-select: none;
    }
    & > span:first-of-type {
      margin-top: 10px;
      display:block;
    }
  }
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

type Props = {
  code: string;
  format: string;
  title?: string | null;
};

export const Codeblock: FC<Props & tType> = ({ code, format, t, title }) => {
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
      <Title>{title ? title : getTitleFromFormat(format)}</Title>
      <SyntaxHighlighter
        customStyle={{
          padding: '0',
          overflowX: 'auto',
        }}
        lineNumberContainerStyle={{
          padding: '10px 10px 10px 0',
          float: 'left',
        }}
        style={coy}
        language={format}
        wrapLines
        showInlineLineNumbers={false}
        showLineNumbers>
        {code}
      </SyntaxHighlighter>

      <Button
        title={t('codeBlock.copyButton')}
        disabled={isCopied}
        data-copy-string={code}
        onClick={() => {
          copyTextToClipboard(code);
          setIsCopied(true);
        }}>
        {isCopied ? <Done /> : <Copy />}{' '}
        {isCopied ? t('codeBlock.copiedCode') : t('codeBlock.copyCode')}
      </Button>
    </Wrapper>
  );
};

export default injectT(Codeblock);
