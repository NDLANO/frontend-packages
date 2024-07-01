/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { colors, misc } from "@ndla/core";

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
  const params = [widthParams, cropParams, focalPointParams].filter((p) => p).join("&");

  return params;
};

const getSrcSet = (src: string, crop: ImageCrop | undefined, focalPoint: ImageFocalPoint | undefined) => {
  const widths = [2720, 2080, 1760, 1440, 1120, 1000, 960, 800, 640, 480, 320, 240, 180];
  return widths.map((width) => `${src}?${makeSrcQueryString(width, crop, focalPoint)} ${width}w`).join(", ");
};

const StyledImageWrapper = styled.div`
  overflow: hidden;
  position: relative;

  &[data-expanded] {
    width: 100%;
  }

  picture {
    width: 100%;
  }

  &[data-svg="true"] {
    display: flex;
    justify-content: center;
  }
  &[data-border="true"] {
    border: 1px solid ${colors.brand.tertiary};
    border-bottom: 0;
    border-radius: ${misc.borderRadius};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &[data-expandable="true"] {
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  &[data-border="true"] {
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
  border?: string;
  lang?: string;
  onExpand?: () => void;
  expanded?: boolean;
}

const Image = ({
  alt,
  src,
  lazyLoad,
  lazyLoadSrc,
  crop,
  focalPoint,
  contentType,
  sizes = "(min-width: 1024px) 1024px, 100vw",
  expandButton,
  fallbackWidth = 1024,
  border,
  lang,
  onExpand,
  expanded,
  ...rest
}: Props) => {
  const srcSet = rest.srcSet ?? getSrcSet(src, crop, focalPoint);
  const queryString = makeSrcQueryString(fallbackWidth, crop, focalPoint);
  const loading = lazyLoad ? "lazy" : undefined;

  if (contentType && contentType === "image/gif") {
    return (
      <StyledImageWrapper data-border={border} data-expanded={expanded} data-expandable={!!onExpand} onClick={onExpand}>
        <StyledImage alt={alt} loading={loading} src={`${src}`} {...rest} data-border={border} lang={lang} />
      </StyledImageWrapper>
    );
  }

  return (
    <StyledImageWrapper
      data-svg={contentType === "image/svg+xml"}
      data-border={border}
      data-expandable={!!onExpand}
      data-expanded={expanded}
      onClick={onExpand}
    >
      <picture>
        <source type={contentType} srcSet={srcSet} sizes={sizes} />
        <StyledImage
          alt={alt}
          loading={loading}
          src={`${src}?${queryString}`}
          {...rest}
          data-border={border}
          lang={lang}
        />
      </picture>
      {expandButton}
    </StyledImageWrapper>
  );
};

export default Image;
