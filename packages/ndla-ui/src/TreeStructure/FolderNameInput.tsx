/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import styled from '@emotion/styled';
import { spacing, colors, animations, spacingUnit } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Spinner } from '@ndla/icons';
import { IconButton } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { Done } from '@ndla/icons/editor';
import { InputV2 as Input } from '@ndla/forms';
import { TreeStructureType } from './types';
import { treestructureId } from './helperFunctions';

// Source: https://kovart.github.io/dashed-border-generator/
const borderStyle = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${encodeURIComponent(
  colors.brand.tertiary,
)}' stroke-width='2' stroke-dasharray='8%2c8' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e")`;

const NewFolderWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${colors.white} 0%,
    ${colors.white} 15%,
    ${colors.brand.lighter} 15%,
    ${colors.brand.lighter} 85%,
    ${colors.white} 85%,
    ${colors.white} 100%
  );
  background-size: auto 100%;
`;

const Row = styled.div`
  display: flex;
  gap: ${spacing.xxsmall};
  padding-right: ${spacing.xsmall};
`;

const InputWrapper = styled.div<{ level: number }>`
  display: flex;
  margin: ${spacing.xxsmall} 0;
  margin-left: ${({ level }) => 0.75 * spacingUnit * level + 2 * spacingUnit}px;
  margin-right: ${spacing.normal};
  align-items: center;
  background-color: ${colors.white};
  background-image: ${borderStyle};
  color: ${colors.brand.primary};

  ${animations.fadeInLeft(animations.durations.fast)};
  animation-fill-mode: forwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const StyledInput = styled(Input)`
  padding: ${spacing.small};
  flex-grow: 1;
  border: 0;
  outline: none;
  min-width: 0;
  background: transparent;
  color: ${colors.brand.primary};
  scroll-margin-top: 100px;
`;

interface FolderNameInputProps {
  onSaveNewFolder: (name: string, parentId: string) => void;
  parentId: string;
  onCancelNewFolder: () => void;
  loading?: boolean;
  level: number;
  type: TreeStructureType;
}

const FolderNameInput = ({
  onSaveNewFolder,
  parentId,
  onCancelNewFolder,
  loading,
  level,
  type,
}: FolderNameInputProps) => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isMobile) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NewFolderWrapper>
      <InputWrapper level={level}>
        <StyledInput
          name="name"
          labelHidden
          label={t('treeStructure.newFolder.folderName')}
          aria-invalid={name.length === 0}
          aria-disabled={loading ? true : undefined}
          aria-describedby={loading ? treestructureId(type, 'spinner') : undefined}
          ref={inputRef}
          autoFocus
          placeholder={t('treeStructure.newFolder.placeholder')}
          value={name}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Escape') {
              e.preventDefault();
              onCancelNewFolder();
            } else if (e.key === 'Enter') {
              e.preventDefault();
              if (name === '' || loading) {
                return;
              }
              onSaveNewFolder(name, parentId);
            }
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (!loading) {
              setName(e.target.value);
            }
          }}
        />
        <Row>
          {!loading && (
            <>
              <IconButton
                tabIndex={0}
                aria-label={t('save')}
                title={t('save')}
                size="small"
                ghostPill
                onClick={() => onSaveNewFolder(name, parentId)}>
                <Done />
              </IconButton>
              <IconButton aria-label={t('close')} title={t('close')} size="small" ghostPill onClick={onCancelNewFolder}>
                <Cross />
              </IconButton>
            </>
          )}
          <div aria-live="assertive">
            {loading && (
              <Spinner
                size="normal"
                margin={spacing.small}
                id={treestructureId(type, 'spinner')}
                aria-label={t('loading')}
              />
            )}
          </div>
        </Row>
      </InputWrapper>
    </NewFolderWrapper>
  );
};

export default FolderNameInput;
