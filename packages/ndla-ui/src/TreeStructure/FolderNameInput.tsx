/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FolderOutlined } from '@ndla/icons/contentType';
import { ArrowDropDown as ArrowDropDownRaw } from '@ndla/icons/common';
import { Spinner } from '@ndla/editor';
import { spacing, colors, misc, animations } from '@ndla/core';
import { useTranslation } from 'react-i18next';

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

const InputWrapper = styled.div<{ loading?: boolean }>`
  margin: ${spacing.xxsmall} ${spacing.small} ${spacing.xxsmall} 0;
  display: flex;
  align-items: center;
  border: 1px solid ${({ loading }) => (loading ? colors.brand.lighter : colors.brand.primary)};
  border-style: dashed;
  border-radius: ${misc.borderRadius};
  padding-right: ${spacing.normal};
  padding-left: ${spacing.xsmall};
  color: ${colors.brand.primary};
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border: 0;
  outline: none;
  padding: ${spacing.small};
  padding-left: ${spacing.xsmall};
  background: transparent;
  color: ${colors.text.primary};
`;

interface FolderNameInputProps {
  onSaveNewFolder: (props: { value: string; cancel: boolean }) => void;
  loading?: boolean;
}

const FolderNameInput = ({ onSaveNewFolder, loading }: FolderNameInputProps) => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  return (
    <NewFolderWrapper>
      <InputWrapper loading={loading}>
        <ArrowRight />
        <FolderOutlined />
        <StyledInput
          autoFocus
          placeholder={t('treeStructure.newFolder.placeholder')}
          disabled={loading}
          value={value}
          onBlur={() => onSaveNewFolder({ value, cancel: true })}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' || e.key === 'Tab' || e.key === 'Escape') {
              onSaveNewFolder({ value, cancel: e.key === 'Escape' });
              e.preventDefault();
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            setValue(target.value);
          }}
        />
        {loading && <Spinner size="small" />}
      </InputWrapper>
    </NewFolderWrapper>
  );
};

export default FolderNameInput;
