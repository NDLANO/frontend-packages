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

const IconButton = styled.button`
  position: absolute;
  left: -3em;
  top: 0.1em;
  background: none;
  border: 0;
  z-index: 1;
  transition: 0.2s;
  opacity: 0;

  & svg {
    width: 30px;
    height: 30px;
  }
`;

const ContainerDiv = styled.div`
  position: relative;
  &:hover button {
    cursor: pointer;
    opacity: 0.5;
  }
`;

interface Props {
  title?: string | null;
  content?: string | null;
  hydrate?: boolean;
}

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
    return (
      <>
        <IconButton onClick={onCopyClick} data-title={sanitizedTitle}>
          <Tooltip tooltip={tooltip}>
            <Link title={''} />
          </Tooltip>
        </IconButton>
        <h2 id={sanitizedTitle} tabIndex={0} dangerouslySetInnerHTML={{ __html: content || '' }} />
      </>
    );
  }

  return (
    <ContainerDiv data-header-copy-container data-title={title}>
      <>
        <IconButton onClick={onCopyClick} data-title={sanitizedTitle}>
          <Tooltip tooltip={tooltip}>
            <Link title={''} />
          </Tooltip>
        </IconButton>
        <h2 id={sanitizedTitle} tabIndex={0} dangerouslySetInnerHTML={{ __html: content || '' }} />
      </>
    </ContainerDiv>
  );
};

export default CopyParagraphButton;
