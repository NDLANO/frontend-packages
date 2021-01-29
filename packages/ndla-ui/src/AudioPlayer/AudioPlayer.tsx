/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { Cross as CrossIcon } from '@ndla/icons/action';
import Controls from './Controls';
import SpeechControl from './SpeechControl';

const Heading = styled.h2`
  ${fonts.sizes('20px', '20px')};
  margin: ${spacing.small} 0;
`;

const InfoWrapper = styled.div`
  border: 1px solid ${colors.brand.lighter};
  border-bottom: 0;
  display: flex;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  max-width: 28%;
  img {
    width: 100%;
    height: 100%;
    object-fit: none;
  }
`;
const TextWrapper = styled.div`
  padding: ${spacing.normal} ${spacing.medium};
`;
const Title = styled.h2`
  ${fonts.sizes('22px', '30px')};
  margin: 0 0 ${spacing.small};
`;
const Description = styled.p`
  ${fonts.sizes('16px', '30px')};
  font-family: ${fonts.sans};
  margin: 0;
`;

const LinkToTextVersionWrapper = styled.div`
  margin-top: ${spacing.normal};
`;

const TextVersionWrapper = styled.div`
  padding: ${spacing.normal} ${spacing.medium};
  border: 1px solid ${colors.brand.lighter};
  border-top: 0;
  ${fonts.sizes('16px', '30px')};
  font-family: ${fonts.sans};
  &.audio-player-text-version-hidden {
    display: none;
  }
`;

const TextVersionHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TextVersionHeading = styled.h3`
  ${fonts.sizes('28px', '35px')};
  font-weight: ${fonts.weight.semibold};
  margin: ${spacing.small} 0 ${spacing.normal};
`;

const LinkButton = styled(Button)`
  box-shadow: none;
  padding-left: 0;
  padding-right: 4px;
  min-height: ${spacing.medium};
  ${fonts.sizes('16px', '25px')};
  column-gap: ${spacing.xsmall};
  flex: 0 0 auto;
  &:hover,
  &:focus {
    box-shadow: ${colors.link};
  }
`;

const TextVersionText = styled.div`
  max-width: 670px;
`;

type Props = {
  src: string;
  title: string;
  speech?: boolean;
  description?: string;
  textVersion?: ReactNode;
  img?: {
    url: string;
    alt: string;
  };
  staticRenderId?: string;
};
const AudioPlayer = ({
  src,
  title,
  speech,
  description,
  img,
  textVersion,
  staticRenderId,
}: Props) => {
  const [showTextVersion, setShowTextVersion] = useState(false);

  if (speech) {
    return (
      <div
        data-audio-player={1}
        data-speech={1}
        data-src={src}
        data-title={title}>
        <SpeechControl src={src} title={title} />
      </div>
    );
  }

  const toggleTextVersion = () => {
    setShowTextVersion(!showTextVersion);
  };

  return (
    <>
      {description || img || textVersion ? (
        <InfoWrapper>
          {img && (
            <ImageWrapper>
              <img src={img.url} alt={img.alt} />
            </ImageWrapper>
          )}
          <TextWrapper>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
            {textVersion && (
              <LinkToTextVersionWrapper>
                <LinkButton
                  link
                  size="normal"
                  onClick={toggleTextVersion}
                  data-audio-text-button-id={staticRenderId}>
                  Tekstversjon
                </LinkButton>
              </LinkToTextVersionWrapper>
            )}
          </TextWrapper>
        </InfoWrapper>
      ) : (
        <Heading>{title}</Heading>
      )}
      <div data-audio-player={1} data-src={src} data-title={title}>
        <Controls src={src} title={title} />
      </div>
      {textVersion && (showTextVersion || staticRenderId) && (
        <TextVersionWrapper id={staticRenderId} hidden={!!staticRenderId}>
          <TextVersionHeadingWrapper>
            <TextVersionHeading>Tekstversjon</TextVersionHeading>
            <LinkButton
              link
              size="normal"
              onClick={toggleTextVersion}
              data-audio-text-button-id={staticRenderId}>
              <CrossIcon style={{ width: '20px', height: '20px' }} />
              <span>Lukk tekstversjon</span>
            </LinkButton>
          </TextVersionHeadingWrapper>
          <TextVersionText>{textVersion}</TextVersionText>
        </TextVersionWrapper>
      )}
    </>
  );
};

export default AudioPlayer;
