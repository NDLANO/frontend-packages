/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

import SafeLink from '@ndla/safelink';
import { animations, colors, fonts, spacing } from '@ndla/core';

import { ContentType } from './SearchTypeResult';
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
  isTopic?: boolean;
};

const Container = styled.div`
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 5px;
  transition: all ${animations.durations.fast} ease-in-out;

  .resource-no-image {
    background-color: ${colors.brand.greyLightest};
    .c-content-type-badge {
      width: 26px;
      height: 26px;
      left: 45px;
      margin-left: 0;
      top: 100%;
      margin-top: -13px;
      opacity: 1;
    }
  }

  :hover {
    img {
      transform: scale(1.1);
      opacity: 1.2;
      transition-duration: 0.5s;
      overflow: hidden;
    }
  }
`;

const ItemLink = styled(SafeLink)`
  box-shadow: none;
  color: unset;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 0;
  flex: 1;
`;

const TextWrapper = styled.div`
  padding: 0 ${spacing.normal} ${spacing.small};
`;

const ItemTitleWrapper = styled.div<ItemTypeProps>`
  margin-top: ${spacing.small};
`;

const ItemTitle = styled.h3<ItemTypeProps>`
  ${fonts.sizes('24px', '28px')};
  color: ${colors.brand.primary};
  ${(props) => props.isTopic && `margin-bottom: ${spacing.small};`};
  font-weight: ${fonts.weight.semibold};
  overflow-wrap: anywhere;
  display: inline;
  ${ItemWrapper}:hover & {
    box-shadow: inset 0 -1px;
    background-color: transparent;
  }
`;
const ItemText = styled.div<ItemTypeProps>`
  overflow: hidden;
  ${fonts.sizes('16px', '24px')};
  word-break: break-word;
  overflow-wrap: anywhere;
  transition: all ${animations.durations.fast} ease-in-out;
  margin-top: ${spacing.small};
  ${(props) =>
    props.isTopic &&
    `
    ${fonts.sizes('18px', '28px')};
    `};
`;

const ContextWrapper = styled.div`
  background: white;
  padding: 0 ${spacing.normal} ${spacing.small};
  transition: all ${animations.durations.fast} ease-in-out;
`;

export type SearchItemProps = {
  id: string | number;
  title: string;
  url: string;
  ingress: string;
  contexts?: ItemContextsType['contexts'];
  img?: { url: string; alt: string };
  labels?: string[];
  type?: ContentType;
  children?: ReactNode;
};
export type SearchItemType = {
  item: SearchItemProps;
  type?: ContentType;
};
const SearchItem = ({ item, type }: SearchItemType) => {
  const { title, url, ingress, contexts, img = null, labels = [], children } = item;

  const isTopic = type === contentTypes.TOPIC || type === contentTypes.MULTIDISCIPLINARY_TOPIC;

  return (
    <Container>
      <ItemWrapper>
        <ItemLink to={url}>
          {isTopic ? (
            <ItemTopicHeader image={img} type={type}>
              <ItemTitleWrapper isTopic>
                <ItemTitle isTopic>{title}</ItemTitle>
              </ItemTitleWrapper>
              <ItemText isTopic>{parse(ingress)}</ItemText>
            </ItemTopicHeader>
          ) : (
            <>
              <TextWrapper>
                <ItemTitleWrapper>
                  <ItemTitle>{title}</ItemTitle>
                </ItemTitleWrapper>
                <ItemText>{parse(ingress)}</ItemText>
              </TextWrapper>
            </>
          )}
          <ContextWrapper>
            {contexts && contexts.length > 0 && <ItemContexts contexts={contexts} id={item.id} title={item.title} />}
          </ContextWrapper>
        </ItemLink>
        {children}
      </ItemWrapper>
    </Container>
  );
};

export default SearchItem;
