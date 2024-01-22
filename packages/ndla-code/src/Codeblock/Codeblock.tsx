/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState, useEffect, ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { colors, fonts, spacing } from "@ndla/core";
import { Copy } from "@ndla/icons/action";
import { Done } from "@ndla/icons/editor";
import { copyTextToClipboard } from "@ndla/util";
import { ICodeLangugeOption, languageOptions } from "../languageOptions";

const Wrapper = styled.div`
  margin: 15px 0;
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

type Props = {
  code: string;
  highlightedCode: string;
  format: string;
  title?: string | null;
  actionButton?: ReactNode;
  showCopy?: boolean;
};

const StyledPre = styled.pre`
  border-left: 4px solid ${colors.brand.dark};
  background-color: ${colors.brand.greyLighter};
  box-sizing: border-box;
  overflow-x: auto;
  .linenumber {
    display: inline-block;
    padding: 0 ${spacing.small};
    border-right: 1px solid #d8d8d8;
    margin-right: ${spacing.small};
    color: #7d8b99;
    text-align: right;
    width: 40px;
  }
  .linenumber[data-first] {
    padding-top: ${spacing.small};
  }
  .linenumber[data-last] {
    padding-bottom: ${spacing.small};
  }
  code {
    display: block;
    ${fonts.sizes("14px", "20px")};
    font-family:
      Source Code Pro,
      Monaco;
    margin: 0;
    padding: 0;
    white-space: pre;
  }
  code::before {
    content: none;
  }
  &::before,
  &::after {
    content: none !important;
  }

  /* The remaining css is copied from the coy theme in prismjs. A lot of css is omitted due to styling clashes */
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #7d8b99;
  }

  .token.punctuation {
    color: #5f6364;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #c92c2c;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.function,
  .token.builtin,
  .token.inserted {
    color: #2f9c0a;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: #a67f59;
    background: rgba(255, 255, 255, 0.5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword,
  .token.class-name {
    color: #1990b8;
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .language-css .token.string,
  .style .token.string {
    color: #a67f59;
    background: rgba(255, 255, 255, 0.5);
  }

  .token.important {
    font-weight: normal;
  }

  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.7;
  }
`;

const getTitleFromFormat = (format: string) => {
  const selectedLanguage = languageOptions.find((item: ICodeLangugeOption) => item.format === format);
  if (selectedLanguage) {
    return selectedLanguage.title;
  }
  return;
};

export const Codeblock = ({ actionButton, code, highlightedCode, format, showCopy = false, title }: Props) => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  const codeWithLineNumbers = useMemo(() => {
    return highlightedCode
      .split("\n")
      .map((line, i, arr) => {
        return `<span><span class="linenumber" ${i === 0 ? 'data-first=""' : ""} ${
          i === arr.length - 1 ? 'data-last=""' : ""
        }>${i + 1}</span>${line}</span>`;
      })
      .join("\n");
  }, [highlightedCode]);

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
      <StyledPre>
        <code className={`language-${format}`} dangerouslySetInnerHTML={{ __html: codeWithLineNumbers }} />
      </StyledPre>
      {showCopy && (
        <ButtonV2
          title={t("codeBlock.copyButton")}
          disabled={isCopied}
          data-copied-title={t("codeBlock.copiedCode")}
          data-copy-string={code}
          onClick={() => {
            copyTextToClipboard(code);
            setIsCopied(true);
          }}
        >
          {isCopied ? <Done aria-hidden="true" /> : <Copy aria-hidden="true" />}{" "}
          {isCopied ? t("codeBlock.copiedCode") : t("codeBlock.copyCode")}
        </ButtonV2>
      )}
    </Wrapper>
  );
};

export default Codeblock;
