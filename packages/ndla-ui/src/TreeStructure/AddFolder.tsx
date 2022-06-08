import React from 'react';
import styled from '@emotion/styled';
import { spacing, animations } from '@ndla/core';
import FolderNameInput from './FolderNameInput';
import NewFolderButton from './NewFolderButton';
import { NewFolderOptionProp } from './TreeStructure.types';

const NewFolderWrapper = styled.div<{ withPadding?: boolean }>`
  padding-left: ${({ withPadding }) => (withPadding ? spacing.medium : '0')};
  ${animations.fadeInLeft(animations.durations.fast)};
  animation-fill-mode: forwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const AddFolder = ({
  editing,
  onSaveNewFolder,
  onCreateNewFolder,
  loading,
  parentId,
  idPaths,
  withPadding,
  tabIndex,
  rootLevelId,
}: NewFolderOptionProp) => (
  <NewFolderWrapper withPadding={withPadding}>
    {editing ? (
      <FolderNameInput loading={loading} onSaveNewFolder={onSaveNewFolder} />
    ) : (
      <NewFolderButton
        tabIndex={tabIndex}
        onCreateNewFolder={onCreateNewFolder}
        parentId={parentId}
        idPaths={idPaths}
        rootLevelId={rootLevelId}
      />
    )}
  </NewFolderWrapper>
);

export default AddFolder;
