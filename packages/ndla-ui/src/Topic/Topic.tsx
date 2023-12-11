/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, MouseEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { animations, breakpoints, colors, mq, spacing } from '@ndla/core';
import { CursorClick, ExpandTwoArrows } from '@ndla/icons/action';
import { Additional, ChevronDown, ChevronUp, PlayCircleFilled } from '@ndla/icons/common';
import { ModalCloseButton, ModalContent, Modal, ModalHeader, ModalTrigger } from '@ndla/modal';
import { EmbedMetaData } from '@ndla/types-embed';
import { Text, Heading } from '@ndla/typography';
import Loader from './Loader';
import { getCrop, getFocalPoint } from '../Embed/ImageEmbed';
import { makeSrcQueryString, ImageCrop, ImageFocalPoint } from '../Image';
import { MessageBox } from '../Messages';
import { NavigationBox } from '../Navigation';
import { ItemProps } from '../Navigation/NavigationBox';

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
  mask-image: radial-gradient(white, black);
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

const StyledButtonWrapper = styled.div`
  margin-top: ${spacing.small};
  padding: ${spacing.xsmall} 0 ${spacing.xsmall} ${spacing.medium};
  border-left: 6px solid ${colors.brand.light};
  $[data-inverted='true] {
    button {
      color: #fff;
      &:hover,
      &:focus {
        color: #fff;
      }
    }
  }
`;

const StyledAdditional = styled(Additional)`
  color: ${colors.brand.dark};
  height: ${spacing.normal};
  width: ${spacing.normal};
  padding: 1px;
`;

const StyledContentWrapper = styled.div`
  background-color: ${colors.white};
  border-left: 6px solid ${colors.brand.light};
  color: ${colors.text.primary};
  padding-top: ${spacing.normal};
`;

const StyledModalHeader = styled(ModalHeader)`
  padding: ${spacing.small} ${spacing.nsmall};
`;

export type TopicProps = {
  id?: string;
  metaImage?: {
    url: string;
    alt: string;
  };
  title: string;
  introduction: ReactNode;
  resources?: ReactNode;
  visualElementEmbedMeta?: EmbedMetaData;
  subTopics?: ItemProps[] | null | undefined;
  onSubTopicSelected?: (event: MouseEvent<HTMLElement>, id?: string) => void;
  isLoading?: boolean;
  invertedStyle?: boolean;
  onToggleShowContent?: () => void;
  showContent?: boolean;
  isAdditionalTopic?: boolean;
  frame?: boolean;
  messageBox?: string;
  children?: ReactNode;
  visualElement?: ReactNode;
};

interface MetaImageType {
  url: string;
  alt: string;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
}

const Topic = ({
  id,
  title,
  introduction,
  resources,
  subTopics,
  onSubTopicSelected,
  isLoading,
  invertedStyle,
  onToggleShowContent,
  showContent,
  metaImage: articleMetaImage,
  isAdditionalTopic,
  frame,
  messageBox,
  visualElementEmbedMeta,
  children,
  visualElement,
}: TopicProps) => {
  const { t } = useTranslation();
  const contentId = `expanded-description-${id}`;

  const VisualElementIcon = useMemo(() => {
    if (!visualElementEmbedMeta || visualElementEmbedMeta.status === 'error') return null;
    else if (visualElementEmbedMeta.resource === 'brightcove') {
      return PlayCircleFilled;
    } else if (visualElementEmbedMeta.resource === 'image') {
      return ExpandTwoArrows;
    } else return CursorClick;
  }, [visualElementEmbedMeta]);

  const metaImage: MetaImageType | undefined = useMemo(() => {
    if (visualElementEmbedMeta?.resource === 'image' && visualElementEmbedMeta.status === 'success') {
      return {
        url: visualElementEmbedMeta.data.image?.imageUrl,
        alt: visualElementEmbedMeta.data.alttext?.alttext,
        crop: getCrop(visualElementEmbedMeta.embedData),
        focalPoint: getFocalPoint(visualElementEmbedMeta.embedData),
      };
    } else return articleMetaImage;
  }, [articleMetaImage, visualElementEmbedMeta]);

  const wrapperStyle = [frame ? frameStyle : undefined, invertedStyle ? _invertedStyle : undefined];
  if (isLoading) {
    return <Wrapper css={wrapperStyle}>{isLoading ? <Loader /> : null}</Wrapper>;
  }

  return (
    <Wrapper css={wrapperStyle}>
      <TopicIntroductionWrapper>
        <div>
          <HeadingWrapper>
            <Heading element="h1" headingStyle="h2" id={id} tabIndex={-1}>
              {title}
            </Heading>
            {isAdditionalTopic && (
              <>
                <StyledAdditional aria-hidden="true" />
                <span>{t('navigation.additionalTopic')}</span>
              </>
            )}
          </HeadingWrapper>
          <Text textStyle="ingress" element="div">
            {introduction}
          </Text>
        </div>
        {metaImage && (
          <TopicHeaderVisualElementWrapper>
            {visualElementEmbedMeta?.status === 'success' ? (
              <Modal>
                <ModalTrigger>
                  <VisualElementButton
                    variant="stripped"
                    title={visualElementEmbedMeta.resource === 'image' ? t('image.largeSize') : t('visualElement.show')}
                  >
                    <ShowVisualElementWrapper>
                      <TopicHeaderImage
                        src={`${metaImage.url}?${makeSrcQueryString(800, metaImage.crop, metaImage.focalPoint)}`}
                        alt={metaImage.alt}
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
                  {visualElement}
                </ModalContent>
              </Modal>
            ) : (
              <TopicHeaderImage
                src={`${metaImage.url}?${makeSrcQueryString(400, metaImage.crop, metaImage.focalPoint)}`}
                alt={metaImage.alt}
              />
            )}
          </TopicHeaderVisualElementWrapper>
        )}
      </TopicIntroductionWrapper>
      {messageBox && <MessageBox>{messageBox}</MessageBox>}
      <div>
        {onToggleShowContent && (
          <StyledButtonWrapper data-inverted={invertedStyle}>
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
        {showContent && <StyledContentWrapper id={contentId}>{children}</StyledContentWrapper>}
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
      {resources}
    </Wrapper>
  );
};
export default Topic;
