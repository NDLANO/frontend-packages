/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { IconButton } from '@ndla/button';
import { FolderOutlined } from '@ndla/icons/contentType';
import { Cross } from '@ndla/icons/action';
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { colors, spacing } from '@ndla/core';
import { Input } from '@ndla/forms';
import { css } from '@emotion/core';
import { Done } from '@ndla/icons/editor';

// Source: https://kovart.github.io/dashed-border-generator/
const borderStyle = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${encodeURIComponent(
  colors.brand.tertiary,
)}' stroke-width='2' stroke-dasharray='8%2c8' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e")`;

const StyledFolderIcon = styled.span`
  display: flex;
  padding: ${spacing.small};
  svg {
    color: ${colors.brand.primary};
    height: 20px;
    width: 20px;
  }
`;

const inputWrapperStyle = css`
  padding: ${spacing.small};
  background: none;
  background-image: ${borderStyle};
  border: none;
`;

const StyledInput = styled(Input)`
  && {
    flex-grow: 1;
    flex-basis: 0;
    min-width: 0;
    line-height: 1.75em;
    color: ${colors.brand.primary};
    ::selection {
      background: ${colors.brand.lighter};
    }
  }
`;

const Row = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  padding-right: ${spacing.small};
`;

interface Props {
  onAddFolder: (name: string) => void;
  onClose: () => void;
  autoSelect?: boolean;
}

const FolderInput = ({ onAddFolder, onClose, autoSelect }: Props) => {
  const { t } = useTranslation();
  const newFolderText = t('treeStructure.newFolder.defaultName');
  const [input, setInput] = useState<string>(newFolderText);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      onAddFolder(input);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <StyledInput
      autoSelect={autoSelect}
      customCss={inputWrapperStyle}
      warningText={!input.trim() ? t('myNdla.folder.missingName') : undefined}
      ref={inputRef}
      value={input}
      onChange={handleInputChange}
      onKeyDown={onKeydown}
      aria-label={newFolderText}
      iconLeft={
        <StyledFolderIcon>
          <FolderOutlined />
        </StyledFolderIcon>
      }
      iconRight={
        <Row>
          <IconButton aria-label={t('close')} size="small" ghostPill onClick={onClose}>
            <Cross />
          </IconButton>
          <IconButton aria-label={t('save')} size="small" ghostPill onClick={() => onAddFolder(input)}>
            <Done />
          </IconButton>
        </Row>
      }
    />
  );
};

export default FolderInput;
