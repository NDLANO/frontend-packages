/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/core';
import { mq, breakpoints } from '@ndla/core';
import { useWindowSize } from '@ndla/hooks';
import { FileDocumentOutline } from '@ndla/icons/common';
import { GridListView, FourlineHamburger, List } from '@ndla/icons/action';
import { Button } from '@ndla/button/src/Button';
import { FolderOutlined } from '@ndla/icons/contentType';
import { DragHorizontal } from '@ndla/icons/editor';
import { colors, spacing, fonts } from '@ndla/core';
import { Folder, ListResource, BlockResource } from '@ndla/ui';
import { AddButton } from '@ndla/button'; //@ts-ignore
import DnDList from 'react-dnd-list';
import Tooltip from '@ndla/tooltip';
import { menuItems } from '../../pages/MyNdla';

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

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    z-index: 1;
    display: flex;
    align-items: center;
    margin-bottom: ${spacing.xsmall};
  }
`;

const StyledLi = styled.li`
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 2px;
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    a {
      box-shadow: none;
    }
  }
  a {
    border: none;
  }
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

export const ResourceView = ({ folders, resources }: ViewProps) => {
  const { t } = useTranslation();
  const [layout, setLayout] = useState('list');
  const windowSize = useWindowSize(1000);
  useEffect(() => {
    if (windowSize.innerWidth < 1000) {
      setLayout('list');
    }
  }, [windowSize]);
  const Resource = layout === 'block' ? BlockResource : ListResource;
  const viewType = layout === 'block' ? 'block' : 'list';

  const Item = (props: any) => {
    const dnd = props.dnd;
    return (
      <StyledLi style={{ ...dnd.item.styles, ...dnd.handler.styles }} className={dnd.item.classes} ref={dnd.item.ref}>
        <DragHorizontal {...dnd.handler.listeners} />
        {props.item}
      </StyledLi>
    );
  };

  const ItemWithoutBorder = (props: any) => {
    const dnd = props.dnd;
    return (
      <li style={{ ...dnd.item.styles, ...dnd.handler.styles }} className={dnd.item.classes} ref={dnd.item.ref}>
        <DragHorizontal {...dnd.handler.listeners} />
        {props.item}
      </li>
    );
  };

  const ItemWithoutIcon = (props: any) => {
    const dnd = props.dnd;
    return (
      <StyledLi
        style={{ ...dnd.item.styles, ...dnd.handler.styles }}
        className={dnd.item.classes}
        ref={dnd.item.ref}
        {...dnd.handler.listeners}>
        {props.item}
      </StyledLi>
    );
  };

  const [folderList, setFolderList] = useState(
    folders?.map(({ title, link }, i) => (
      <Folder
        key={`folder-${i}`}
        type={viewType}
        title={title}
        link={link}
        subFolders={3}
        subResources={3}
        menuItems={menuItems}
      />
    )),
  );

  const [resourceList, setResourceList] = useState(
    resources?.map(({ title, topics, tags, description, resourceImage, link }, i) => (
      <Resource
        key={`resource-${i}`}
        title={title}
        topics={topics}
        tags={tags}
        description={layout !== 'list' ? description : undefined}
        resourceImage={{
          alt: resourceImage.alt,
          src: resourceImage.src,
        }}
        link={link}
        menuItems={menuItems}
      />
    )),
  );

  return (
    <Dash>
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
          <AddButton size="xsmall" aria-label={t('myNdla.newFolder')} ghostPill onClick={() => {}} />
        </DashLeftSide>
        {(folders || resources) && (
          <DashRightSide>
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
          </DashRightSide>
        )}
      </DashOptionWrapper>
      {(!folders || !resources) && (
        <NoFolders>
          <h1>Illustrasjon tom mappe</h1>
        </NoFolders>
      )}
      {layout === 'list' ? (
        <>
          <h2>Drag and Drop med dra-ikon inne på elementet</h2>
          <StyledUl>
            <DnDList items={folderList} itemComponent={Item} setList={setFolderList} />
            <DnDList items={resourceList} itemComponent={Item} setList={setResourceList} />
          </StyledUl>

          <h2>Drag and Drop med dra-ikon utenfor elementet </h2>
          <StyledUl>
            <DnDList items={resourceList} itemComponent={ItemWithoutBorder} setList={setResourceList} />
          </StyledUl>

          <h2>Drag and Drop hele elementet</h2>
          <StyledUl>
            <DnDList items={resourceList} itemComponent={ItemWithoutIcon} setList={setResourceList} />
          </StyledUl>
        </>
      ) : (
        <>
          <BlockWrapper type={layout}>
            {folders?.map(({ title, link }, i) => (
              <Folder
                key={`folder-${i}`}
                type={viewType}
                title={title}
                link={link}
                subFolders={3}
                subResources={3}
                menuItems={menuItems}
              />
            ))}
          </BlockWrapper>
          <BlockWrapper type={layout}>
            {resources?.map(({ title, topics, tags, description, resourceImage, link }, i) => (
              <Resource
                key={`resource-${i}`}
                title={title}
                topics={topics}
                tags={tags}
                description={layout !== 'list' ? description : undefined}
                resourceImage={{
                  alt: resourceImage.alt,
                  src: resourceImage.src,
                }}
                link={link}
                menuItems={menuItems}
              />
            ))}
          </BlockWrapper>
        </>
      )}
    </Dash>
  );
};

export default ResourceView;
