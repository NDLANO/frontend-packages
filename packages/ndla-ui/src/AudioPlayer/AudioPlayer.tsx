/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { Cross as CrossIcon } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';
import Controls from './Controls';
import SpeechControl from './SpeechControl';

const InfoWrapper = styled.div`
  border: 1px solid ${colors.brand.lighter};
  border-bottom: 0;
  display: flex;
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;

  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 260px;
    height: 260px;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    max-height: 400px;
    max-width: 100%;
    width: 100%;
    height: auto;
    img {
      object-fit: scale-down;
    }
  }
`;

const TextWrapper = styled.div`
  padding: ${spacing.small};
  width: 100%;
  &[data-has-image='true'] {
    ${mq.range({ from: breakpoints.tablet })} {
      padding: ${spacing.small} ${spacing.normal};
    }
    ${mq.range({ from: breakpoints.tabletWide })} {
      padding: ${spacing.small} ${spacing.medium};
    }
  }
`;

const TitleWrapper = styled.div`
  ${mq.range({ from: breakpoints.tabletWide })} {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  ${fonts.sizes('22px', '30px')};
  margin: 0px;
  &[data-has-desc='true'] {
    margin: 0 0 ${spacing.small};
  }
`;

const Subtitle = styled.h3`
  ${fonts.sizes('18px', '28px')};
  margin: 0;
  font-weight: ${fonts.weight.semibold};
`;

const StyledDescription = styled.div`
  ${fonts.sizes('16px', '30px')};
  font-family: ${fonts.sans};
  margin: 0;
`;

const LinkToTextVersionWrapper = styled.div`
  &[data-margin='true'] {
    margin-top: ${spacing.small};
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin: ${spacing.small} 0;
  }
`;

const TextVersionWrapper = styled.div`
  border: 1px solid ${colors.brand.lighter};
  border-top: 0;
  ${fonts.sizes('16px', '30px')};
  font-family: ${fonts.sans};
  &.audio-player-text-version-hidden {
    display: none;
  }
  padding: ${spacing.normal} ${spacing.small} ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: ${spacing.normal} ${spacing.medium};
  }
`;

const TextVersionHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TextVersionHeading = styled.h2`
  font-weight: ${fonts.weight.semibold};
  margin: ${spacing.small} 0 ${spacing.normal};
`;

const LinkButton = styled(ButtonV2)`
  box-shadow: none;
  padding-left: 0;
  padding-right: 4px;
  min-height: ${spacing.medium};
  ${fonts.sizes('16px', '25px')};
  flex: 0 0 auto;
  &:hover,
  &:focus {
    box-shadow: ${colors.link};
  }
`;

const CloseText = styled.span`
  display: inline-block;
  margin-left: ${spacing.xsmall};
`;

const TextVersionText = styled.div`
  max-width: 670px;
  & span > * {
    white-space: pre-wrap;
  }
`;

const DESCRIPTION_MAX_LENGTH = 200;

type Props = {
  src: string;
  title: string;
  subtitle?: {
    title: string;
    url?: string;
  };
  speech?: boolean;
  description?: string;
  textVersion?: ReactNode;
  img?: {
    url: string;
    alt: string;
  };
  staticRenderId?: string;
};

const AudioPlayer = ({ src, title, subtitle, speech, description, img, textVersion, staticRenderId }: Props) => {
  const { t } = useTranslation();
  const [showTextVersion, setShowTextVersion] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = useMemo(() => description?.slice(0, DESCRIPTION_MAX_LENGTH), [description]);

  if (speech) {
    return (
      <div data-audio-player={1} data-speech={1} data-src={src} data-title={title}>
        <SpeechControl src={src} title={title} />
      </div>
    );
  }

  const toggleTextVersion = () => {
    setShowTextVersion(!showTextVersion);
  };

  type TextVersionComponentProps = {
    margin?: boolean;
  };
  const TextVersionComponent = ({ margin }: TextVersionComponentProps) => (
    <LinkToTextVersionWrapper data-margin={margin}>
      <ButtonV2 size="normal" shape="pill" onClick={toggleTextVersion} data-audio-text-button-id={staticRenderId}>
        {t('audio.textVersion.heading')}
      </ButtonV2>
    </LinkToTextVersionWrapper>
  );

  return (
    <>
      <InfoWrapper>
        {img && (
          <ImageWrapper>
            <img src={img.url} alt={img.alt} />
          </ImageWrapper>
        )}
        <TextWrapper data-has-image={!!img}>
          <TitleWrapper>
            <div>
              {subtitle && (
                <Subtitle>
                  {subtitle.url ? <SafeLink to={subtitle.url}>{subtitle.title}</SafeLink> : subtitle.title}
                </Subtitle>
              )}
              <Title data-has-desc={!!description}>{title}</Title>
            </div>
            {textVersion && !img && <TextVersionComponent />}
          </TitleWrapper>
          {description && (
            <StyledDescription>
              {showFullDescription || description.length < DESCRIPTION_MAX_LENGTH
                ? description
                : `${truncatedDescription}...`}
              <ButtonV2 variant="link" onClick={() => setShowFullDescription((p) => !p)}>
                {t(`audio.${showFullDescription ? 'readLessDescriptionLabel' : 'readMoreDescriptionLabel'}`)}
              </ButtonV2>
            </StyledDescription>
          )}
          {textVersion && img && <TextVersionComponent margin />}
        </TextWrapper>
      </InfoWrapper>
      <div data-audio-player={1} data-src={src} data-title={title}>
        <Controls src={src} title={title} />
      </div>
      {textVersion && (showTextVersion || staticRenderId) && (
        <TextVersionWrapper id={staticRenderId} hidden={!!staticRenderId}>
          <TextVersionHeadingWrapper>
            <TextVersionHeading>{t('audio.textVersion.heading')}</TextVersionHeading>
            <LinkButton
              variant="link"
              size="normal"
              onClick={toggleTextVersion}
              data-audio-text-button-id={staticRenderId}
            >
              <CrossIcon style={{ width: '20px', height: '20px' }} />
              <CloseText>{t('audio.textVersion.close')}</CloseText>
            </LinkButton>
          </TextVersionHeadingWrapper>
          <TextVersionText>{textVersion}</TextVersionText>
        </TextVersionWrapper>
      )}
    </>
  );
};

export default AudioPlayer;
