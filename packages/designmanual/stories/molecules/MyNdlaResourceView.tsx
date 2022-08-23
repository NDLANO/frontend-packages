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
import { ReplyArrow } from '@ndla/icons/action';
import { GridListView, FourlineHamburger, List } from '@ndla/icons/action';
import Button from '@ndla/button';
import { FolderOutlined } from '@ndla/icons/contentType';
import { colors, spacing, fonts } from '@ndla/core';
import { Plus } from '@ndla/icons/action';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import { Folder, ListResource, BlockResource, ShareModal, SnackbarProvider } from '@ndla/ui';
import { AddButton } from '@ndla/button';
import { orderBy } from 'lodash';
import { menuItems } from '../pages/MyNdla';

const Dash = styled.div`
  max-width: 960px;
  margin: 0 auto;
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

const BlockWrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  padding-bottom: ${spacing.xsmall};
  ${(props) =>
    props.type === 'block' &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 2fr);
      gap: 25px 32px;
      margin-top: ${spacing.normal};
      div {
        max-width: 345px;
      }
    `};
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
  gap: ${spacing.small};
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

const FlippedReplyArrow = styled(ReplyArrow)`
  transform: rotateY(180deg);
`;

const StyledIconButton = styled(Button)`
  padding: 10px;
  svg {
    margin: 0;
    width: 24px;
    height: 24px;
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

const StyledSelect = styled.select`
  height: 40px;
  border: none;
  color: ${colors.brand.primary};
  padding: 0px ${spacing.small};
  display: flex;
  justify-content: center;
  background-color: ${colors.brand.lightest};
  border-radius: 100px;
  ${fonts.sizes('16')};
`;

const SearchBarDiv = styled.div``;
const SearchBar = styled.input`
  border-radius: 5px;
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
  type?: 'list' | 'block';
}

export const ResourcesView = ({ folders, resources }: ViewProps) => {
  const { t } = useTranslation();
  const [layout, setLayout] = useState('list');
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState<any>();
  const [query, setQuery] = useState('');
  const [resultFolders, setResultFolders] = useState(folders);
  const [resultResources, setResultResources] = useState(resources);
  const Resource = layout === 'block' ? BlockResource : ListResource;
  const viewType = layout === 'block' ? 'block' : 'list';

  //search functionality
  const filter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const resultsFolders = folders?.filter((folder) => {
        return folder.title.toLocaleLowerCase().startsWith(keyword.toLowerCase());
      });
      const resultsResources = resources?.filter((resource) => {
        return resource.title.toLocaleLowerCase().startsWith(keyword.toLowerCase());
      });
      setResultFolders(resultsFolders);
      setResultResources(resultsResources);
    } else {
      setResultFolders(folders);
      setResultResources(resources);
    }
    setQuery(keyword);
  };

  const sortedFolders = orderBy(resultFolders, 'title', sort).map((folder, i) => {
    return (
      <Folder
        key={`folder-${i}`}
        type={viewType}
        title={folder.title}
        link={folder.link}
        subFolders={3}
        subResources={3}
        menuItems={menuItems}
      />
    );
  });

  const sortedResources = orderBy(resultResources, 'title', sort).map((resource, i) => {
    return (
      <Resource
        key={`resource-${i}`}
        title={resource.title}
        topics={resource.topics}
        tags={resource.tags}
        description={layout !== 'list' ? resource.description : undefined}
        resourceImage={{
          alt: resource.resourceImage.alt,
          src: resource.resourceImage.src,
        }}
        link={resource.link}
        menuItems={menuItems}
      />
    );
  });

  const windowSize = useWindowSize(1000);
  useEffect(() => {
    if (windowSize.innerWidth < 1000) {
      setLayout('list');
    }
  }, [windowSize]);

  return (
    <Dash>
      <SnackbarProvider>
        <ResourceCountWrapper>
          <CountWrapper>
            <FolderOutlined aria-label={t('myNdla.folders')} />
            <FoldersText>{t('myNdla.folders', { count: folders?.length })}</FoldersText>
          </CountWrapper>
          <CountWrapper>
            <FileDocumentOutline aria-label={t('myNdla.resources')} />
            <FoldersText>{t('myNdla.resources', { count: resources?.length })}</FoldersText>
          </CountWrapper>
        </ResourceCountWrapper>
        <DashOptionWrapper>
          <DashLeftSide>
            <AddButton
              text="Del"
              size="xsmall"
              aria-label={t('myNdla.newFolder')}
              borderShape="rounded"
              onClick={() => setIsOpen(!isOpen)}>
              <FlippedReplyArrow />
            </AddButton>
            {isOpen && (
              <ShareModal
                title="Mappe 1"
                subResources={3}
                subFolders={3}
                isOpen={isOpen}
                closeCallback={() => setIsOpen(!isOpen)}
                linkToCopy="Copy me, I am a text. "
                codeToCopy="Copy me, I am a block of code <html> <h1>Title</h1> <p>Pararagraph and stuff</p></html> <html> <h1>Title</h1> <p>Pararagraph and stuff</p></html> <html> <h1>Title</h1> <p>Pararagraph and stuff</p></html>"
              />
            )}
            <AddButton
              text="Ny mappe"
              size="xsmall"
              aria-label={t('myNdla.newFolder')}
              ghostPillOutline
              onClick={() => {}}>
              <Plus />
            </AddButton>
          </DashLeftSide>
          {(folders || resources) && (
            <DashRightSide>
              <StyledSelect name="cars" id="cars" onChange={(e) => setSort(e.target.value)}>
                <option> none </option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </StyledSelect>
              <Tooltip tooltip={t('myNdla.listView')}>
                <StyledIconButton
                  ghostPill
                  onClick={() => setLayout('list')}
                  size="small"
                  aria-label={t('myNdla.listView')}>
                  <FourlineHamburger />
                </StyledIconButton>
              </Tooltip>
              <Tooltip tooltip={t('myNdla.detailView')}>
                <StyledIconButton
                  ghostPill
                  onClick={() => setLayout('listLarger')}
                  size="small"
                  aria-label={t('myNdla.detailView')}>
                  <List />
                </StyledIconButton>
              </Tooltip>
              <Tooltip tooltip={t('myNdla.shortView')}>
                <StyledIconButton
                  ghostPill
                  onClick={() => setLayout('block')}
                  size="small"
                  aria-label={t('myNdla.shortView')}>
                  <GridListView />
                </StyledIconButton>
              </Tooltip>
              <SearchBarDiv>
                <SearchBar type="text" placeholder="søk" value={query} onChange={filter} />
              </SearchBarDiv>
            </DashRightSide>
          )}
        </DashOptionWrapper>
        {(!folders || !resources) && (
          <NoFolders>
            <h1>Illustrasjon tom mappe</h1>
          </NoFolders>
        )}
        <BlockWrapper type={layout}>{sortedFolders}</BlockWrapper>
        <BlockWrapper type={layout}>{sortedResources}</BlockWrapper>
      </SnackbarProvider>
    </Dash>
  );
};

export default ResourcesView;
