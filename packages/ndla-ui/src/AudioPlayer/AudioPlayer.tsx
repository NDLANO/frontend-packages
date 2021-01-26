/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
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

type Props = {
  src: string;
  title: string;
  speech?: boolean;
  description?: string;
  img?: {
    url: string;
    alt: string;
  };
};
const AudioPlayer = ({ src, title, speech, description, img }: Props) => {
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

  return (
    <>
      {description || img ? (
        <InfoWrapper>
          {img && (
            <ImageWrapper>
              <img src={img.url} alt={img.alt} />
            </ImageWrapper>
          )}
          <TextWrapper>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </TextWrapper>
        </InfoWrapper>
      ) : (
        <Heading>{title}</Heading>
      )}
      <div data-audio-player={1} data-src={src} data-title={title}>
        <Controls src={src} title={title} />
      </div>
    </>
  );
};

export default AudioPlayer;
