/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import { fonts, spacing, colors, breakpoints, mq } from '@ndla/core';
import { MenuItemProps } from '@ndla/button';
import Image from '../Image';
import {
  CompressedTagList,
  ResourceImageProps,
  ResourceTitle,
  ResourceTitleLink as StyledLink,
  ResourceTypeList,
  StyledContentIconWrapper,
  LoaderProps,
} from './resourceComponents';
import ContentLoader from '../ContentLoader';
import ContentTypeBadge from '../ContentTypeBadge';
import { contentTypeMapping, resourceTypeMapping } from '../model/ContentType';
import { SettingsMenu } from '../MyNdla';

const ListResourceWrapper = styled.div`
  flex: 1;
  display: grid;
  position: relative;
  grid-template-columns: auto minmax(50px, 1fr) auto;
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
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 2px;

  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
    ${() => StyledLink} {
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
  }
`;

interface StyledImageProps {
  imageSize: 'normal' | 'compact';
}

const ImageWrapper = styled.div<StyledImageProps>`
  grid-area: image;
  width: ${(p) => (p.imageSize === 'normal' ? '136px' : '56px')};
  ${mq.range({ until: breakpoints.mobileWide })} {
    width: 56px;
    margin-bottom: 0;
  }
  overflow: hidden;
  border-radius: 2px;
  display: flex;
  margin: ${spacing.small};
  align-items: center;
  justify-content: center;
  aspect-ratio: 4/3;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  aspect-ratio: 4/3;
`;

const StyledResourceDescription = styled.p`
  grid-area: description;
  line-clamp: 2;
  line-height: 1em;
  height: 3.1em;
  margin: 0 ${spacing.small} ${spacing.small} 0;
  ${mq.range({ until: breakpoints.mobileWide })} {
    margin: 0 ${spacing.small};
  }
  overflow: hidden;
  ${fonts.sizes(16)};
  text-overflow: ellipsis;
  // Unfortunate css needed for multi-line text overflow ellipsis.
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TagsandActionMenu = styled.div`
  grid-area: tags;
  z-index: 1;
  box-sizing: content-box;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  align-self: flex-start;
  justify-items: flex-end;
  overflow: hidden;
  ${mq.range({ until: breakpoints.mobileWide })} {
    min-height: ${spacing.small};
  }
`;

const TopicAndTitleWrapper = styled.div`
  grid-area: topicAndTitle;
  display: flex;
  margin: ${spacing.small} 0;
  flex-direction: column;
  overflow: hidden;
  margin-right: ${spacing.small};
  ${mq.range({ until: breakpoints.mobileWide })} {
    margin-bottom: 0;
  }
`;

interface ListResourceImageProps {
  resourceImage: ResourceImageProps;
  loading?: boolean;
  type: 'normal' | 'compact';
  contentType: string;
  background?: boolean;
}

const ListResourceImage = ({ resourceImage, loading, type, contentType, background }: ListResourceImageProps) => {
  if (!loading) {
    if (resourceImage.src === '') {
      return (
        <StyledContentIconWrapper contentType={contentType}>
          <ContentTypeBadge type={contentType} background={background} size="x-small" />
        </StyledContentIconWrapper>
      );
    } else {
      return (
        <StyledImage alt={resourceImage.alt} src={resourceImage.src} fallbackWidth={type === 'compact' ? 56 : 136} />
      );
    }
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

const TypeAndTitleLoader = ({ loading, children }: LoaderProps) => {
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

const Description = ({ description, loading }: ResourceDescriptionProps) => {
  if (loading) {
    return (
      <ContentLoader height={'20px'} width={'100%'} viewBox={null} preserveAspectRatio="none">
        <rect x="0" y="0" width="100%" height="20" />
      </ContentLoader>
    );
  }
  return <StyledResourceDescription>{description}</StyledResourceDescription>;
};

export interface ListResourceProps {
  id: string;
  link: string;
  tagLinkPrefix?: string;
  title: string;
  resourceImage: ResourceImageProps;
  resourceTypes: { id: string; name: string }[];
  tags?: string[];
  description?: string;
  menuItems?: MenuItemProps[];
  isLoading?: boolean;
  targetBlank?: boolean;
}

const ListResource = ({
  id,
  link,
  tagLinkPrefix,
  title,
  tags,
  resourceImage,
  resourceTypes,
  description,
  menuItems,
  isLoading = false,
  targetBlank,
}: ListResourceProps) => {
  const showDescription = description !== undefined;
  const imageType = showDescription ? 'normal' : 'compact';
  const firstContentType = resourceTypes?.[0]?.id ?? '';
  const embedResourceType = resourceTypeMapping[firstContentType];

  return (
    <ListResourceWrapper id={id}>
      <ImageWrapper imageSize={imageType}>
        <ListResourceImage
          resourceImage={resourceImage}
          loading={isLoading}
          type={imageType}
          background={!!embedResourceType}
          contentType={contentTypeMapping[firstContentType] ?? embedResourceType ?? contentTypeMapping['default']}
        />
      </ImageWrapper>
      <TopicAndTitleWrapper>
        <TypeAndTitleLoader loading={isLoading}>
          <StyledLink to={link} target={targetBlank ? '_blank' : undefined}>
            <ResourceTitle title={title}>{title}</ResourceTitle>
          </StyledLink>
          <ResourceTypeList resourceTypes={resourceTypes} />
        </TypeAndTitleLoader>
      </TopicAndTitleWrapper>
      {showDescription && <Description description={description} loading={isLoading} />}
      <TagsandActionMenu>
        {tags && tags.length > 0 && <CompressedTagList tagLinkPrefix={tagLinkPrefix} tags={tags} />}
        {menuItems && menuItems.length > 0 && <SettingsMenu menuItems={menuItems} />}
      </TagsandActionMenu>
    </ListResourceWrapper>
  );
};

export default ListResource;
