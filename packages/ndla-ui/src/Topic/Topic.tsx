/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';

import parse from 'html-react-parser';
import { ChevronDown, ChevronUp, Play } from '@ndla/icons/common';
// @ts-ignore
import Modal, { ModalCloseButton, ModalHeader, ModalBody } from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';
import { injectT, tType } from '@ndla/i18n';
import { CursorClick, ExpandTwoArrows } from '@ndla/icons/action';
import { css } from '@emotion/core';
import Loader from './Loader';

type InvertItProps = {
  invertedStyle?: boolean;
};

const TopicHeaderVisualElementWrapper = styled.div`
  float: right;
  margin-left: ${spacing.normal};
  position: relative;
`;

const TopicHeaderImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;
const ShowVisualElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const ExpandVisualElementButton = styled(Button)`
  width: 48px;
  height: 48px;
  padding: 0;
  border-radius: 50%;
`;

const ExpandImageButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${colors.brand.tertiary};
`;

const TopicHeading = styled.h1<InvertItProps>`
  margin: ${spacing.medium} 0 ${spacing.normal};
  font-weight: ${fonts.weight.bold};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${fonts.sizes('24px', '28px')};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('32px', '28px')};
    margin: 40px 18px;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin: 50px 0 24px;
    ${fonts.sizes('38px', '32px')};
  }
  ${props =>
    props.invertedStyle &&
    css`
      color: #fff;
    `}
`;

const StyledHeadingText = styled.span`
  margin-right: 28px;
`;

const StyledAdditionalResourceMark = styled.span`
  text-align: center;
  display: inline-block;
  line-height: 18px;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.brand.dark};
  border-radius: 100px;
  margin-right: 7px;
`;
const StyledAdditionalResource = styled.span`
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('12px', '15px')};
  color: ${colors.brand.dark};
`;

const TopicIntroduction = styled.p`
  font-weight: ${fonts.weight.light};
  max-width: 612px;
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('22px', '32px')};
  }
`;

const StyledButtonWrapper = styled.div<InvertItProps>`
  margin-top: ${spacing.small};
  padding: ${spacing.xsmall} 0 ${spacing.xsmall} ${spacing.medium};
  border-left: 6px solid ${colors.brand.light};
  ${props =>
    props.invertedStyle &&
    css`
      button {
        color: #fff;
        &:hover,
        &:focus {
          color: #fff;
        }
      }
    `}
`;

const StyledContentWrapper = styled.div<InvertItProps>`
  padding-top: ${spacing.normal};
  margin-top: 0;
  border-left: 6px solid ${colors.brand.light};

  ${props =>
    props.invertedStyle &&
    css`
      background: #fff;
    `}
`;

const TopicResources = styled.div`
  clear: both;
`;

type VisualElementProps = {
  type: 'image' | 'video' | 'other';
  element: React.ReactNode;
};

export type TopicProps = {
  topic?: {
    title: string;
    introduction: string;
    image?: {
      url: string;
      alt: string;
    };
    visualElement?: VisualElementProps;
    resources?: React.ReactNode;
  };
  isLoading?: boolean;
  renderMarkdown?: (text: string) => string;
  invertedStyle?: boolean;
  onToggleShowContent?: () => void;
  showContent?: boolean;
  isAdditionalTopic?: boolean;
  children?: React.ReactNode;
};

const Topic = ({
  topic,
  isLoading,
  renderMarkdown,
  invertedStyle,
  onToggleShowContent,
  showContent,
  isAdditionalTopic,
  children,
  t,
}: TopicProps & tType) => (
  <section data-testid="nav-topic-about">
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {topic && (
          <>
            {topic.image && (
              <TopicHeaderVisualElementWrapper>
                <TopicHeaderImage src={topic.image.url} alt={topic.image.alt} />
                {topic.visualElement && (
                  <ShowVisualElementWrapper>
                    <Modal
                      activateButton={
                        topic.visualElement.type === 'image' ? (
                          <ExpandImageButton
                            stripped
                            size="small"
                            borderShape="rounded"
                            title={t('image.largeSize')}>
                            <ExpandTwoArrows style={{ width: '20px', height: '20px' }} />
                          </ExpandImageButton>
                        ) : (
                          <ExpandVisualElementButton
                            size="normal"
                            borderShape="rounded"
                            title={t('visualElement.showVideo')}>
                            {topic.visualElement.type === 'video' && (
                              <>
                                <Play
                                  title={t('visualElement.show')}
                                  style={{ width: '32px', height: '32px' }}
                                />
                              </>
                            )}
                            {topic.visualElement.type === 'other' && (
                              <>
                                <CursorClick
                                  title={t('visualElement.show')}
                                  style={{ width: '32px', height: '32px' }}
                                />
                              </>
                            )}
                          </ExpandVisualElementButton>
                        )
                      }
                      animation="subtle"
                      animationDuration={50}
                      backgroundColor="white"
                      size="large">
                      {(onClose: () => void) => (
                        <>
                          <ModalHeader>
                            <ModalCloseButton onClick={onClose} title={t('modal.closeModal')} />
                          </ModalHeader>
                          <ModalBody modifier="no-side-padding-mobile">
                            {topic.visualElement && topic.visualElement.element}
                          </ModalBody>
                        </>
                      )}
                    </Modal>
                  </ShowVisualElementWrapper>
                )}
              </TopicHeaderVisualElementWrapper>
            )}
            <TopicHeading invertedStyle={invertedStyle}>
              <StyledHeadingText>{topic.title}</StyledHeadingText>
              {isAdditionalTopic && (
                <StyledAdditionalResource>
                  <StyledAdditionalResourceMark>T</StyledAdditionalResourceMark>
                  {t('navigation.additionalTopic')}
                </StyledAdditionalResource>
              )}
            </TopicHeading>
            <TopicIntroduction>
              {renderMarkdown ? parse(renderMarkdown(topic.introduction)) : topic.introduction}
            </TopicIntroduction>
            {onToggleShowContent && (
              <StyledButtonWrapper invertedStyle={invertedStyle}>
                <Button
                  link
                  onClick={() => {
                    onToggleShowContent();
                  }}>
                  {showContent ? (
                    <>
                      {t('navigation.showShorterDescription')} <ChevronUp />
                    </>
                  ) : (
                    <>
                      {t('navigation.showLongerDescription')} <ChevronDown />
                    </>
                  )}
                </Button>
              </StyledButtonWrapper>
            )}
            {showContent && (
              <StyledContentWrapper invertedStyle={invertedStyle}>{children}</StyledContentWrapper>
            )}
            <TopicResources>{topic.resources}</TopicResources>
          </>
        )}
      </>
    )}
  </section>
);
export default injectT(Topic);
