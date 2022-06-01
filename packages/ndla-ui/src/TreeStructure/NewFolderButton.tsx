import React from 'react';
import styled from '@emotion/styled';
import { FolderOutlined } from '@ndla/icons/contentType';
import type { onCreateNewFolderProp } from './TreeStructure';

const StyledButton = styled.button`
  padding: 10px;
  border: 0;
  background: transparent;
`;

interface Props {
  onCreateNewFolder: onCreateNewFolderProp;
  parentId?: string;
  idPaths: number[];
  tabIndex?: 0 | undefined;
};

const NewFolderButton = ({ onCreateNewFolder, parentId, idPaths, tabIndex }: Props) => (
  <StyledButton tabIndex={tabIndex === undefined ? -1 : tabIndex} onClick={() => onCreateNewFolder({ parentId, idPaths })}><FolderOutlined />new folder</StyledButton>
);

export default NewFolderButton;
