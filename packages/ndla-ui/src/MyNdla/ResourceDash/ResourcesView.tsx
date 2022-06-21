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
import { FileDocumentOutline } from '@ndla/icons/common';
import { IconButton } from '@ndla/button/src/IconButton';
import { NewFolder, FolderOutlined } from '@ndla/icons/contentType';
import { GridListView, FourlineHamburger, List } from '@ndla/icons/action';
import { colors, spacing, fonts } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import FolderElement from './Folderelement';
import ResourceElement from './ResourceElement';
import { Grid, Aside, Main } from './Layout';

const Dash = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;

const NoFolders = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${colors.brand.greyMedium};
    font-weight: 400;
    ${fonts.sizes(34)};
  }
`;

const FoldersWrapper = styled.div<{ layout: LayoutProps }>`
  ${(props) =>
    props.layout === 'block' &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 2fr);
      column-gap: 35px;
      row-gap: 5px;
      div {
        max-width: 345px;
      }
    `}
`;
const ResourcesWrapper = styled.div<{ layout: LayoutProps }>`
  ${(props) =>
    props.layout === 'block' &&
    css`
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
  justify-content: space-between;
  margin-bottom: ${spacing.xsmall};
`;

const DashRightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;

  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
`;
const DashLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const AddButton = styled(IconButton)`
  background-color: transparent;
  border: none;
  display: flex;
  border-radius: 5px;
  svg {
    fill: ${colors.brand.primary};
  }
  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  :hover {
    background-color: ${colors.brand.light};
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
  color: ${colors.brand.primary};
  margin: 0;
  align-items: center;
  display: flex;
  font-weight: 600;
`;

const FoldersText = styled.p`
  margin: 0;
  ${fonts.sizes(16)};
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ResourceCountWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: column;
  gap: 5px;
  align-items: center;
`;

const StyledIconButton = styled(IconButton)`
  svg {
    fill: ${colors.brand.tertiary};
  }
  &:focus {
    background-color: transparent;
    svg {
      fill: ${colors.brand.primary};
    }
  }
  :hover,
  :active {
    svg {
      fill: ${colors.brand.primary};
    }
  }
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
  aside?: React.ReactNode;
}
type LayoutProps = 'list' | 'listLarger' | 'block';

export const ResourcesView = ({ folders, resources, aside }: ViewProps) => {
  const { t } = useTranslation();
  const [layout, setLayout] = useState('list' as LayoutProps);
  const windowSize = useWindowSize(1000);
  useEffect(() => {
    if (windowSize.innerWidth < 1000) {
      setLayout('list');
    }
  }, [windowSize]);

  return (
    <Grid>
      <Aside>
        {aside}
      </Aside>
    <Main>
    <Dash>
      <ResourceCountWrapper>
        <CountWrapper>
          <FolderOutlined aria-label={t('myNdla.folders')} />
          <FoldersText>
            <span>{folders?.length}</span> {t('myNdla.folders')}
          </FoldersText>
        </CountWrapper>
        <CountWrapper>
          <FileDocumentOutline aria-label={t('myNdla.resources')} />
          <FoldersText>
            <span> {resources?.length}</span>
            {t('myNdla.resources')}
          </FoldersText>
        </CountWrapper>
      </ResourceCountWrapper>
      <DashOptionWrapper>
        <DashLeftSide>
          <AddButton size="xsmall" aria-label={t('myNdla.newFolder')}>
            <NewFolder />
            <AddFolder>{t('myNdla.newFolder')}</AddFolder>
          </AddButton>
        </DashLeftSide>
        {(folders || resources) && (
          <DashRightSide>
            <Tooltip tooltip={t('myNdla.listView')} align="bottom">
              <StyledIconButton
                ghostPill
                onClick={() => setLayout('list')}
                size="small"
                aria-label={t('myNdla.listView')}>
                <FourlineHamburger />
              </StyledIconButton>
            </Tooltip>
            <Tooltip tooltip={t('myNdla.detailView')} align="bottom">
              <StyledIconButton
                ghostPill
                onClick={() => setLayout('listLarger')}
                size="small"
                aria-label={t('myNdla.detailView')}>
                <List />
              </StyledIconButton>
            </Tooltip>
            <Tooltip tooltip={t('myNdla.shortView')} align="bottom">
              <StyledIconButton
                ghostPill
                onClick={() => setLayout('block')}
                size="small"
                aria-label={t('myNdla.shortView')}>
                <GridListView />
              </StyledIconButton>
            </Tooltip>
          </DashRightSide>
        )}
      </DashOptionWrapper>
      {(!folders || !resources) && (
        <NoFolders>
          <h1>Illustrasjon tom mappe</h1>
        </NoFolders>
      )}
      <FoldersWrapper layout={layout}>
        {folders?.map(({ title, link }) => (
          <FolderElement layout={layout} title={title} link={link} subFolders={3} subResources={3} key={link} />
        ))}
      </FoldersWrapper>
      <ResourcesWrapper layout={layout}>
        {resources?.map(({ title, topics, tags, description, resourceImage, link }) => (
          <ResourceElement
            layout={layout}
            title={title}
            topics={topics}
            tags={tags}
            description={description}
            resourceImage={{
              alt: resourceImage.alt,
              src: resourceImage.src,
            }}
            link={link}
            key={link}
          />
        ))}
      </ResourcesWrapper>
    </Dash>
    </Main>
    </Grid>
  );
};

export default ResourcesView;
