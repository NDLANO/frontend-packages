/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import parse from 'html-react-parser';
// @ts-ignore
import { ChevronRight, Additional, Core } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import Modal, { ModalCloseButton } from '@ndla/modal';

import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { ContentType } from './SearchTypeResult';
// @ts-ignore
import constants from '../model';

// @ts-ignore
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
      return '';
  }
};

type ItemTypeProps = {
  type?: ContentType;
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
  border: 1px solid ${(props) => props.type && `${resourceTypeColor(props.type)};`};
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    margin-left: -2px;
    margin-right: -2px;
  }
`;

const ItemHead = styled.div`
  background: ${colors.white};
  position: relative;
  a {
    box-shadow: none;
  }
  min-height: 40px;
  flex: 1;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentTypeWrapper = styled.div<ItemTypeProps>`
  height: 48px;
  background: ${(props) => props.type && `${resourceTypeColor(props.type)}`};
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.normal};
  ${fonts.sizes('12px', '16px')};
  font-weight: ${fonts.weight.semibold};
`;

const ContentTypeIcon = styled.span<ItemTypeProps>`
  position: absolute;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='78' height='23' viewBox='17 0 78 23' fill='none'%3E%3Cpath d='M35.6874 10.8284C37.0999 8.9889 38.405 7.28934 40 6C44.8452 2.08335 48.9078 0 56 0C63.0922 0 67.6548 2.5833 72.5 6.49995C74.0499 7.75284 75.2937 9.39082 76.6385 11.1617C80.0028 15.5921 83.9988 20.8545 95 23H17C27.9865 20.8573 32.1701 15.409 35.6874 10.8284ZM352' fill='${(
    props,
  ) => props.type && `${encodeURIComponent(resourceTypeColor(props.type))}`}'/%3E%3C/svg%3E");
  background-position: top;
  background-repeat: no-repeat;
  left: 17px;
  top: -23px;
  height: 45px;
  width: 78px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: all 0.2s ease-in-out;
    width: 20px;
    height: 20px;
  }
  ${ItemWrapper}:hover & {
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

const ItemContent = styled.div`
  padding: 0 ${spacing.normal} ${spacing.small};
`;

const ItemTitle = styled.h3`
  ${fonts.sizes('24px', '28px')};
  margin-top: ${spacing.small};
  font-weight: ${fonts.weight.semibold};
  overflow-wrap: anywhere;
  a {
    box-shadow: none;
    transition: all 0.2s ease-in-out;
  }
  ${ItemWrapper}:hover & a {
    box-shadow: inset 0 -1px;
    &:hover {
      box-shadow: none;
    }
  }
`;
const ItemText = styled.p`
  ${fonts.sizes('16px', '24px')};
  margin: ${spacing.small} 0;
  word-break: break-word;
  overflow-wrap: anywhere;
`;
const BreadcrumbPath = styled.div`
  color: ${colors.text.light};
  ${fonts.sizes('14px', '20px')};
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
    ${fonts.sizes('14px', '20px')};
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
  id: string;
  title: string;
  url: string;
  ingress: string;
  contexts: context[];
  image: React.ReactNode | null;
  img?: { url: string; alt: string };
  labels?: string[];
  children?: React.ReactNode;
};
type Props = {
  item: SearchItemType;
  type?: ContentType;
};
const SearchItem = ({ item, type }: Props) => {
  const { t } = useTranslation();
  const { title, url, ingress, contexts, img = null, labels = [] } = item;
  const mainContext = contexts[0];

  const Breadcrumb = ({ breadcrumb, children }: { breadcrumb: string[]; children?: React.ReactNode }) => (
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
    <Container>
      <ItemWrapper type={type}>
        <ItemHead>
          {img && (
            <SafeLink to={url}>
              <img src={img.url} alt={img.alt} />
            </SafeLink>
          )}
        </ItemHead>
        <ContentTypeWrapper type={type}>
          <ContentTypeIcon type={type}>{type && <ContentTypeBadge type={type} border={false} />}</ContentTypeIcon>
          {labels.length > 0 && (
            <>
              {labels.map((label, i) => (
                <Fragment key={label}>
                  {' '}
                  {label}
                  {i < labels?.length - 1 && <> &#8226;</>}
                </Fragment>
              ))}
            </>
          )}
        </ContentTypeWrapper>
        <ItemContent>
          <ItemTitle>
            <SafeLink to={url}>{title}</SafeLink>
          </ItemTitle>
          {item.children}
          <ItemText>{parse(ingress)}</ItemText>
          <ContextsWrapper>
            {mainContext && (
              <Breadcrumb breadcrumb={mainContext.breadcrumb}>
                &nbsp;
                {contexts.length > 1 && (
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
                )}
              </Breadcrumb>
            )}
          </ContextsWrapper>
        </ItemContent>
      </ItemWrapper>
    </Container>
  );
};

export default SearchItem;
