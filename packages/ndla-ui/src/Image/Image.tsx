/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import { colors } from '@ndla/core';
import styled from '@emotion/styled';
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

const StyledImageWrapper = styled.div`
  position: relative;

  &[data-svg='true'] {
    display: flex;
    justify-content: center;
  }
  &[data-in-grid='true'] {
    border: 1px solid ${colors.brand.tertiary};
    border-bottom: 0;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const StyledImage = styled.img`
  &[data-in-grid='true'] {
    border-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
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
  inGrid?: boolean;
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
  inGrid,
  ...rest
}: Props) => {
  const srcSet = rest.srcSet ?? getSrcSet(src, crop, focalPoint);
  const queryString = makeSrcQueryString(fallbackWidth, crop, focalPoint);

  if (contentType && contentType === 'image/gif') {
    return (
      <StyledImageWrapper data-in-grid={inGrid}>
        <StyledImage alt={alt} src={`${src}`} {...rest} data-in-grid={inGrid} />
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
    <StyledImageWrapper data-svg={contentType === 'image/svg+xml'} data-in-grid={inGrid}>
      <picture>
        <source type={contentType} srcSet={srcSet} sizes={sizes} />
        <StyledImage alt={alt} src={`${src}?${queryString}`} {...rest} data-in-grid={inGrid} />
      </picture>
      {expandButton}
    </StyledImageWrapper>
  );
};

export default Image;
