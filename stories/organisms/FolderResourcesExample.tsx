/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { Folder } from '@ndla/ui';

const BlockFolderWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
`;

const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

interface FolderExampleProps {
  menu?: ReactNode;
}
export const FolderResourcesExample = ({ menu }: FolderExampleProps) => {
  return (
    <>
      <FolderWrapper>
        <Folder
          id={'2cd1579a-4e1a-4213-ba73-02373aae504c'}
          key={'listFolder'}
          link={''}
          title={'Dette er min tittel'}
          subFolders={3}
          subResources={3}
          type={'list'}
          menu={menu}
        />
        <Folder
          id={'2cd1579a-4e1a-4213-ba73-02373aae504c'}
          key={'listFolder'}
          link={''}
          title={'Dette er min tittel'}
          subFolders={3}
          subResources={3}
          type={'list'}
        />
      </FolderWrapper>
      <h2>Blokkvisning av folder</h2>
      <BlockFolderWrapper>
        <Folder
          id={'3d88300c-1186-47f5-a99a-8ea93fa20981'}
          key={'blockFolder'}
          link={''}
          title={'Dette er min tittel'}
          subFolders={3}
          subResources={3}
          type={'block'}
          menu={menu}
        />
        <Folder
          id={'2cd86f5d-6d8e-44cf-9803-40fed974bde7'}
          key={'blockFolder2'}
          link={''}
          title={'Dette er min tittel'}
          subFolders={3}
          subResources={3}
          type={'block'}
          menu={menu}
        />
        <Folder
          id={'9aeaf3c5-8b3f-454a-9bdd-4fd1af3543df'}
          key={'blockFolder3'}
          link={''}
          title={'Dette er min tittel'}
          subFolders={3}
          subResources={3}
          type={'block'}
          menu={menu}
        />
      </BlockFolderWrapper>
    </>
  );
};

export default FolderResourcesExample;
