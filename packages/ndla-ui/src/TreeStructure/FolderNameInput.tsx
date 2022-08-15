/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import styled from '@emotion/styled';
import { FolderOutlined } from '@ndla/icons/contentType';
import { ArrowDropDown as ArrowDropDownRaw } from '@ndla/icons/common';
import { spacing, colors, misc, animations } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Spinner } from '@ndla/icons';
import { IconButton } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { Done } from '@ndla/icons/editor';

const ArrowRight = styled(ArrowDropDownRaw)`
  color: ${colors.text.primary};
  transform: rotate(-90deg);
`;

const NewFolderWrapper = styled.div`
  padding-left: ${spacing.normal};
  ${animations.fadeInLeft(animations.durations.fast)};
  animation-fill-mode: forwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Row = styled.div`
  display: flex;
  gap: ${spacing.xxsmall};
  padding-right: ${spacing.xsmall};
`;

const InputWrapper = styled.div<{ loading?: boolean }>`
  display: flex;
  margin: ${spacing.xxsmall} 0;
  align-items: center;
  border: 1px solid ${({ loading }) => (loading ? colors.brand.lighter : colors.brand.primary)};
  border-style: dashed;
  border-radius: ${misc.borderRadius};
  color: ${colors.brand.primary};
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border: 0;
  outline: none;
  min-width: 0;
  background: transparent;
  color: ${colors.text.primary};
  scroll-margin-top: 100px;
`;

interface FolderNameInputProps {
  onSaveNewFolder: (name: string, parentId: string) => void;
  parentId: string;
  onCancelNewFolder: () => void;
  loading?: boolean;
}

const FolderNameInput = ({ onSaveNewFolder, parentId, onCancelNewFolder, loading }: FolderNameInputProps) => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>(t('treeStructure.newFolder.defaultName'));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.select();
    if (isMobile) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <NewFolderWrapper>
      <InputWrapper loading={loading}>
        <Row>
          <ArrowRight />
          <FolderOutlined />
        </Row>
        <StyledInput
          ref={inputRef}
          autoFocus
          placeholder={t('treeStructure.newFolder.placeholder')}
          disabled={loading}
          value={name}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Escape') {
              onCancelNewFolder();
            } else if (e.key === 'Enter' || e.key === 'Tab') {
              e.preventDefault();
              onSaveNewFolder(name, parentId);
            }
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <Row>
          {!loading ? (
            <>
              <IconButton aria-label={t('close')} size="small" ghostPill onClick={onCancelNewFolder}>
                <Cross />
              </IconButton>
              <IconButton aria-label={t('save')} size="small" ghostPill onClick={() => onSaveNewFolder(name, parentId)}>
                <Done />
              </IconButton>
            </>
          ) : (
            <Spinner size="small" margin="0" />
          )}
        </Row>
      </InputWrapper>
    </NewFolderWrapper>
  );
};

export default FolderNameInput;
