/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { mq, spacing, breakpoints } from '@ndla/core';
import { MoreButton } from '@ndla/button';
import Image from '../Image';

import {
  ResourceElementWrapper,
  ResourceTitle,
  ResourceTopicText,
  ResourceTopic,
  ResourceImageWrapper,
  ResourceLeftSide,
  ResourceRightSide,
  ResourceInfoWrapper,
  Bottomhalf,
  TagsList,
  Halfwrapper,
  Tophalf,
} from './ResourcePreview';

const BlockTopicText = styled(ResourceTopicText)`
  height: 0;
`;

const BlockElementWrapper = styled(ResourceElementWrapper)`
  min-height: 232px;
  max-width: 300px;
  flex-direction: column;
  padding: 0;
  gap: 0;
  :hover {
    ${BlockTopicText} {
      height: 50px;
    }
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
  }
`;

const BlockTitle = styled(ResourceTitle)`
  margin-top: ${spacing.small};
  overflow: hidden;
`;

const BlockImageWrapper = styled(ResourceImageWrapper)`
  height: 60%;
  width: 100%;
  div {
    width: 100%;
  }
`;
const BlockImage = styled(Image)`
  border-radius: 2px;
  width: 100%;
`;

const BlockRightSide = styled(ResourceRightSide)`
  gap: 0;
`;
const BlockHalfwrapper = styled(Halfwrapper)`
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
  background-color: white;
`;

const BlockTophalf = styled(Tophalf)`
  flex-direction: column;
`;

const BlockTagsList = styled(TagsList)`
  height: 50px;
`;

interface ResourceImageProps {
  alt: string;
  src: string;
}
export interface ResourceElementProps {
  link: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  children?: ReactElement;
}

const BlockElement = ({ link, title, tags, resourceImage, topics, description }: ResourceElementProps) => {
  return (
    <BlockElementWrapper to={link}>
      <BlockImageWrapper>
        <BlockImage alt={resourceImage.alt} src={resourceImage.src} />
      </BlockImageWrapper>

      <BlockHalfwrapper>
        <BlockTophalf>
          <ResourceLeftSide>
            <ResourceInfoWrapper>
              <BlockTitle to={link}>{title}</BlockTitle>
              <ResourceTopic>
                {topics?.map((topic) => (
                  <li> {topic} </li>
                ))}
              </ResourceTopic>
            </ResourceInfoWrapper>
          </ResourceLeftSide>
          <Bottomhalf>
            <BlockTopicText to={link}>{description}</BlockTopicText>
          </Bottomhalf>
          <BlockRightSide>
            <BlockTagsList>
              {tags?.map((tag) => (
                <li>#{tag}</li>
              ))}
            </BlockTagsList>
            <MoreButton />
          </BlockRightSide>
        </BlockTophalf>
      </BlockHalfwrapper>
    </BlockElementWrapper>
  );
};

export default BlockElement;
