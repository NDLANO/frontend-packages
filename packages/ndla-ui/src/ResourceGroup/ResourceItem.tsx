/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import SafeLink from '@ndla/safelink';
import { Additional, Core, HumanMaleBoard } from '@ndla/icons/common';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { Resource } from '../types';
import ContentTypeBadge from '../ContentTypeBadge';
import * as contentTypes from '../model/ContentType';

const listElementActiveColor = (contentType?: string) => {
  switch (contentType) {
    case contentTypes.SUBJECT_MATERIAL:
      return colors.subjectMaterial.dark;
    case contentTypes.TASKS_AND_ACTIVITIES:
      return colors.tasksAndActivities.dark;
    case contentTypes.ASSESSMENT_RESOURCES:
      return colors.assessmentResource.dark;
    case contentTypes.EXTERNAL_LEARNING_RESOURCES:
      return colors.externalLearningResource.dark;
    case contentTypes.SOURCE_MATERIAL:
      return colors.sourceMaterial.dark;
    case contentTypes.LEARNING_PATH:
      return colors.learningPath.dark;
    default:
      break;
  }
  return 'none';
};

const fadeInAdditionalsKeyframe = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-10px, 0px, 0px);
    position: absolute;
  }
  49% {
    position: absolute;
  }
  50% {
    position: static;
    opacity: 0;
    transform: translate3d(-10px, 0px, 0px);
  }
  100% {
    position: static;
    opacity: 1;
    height: auto;
  }
`;

type ListElementProps = {
  additional?: boolean;
  extraBottomMargin?: boolean;
  contentType?: string;
  active?: boolean;
  hidden?: boolean;
};
const ListElement = styled.li<ListElementProps>`
  border: 1px solid #d1d6db;
  border-radius: 5px;
  background: ${colors.white};
  margin-bottom: ${spacing.xsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;

  ${(props) =>
    props.additional &&
    css`
      border-style: dashed;
      animation-name: ${fadeInAdditionalsKeyframe};
      animation-duration: 0.8s;
      animation-fill-mode: forwards;
    `}
  ${(props) => props.extraBottomMargin && `margin-bottom: ${spacing.large};`}

  * {
    transition: height ease-out 0.2s, width ease-out 0.2s;
  }
  ${(props) =>
    props.active &&
    css`
      &:before {
        ${mq.range({ from: breakpoints.tablet })} {
          content: '';
          display: block;
          position: absolute;
          width: ${spacing.small};
          height: ${spacing.small};
          border-radius: 100%;
          transform: translate(calc(-${spacing.normal} - ${spacing.small}));
          background-color: ${listElementActiveColor(props.contentType)};
        }
      }
    `}
  ${({ hidden }) => hidden && `display:none; opacity:0;`}
`;

const LinkStyle = css`
  display: flex;
  color: ${colors.brand.dark};
  align-items: center;
  width: auto;
  padding: ${spacing.small};
  box-shadow: none;
  min-height: 70px;
`;

const ActiveWrapper = styled.div`
  ${LinkStyle}
`;
const ResourceLink = styled(SafeLink)`
  ${LinkStyle}
  &:hover .c-content-type-badge {
    width: 38px;
    height: 38px;

    svg {
      width: 20px;
      height: 20px;
    }
    &.c-content-type-badge--subject-material,
    &.c-content-type-badge--learning-path,
    &.c-content-type-badge--source-material,
    &.c-content-type-badge--external-learning-resources {
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
`;

type ActiveProps = {
  active?: boolean;
};
const Heading = styled.h2<ActiveProps>`
  font-weight: ${fonts.weight.semibold};
  transform: translateY(-1px);
  text-transform: none;
  letter-spacing: 0;
  margin: 0;
  display: inline;
  ${fonts.sizes('16px', '26px')};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('18px', '26px')};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('20px', '26px')};
  }

  span {
    box-shadow: ${colors.link};
  }

  ${ResourceLink}:hover &,
  ${ResourceLink}:focus & {
    span {
      box-shadow: ${colors.linkHover};
    }
  }
  ${(props) =>
    props.active &&
    css`
      color: ${colors.brand.greyDark};
      span {
        box-shadow: none;
      }
      small {
        padding-left: ${spacing.small};
        font-weight: ${fonts.weight.normal};
      }
    `}
`;

const IconWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  box-sizing: content-box;
  padding-right: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding-right: ${spacing.small};
    padding-left: ${spacing.xsmall};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding-right: ${spacing.nsmall};
  }
`;

const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
`;

const ContentTypeName = styled.span`
  font-family: ${fonts.sans};
  ${fonts.sizes('14px', '18px')};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text.light};
  text-align: right;
`;

type Props = {
  id: string;
  showContentTypeDescription?: boolean;
  contentTypeName?: string;
  contentTypeDescription?: string;
  extraBottomMargin?: boolean;
  showAdditionalResources?: boolean;
  access?: 'teacher';
  heartButton?: (path: string) => ReactNode;
};

const ResourceItem = ({
  id,
  contentTypeName,
  contentTypeDescription,
  name,
  path,
  contentType,
  active,
  additional,
  extraBottomMargin,
  showAdditionalResources,
  access,
  heartButton,
}: Props & Resource) => {
  const { t } = useTranslation();
  const hidden = additional ? !showAdditionalResources : false;
  return (
    <ListElement
      contentType={contentType}
      hidden={hidden && !active}
      active={active}
      additional={additional}
      extraBottomMargin={extraBottomMargin}>
      {active ? (
        <ActiveWrapper>
          <IconWrapper>
            <ContentTypeBadge type={contentType ?? ''} background border={false} />
          </IconWrapper>
          <Heading active>
            <span>
              {name}
              <small>{t('resource.youAreHere')}</small>
            </span>
          </Heading>
        </ActiveWrapper>
      ) : (
        <ResourceLink to={path}>
          <IconWrapper>
            <ContentTypeBadge type={contentType ?? ''} background border={false} />
          </IconWrapper>
          <Heading>
            <span>{name}</span>
          </Heading>
        </ResourceLink>
      )}
      <TypeWrapper>
        {contentTypeName && <ContentTypeName>{contentTypeName}</ContentTypeName>}
        {access && access === 'teacher' && (
          <Tooltip tooltip={t('article.access.onlyTeacher')}>
            <HumanMaleBoard
              className="c-icon--20 u-margin-left-tiny c-topic-resource__list__additional-icons"
              aria-label={t('article.access.onlyTeacher')}
            />
          </Tooltip>
        )}
        {showAdditionalResources && contentTypeDescription && (
          <>
            {additional && (
              <Tooltip tooltip={contentTypeDescription}>
                <Additional
                  className="c-icon--20 u-margin-left-tiny c-topic-resource__list__additional-icons"
                  aria-label={contentTypeDescription}
                />
              </Tooltip>
            )}
            {!additional && (
              <Tooltip tooltip={contentTypeDescription}>
                <Core
                  className="c-icon--20 u-margin-left-tiny c-topic-resource__list__additional-icons"
                  aria-label={contentTypeDescription}
                />
              </Tooltip>
            )}
          </>
        )}
        {heartButton?.(path)}
      </TypeWrapper>
    </ListElement>
  );
};

export default ResourceItem;
