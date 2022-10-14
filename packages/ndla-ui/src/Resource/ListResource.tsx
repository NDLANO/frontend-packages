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
  ResourceTitleLink as StyledLink,
  ResourceTypeList,
  StyledContentIconWrapper,
  LoaderProps,
} from './resourceComponents';
import ContentLoader from '../ContentLoader';
import ContentTypeBadge from '../ContentTypeBadge';
import { contentTypeMapping } from '../model/ContentType';

const ListResourceWrapper = styled.div`
  flex: 1;
  display: grid;
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

  padding: ${spacing.small};
  column-gap: ${spacing.small};
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
  }
  overflow: hidden;
  border-radius: 2px;
  display: flex;
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
  margin: 0;
  margin-top: ${spacing.xxsmall};
  overflow: hidden;
  ${fonts.sizes(16)};
  text-overflow: ellipsis;
  // Unfortunate css needed for multi-line text overflow ellipsis.
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

interface TagsAndActionProps {
  hasMenuButton: boolean;
}

const TagsandActionMenu = styled.div<TagsAndActionProps>`
  grid-area: tags;
  box-sizing: content-box;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  align-self: flex-start;
  justify-items: flex-end;
  margin: -${spacing.small} -${(props) => (props.hasMenuButton ? spacing.small : 0)} 0 0;
  ${mq.range({ until: breakpoints.mobileWide })} {
    margin: 0 -${(props) => (props.hasMenuButton ? spacing.small : 0)} -${spacing.small} 0;
  }
  overflow: hidden;
`;

const TopicAndTitleWrapper = styled.div`
  grid-area: topicAndTitle;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

interface ListResourceImageProps {
  resourceImage: ResourceImageProps;
  loading?: boolean;
  type: 'normal' | 'compact';
  contentType: string;
}

const ListResourceImage = ({ resourceImage, loading, type, contentType }: ListResourceImageProps) => {
  if (!loading) {
    if (resourceImage.src === '') {
      return (
        <StyledContentIconWrapper contentType={contentType}>
          <ContentTypeBadge type={contentType} size="x-small" />
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
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
  headingLevel = 'h2',
  description,
  menuItems,
  isLoading = false,
  targetBlank,
}: ListResourceProps) => {
  const showDescription = description !== undefined;
  const imageType = showDescription ? 'normal' : 'compact';
  const linkRef = useRef<HTMLAnchorElement>(null);
  const firstContentType = resourceTypes?.[0]?.id ?? '';
  const Title = ResourceTitle.withComponent(headingLevel);
  const handleClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <ListResourceWrapper onClick={handleClick} id={id}>
      <ImageWrapper imageSize={imageType}>
        <ListResourceImage
          resourceImage={resourceImage}
          loading={isLoading}
          type={imageType}
          contentType={contentTypeMapping[firstContentType] ?? contentTypeMapping['default']}
        />
      </ImageWrapper>
      <TopicAndTitleWrapper>
        <TypeAndTitleLoader loading={isLoading}>
          <StyledLink to={link} target={targetBlank ? '_blank' : undefined} ref={linkRef}>
            <Title>{title}</Title>
          </StyledLink>
          <ResourceTypeList resourceTypes={resourceTypes} />
        </TypeAndTitleLoader>
      </TopicAndTitleWrapper>
      {showDescription && <Description description={description} loading={isLoading} />}
      <TagsandActionMenu hasMenuButton={!!(tags && tags.length > 3) || !!(menuItems && menuItems.length)}>
        {tags && tags.length > 0 && <CompressedTagList tagLinkPrefix={tagLinkPrefix} tags={tags} />}
        {menuItems && menuItems.length > 0 && <MenuButton alignRight size="small" menuItems={menuItems} />}
      </TagsandActionMenu>
    </ListResourceWrapper>
  );
};

export default ListResource;
