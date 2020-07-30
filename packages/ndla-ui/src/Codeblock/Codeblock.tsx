import React, { useState, useEffect } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// coy looks good, vs or any dark theme?
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { colors } from '@ndla/core';
import styled from '@emotion/styled';
import { copyTextToClipboard } from '@ndla/util';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { Copy } from '@ndla/icons/action';
// @ts-ignore
import { Done } from '@ndla/icons/editor';

const Wrapper = styled.div`
  padding: 20px 52px;
  background: ${colors.brand.greyLighter};
  margin: 15px 0;
  code:first-of-type {
    border-right: 2px solid ${colors.brand.greyLightest};
    border-left: 4px solid ${colors.brand.primary};
    margin-right: 10px;
    user-select: none;
  }
  code {
    padding: 10px;
    background: #fff;
    font-family: 'Source Code Pro';
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
  format: string;
  code: string;
  title?: string | null;
};

export const Codeblock = ({ title, code, format = 'markup' }: Props) => {
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
      {title ? <Title>{title}</Title> : null}
      <SyntaxHighlighter
        customStyle={{
          padding: '0',
          overflowX: 'auto',
        }}
        style={coy}
        language={format}
        wrapLines
        showLineNumbers>
        {code}
      </SyntaxHighlighter>
      <Button
        title="Kopier kode"
        disabled={isCopied}
        onClick={() => {
          copyTextToClipboard(code);
          setIsCopied(true);
        }}>
        <>
          {isCopied ? <Done /> : <Copy />}{' '}
          {isCopied
            ? 'Kode kopiert til utklippstavle'
            : 'Kopier kode til utklippstavle'}
        </>
      </Button>
    </Wrapper>
  );
};

export default Codeblock;
