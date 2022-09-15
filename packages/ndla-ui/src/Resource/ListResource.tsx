/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { fonts, spacing, colors, breakpoints, mq } from '@ndla/core';
import { MenuButton, MenuItemProps } from '@ndla/button';
import Image from '../Image';
import {
  CompressedTagList,
  ResourceImageProps,
  ResourceTitle,
  ResourceTitleLink,
  TopicList,
  LoaderProps,
} from './resourceComponents';
import ContentLoader from '../ContentLoader';

const StyledResourceDescription = styled.p`
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

const ResourceWrapper = styled.div`
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

  cursor: pointer;
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 2px;
  gap: 0 ${spacing.small};

  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
    ${() => ResourceTitleLink} {
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
  }
`;

const TagsandActionMenu = styled.div`
  grid-area: tags;
  display: flex;
  align-items: center;
  flex-grow: 1;
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
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  display: flex;
  border-radius: 2px;
  object-fit: cover;
`;

const TopicAndTitleWrapper = styled.div`
  grid-area: topicAndTitle;
  margin-top: ${spacing.xxsmall};
`;

interface StyledImageProps {
  imageSize: 'normal' | 'compact';
}

export interface ListResourceProps {
  link: string;
  tagLinkPrefix?: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  menuItems?: MenuItemProps[];
  isLoading?: boolean;
}

interface ListResourceImageProps {
  resourceImage: ResourceImageProps;
  loading?: boolean;
  type: 'normal' | 'compact';
}

const ListResourceImage = ({ resourceImage, loading, type }: ListResourceImageProps) => {
  if (!loading) {
    return <StyledImage alt="" src={resourceImage.src} fallbackWidth={type === 'compact' ? 56 : 136} />;
  }
  return (
    <ContentLoader height={'100%'} width={'100%'} viewBox={null} preserveAspectRatio="none">
      <rect
        x="0"
        y="0"
        rx="3"
        ry="3"
        width={type === 'compact' ? '56' : '136'}
        height={type === 'compact' ? '40' : '96'}
      />
    </ContentLoader>
  );
};

const TopicAndTitleLoader = ({ loading, children }: LoaderProps) => {
  if (loading) {
    return (
      <ContentLoader height={'40px'} width={'100%'} viewBox={null} preserveAspectRatio="none">
        <rect x="0" y="0" rx="3" ry="3" width={'100%'} height={'16'} />
        <rect x="0" y="18" rx="3" ry="3" width={'70'} height={'16'} />
        <rect x="80" y="18" rx="3" ry="3" width={'70'} height={'16'} />
      </ContentLoader>
    );
  }
  return <>{children}</>;
};

interface ResourceDescriptionProps {
  description?: string;
  loading?: boolean;
}

const ResourceDescription = ({ description, loading }: ResourceDescriptionProps) => {
  if (loading) {
    return (
      <ContentLoader height={'20px'} width={'100%'} viewBox={null} preserveAspectRatio="none">
        <rect x="0" y="0" width="100%" height="20" />
      </ContentLoader>
    );
  }
  return <StyledResourceDescription>{description}</StyledResourceDescription>;
};

const ListResource = ({
  link,
  tagLinkPrefix,
  title,
  tags,
  resourceImage,
  topics,
  description,
  menuItems,
  isLoading = false,
}: ListResourceProps) => {
  const showDescription = description !== undefined;
  const imageType = showDescription ? 'normal' : 'compact';
  const linkRef = useRef<HTMLAnchorElement>(null);
  const handleClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <ResourceWrapper onClick={handleClick}>
      <StyledImageWrapper imageSize={imageType}>
        <ListResourceImage resourceImage={resourceImage} loading={isLoading} type={imageType} />
      </StyledImageWrapper>
      <TopicAndTitleWrapper>
        <TopicAndTitleLoader loading={isLoading}>
          <ResourceTitleLink to={link} ref={linkRef}>
            <ResourceTitle>{title}</ResourceTitle>
          </ResourceTitleLink>
          <TopicList topics={topics} />
        </TopicAndTitleLoader>
      </TopicAndTitleWrapper>
      {showDescription && <ResourceDescription description={description} loading={isLoading} />}
      <TagsandActionMenu>
        {tags && <CompressedTagList tagLinkPrefix={tagLinkPrefix} tags={tags} />}
        {menuItems && menuItems.length > 0 && <MenuButton alignRight size="small" menuItems={menuItems} />}
      </TagsandActionMenu>
    </ResourceWrapper>
  );
};

export default ListResource;
