import React from 'react';
import styled from '@emotion/styled';
import { NewFolder } from '@ndla/icons/contentType';
import { spacing, colors, misc } from '@ndla/core';
import type { onCreateNewFolderProp } from './TreeStructure';

const StyledButton = styled.button`
  cursor: pointer;
  gap: ${spacing.xxsmall};
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  padding: ${spacing.xsmall} ${spacing.xsmall};
  border-radius: ${misc.borderRadius};
  &:hover {
    background: ${colors.brand.lighter};
  }
`;

interface Props {
  onCreateNewFolder: onCreateNewFolderProp;
  parentId?: string;
  idPaths: number[];
  tabIndex?: 0 | undefined;
}

const NewFolderButton = ({ onCreateNewFolder, parentId, idPaths, tabIndex }: Props) => (
  <StyledButton
    tabIndex={tabIndex === undefined ? -1 : tabIndex}
    onClick={() => onCreateNewFolder({ parentId, idPaths })}>
    <NewFolder />
    <span>Ny mappe</span>
  </StyledButton>
);

export default NewFolderButton;
