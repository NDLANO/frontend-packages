/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import SafeLink from '@ndla/safelink';
import { fonts, spacing, colors, breakpoints, mq } from '@ndla/core';
import { MenuButton, MenuItemProps } from '@ndla/button';
import Image from '../Image';
import { CompressedTagList, ResourceImageProps, ResourceTitle, TopicList } from './resourceComponents';

const ResourceDescription = styled.p`
  grid-area: description;
  line-clamp: 2;
  line-height: 1em;
  height: 3.1em;
  margin: 0;
  overflow: hidden;
  ${fonts.sizes(16)};
  text-overflow: ellipsis;
  // Unfortunate css needed for multi-line text overflow ellipsis.
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ResourceWrapper = styled(SafeLink)`
  flex: 1;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'image  topicAndTitle   tags'
    'image  description     description';

  ${mq.range({ until: breakpoints.mobileWide })} {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'image                topicAndTitle'
      'description          description'
      'tags                 tags';
  }

  text-decoration: none;
  box-shadow: none;
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 2px;
  color: ${colors.brand.greyDark};
  gap: 0 ${spacing.small};

  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
    ${ResourceTitle} {
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
    a {
      display: flex;
      align-items: center;
    }
  }
`;

const TagsandActionMenu = styled.div`
  grid-area: tags;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  gap: ${spacing.small};
  align-self: flex-start;
  justify-self: flex-end;
  justify-content: flex-end;
`;

const StyledImageWrapper = styled.div<StyledImageProps>`
  grid-area: image;
  width: ${(p) => (p.imageSize === 'normal' ? '136px' : '56px')};
  height: ${(p) => (p.imageSize === 'normal' ? '96px' : '40px')};
  ${mq.range({ until: breakpoints.mobileWide })} {
    width: 54px;
    height: 40px;
  }
`;

const StyledImage = styled(Image)`
  display: flex;
  border-radius: 2px;
  object-fit: cover;
`;

const TopicAndTitle = styled.div`
  grid-area: topicAndTitle;
  margin-top: ${spacing.xxsmall};
`;

interface StyledImageProps {
  imageSize: 'normal' | 'compact';
}

export interface ListResourceProps {
  link: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  menuItems?: MenuItemProps[];
}

const ListResource = ({ link, title, tags, resourceImage, topics, description, menuItems }: ListResourceProps) => {
  const showDescription = description !== undefined;

  return (
    <ResourceWrapper to={'https://google.com'}>
      <StyledImageWrapper imageSize={showDescription ? 'normal' : 'compact'}>
        <StyledImage alt={resourceImage.alt} src={resourceImage.src} />
      </StyledImageWrapper>
      <TopicAndTitle>
        <ResourceTitle>{title}</ResourceTitle>
        <TopicList topics={topics} />
      </TopicAndTitle>
      {showDescription && <ResourceDescription>{description}</ResourceDescription>}
      <TagsandActionMenu>
        {tags && <CompressedTagList tags={tags} />}
        {menuItems && menuItems.length > 0 && <MenuButton size="small" menuItems={menuItems} />}
      </TagsandActionMenu>
    </ResourceWrapper>
  );
};

export default ListResource;
