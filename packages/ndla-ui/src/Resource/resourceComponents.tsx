/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import React, { MouseEvent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuButton } from '@ndla/button';
import SafeLink from '@ndla/safelink';
import { useNavigate } from 'react-router-dom';
import { HashTag } from '@ndla/icons/common';
import resourceTypeColor from '../utils/resourceTypeColor';
export interface ResourceImageProps {
  alt: string;
  src: string;
}

export const ResourceTitleLink = styled(SafeLink)`
  box-shadow: none;
  color: ${colors.brand.primary};
`;

export const ResourceTitle = styled.h2`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  // Unfortunate css needed for multi-line text overflow ellipsis.
  line-height: 1;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  grid-area: resourceTitle;
  ${fonts.sizes('16px', '20px')};
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
  min-height: 44px;
  min-width: 44px;
  &:hover {
    color: ${colors.brand.primary};
  }
`;

const StyledResourceTypeList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledTopicDivider = styled.span`
  margin: 0;
  padding: 0 ${spacing.xxsmall};
`;

const StyledResourceListElement = styled.li`
  white-space: nowrap;
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
  display: flex;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('14px', '14px')};
`;

export interface ContentIconProps {
  contentType: string;
}

export const StyledContentIconWrapper = styled.span<ContentIconProps>`
  width: 100%;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ contentType }) => resourceTypeColor(contentType)};
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
        <MenuButton
          size="small"
          menuIcon={<TagCounterWrapper>{`+${remainingTags.length}`}</TagCounterWrapper>}
          menuItems={remainingTags}
          alignRight
          aria-label={t('myNdla.moreTags', { count: remainingTags.length })}
        />
      )}
    </>
  );
};

interface ResourceTypeListProps {
  resourceTypes?: { id: string; name: string }[];
}

export const ResourceTypeList = ({ resourceTypes }: ResourceTypeListProps) => {
  const { t } = useTranslation();
  if (!resourceTypes) return null;
  return (
    <StyledResourceTypeList aria-label={t('navigation.topics')}>
      {resourceTypes.map((resource, i) => (
        <StyledResourceListElement key={resource.id}>
          {resource.name}
          {i !== resourceTypes.length - 1 && <StyledTopicDivider aria-hidden="true">•</StyledTopicDivider>}
        </StyledResourceListElement>
      ))}
    </StyledResourceTypeList>
  );
};
