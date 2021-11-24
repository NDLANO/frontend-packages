/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { animations, colors, fonts, spacing } from '@ndla/core';

import { SearchItemType } from '../SearchItem';
// @ts-ignore
import ContentTypeBadge from '../../ContentTypeBadge';
import { ContentType } from '../SearchTypeResult';

const Wrapper = styled.div`
  padding: ${spacing.small} ${spacing.normal};
  position: relative;
  min-height: 0;
  flex: 1;
`;

const Label = styled.div`
  ${fonts.sizes('12px', '16px')};
  font-weight: ${fonts.weight.semibold};
  height: 26px;
  display: flex;
  align-items: center;
  margin-top: ${spacing.small};
  transition: all ${animations.durations.fast} ease-in-out;

  .c-content-type-badge {
    width: 26px;
    height: 26px;
    margin-right: ${spacing.xsmall};
  }

  svg {
    transition: all ${animations.durations.fast} ease-in-out;
    width: 22px;
    height: 22px;
    color: ${colors.text.primary} !important;
  }
`;

const LabelsList = styled.ul`
  ${fonts.sizes('12px', '16px')};
  font-weight: ${fonts.weight.semibold};
  margin: ${spacing.xsmall} 0 0;
  padding: 0 0 0 23px;
  list-style-image: none;
  transition: all ${animations.durations.fast} ease-in-out;
`;
const LabelItem = styled.li`
  ${fonts.sizes('12px', '16px')};
  font-weight: ${fonts.weight.semibold};
  margin-bottom: 0;
`;

const TopicHeaderVisualElementWrapper = styled.div`
  float: right;
  margin-left: ${spacing.small};
  position: relative;
  width: 112px;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopicHeaderImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ${animations.durations.fast} ease-in-out;
  max-width: unset;
`;

type Props = {
  children: React.ReactNode;
  image?: SearchItemType['item']['img'] | null;
  labels?: string[];
  type?: ContentType;
};
const ItemTopicHeader = ({ children, image, labels = [], type }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {image && (
        <TopicHeaderVisualElementWrapper>
          <TopicHeaderImage className="topic-header-image" src={image.url} alt={image.alt} />
        </TopicHeaderVisualElementWrapper>
      )}
      <Label className="topic-label">
        {type && (
          <>
            <ContentTypeBadge type={type} border={false} />
            {t(`contentTypes.${type}`)}
          </>
        )}
      </Label>
      {labels.length > 0 && (
        <LabelsList className="topic-label-list">
          {labels.map((item) => (
            <LabelItem key={item}>{item}</LabelItem>
          ))}
        </LabelsList>
      )}
      {children}
    </Wrapper>
  );
};

export default ItemTopicHeader;
