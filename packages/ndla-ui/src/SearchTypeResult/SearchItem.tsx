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
import { ChevronRight, Additional, Core } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import Button from '@ndla/button';
import Modal, { ModalCloseButton } from '@ndla/modal';

import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { ContentType } from './SearchTypeResult';
import constants from '../model';
import ContentTypeBadge from '../ContentTypeBadge';

const { contentTypes } = constants;

const resourceTypeColor = (type: string) => {
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
      return null;
  }
};

type ItemTypeProps = {
  type?: ContentType;
};

const ItemWrapper = styled.div`
  flex-direction: column;
`;

const ItemHead = styled.div<ItemTypeProps>`
  height: 200px;
  position: relative;
  a {
    box-shadow: none;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    height: 160px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    height: 100px;
  }
  border: 1px solid ${(props) => props.type && `${resourceTypeColor(props.type)};`};
  border-bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemIcon = styled.div<ItemTypeProps>`
  height: 100%;
  background: #ccc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.type && `background: ${resourceTypeColor(props.type)};`}
`;

const ItemContent = styled.div<ItemTypeProps>`
  border: 1px solid ${(props) => props.type && `${resourceTypeColor(props.type)};`};
  border-top: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: ${spacing.small};
`;

const ItemPillWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
`;
const ItemPill = styled.div`
  display: inline-block;
  background: ${colors.brand.greyLightest};
  padding: 2px 4px;
  border-radius: 2px;
  ${fonts.sizes('12px', '20px')};
  font-weight: ${fonts.weight.semibold};
  margin: 8px 4px 4px 0;
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  margin-top: ${spacing.small};
  font-weight: 600;
  overflow-wrap: anywhere;
`;
const ItemText = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: ${spacing.small};
  word-break: break-word;
  overflow-wrap: anywhere;
`;
const BreadcrumbPath = styled.div`
  color: ${colors.text.light};
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const BreadcrumbItem = styled.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-wrap: anywhere;
`;

const ContextsWrapper = styled.div`
  margin-top: ${spacing.small};
  button {
    ${fonts.sizes('16px', '24px')};
    box-shadow: none;
    &:hover {
      box-shadow: inset 0 -1px;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.normal} ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.large};
  }
`;

const ModalHeading = styled.h2`
  margin: 0;
  ${fonts.sizes('16px', '20px')};
  font-weight: 600;
`;

const ModalContent = styled.div`
  padding: 0 ${spacing.small} ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: 0 ${spacing.large} ${spacing.normal};
  }
`;

const ContextList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ContextListItem = styled.li`
  margin-bottom: ${spacing.normal};
  ${fonts.sizes('16px', '28px')};
`;

const IconWrapper = styled.div`
  margin-left: ${spacing.small};
  display: flex;
  align-items: center;
`;

type context = {
  breadcrumb: string[];
  url: string;
  isAdditional?: boolean;
};

export type SearchItemType = {
  id: string | number;
  title: string;
  url: string;
  ingress: string;
  contexts?: context[];
  img?: { url: string; alt: string };
  labels?: string[];
  children?: ReactNode;
};
type Props = {
  item: SearchItemType;
  type?: ContentType;
};
const SearchItem = ({ item, type }: Props) => {
  const { t } = useTranslation();
  const { title, url, ingress, contexts, img = null, labels = [] } = item;
  const mainContext = contexts?.[0];

  const Breadcrumb = ({ breadcrumb, children }: { breadcrumb: string[]; children?: ReactNode }) => (
    <BreadcrumbPath>
      {breadcrumb.map((breadcrumbItem: string, i: number) => {
        return (
          <BreadcrumbItem key={`${breadcrumbItem}-${item.id}`}>
            <span>{breadcrumbItem}</span>
            {i !== breadcrumb.length - 1 && <ChevronRight />}
          </BreadcrumbItem>
        );
      })}
      {children}
    </BreadcrumbPath>
  );

  return (
    <>
      <ItemWrapper>
        <ItemHead type={type}>
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
        <ItemContent type={type}>
          {labels.length > 0 && (
            <ItemPillWrapper>
              {labels.map((label) => (
                <ItemPill key={label}>{label}</ItemPill>
              ))}
            </ItemPillWrapper>
          )}
          <ItemTitle>
            <SafeLink to={url}>{title}</SafeLink>
          </ItemTitle>
          {item.children}
          <ItemText>{parse(ingress)}</ItemText>
          {mainContext && <Breadcrumb breadcrumb={mainContext.breadcrumb} />}
          {contexts && contexts.length > 1 && (
            <ContextsWrapper>
              <Modal
                activateButton={
                  <Button link>
                    {t('searchPage.contextModal.button', {
                      count: contexts.length - 1,
                    })}
                  </Button>
                }
                animation="subtle"
                animationDuration={50}
                backgroundColor="white"
                size="medium">
                {(onClose: () => void) => (
                  <>
                    <ModalHeader>
                      <ModalHeading>{t('searchPage.contextModal.heading')}</ModalHeading>
                      <ModalCloseButton onClick={onClose} title={t('searchPage.close')} />
                    </ModalHeader>
                    <ModalContent>
                      <ContextList>
                        {contexts.map((context) => (
                          <ContextListItem key={context.url}>
                            <SafeLink to={context.url}>{title}</SafeLink>
                            <Breadcrumb breadcrumb={context.breadcrumb}>
                              <IconWrapper>
                                {context.isAdditional ? (
                                  <Additional style={{ width: '22px', height: '22px' }} />
                                ) : (
                                  <Core style={{ width: '22px', height: '22px' }} />
                                )}
                              </IconWrapper>
                            </Breadcrumb>
                          </ContextListItem>
                        ))}
                      </ContextList>
                    </ModalContent>
                  </>
                )}
              </Modal>
            </ContextsWrapper>
          )}
        </ItemContent>
      </ItemWrapper>
    </>
  );
};

export default SearchItem;
