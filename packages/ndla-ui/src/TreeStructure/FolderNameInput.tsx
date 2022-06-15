/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { FolderOutlined } from '@ndla/icons/contentType';
import { ArrowDropDown as ArrowDropDownRaw } from '@ndla/icons/common';
import { Spinner } from '@ndla/editor';
import { spacing, colors, misc, animations } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

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

// enterKeyHint is missing in is-prop-valid
// more info: https://issuemode.com/issues/emotion-js/emotion/11306450
const StyledInput = styled.input<{ enterKeyHint?: string }>`
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
  const { t } = useTranslation();
  const [value, setValue] = useState<string>(t('treeStructure.newFolder.defaultName'));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.select();
  }, []);

  return (
    <NewFolderWrapper>
      <InputWrapper loading={loading}>
        <ArrowRight />
        <FolderOutlined />
        <StyledInput
          ref={inputRef}
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
          enterKeyHint="Lag mappe"
          onFocus={() => {
            // scroll to if on mobile device
            if (isMobile) {
              inputRef.current && inputRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
        {loading && <Spinner size="small" />}
      </InputWrapper>
    </NewFolderWrapper>
  );
};

export default FolderNameInput;
