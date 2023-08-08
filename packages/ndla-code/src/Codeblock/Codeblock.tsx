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

import { useState, useEffect, CSSProperties, ReactNode } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import clike from 'react-syntax-highlighter/dist/cjs/languages/prism/clike';
import markup from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import markupTemplating from 'react-syntax-highlighter/dist/cjs/languages/prism/markup-templating';
import php from 'react-syntax-highlighter/dist/cjs/languages/prism/php';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import c from 'react-syntax-highlighter/dist/cjs/languages/prism/c';
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import ini from 'react-syntax-highlighter/dist/cjs/languages/prism/ini';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import kotlin from 'react-syntax-highlighter/dist/cjs/languages/prism/kotlin';
import lua from 'react-syntax-highlighter/dist/cjs/languages/prism/lua';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import matlab from 'react-syntax-highlighter/dist/cjs/languages/prism/matlab';
import nsis from 'react-syntax-highlighter/dist/cjs/languages/prism/nsis';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import ruby from 'react-syntax-highlighter/dist/cjs/languages/prism/ruby';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql';
import powershell from 'react-syntax-highlighter/dist/cjs/languages/prism/powershell';
import vhdl from 'react-syntax-highlighter/dist/cjs/languages/prism/vhdl';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
import { colors } from '@ndla/core';
import styled from '@emotion/styled';
import { copyTextToClipboard } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import { ButtonV2 } from '@ndla/button';
import { Copy } from '@ndla/icons/action';
import { Done } from '@ndla/icons/editor';
import { ICodeLangugeOption, languageOptions } from '../languageOptions';

SyntaxHighlighter.registerLanguage('clike', clike);
SyntaxHighlighter.registerLanguage('markup', markup);
SyntaxHighlighter.registerLanguage('markup-templating', markupTemplating);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('c', c);
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('diff', diff);
SyntaxHighlighter.registerLanguage('ini', ini);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('kotlin', kotlin);
SyntaxHighlighter.registerLanguage('lua', lua);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('matlab', matlab);
SyntaxHighlighter.registerLanguage('nsis', nsis);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('ruby', ruby);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('sql', sql);
SyntaxHighlighter.registerLanguage('powershell', powershell);
SyntaxHighlighter.registerLanguage('vhdl', vhdl);
SyntaxHighlighter.registerLanguage('bash', bash);

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
  actionButton?: ReactNode;
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
