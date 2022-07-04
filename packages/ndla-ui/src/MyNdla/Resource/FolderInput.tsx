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
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { colors, spacing } from '@ndla/core';
import { Input } from '@ndla/forms';
import { css } from '@emotion/core';

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

const inputStyle = css`
  padding: 20px;
  background: none;
  background-image: ${borderStyle};
  border: none;
  line-height: 1.75em;

  input {
    color: ${colors.brand.primary};
    ::selection {
      background: ${colors.brand.lighter};
    }
  }
`;

interface Props {
  onAddFolder: (name: string) => void;
  onClose: () => void;
  autoFocus?: boolean;
}

const FolderInput = ({ onAddFolder, onClose, autoFocus }: Props) => {
  const { t } = useTranslation();
  const newFolderText = t('treeStructure.newFolder.defaultName');
  const [input, setInput] = useState<string>(newFolderText);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input) {
      e.preventDefault();
      onAddFolder(input);
    }
  };

  useEffect(() => {
    if (mounted && autoFocus) {
      inputRef.current?.select();
    } else {
      setMounted(true);
    }
  }, [mounted, autoFocus]);

  return (
    <Input
      customCss={inputStyle}
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
        <IconButton aria-label={t('close')} size="small" ghostPill onClick={onClose}>
          <Cross />
        </IconButton>
      }
    />
  );
};

export default FolderInput;
