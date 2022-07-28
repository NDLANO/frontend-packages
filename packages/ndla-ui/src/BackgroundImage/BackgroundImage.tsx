import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { breakpoints, mq } from '@ndla/core/src';
import React from 'react';

type ImageType = 'mobile' | 'tablet' | 'desktop' | 'wide';

interface Props {
  showOverlay?: boolean;
  className?: string;
  images: {
    url: string;
    types: ImageType[];
  }[];
}

interface BackgroundImageWrapperProps {
  showOverlay?: boolean;
}

const BackgroundImageWrapper = styled.div<BackgroundImageWrapperProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${(p) =>
    p.showOverlay &&
    css`
      &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 0;
      }
    `};
`;

interface MediaQueryProp {
  from: string;
  until?: string;
}

interface BackgroundProps {
  imageType: ImageType;
  url: string;
}

const mqPairs: Record<ImageType, MediaQueryProp> = {
  mobile: { from: breakpoints.mobile, until: breakpoints.tablet },
  tablet: { from: breakpoints.tablet, until: breakpoints.desktop },
  desktop: { from: breakpoints.desktop, until: breakpoints.wide },
  wide: { from: breakpoints.wide },
};

const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(p) => p.url});
  ${(p) =>
    mqPairs[p.imageType] &&
    css`
      display: none;
      ${mq.range(mqPairs[p.imageType])} {
        display: block;
      }
    `};
`;

const BackgroundImage = ({ images, showOverlay = false }: Props) => (
  <BackgroundImageWrapper showOverlay={showOverlay}>
    {images?.map((image) =>
      image.types.map((type) => <Background imageType={type} url={image.url} key={`${image.url}${type}`} />),
    )}
  </BackgroundImageWrapper>
);

export default BackgroundImage;
