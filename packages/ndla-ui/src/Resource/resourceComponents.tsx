/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, colors, spacing } from '@ndla/core';

import { MenuButton } from '@ndla/button';

export interface ResourceImageProps {
  alt: string;
  src: string;
}

export const ResourceTitle = styled.h3`
  min-width: 50px;
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
  grid-area: resourceTitle;
`;

const StyledTagList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: ${spacing.xsmall};
  overflow: hidden;
`;

const StyledTagListElement = styled.li`
  color: ${colors.brand.grey};
  margin: 0;
  ${fonts.sizes(14)};
  ::before {
    content: '#';
  }
  &:hover {
    color: ${colors.brand.primary};
  }
`;

const StyledTopicList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
  grid-area: topicList;
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

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
`;

const TagCounterWrapper = styled.p`
  color: ${colors.brand.primary};
  box-shadow: none;
  margin: 0;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes(16)}
`;

interface TagListProps {
  tags?: string[];
}

export const TagList = ({ tags }: TagListProps) => {
  if (!tags) return null;
  return (
    <StyledTagList>
      {tags.map((tag, i) => (
        <StyledTagListElement key={`tag-${i}`}>{tag}</StyledTagListElement>
      ))}
    </StyledTagList>
  );
};

interface CompressedTagListProps {
  tags: string[];
}

export const CompressedTagList = ({ tags }: CompressedTagListProps) => {
  const visibleTags = tags.slice(0, 3);
  const remainingTags = tags.slice(3, tags.length).map((tag) => {
    return {
      text: '#' + tag,
      onClick: () => {},
    };
  });

  return (
    <>
      <TagList tags={visibleTags} />
      {remainingTags.length > 0 && (
        <MenuButton hideMenuIcon={true} menuItems={remainingTags}>
          <TagCounterWrapper>{`+${remainingTags.length}`}</TagCounterWrapper>
        </MenuButton>
      )}
    </>
  );
};

interface TopicListProps {
  topics?: string[];
}

export const TopicList = ({ topics }: TopicListProps) => {
  if (!topics) return null;
  return (
    <StyledTopicList>
      {topics.map((topic, i) => (
        <StyledTopicListElement key={topic}>
          {topic}
          {i !== topics.length - 1 && <StyledTopicDivider>•</StyledTopicDivider>}
        </StyledTopicListElement>
      ))}
    </StyledTopicList>
  );
};
