/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { mq, breakpoints } from '@ndla/core';
import { useWindowSize } from '@ndla/hooks';
import { Folder } from '@ndla/icons/editor';
import { FileDocumentOutline } from '@ndla/icons/common';
import { IconButton } from '@ndla/button/src/IconButton';
import { ViewListBlack, NewFolder } from '@ndla/icons/contentType';
import { Grid, FourlineHamburger } from '@ndla/icons/action';
import { colors, spacing, fonts } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import FolderElement from './Folderelement';
import ResourceElement from './ResourceElement';

const ElementsWrapper = styled.div<{ layout: LayoutProps }>``;
const NoFolders = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${colors.brand.greyMedium};
    font-weight: 400;
    font-size: ${fonts.sizes(34)};
  }
`;

const FoldersWrapper = styled.div<{ layout: LayoutProps }>`
  ${(props) =>
    props.layout === 'block' &&
    css`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 2fr);
      column-gap: 35px;
      row-gap: 5px;
      margin-bottom: 5px;
      div {
        max-width: 345px;
      }
    `}
`;
const ResourcesWrapper = styled.div<{ layout: LayoutProps }>`
  ${(props) =>
    props.layout === 'block' &&
    css`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 2fr);
      gap: 35px;
      div {
        max-width: 345px;
      }
    `}
`;

const DashOptionWrapper = styled.div`
  height: 56px;
  display: flex;
`;

const DashRightSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: 70%;
  svg {
    margin-left: ${spacing.xsmall};
    margin-right: ${spacing.xsmall};
    transform: scale(1.5);
    height: 100%;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
`;
const DashLeftSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 30%;
  align-items: flex-end;
`;

const AddButton = styled(IconButton)`
  background-color: transparent;
  border: none;
  display: flex;
  span {
    display: flex;
    align-items: center;
  }
  :hover {
    background-color: transparent;
    margin: 0;
    border: none;
  }
  &:focus,
  &:active {
    background-color: transparent;
    border: none;
  }
`;
const AddFolder = styled.p`
  height: 100%;
  color: ${colors.brand.primary};
  margin: 0;
  padding-left: ${spacing.small};
  align-items: center;
  display: flex;
  font-weight: 400;
`;

const AddNewFolder = styled(NewFolder)`
  height: 100%;
  stroke: ${colors.brand.primary};
  stroke-width: 1.5;
  fill: white;
  margin-left: ${spacing.xsmall};
  transform: scale(1.5);
`;

const StyledLearningPath = styled(FourlineHamburger)`
  stroke: transparent;
  fill: ${colors.brand.primary};
`;
const StyledViewList = styled(ViewListBlack)`
  stroke: transparent;
  fill: ${colors.brand.primary};
`;
const StyledGridView = styled(Grid)`
  fill: ${colors.brand.primary};
`;

const Filterbutton = styled(IconButton)`
  background-color: transparent;
  border: none;
  display: flex;
  margin-left: ${spacing.small};
  padding: 10px;
  svg {
  }
  &:hover {
    background-color: ${colors.brand.greyLighter};
    border: none;
  }
  &:focus,
  &:active {
    background-color: transparent;
    border: none;
  }
`;

const FoldersText = styled.p`
  margin: 0;
  height: 100%;
  font-size: ${fonts.sizes(16)};
  display: flex;
  align-items: center;
  margin-right: ${spacing.medium};
  span {
    margin-left: ${spacing.xsmall};
  }
`;

const FileIcon = styled(FileDocumentOutline)`
  height: 100%;
  margin-right: ${spacing.xsmall};
`;
const FolderIcon = styled(Folder)`
  height: 100%;
  stroke: rgba(68, 68, 68, 1);
  stroke-width: 2;
  fill: white;
  margin-right: ${spacing.xsmall};
`;

const ResourceCountWrapper = styled.div`
  height: 100%;
  display: flex;
`;

type FolderProps = {
  title: string;
  link: string;
};
type ResourceProps = {
  title: string;
  topics: string[];
  tags?: string[];
  resourceImage: { alt: string; src: string };
  link: string;
  description?: string;
};
export interface ViewProps {
  folders?: FolderProps[];
  resources?: ResourceProps[];
  layout?: LayoutProps;
}
type LayoutProps = 'list' | 'listLarger' | 'block';

export const ResourcesView = ({ folders, resources }: ViewProps) => {
  const { t } = useTranslation();
  const [layout, setLayout] = useState('list' as LayoutProps);
  const windowSize = useWindowSize(1000);
  useEffect(() => {
    if (windowSize.innerWidth < 1000) {
      setLayout('list');
    }
  }, [windowSize]);

  return (
    <>
      <DashOptionWrapper>
        <ResourceCountWrapper>
          <FolderIcon aria-label={t('myNdla.folders')} />
          <FoldersText>
            {folders?.length} <span>{t('myNdla.folders')}</span>
          </FoldersText>
        </ResourceCountWrapper>
        <ResourceCountWrapper>
          <FileIcon aria-label={t('myNdla.resources')} />
          <FoldersText>
            {resources?.length}
            <span>{t('myNdla.resources')}</span>
          </FoldersText>
        </ResourceCountWrapper>
      </DashOptionWrapper>
      <DashOptionWrapper>
        <DashLeftSide>
          <AddButton size="xsmall" aria-label={t('myNdla.newFolder')}>
            <AddNewFolder />
            <AddFolder>{t('myNdla.newFolder')}</AddFolder>
          </AddButton>
        </DashLeftSide>
        {(folders || resources) && (
          <DashRightSide>
            <Filterbutton onClick={() => setLayout('list')} size="xsmall" aria-label="List">
              <StyledLearningPath />
            </Filterbutton>
            <Filterbutton onClick={() => setLayout('listLarger')} size="xsmall" aria-label="ListLarge">
              <StyledViewList />
            </Filterbutton>
            <Filterbutton onClick={() => setLayout('block')} size="xsmall" aria-label="Grid">
              <StyledGridView />
            </Filterbutton>
          </DashRightSide>
        )}
      </DashOptionWrapper>
      <ElementsWrapper layout={layout}>
        {(!folders || !resources) && (
          <NoFolders>
            <h1>Illustrasjon tom mappe</h1>
          </NoFolders>
        )}
        <FoldersWrapper layout={layout}>
          {folders?.map((folder) => (
            <FolderElement
              layout={layout}
              title={folder.title}
              link={folder.link}
              subFolders={3}
              subResources={3}
              key={folder.link}
            />
          ))}
        </FoldersWrapper>
        <ResourcesWrapper layout={layout}>
          {resources?.map((resource) => (
            <ResourceElement
              layout={layout}
              title={resource.title}
              topics={resource.topics}
              tags={resource.tags}
              description={resource.description}
              resourceImage={{
                alt: resource.resourceImage.alt,
                src: resource.resourceImage.src,
              }}
              link={resource.link}
              key={resource.link}
            />
          ))}
        </ResourcesWrapper>
      </ElementsWrapper>
    </>
  );
};

export default ResourcesView;
