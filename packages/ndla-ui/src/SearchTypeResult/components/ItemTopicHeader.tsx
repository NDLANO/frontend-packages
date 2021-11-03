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
import { animations, fonts, spacing } from '@ndla/core';
import { Subject } from '@ndla/icons/contentType';
import SafeLink from '@ndla/safelink';

import { SearchItemType } from '../SearchItem';

const Wrapper = styled(SafeLink)`
  padding: ${spacing.small} ${spacing.normal};
  box-shadow: none;
  color: unset;
  text-decoration: none;
  display: block;
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

  svg {
    transition: all ${animations.durations.fast} ease-in-out;
    width: 22px;
    height: 22px;
    margin-right: ${spacing.xsmall};
  }
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
  url: SearchItemType['url'];
  image?: SearchItemType['img'] | null;
};
const ItemTopicHeader = ({ children, image, url }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper to={url}>
      {image && (
        <TopicHeaderVisualElementWrapper>
          <TopicHeaderImage className="topic-header-image" src={image.url} alt={image.alt} />
        </TopicHeaderVisualElementWrapper>
      )}
      <Label className="topic-label">
        <Subject />
        {t('contentTypes.topic-article')}
      </Label>
      {children}
    </Wrapper>
  );
};

export default ItemTopicHeader;
