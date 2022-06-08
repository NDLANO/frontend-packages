import React from 'react';
import styled from '@emotion/styled';
import { NewFolder } from '@ndla/icons/contentType';
import { spacing, colors, misc } from '@ndla/core';
import { onCreateNewFolderProp } from './TreeStructure.types';

const StyledButton = styled.button`
  cursor: pointer;
  gap: ${spacing.xsmall};
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  padding: ${spacing.xsmall} ${spacing.xsmall};
  border-radius: ${misc.borderRadius};
  margin-left: -8px;
  color: ${colors.brand.primary};
  &:hover {
    background: ${colors.brand.lighter};
  }
`;

interface Props {
  onCreateNewFolder: onCreateNewFolderProp;
  parentId?: string;
  idPaths: number[];
  tabIndex?: 0 | -1;
}

const NewFolderButton = ({ onCreateNewFolder, parentId, idPaths, tabIndex }: Props) => (
  <StyledButton tabIndex={tabIndex} onClick={() => onCreateNewFolder({ parentId, idPaths })}>
    <NewFolder />
    <span>Ny mappe</span>
  </StyledButton>
);

export default NewFolderButton;
