/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
const ResourceElementWrapper = styled.div`
  width: 960px;
  height: 56px;
  border: 1px solid rgba(209, 214, 219, 1);
  border-radius: 2px;
`;

const ResourceIconWrapper = styled.div``;

const ResourceIcon = styled.svg``;

const Title = styled.h2``;

const SubFolderWrapper = styled.div``;

const SubIcon = styled.svg``;

const SubText = styled.p``;

const SubResourcesWrapper = styled.div``;

const DotIcon = styled.svg``;

export type ResourceProps = {
  type: 'folder' | 'resource';
  title: string;
  tags?: string[];
  subFolders?: number;
  subResources?: number;
};

const ResourceElement = ({ type, title, tags, subFolders, subResources }: ResourceProps) => {
  const { t } = useTranslation();
  return (
    <ResourceElementWrapper>
      <ResourceIconWrapper>
        <ResourceIcon />
      </ResourceIconWrapper>
      <Title>{title}</Title>
      <SubFolderWrapper>
        <SubIcon />
        <SubText>
          {subFolders} {t('myNdla.folders')}{' '}
        </SubText>
      </SubFolderWrapper>
      <SubResourcesWrapper>
        <SubIcon />
        <SubText>
          {subResources} {t('myNdla.resources')}{' '}
        </SubText>
      </SubResourcesWrapper>
      <DotIcon />
    </ResourceElementWrapper>
  );
};

export default ResourceElement;
