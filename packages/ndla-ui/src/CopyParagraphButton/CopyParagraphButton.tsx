/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, MouseEvent } from 'react';

import styled from '@emotion/styled';
import { Link } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import Tooltip from '@ndla/tooltip';
import { copyTextToClipboard } from '@ndla/util';
import { colors } from '@ndla/core';

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
  title?: string | null;
  content?: string | null;
  hydrate?: boolean;
}

interface CopyButtonProps {
  title: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  tooltip: string;
  content?: string | null;
}

const CopyButton = ({ onClick, title, tooltip, content }: CopyButtonProps) => {
  return (
    <div>
      <Tooltip tooltip={tooltip}>
        <IconButton onClick={onClick} data-title={title} aria-label={`${tooltip}: ${content}`}>
          <Link title={''} />
        </IconButton>
      </Tooltip>
      <h2 id={title} tabIndex={-1} dangerouslySetInnerHTML={{ __html: content || '' }} />
    </div>
  );
};

const CopyParagraphButton = ({ title, content, hydrate }: Props) => {
  const { t } = useTranslation();
  const [hasCopied, setHasCopied] = useState(false);
  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => setHasCopied(false), 3000);
    }
  }, [hasCopied]);

  if (!title) return null;

  const onCopyClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setHasCopied(true);
    const copyId = event.currentTarget.getAttribute('data-title');
    const { location } = window;
    const newHash = `#${copyId}`;
    const port = location.port ? `:${location.port}` : '';
    const urlToCopy = `${location.protocol}//${location.hostname}${port}${location.pathname}${location.search}${newHash}`;

    copyTextToClipboard(urlToCopy);
  };

  const sanitizedTitle = encodeURIComponent(title.replace(/ /g, '-'));
  const tooltip = hasCopied ? t('article.copyPageLinkCopied') : t('article.copyHeaderLink');

  if (hydrate) {
    return <CopyButton onClick={onCopyClick} title={sanitizedTitle} tooltip={tooltip} content={content} />;
  }

  return (
    <ContainerDiv data-header-copy-container data-title={title}>
      <CopyButton onClick={onCopyClick} title={sanitizedTitle} tooltip={tooltip} content={content} />
    </ContainerDiv>
  );
};

export default CopyParagraphButton;
