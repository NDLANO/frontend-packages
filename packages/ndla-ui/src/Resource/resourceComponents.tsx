import styled from '@emotion/styled';
import { fonts, colors, spacing } from '@ndla/core';
import React from 'react';

export interface ResourceImageProps {
  alt: string;
  src: string;
}

export const ResourceTitle = styled.h2`
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

export const Row = styled.div`
  display: flex;
  align-items: center;
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

interface TopicListProps {
  topics?: string[];
}

export const TopicList = ({ topics }: TopicListProps) => {
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
