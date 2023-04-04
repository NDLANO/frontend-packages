/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Be advised! This component breaks on SSR if you import CodeBlockEditor or languages.tsx.
 */

import React, { useState, useEffect, CSSProperties } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
import { colors } from '@ndla/core';
import styled from '@emotion/styled';
import { copyTextToClipboard } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import { ButtonV2 } from '@ndla/button';
import { Copy } from '@ndla/icons/action';
import { Done } from '@ndla/icons/editor';
import { ICodeLangugeOption, languageOptions } from '../languageOptions';

const Wrapper = styled.div`
  margin: 15px 0;
  code {
    margin: 0;
    padding: 0;
  }
  [class^='language-'] {
    & > span:first-of-type {
      & span:first-of-type {
        padding-top: 10px;
        display: block;
      }
    }
    & > span:last-of-type {
      & span:first-of-type {
        padding-bottom: 10px;
        display: block;
      }
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

const lineNumberStyle: CSSProperties = {
  borderRight: '1px solid #D8D8D8',
  borderLeft: 0,
  marginRight: '10px',
  marginLeft: '10px',
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

const getTitleFromFormat = (format: string) => {
  const selectedLanguage = languageOptions.find((item: ICodeLangugeOption) => item.format === format);
  if (selectedLanguage) {
    return selectedLanguage.title;
  }
  return;
};

export const Codeblock = ({ actionButton, code, format, showCopy = false, title }: Props) => {
  const { t } = useTranslation();
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
        lineNumberStyle={lineNumberStyle}
        style={syntaxHighlighterStyle}
        language={format}
        wrapLines
        showInlineLineNumbers
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
      {showCopy && (
        <ButtonV2
          title={t('codeBlock.copyButton')}
          disabled={isCopied}
          data-copied-title={t('codeBlock.copiedCode')}
          data-copy-string={code}
          onClick={() => {
            copyTextToClipboard(code);
            setIsCopied(true);
          }}
        >
          {isCopied ? <Done aria-hidden="true" /> : <Copy aria-hidden="true" />}{' '}
          {isCopied ? t('codeBlock.copiedCode') : t('codeBlock.copyCode')}
        </ButtonV2>
      )}
    </Wrapper>
  );
};

export default Codeblock;
