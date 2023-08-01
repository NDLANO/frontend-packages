/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, MouseEvent, ComponentType } from 'react';
import styled from '@emotion/styled';
import { animations, breakpoints, colors, fonts, mq, spacing } from '@ndla/core';

import parse from 'html-react-parser';
import { ChevronDown, ChevronUp, PlayCircleFilled } from '@ndla/icons/common';
import { ModalCloseButton, ModalContent, Modal, ModalHeader, ModalTrigger } from '@ndla/modal';
import { ButtonV2 } from '@ndla/button';
import { CursorClick, ExpandTwoArrows } from '@ndla/icons/action';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import Loader from './Loader';
import { ItemProps } from '../Navigation/NavigationBox';
import { NavigationBox } from '../Navigation';
import { makeSrcQueryString, ImageCrop, ImageFocalPoint } from '../Image';
import { MessageBox } from '../Messages';
import { Heading } from '../Typography';

type InvertItProps = {
  invertedStyle?: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

const frameStyle = css`
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: 40px 40px;
    border: 2px solid ${colors.brand.neutral7};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: 40px 80px;
  }
  ${mq.range({ from: '1180px' })} {
    padding: 60px 160px;
  }
`;

const _invertedStyle = css`
  color: ${colors.white};
`;

const TopicHeaderVisualElementWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  ${mq.range({ from: breakpoints.mobileWide })} {
    width: 150px;
    height: 150px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    width: 200px;
    height: 200px;
  }
`;

const ShowVisualElementWrapper = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  aspect-ratio: 1;
  -webkit-mask-image: -webkit-radial-gradient(white, black); /* Safari fix */
`;

const VisualElementButton = styled(ButtonV2)`
  color: ${colors.brand.secondary};
  width: 100%;
  height: 100%;
`;

const TopicHeaderImage = styled.img`
  border-radius: 50%;
  aspect-ratio: 1;
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
  svg {
    width: 24px;
    height: 24px;
  }
  ${VisualElementButton}:hover & {
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

const TopicIntroductionWrapper = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  justify-content: space-between;
`;

const HeadingWrapper = styled.hgroup`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${spacing.small};
  h1 {
    margin: 0;
  }
`;

const TopicIntroduction = styled.div`
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

const AdditionalIcon = styled.span`
  padding: 1px;
  border: 1px solid currentColor;
  border-radius: 100%;
  font-size: 15px;
  width: 25px;
  text-align: center;
`;

const StyledContentWrapper = styled.div<InvertItProps>`
  padding-top: ${spacing.normal};
  border-left: 6px solid ${colors.brand.light};
  color: ${colors.text.primary};
  background-color: ${colors.white};
`;

const StyledModalHeader = styled(ModalHeader)`
  padding: ${spacing.small} ${spacing.nsmall};
`;

const icons: Record<VisualElementProps['type'], ComponentType> = {
  image: ExpandTwoArrows,
  video: PlayCircleFilled,
  other: CursorClick,
};

type VisualElementProps = {
  type: 'image' | 'video' | 'other';
  element: ReactNode;
};

export type TopicProps = {
  id?: string;
  topic?: {
    title: string;
    introduction: string;
    image?: {
      url: string;
      alt: string;
      crop?: ImageCrop;
      focalPoint?: ImageFocalPoint;
    };
    visualElement?: VisualElementProps;
    resources?: ReactNode;
  };
  subTopics?: ItemProps[] | null | undefined;
  onSubTopicSelected?: (event: MouseEvent<HTMLElement>, id?: string) => void;
  isLoading?: boolean;
  renderMarkdown?: (text: string) => string;
  invertedStyle?: boolean;
  onToggleShowContent?: () => void;
  showContent?: boolean;
  isAdditionalTopic?: boolean;
  frame?: boolean;
  messageBox?: string;
  children?: ReactNode;
};

const Topic = ({
  id,
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
  messageBox,
  children,
}: TopicProps) => {
  const { t } = useTranslation();
  const contentId = `expanded-description-${id}`;
  const testId = 'nav-topic-about';
  const VisualElementIcon = topic?.visualElement?.type ? icons[topic.visualElement.type] : null;
  const wrapperStyle = [frame ? frameStyle : undefined, invertedStyle ? _invertedStyle : undefined];
  if (isLoading || !topic) {
    return (
      <Wrapper css={wrapperStyle} data-testid={testId}>
        {isLoading ? <Loader /> : null}
      </Wrapper>
    );
  }

  return (
    <Wrapper css={wrapperStyle} data-testid={testId}>
      <TopicIntroductionWrapper>
        <div>
          <HeadingWrapper>
            <Heading element="h1" headingStyle="h2" id={id} tabIndex={-1}>
              {topic.title}
            </Heading>
            {isAdditionalTopic && (
              <>
                <AdditionalIcon aria-hidden="true">T</AdditionalIcon>
                <span>{t('navigation.additionalTopic')}</span>
              </>
            )}
          </HeadingWrapper>
          <TopicIntroduction>
            {renderMarkdown ? parse(renderMarkdown(topic.introduction)) : topic.introduction}
          </TopicIntroduction>
        </div>
        {topic.image && (
          <TopicHeaderVisualElementWrapper>
            {topic.visualElement ? (
              <Modal>
                <ModalTrigger>
                  <VisualElementButton
                    variant="stripped"
                    title={topic.visualElement.type === 'image' ? t('image.largeSize') : t('visualElement.show')}
                  >
                    <ShowVisualElementWrapper>
                      <TopicHeaderImage
                        src={`${topic.image.url}?${makeSrcQueryString(800, topic.image.crop, topic.image.focalPoint)}`}
                        alt={topic.image.alt}
                      />
                      <TopicHeaderOverlay />
                    </ShowVisualElementWrapper>
                    <ExpandVisualElementButton>{VisualElementIcon && <VisualElementIcon />}</ExpandVisualElementButton>
                  </VisualElementButton>
                </ModalTrigger>
                <ModalContent
                  aria-label={t('topicPage.imageModal')}
                  animation="subtle"
                  animationDuration={50}
                  size="large"
                >
                  <StyledModalHeader>
                    <ModalCloseButton />
                  </StyledModalHeader>
                  {topic.visualElement && topic.visualElement.element}
                </ModalContent>
              </Modal>
            ) : (
              <TopicHeaderImage
                src={`${topic.image.url}?${makeSrcQueryString(400, topic.image.crop, topic.image.focalPoint)}`}
                alt={topic.image.alt}
              />
            )}
          </TopicHeaderVisualElementWrapper>
        )}
      </TopicIntroductionWrapper>
      {messageBox && <MessageBox>{messageBox}</MessageBox>}
      <div>
        {onToggleShowContent && (
          <StyledButtonWrapper invertedStyle={invertedStyle}>
            <ButtonV2
              aria-expanded={!!showContent}
              aria-controls={contentId}
              variant="link"
              onClick={() => onToggleShowContent()}
            >
              {showContent ? (
                <>
                  {t('navigation.showShorterDescription')} <ChevronUp />
                </>
              ) : (
                <>
                  {t('navigation.showLongerDescription')} <ChevronDown />
                </>
              )}
            </ButtonV2>
          </StyledButtonWrapper>
        )}
        {showContent && (
          <StyledContentWrapper id={contentId} invertedStyle={invertedStyle}>
            {children}
          </StyledContentWrapper>
        )}
      </div>
      {subTopics && subTopics.length !== 0 && (
        <NavigationBox
          colorMode="light"
          heading={t('navigation.topics')}
          items={subTopics}
          onClick={onSubTopicSelected}
          invertedStyle={invertedStyle}
        />
      )}
      {topic.resources}
    </Wrapper>
  );
};
export default Topic;
