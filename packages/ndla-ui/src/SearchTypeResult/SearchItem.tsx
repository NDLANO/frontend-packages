/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { ChevronRight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';

import { colors, fonts } from '@ndla/core';
import { ContentType } from './SearchTypeResult';
// @ts-ignore
import constants from '../model';

// @ts-ignore
import ContentTypeBadge from '../ContentTypeBadge';

const { contentTypes } = constants;

const ItemWrapper = styled.div`
  flex-direction: column;
`;

const ItemHead = styled.div`
  height: auto;
  min-height: 45px;
  position: relative;
  a {
    box-shadow: none;
  }
  img {
    border-radius: 5px;
  }
`;

type ItemIconProps = {
  type?: ContentType;
};

const ItemIcon = styled.div<ItemIconProps>`
  height: 144px;
  background: #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => {
    switch (props.type) {
      case contentTypes.SUBJECT_MATERIAL:
        return `background: ${colors.subjectMaterial.light};`;
      case contentTypes.TOPIC:
        return `background: ${colors.subject.light};`;
      case contentTypes.TASKS_AND_ACTIVITIES:
        return `background: ${colors.tasksAndActivities.light};`;
      case contentTypes.ASSESSMENT_RESOURCES:
        return `background: ${colors.assessmentResource.light};`;
      case contentTypes.EXTERNAL_LEARNING_RESOURCES:
        return `background: ${colors.externalLearningResource.light};`;
      case contentTypes.SOURCE_MATERIAL:
        return `background: ${colors.sourceMaterial.light};`;
      case contentTypes.LEARNING_PATH:
        return `background: ${colors.learningPath.light};`;
      default:
        return null;
    }
  }}
`;

const ItemPillWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
  row-gap: 4px;
`;
const ItemPill = styled.div`
  display: inline-block;
  background: ${colors.brand.greyLightest};
  padding: 2px 4px;
  border-radius: 2px;
  ${fonts.sizes('12px', '20px')};
  font-weight: ${fonts.weight.semibold};
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  margin-top: 14px;
`;
const ItemText = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 16px;
`;
const BreadcrumbPath = styled.div`
  color: ${colors.text.light};
  font-size: 14px;
  line-height: 20px;
`;

const BreadcrumbItem = styled.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
`;

export type SearchItemType = {
  id: string;
  title: string;
  url: string;
  ingress: string;
  breadcrumb: string[];
  image: React.ReactNode | null;
  img?: { url: string; alt: string };
  labels?: string[];
};
type Props = {
  item: SearchItemType;
  type?: ContentType;
};
const SearchItem = ({ item, type }: Props) => {
  const { title, url, ingress, breadcrumb, img = null, labels = [] } = item;
  return (
    <>
      <ItemWrapper>
        <ItemHead>
          {img ? (
            <SafeLink to={url}>
              <img src={img.url} alt={img.alt} />
            </SafeLink>
          ) : (
            <SafeLink to={url}>
              {type && (
                <ItemIcon type={type}>
                  <ContentTypeBadge type={type} size="small" border={false} />
                </ItemIcon>
              )}
            </SafeLink>
          )}
        </ItemHead>
        {labels.length > 0 && (
          <ItemPillWrapper>
            {labels.map(label => (
              <ItemPill key={label}>{label}</ItemPill>
            ))}
          </ItemPillWrapper>
        )}
        <ItemTitle>
          <SafeLink to={url}>{title}</SafeLink>
        </ItemTitle>
        <ItemText>{ingress}</ItemText>
        <BreadcrumbPath>
          {breadcrumb &&
            breadcrumb.map((breadcrumbItem: string, i: number) => {
              return (
                <BreadcrumbItem key={`${breadcrumbItem}-${item.id}`}>
                  <span>{breadcrumbItem}</span>
                  {i !== breadcrumb.length - 1 && <ChevronRight />}
                </BreadcrumbItem>
              );
            })}
        </BreadcrumbPath>
      </ItemWrapper>
    </>
  );
};

export default SearchItem;
