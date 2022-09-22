/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import React, { MouseEvent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuButton } from '@ndla/button';
import SafeLink from '@ndla/safelink';
import { useNavigate } from 'react-router-dom';
import { HashTag } from '@ndla/icons/common';

export interface ResourceImageProps {
  alt: string;
  src: string;
}

export const ResourceTitleLink = styled(SafeLink)`
  box-shadow: none;
  color: ${colors.brand.primary};
`;

export const ResourceTitle = styled.h2`
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
  ${fonts.sizes('18px', '18px')};
`;

const StyledTagList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 2px;
  gap: ${spacing.xsmall};
  overflow: hidden;
`;

const StyledTagListElement = styled.li`
  margin: 0;
  ${fonts.sizes(14)};
`;

const StyledSafeLink = styled(SafeLink)`
  display: flex;
  align-items: center;
  box-shadow: none;
  color: ${colors.brand.grey};
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

const StyledTopicDivider = styled.span`
  margin: 0;
  padding: 0 ${spacing.xxsmall};
`;

const StyledTopicListElement = styled.li`
  ${fonts.sizes(12)};
  margin: 0;
  line-height: 1.5;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
`;

const TagCounterWrapper = styled.span`
  color: ${colors.brand.secondary};
  box-shadow: none;
  margin: 0;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('14px', '14px')};
  padding: 5px;
`;

interface TagListProps {
  tags?: string[];
  tagLinkPrefix?: string;
}

export interface LoaderProps {
  loading?: boolean;
  children?: ReactNode;
}

export const TagList = ({ tags, tagLinkPrefix }: TagListProps) => {
  const { t } = useTranslation();
  if (!tags) return null;
  return (
    <StyledTagList aria-label={t('myNdla.tagList')}>
      {tags.map((tag, i) => (
        <StyledTagListElement key={`tag-${i}`}>
          <StyledSafeLink
            onClick={(e: MouseEvent<HTMLAnchorElement | HTMLElement>) => e.stopPropagation()}
            to={`${tagLinkPrefix ? tagLinkPrefix : ''}/${encodeURIComponent(tag)}`}>
            <HashTag />
            {tag}
          </StyledSafeLink>
        </StyledTagListElement>
      ))}
    </StyledTagList>
  );
};

interface CompressedTagListProps {
  tags: string[];
  tagLinkPrefix?: string;
}

const TagMenuButton = styled(MenuButton)`
  &:hover,
  &:active,
  &:focus {
    transition: ${misc.transition.default};
    border-radius: 100%;
    background-color: ${colors.brand.light};
  }
`;

export const CompressedTagList = ({ tags, tagLinkPrefix }: CompressedTagListProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const visibleTags = tags.slice(0, 3);
  const remainingTags = tags.slice(3, tags.length).map((tag) => {
    return {
      icon: <HashTag />,
      text: tag,
      onClick: () => {
        navigate(`${tagLinkPrefix ? tagLinkPrefix : ''}/${encodeURIComponent(tag)}`);
      },
    };
  });
  return (
    <>
      <TagList tagLinkPrefix={tagLinkPrefix} tags={visibleTags} />
      {remainingTags.length > 0 && (
        <TagMenuButton
          hideMenuIcon={true}
          menuItems={remainingTags}
          aria-label={t('myNdla.moreTags', { count: remainingTags.length })}>
          <TagCounterWrapper>{`+${remainingTags.length}`}</TagCounterWrapper>
        </TagMenuButton>
      )}
    </>
  );
};

interface TopicListProps {
  topics?: string[];
}

export const TopicList = ({ topics }: TopicListProps) => {
  const { t } = useTranslation();
  if (!topics) return null;
  return (
    <StyledTopicList aria-label={t('navigation.topics')}>
      {topics.map((topic, i) => (
        <StyledTopicListElement key={topic}>
          {topic}
          {i !== topics.length - 1 && <StyledTopicDivider aria-hidden="true">•</StyledTopicDivider>}
        </StyledTopicListElement>
      ))}
    </StyledTopicList>
  );
};
