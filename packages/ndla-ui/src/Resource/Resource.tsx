/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import SafeLink from '@ndla/safelink';
import { fonts, spacing, colors } from '@ndla/core';
import Image from '../Image';

const ResourceDescription = styled.p`
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

interface ResourceImageProps {
  alt: string;
  src: string;
}

const ResourceTitle = styled.h2`
  ${fonts.sizes(18)};
  font-weight: ${fonts.weight.bold};
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  // Unfortunate css needed for multi-line text overflow ellipsis.
  line-height: 1;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const ResourceWrapper = styled(SafeLink)`
  display: flex;
  text-decoration: none;
  box-shadow: none;
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.light};
  border-radius: 2px;
  color: ${colors.brand.greyDark};
  gap: ${spacing.small};
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
    ${ResourceTitle} {
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
  }
`;

const ResourceInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTagList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: ${spacing.xsmall};
`;

const StyledTagListElement = styled.li`
  color: ${colors.brand.grey};
  margin: 0;
  ${fonts.sizes(14)};
  ::before {
    content: '#';
  }
`;

const StyledTopicList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const StyledTopicListElement = styled.li`
  ${fonts.sizes(12)};
  margin: 0;
  line-height: 1.5;
  padding: 0;
`;

const StyledTopicDivider = styled.span`
  margin: 0;
  padding: 0 ${spacing.xxsmall};
`;

interface TagListProps {
  tags?: string[];
}

const TagList = ({ tags }: TagListProps) => {
  if (!tags) return null;
  return (
    <StyledTagList>
      {tags.map((tag, i) => (
        <StyledTagListElement key={`tag-${i}`}>{tag}</StyledTagListElement>
      ))}
    </StyledTagList>
  );
};

interface TopicListProps {
  topics?: string[];
}

const TopicList = ({ topics }: TopicListProps) => {
  if (!topics) return null;
  return (
    <StyledTopicList>
      {topics.map((topic, i) => (
        <StyledTopicListElement key={topic}>
          <>
            {topic}
            {i !== topics.length - 1 && <StyledTopicDivider>•</StyledTopicDivider>}
          </>
        </StyledTopicListElement>
      ))}
    </StyledTopicList>
  );
};

interface StyledImageProps {
  imageSize: 'normal' | 'compact';
}

const StyledImage = styled(Image)<StyledImageProps>`
  display: flex;
  border-radius: 2px;
  object-fit: cover;
  width: ${(p) => (p.imageSize === 'normal' ? '136px' : '56px')};
  min-width: ${(p) => (p.imageSize === 'normal' ? '136px' : '56px')};
  height: ${(p) => (p.imageSize === 'normal' ? '96px' : '40px')};
`;

export interface ListResourceProps {
  link: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  actionMenu?: ReactNode;
}

export const ListResource = ({
  link,
  title,
  tags,
  resourceImage,
  topics,
  description,
  actionMenu,
}: ListResourceProps) => {
  const showDescription = description !== undefined;
  return (
    <ResourceWrapper to={link}>
      <StyledImage alt={resourceImage.alt} src={resourceImage.src} imageSize={showDescription ? 'normal' : 'compact'} />
      <ResourceInfoWrapper>
        <Row>
          <ResourceTitle>{title}</ResourceTitle>
          <TagList tags={tags} />
          {actionMenu}
        </Row>
        <Row>
          <TopicList topics={topics} />
        </Row>
        {showDescription && (
          <Row>
            <ResourceDescription>{description}</ResourceDescription>
          </Row>
        )}
      </ResourceInfoWrapper>
    </ResourceWrapper>
  );
};

interface BlockElementWrapperProps {
  maxWidth: string;
  maxHeight: string;
}

const BlockElementWrapper = styled(SafeLink)<BlockElementWrapperProps>`
  display: flex;
  text-decoration: none;
  box-shadow: none;
  flex-direction: column;
  max-width: ${(p) => p.maxWidth};
  max-height: ${(p) => p.maxHeight};
  border: 1px solid ${colors.brand.light};
  border-radius: 2px;
  color: ${colors.brand.greyDark};
`;

const BlockDescription = styled.p`
  display: -webkit-box;
  line-clamp: 2;
  ${fonts.sizes(16)};
  height: 0em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: height 0.2s ease-out;
  ${() => BlockElementWrapper}:hover & {
    // Unfortunate css needed for multi-line text overflow ellipsis.
    height: 3.1em;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const RightRow = styled(Row)`
  justify-content: flex-end;
`;

const BlockInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.small};
  gap: ${spacing.xxsmall};
`;

interface ImageWrapperProps {
  maxWidth: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  max-width: ${(p) => p.maxWidth};
  width: 100%;
  overflow: hidden;
  align-items: center;
  div {
    min-width: 100%;
  }
  img {
    min-width: 100%;
  }
`;

interface BlockResourceProps {
  link: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  maxWidth?: string;
  maxHeight?: string;
  actionMenu?: ReactNode;
}

export const BlockResource = ({
  link,
  title,
  tags,
  resourceImage,
  topics,
  description,
  actionMenu,
  maxWidth = '300px',
  maxHeight = '235px',
}: BlockResourceProps) => {
  return (
    <BlockElementWrapper maxWidth={maxWidth} maxHeight={maxHeight} to={link}>
      <ImageWrapper maxWidth={maxWidth}>
        <Image alt={resourceImage.alt} src={resourceImage.src} />
      </ImageWrapper>
      <BlockInfoWrapper>
        <div>
          <ResourceTitle>{title}</ResourceTitle>
        </div>
        <TopicList topics={topics} />
        <BlockDescription>{description}</BlockDescription>
        <RightRow>
          <TagList tags={tags} />
          {actionMenu}
        </RightRow>
      </BlockInfoWrapper>
    </BlockElementWrapper>
  );
};
