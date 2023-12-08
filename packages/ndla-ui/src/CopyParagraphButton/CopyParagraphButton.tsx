/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { Link } from '@ndla/icons/common';
import Tooltip from '@ndla/tooltip';
import { copyTextToClipboard } from '@ndla/util';

const ContainerDiv = styled.div`
  position: relative;
`;
const IconButton = styled.button`
  position: absolute;
  left: -3em;
  top: 0.1em;
  background: none;
  border: 0;
  z-index: 1;
  transition: 0.2s;
  opacity: 0;
  color: ${colors.brand.grey};

  & svg {
    width: 30px;
    height: 30px;
  }

  ${ContainerDiv}:hover &,
  &:focus, &:focus-visible, &:active {
    cursor: pointer;
    opacity: 1;
  }
`;

interface Props {
  // What to render within the h2
  children: ReactNode;
  copyText: string;
  lang?: string;
}
const CopyParagraphButton = ({ children, copyText, lang }: Props) => {
  const [hasCopied, setHasCopied] = useState(false);
  const { t } = useTranslation();
  const sanitizedTitle = useMemo(() => encodeURIComponent(copyText.replace(/ /g, '-')), [copyText]);

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => setHasCopied(false), 3000);
    }
  }, [hasCopied]);

  const onCopyClick = useCallback(() => {
    setHasCopied(true);
    const { location } = window;
    const newHash = `#${sanitizedTitle}`;
    const port = location.port ? `:${location.port}` : '';
    const urlToCopy = `${location.protocol}//${location.hostname}${port}${location.pathname}${location.search}${newHash}`;

    copyTextToClipboard(urlToCopy);
  }, [sanitizedTitle]);

  const tooltip = hasCopied ? t('article.copyPageLinkCopied') : t('article.copyHeaderLink');
  return (
    <ContainerDiv>
      <Tooltip tooltip={tooltip}>
        <IconButton onClick={onCopyClick} aria-label={`${tooltip}: ${copyText}`}>
          <Link />
        </IconButton>
      </Tooltip>
      <h2 id={sanitizedTitle} tabIndex={-1} lang={lang}>
        {children}
      </h2>
    </ContainerDiv>
  );
};

export default CopyParagraphButton;
