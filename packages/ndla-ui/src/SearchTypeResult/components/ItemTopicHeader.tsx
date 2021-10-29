/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { animations, fonts, spacing } from '@ndla/core';
import { Bookmark } from '@ndla/icons/action';
// @ts-ignore
import { makeSrcQueryString } from '../../Image';

const Wrapper = styled.div`
  padding: ${spacing.small} ${spacing.normal};
`;

const Label = styled.div`
  ${fonts.sizes('12px', '16px')};
  font-weight: ${fonts.weight.semibold};

  svg {
    transition: all ${animations.durations.fast} ease-in-out;
    width: 24px;
    height: 24px;
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
  image?: { url: string; alt: string; crop?: object; focalPoint?: object } | null;
};
const ItemTopicHeader = ({ children, image }: Props) => {
  return (
    <Wrapper>
      <Label className="topic-label">
        <Bookmark />
        Emne
      </Label>
      {image && (
        <TopicHeaderVisualElementWrapper>
          <TopicHeaderImage
            className="topic-header-image"
            src={`${image.url}?${makeSrcQueryString(400, image.crop, image.focalPoint)}`}
            alt={image.alt}
          />
        </TopicHeaderVisualElementWrapper>
      )}
      {children}
    </Wrapper>
  );
};

export default ItemTopicHeader;
