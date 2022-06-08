/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import SafeLink from '@ndla/safelink';
import { mq, breakpoints } from '@ndla/core';
import { fonts, spacing, colors } from '@ndla/core';
import { MoreButton } from '@ndla/button';
import Image from '../Image';

const ResourceElementWrapper = styled(SafeLink)`
  display: flex;
  align-items: center;
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.light};
  border-radius: 2px;
  margin-bottom: ${spacing.xsmall};
  font-family: ${fonts.sans};
  box-shadow: none;
  text-decoration: none;
  color: ${colors.brand.greyDark};
  gap: ${spacing.small};
  &visited {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
  }
  &active {
    text-decoration: none;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    height: 80px;
    flex-direction: row;
    padding: ${spacing.xsmall};
  }
  height: 64px;
`;

const ResourceTitle = styled.h2`
  ${fonts.sizes('18')};
  font-weight: 700;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  ${ResourceElementWrapper}:hover & {
    color: ${colors.brand.primary};
    text-decoration: underline;
  }
`;

const ResourceTopicText = styled.p`
  display: flex;
  margin: 0;
  ${fonts.sizes('16')};
  transition: height 0.2s ease-out;
  ${ResourceElementWrapper}:hover & {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const ResourceTopic = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  ${fonts.sizes('12')};
  list-style: none;
  line-height: 0;
  gap: ${spacing.xxsmall};
  padding: 0;

  li,
  :before {
    gap: ${spacing.xxsmall};
    margin-bottom: 0;
    line-height: 1.5;
    display: inline-flex;
    align-items: center;
  }
  li + :before {
    content: '•';
  }
`;

const ResourceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-width: 56px;
    justify-content: center;
  }
`;
const ResourceImageWrapper = styled.div`
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  align-items: center;

  width: 61px;
  height: 45px;
  object-fit: cover;

  ${mq.range({ until: breakpoints.tabletWide })} {
    min-width: 56px;
    object-fit: cover;
    height: 100%;
    display: flex;
    align-items: flex-start;
  }
`;
const ResourceImage = styled(Image)`
  border-radius: 2px;
  width: 56px;
  height: 40px;
  object-fit: cover;

  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 96px;
  }
`;
const ResourceLeftSide = styled.div`
  display: flex;
  flex-direction: row;
`;
const ResourceRightSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  :last-child {
    gap: ${spacing.xsmall};
  }
`;
const Halfwrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mq.range({ until: breakpoints.tabletWide })} {
    height: 100%;
  }
`;

const Tophalf = styled.div`
  display: flex;
  flex-direction: row;
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
  }
`;

const Bottomhalf = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  transition-duration: 0.5s;
`;

const TagsList = styled.div`
  display: flex;
  list-style: none;
  display: flex;
  li {
    display: flex;
    margin: 0;
    align-items: center;
    padding-right: ${spacing.xxsmall};
    padding-left: ${spacing.xxsmall};
    color: ${colors.brand.grey};
    ${fonts.sizes(14)};
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

const ResourceElement = ({ link, title, tags, resourceImage, topics }: ResourceElementProps) => {
  return (
    <ResourceElementWrapper to={link}>
      <ResourceImageWrapper>
        <ResourceImage alt={resourceImage.alt} src={resourceImage.src} />
      </ResourceImageWrapper>
      <Halfwrapper>
        <Tophalf>
          <ResourceLeftSide>
            <ResourceInfoWrapper>
              <ResourceTitle to={link}>{title}</ResourceTitle>
              <ResourceTopic>
                {topics?.map((topic) => (
                  <li> {topic} </li>
                ))}
              </ResourceTopic>
            </ResourceInfoWrapper>
          </ResourceLeftSide>
          <ResourceRightSide>
            <TagsList>
              {tags?.map((tag) => (
                <li>#{tag}</li>
              ))}
            </TagsList>
            <MoreButton />
          </ResourceRightSide>
        </Tophalf>
      </Halfwrapper>
    </ResourceElementWrapper>
  );
};
export {
  ResourceElementWrapper,
  ResourceTitle,
  ResourceTopicText,
  ResourceTopic,
  ResourceElement,
  ResourceImageWrapper,
  ResourceLeftSide,
  ResourceRightSide,
  ResourceInfoWrapper,
  Halfwrapper,
  Tophalf,
  Bottomhalf,
  TagsList,
};

export default ResourceElement;
