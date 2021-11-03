/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

import SafeLink from '@ndla/safelink';
import { animations, colors, fonts, spacing } from '@ndla/core';

import { ContentType } from './SearchTypeResult';
// @ts-ignore
import constants from '../model';
import ItemContexts, { ItemContextsType } from './components/ItemContexts';
import ItemTopicHeader from './components/ItemTopicHeader';
import ItemResourceHeader from './components/ItemResourceHeader';

const { contentTypes } = constants;

export const resourceTypeColor = (type: string) => {
  switch (type) {
    case contentTypes.SUBJECT_MATERIAL:
      return colors.subjectMaterial.light;
    case contentTypes.TOPIC:
      return colors.subject.light;
    case contentTypes.TASKS_AND_ACTIVITIES:
      return colors.tasksAndActivities.light;
    case contentTypes.ASSESSMENT_RESOURCES:
      return colors.assessmentResource.light;
    case contentTypes.EXTERNAL_LEARNING_RESOURCES:
      return colors.externalLearningResource.light;
    case contentTypes.SOURCE_MATERIAL:
      return colors.sourceMaterial.light;
    case contentTypes.LEARNING_PATH:
      return colors.learningPath.light;
    default:
      return '';
  }
};

type ItemTypeProps = {
  contentType?: ContentType;
};

const Container = styled.div`
  display: flex;
  height: 350px;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div<ItemTypeProps>`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.contentType && `${resourceTypeColor(props.contentType)};`};
  border-radius: 5px;
  overflow: hidden;
  transition: all ${animations.durations.fast} ease-in-out;
  &:hover {
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    margin-left: -2px;
    margin-right: -2px;
    .topic-header-image {
      height: calc(100% + 4px);
      width: calc(100% + 4px);
    }
    .topic-label {
      margin-top: calc(${spacing.small} + 2px);
      svg {
        width: 26px;
        height: 26px;
        margin-right: calc(${spacing.xsmall} - 2px);
      }
    }
    .resource-type-wrapper {
      padding: 0 calc(${spacing.normal} + 2px);
      .resource-icon-wrapper {
        left: 19px;
        height: 47px;
        svg {
          width: 26px;
          height: 26px;
        }
      }
    }
  }
`;

const ItemContentLink = styled(SafeLink)`
  box-shadow: none;
  color: unset;
  text-decoration: none;
  padding: 0 ${spacing.normal} ${spacing.small};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all ${animations.durations.fast} ease-in-out;
  ${ItemWrapper}:hover & {
    padding: 0 calc(${spacing.normal} + 2px) ${spacing.small};
  }
`;

const ItemTitleWrapper = styled.div<ItemTypeProps>`
  transition: all ${animations.durations.fast} ease-in-out;
  margin-top: ${spacing.small};
  ${ItemWrapper}:hover & {
    ${(props) => props.contentType === contentTypes.TOPIC && `padding-left:2px; padding-right: 2px;`};
  }
`;

const ItemTitle = styled.h3<ItemTypeProps>`
  ${fonts.sizes('24px', '28px')};
  color: ${colors.brand.dark};
  ${(props) => props.contentType === contentTypes.TOPIC && `margin-bottom: ${spacing.small};`};
  font-weight: ${fonts.weight.semibold};
  overflow-wrap: anywhere;
  display: inline;
  ${ItemWrapper}:hover & {
    box-shadow: inset 0 -1px;
    background-color: transparent;
  }
`;
const ItemText = styled.div<ItemTypeProps>`
  ${fonts.sizes('16px', '24px')};
  word-break: break-word;
  overflow-wrap: anywhere;
  transition: all ${animations.durations.fast} ease-in-out;
  margin-top: ${spacing.small};
  ${(props) =>
    props.contentType === contentTypes.TOPIC &&
    `
    ${fonts.sizes('18px', '28px')};
    ${ItemWrapper}:hover & {
    padding-left: 2px;
    padding-right: 2px;
  }`};
`;

const ContextWrapper = styled.div`
  padding: 0 ${spacing.normal} ${spacing.small};
  transition: all ${animations.durations.fast} ease-in-out;
  ${ItemWrapper}:hover & {
    padding: 0 calc(${spacing.normal} + 2px) calc(${spacing.small} + 2px);
  }
`;

export type SearchItemType = {
  id: string;
  title: string;
  url: string;
  ingress: string;
  contexts: ItemContextsType['contexts'];
  img?: { url: string; alt: string };
  labels?: string[];
};
type Props = {
  item: SearchItemType;
  type?: ContentType;
};
const SearchItem = ({ item, type }: Props) => {
  const { title, url, ingress, contexts, img = null, labels = [] } = item;

  return (
    <Container>
      <ItemWrapper contentType={type}>
        {type === contentTypes.TOPIC ? (
          <ItemTopicHeader url={url} image={img}>
            <ItemTitleWrapper contentType={type}>
              <ItemTitle contentType={type}>{title}</ItemTitle>
            </ItemTitleWrapper>
            <ItemText contentType={type}>{parse(ingress)}</ItemText>
          </ItemTopicHeader>
        ) : (
          <>
            <ItemResourceHeader url={url} labels={labels} img={img} type={type} />
            <ItemContentLink to={url}>
              <ItemTitleWrapper contentType={type}>
                <ItemTitle contentType={type}>{title}</ItemTitle>
              </ItemTitleWrapper>
              <ItemText>{parse(ingress)}</ItemText>
            </ItemContentLink>
          </>
        )}
        <ContextWrapper>
          <ItemContexts contexts={contexts} id={item.id} title={item.title} />
        </ContextWrapper>
      </ItemWrapper>
    </Container>
  );
};

export default SearchItem;
