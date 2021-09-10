/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { animations, breakpoints, colors, fonts, mq, spacing } from '@ndla/core';

import parse from 'html-react-parser';
import { ChevronDown, ChevronUp, PlayCircleFilled } from '@ndla/icons/common';
// @ts-ignore
import Modal, { ModalCloseButton, ModalHeader, ModalBody } from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';
import { CursorClick, ExpandTwoArrows } from '@ndla/icons/action';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import Loader from './Loader';
import { ItemProps } from '../Navigation/NavigationBox';
import { NavigationBox } from '../Navigation';
// @ts-ignore
import { makeSrcQueryString } from '../Image';

type InvertItProps = {
  invertedStyle?: boolean;
};
type FrameProps = {
  frame?: boolean;
};

const Wrapper = styled.section<FrameProps>`
  ${(props) =>
    props.frame &&
    css`
      ${mq.range({ from: breakpoints.tabletWide })} {
        padding: 40px 40px;
        border: 2px solid #d1d6db;
      }
      ${mq.range({ from: breakpoints.desktop })} {
        padding: 40px 80px;
      }
      ${mq.range({ from: '1180px' })} {
        padding: 60px 160px;
      }
    `}
`;

const TopicHeaderVisualElementWrapper = styled.div`
  float: right;
  margin-left: ${spacing.normal};
  position: relative;
  width: 100px;
  height: 100px;
  ${mq.range({ from: breakpoints.mobileWide })} {
    width: 150px;
    height: 150px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    width: 200px;
    height: 200px;
  }
`;

const ShowVisualElementWrapper = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VisualElementButton = styled(Button)`
  color: ${colors.brand.secondary};
  width: 100%;
  height: 100%;
`;

const TopicHeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${animations.durations.fast};
  ${VisualElementButton}:hover & {
    transform: scale(1.1);
    opacity: 1.2;
  }
`;

const ExpandVisualElementButton = styled.span`
  position: absolute;
  right: -10px;
  bottom: -4px;
  transition: all ${animations.durations.fast};
  ${VisualElementButton}:hover & {
    color: ${colors.brand.primary};
    right: 10px;
  }
  ${mq.range({ from: breakpoints.mobileWide })} {
    right: 0;
    bottom: 0;
  }
`;

const TopicHeaderOverlay = styled.div`
  background: black;
  opacity: 0.05;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  transition: opacity ${animations.durations.fast};
  ${VisualElementButton}:hover & {
    opacity: 0.1;
  }
`;

const TopicHeading = styled.h1<InvertItProps>`
  margin: ${spacing.medium} 0 0;
  font-weight: ${fonts.weight.bold};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${fonts.sizes('24px', '28px')};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('32px', '28px')};
    margin: 40px 0 0;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin: 50px 0 0;
    ${fonts.sizes('38px', '48px')};
  }
  ${(props) =>
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
  margin-top: ${spacing.xsmall};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('22px', '32px')};
  }
`;

const StyledButtonWrapper = styled.div<InvertItProps>`
  margin-top: ${spacing.small};
  padding: ${spacing.xsmall} 0 ${spacing.xsmall} ${spacing.medium};
  border-left: 6px solid ${colors.brand.light};
  ${(props) =>
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

  ${(props) =>
    props.invertedStyle &&
    css`
      background: #fff;
    `}
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
      crop?: object;
      focalPoint?: object;
    };
    visualElement?: VisualElementProps;
    resources?: React.ReactNode;
  };
  subTopics?: ItemProps[] | null | undefined;
  onSubTopicSelected?: (event: React.MouseEvent<HTMLElement>, id?: string) => void;
  isLoading?: boolean;
  renderMarkdown?: (text: string) => string;
  invertedStyle?: boolean;
  onToggleShowContent?: () => void;
  showContent?: boolean;
  isAdditionalTopic?: boolean;
  frame?: boolean;
  children?: React.ReactNode;
};

const Topic = ({
  topic,
  subTopics,
  onSubTopicSelected,
  isLoading,
  renderMarkdown,
  invertedStyle,
  onToggleShowContent,
  showContent,
  isAdditionalTopic,
  frame,
  children,
}: TopicProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper frame={frame} data-testid="nav-topic-about">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {topic && (
            <>
              {topic.image && (
                <TopicHeaderVisualElementWrapper>
                  {topic.visualElement ? (
                    <>
                      <ShowVisualElementWrapper>
                        <Modal
                          activateButton={
                            <VisualElementButton
                              stripped
                              title={
                                topic.visualElement.type === 'image' ? t('image.largeSize') : t('visualElement.show')
                              }>
                              <TopicHeaderImage
                                src={`${topic.image.url}?${makeSrcQueryString(
                                  400,
                                  topic.image.crop,
                                  topic.image.focalPoint,
                                )}`}
                                alt={topic.image.alt}
                                crop={topic.image.crop}
                                focalPoint={topic.image.focalPoint}
                              />
                              <TopicHeaderOverlay />
                              <ExpandVisualElementButton>
                                {topic.visualElement.type === 'image' && (
                                  <ExpandTwoArrows style={{ width: '24px', height: '24px' }} />
                                )}
                                {topic.visualElement.type === 'video' && (
                                  <PlayCircleFilled style={{ width: '24px', height: '24px' }} />
                                )}
                                {topic.visualElement.type === 'other' && (
                                  <CursorClick style={{ width: '24px', height: '24px' }} />
                                )}
                              </ExpandVisualElementButton>
                            </VisualElementButton>
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
                    </>
                  ) : (
                    <TopicHeaderImage
                      src={`${topic.image.url}?${makeSrcQueryString(400, topic.image.crop, topic.image.focalPoint)}`}
                      alt={topic.image.alt}
                      crop={topic.image.crop}
                      focalPoint={topic.image.focalPoint}
                    />
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
              {showContent && <StyledContentWrapper invertedStyle={invertedStyle}>{children}</StyledContentWrapper>}
              {subTopics && subTopics.length !== 0 && (
                <NavigationBox
                  colorMode="light"
                  heading={t('navigation.topics')}
                  items={subTopics}
                  onClick={onSubTopicSelected}
                />
              )}
              {topic.resources}
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};
export default Topic;
