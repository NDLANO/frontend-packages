/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { mq, breakpoints } from '@ndla/core';
import { spacing } from '@ndla/core';
import { MoreButton } from '@ndla/button';
import Image from '../Image';
import {
  ResourceElementWrapper,
  ResourceTitle,
  ResourceTopicText,
  ResourceTopic,
  ResourceImageWrapper,
  ResourceRightSide,
  ResourceInfoWrapper,
  TagsList,
} from './ResourcePreview';

const ResourceListTitle = styled(ResourceTitle)`
  height: auto;
`;

const ResourceListElementWrapper = styled(ResourceElementWrapper)`
  min-height: 129px;
  ${ResourceListTitle}:hover & {
    text-decoration: underline;
  }
`;
const ResourceListInfoWrapper = styled(ResourceInfoWrapper)`
  gap: 4px;
`;

const ResourceListTopicText = styled(ResourceTopicText)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ResourceListImageWrapper = styled(ResourceImageWrapper)`
  min-width: 136px;
  min-height: 96px;
  object-fit: contain;

  ${mq.range({ until: breakpoints.tabletWide })} {
    div {
      max-height: 40px;
      overflow: hidden;
    }
  }
`;
const ResourceListImage = styled(Image)`
  border-radius: 2px;
  height: 96px;
  min-width: 136px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 96px;
  }
`;

const ResourceListElements = styled.div`
  width: 100%;
  height: 100%;
  padding: ${spacing.xsmall} 0;
  display: flex;
  flex-direction: column;
`;

const TagsAndMoreWrapper = styled(ResourceRightSide)`
  align-items: flex-start;
  ${mq.range({ until: breakpoints.tabletWide })} {
  }
`;

const ListTagsList = styled(TagsList)`
  align-items: flex-start;
`;

const ResourceListTop = styled.div`
  display: flex;
  flex-direction: row;
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

const ListElement = ({ link, title, tags, resourceImage, topics, description }: ResourceElementProps) => {
  return (
    <ResourceListElementWrapper to={link}>
      <ResourceListImageWrapper>
        <ResourceListImage alt={resourceImage.alt} src={resourceImage.src} />
      </ResourceListImageWrapper>
      <ResourceListElements>
        <ResourceListTop>
          <ResourceListInfoWrapper>
            <ResourceListTitle to={link}>{title}</ResourceListTitle>
            <ResourceTopic>
              {topics?.map((topic) => (
                <li> {topic} </li>
              ))}
            </ResourceTopic>
          </ResourceListInfoWrapper>
          <TagsAndMoreWrapper>
            <ListTagsList>
              {tags?.map((tag) => (
                <li>#{tag}</li>
              ))}
            </ListTagsList>
            <MoreButton />
          </TagsAndMoreWrapper>
        </ResourceListTop>
        <ResourceListTopicText to={link}>{description}</ResourceListTopicText>
      </ResourceListElements>
    </ResourceListElementWrapper>
  );
};

export default ListElement;
