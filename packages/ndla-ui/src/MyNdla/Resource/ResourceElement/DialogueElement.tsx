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
import Image from '../../../Image';

import {
  ResourceElementWrapper,
  ResourceTitle,
  ResourceTopic,
  ResourceImageWrapper,
  ResourceInfoWrapper,
} from './ResourceElement';

const DialogueElementWrapper = styled(ResourceElementWrapper)`
  min-height: 64px;
  max-width: 470px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    max-height: 64px;
  }
`;

const DialogueResourceImageWrapper = styled(ResourceImageWrapper)`
  width: 61px;
  height: 45px;
  object-fit: cover;
  ${mq.range({ until: breakpoints.tabletWide })} {
    align-items: center;
  }
`;

const DialogueResourceImage = styled(Image)`
  border-radius: 2px;
  width: 56px;
  height: 40px;
  object-fit: cover;

  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 96px;
  }
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

const DialogueElement = ({ link, title, resourceImage, topics }: ResourceElementProps) => {
  return (
    <DialogueElementWrapper to={link}>
      <DialogueResourceImageWrapper>
        <DialogueResourceImage alt={resourceImage.alt} src={resourceImage.src} />
      </DialogueResourceImageWrapper>

      <ResourceInfoWrapper>
        <ResourceTitle to={link}>{title}</ResourceTitle>
        <ResourceTopic>
          {topics?.map((topic) => (
            <li> {topic} </li>
          ))}
        </ResourceTopic>
      </ResourceInfoWrapper>
    </DialogueElementWrapper>
  );
};

export default DialogueElement;
