import React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import FolderNameInput from './FolderNameInput';
import NewFolderButton from './NewFolderButton';
import { NewFolderOptionProp } from './TreeStructure.types';

const NewFolderWrapper = styled.div<{ withPadding?: boolean }>`
  padding-left: ${({ withPadding }) => (withPadding ? spacing.medium : '0')};
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
      />
    )}
  </NewFolderWrapper>
);

export default AddFolder;
