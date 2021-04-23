/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, spacing } from '@ndla/core';

import Loader from './Loader';

const TopicHeaderVisualElementWrapper = styled.div`
  float: right;
  margin-left: ${spacing.normal};
`;

const TopicHeaderImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const TopicHeading = styled.h2`
  ${fonts.sizes('36px', '36px')};
  margin-top: ${spacing.normal};
`;

const TopicIntroduction = styled.p`
  font-weight: ${fonts.weight.light};
  ${fonts.sizes('22px', '32px')};
`;

const TopicResources = styled.div`
  clear: both;
`;

export type TopicProps = {
  topic?: {
    title: string;
    introduction: string;
    image?: {
      url: string;
      alt: string;
    };
    resources?: React.ReactNode;
  };
  isLoading?: boolean;
};

const Topic = ({ topic, isLoading }: TopicProps) => (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {topic && (
          <>
            {topic.image && (
              <TopicHeaderVisualElementWrapper>
                <TopicHeaderImage src={topic.image.url} alt={topic.image.alt} />
              </TopicHeaderVisualElementWrapper>
            )}
            <TopicHeading>{topic.title}</TopicHeading>
            <TopicIntroduction>{topic.introduction}</TopicIntroduction>
            <TopicResources>{topic.resources}</TopicResources>
          </>
        )}
      </>
    )}
  </>
);
export default Topic;
