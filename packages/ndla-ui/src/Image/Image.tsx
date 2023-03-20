/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import LazyLoadImage from './LazyLoadImage';

export interface ImageCrop {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export interface ImageFocalPoint {
  x: number;
  y: number;
}

export const makeSrcQueryString = (width: number | undefined, crop?: ImageCrop, focalPoint?: ImageFocalPoint) => {
  const widthParams = width && `width=${width}`;
  const cropParams =
    crop && `cropStartX=${crop.startX}&cropEndX=${crop.endX}&cropStartY=${crop.startY}&cropEndY=${crop.endY}`;
  const focalPointParams = focalPoint && `focalX=${focalPoint.x}&focalY=${focalPoint.y}`;
  const params = [widthParams, cropParams, focalPointParams].filter((p) => p).join('&');

  return params;
};

const getSrcSet = (src: string, crop: ImageCrop | undefined, focalPoint: ImageFocalPoint | undefined) => {
  const widths = [2720, 2080, 1760, 1440, 1120, 1000, 960, 800, 640, 480, 320, 240, 180];
  return widths.map((width) => `${src}?${makeSrcQueryString(width, crop, focalPoint)} ${width}w`).join(', ');
};

interface StyledImageWrapperProps {
  svg?: boolean;
}

const StyledImageWrapper = styled.div<StyledImageWrapperProps>`
  position: relative;
  ${({ svg }) => {
    return (
      svg &&
      css`
      display: flex
      justify-content: center;
    `
    );
  }}
`;
interface Props {
  alt: string;
  src: string;
  sizes?: string;
  fallbackWidth?: number;
  contentType?: string;
  srcSet?: string;
  lazyLoad?: boolean;
  lazyLoadSrc?: string;
  expandButton?: ReactNode;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
}

const Image = ({
  alt,
  src,
  lazyLoad,
  lazyLoadSrc,
  crop,
  focalPoint,
  contentType,
  sizes = '(min-width: 1024px) 1024px, 100vw',
  expandButton,
  fallbackWidth = 1024,
  ...rest
}: Props) => {
  const srcSet = rest.srcSet ?? getSrcSet(src, crop, focalPoint);
  const queryString = makeSrcQueryString(fallbackWidth, crop, focalPoint);

  if (contentType && contentType === 'image/gif') {
    return (
      <StyledImageWrapper>
        <img alt={alt} src={`${src}`} {...rest} />
      </StyledImageWrapper>
    );
  }

  if (lazyLoad) {
    return (
      <StyledImageWrapper>
        <LazyLoadImage
          alt={alt}
          src={`${src}?${queryString}`}
          srcSet={srcSet}
          sizes={sizes}
          lazyLoadSrc={lazyLoadSrc}
        />
      </StyledImageWrapper>
    );
  }

  return (
    <StyledImageWrapper svg={contentType === 'image/svg+xml'}>
      <picture>
        <source type={contentType} srcSet={srcSet} sizes={sizes} />
        <img alt={alt} src={`${src}?${queryString}`} {...rest} />
      </picture>
      {expandButton}
    </StyledImageWrapper>
  );
};

export default Image;
