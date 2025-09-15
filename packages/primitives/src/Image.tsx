/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentPropsWithRef, type ReactNode, forwardRef } from "react";
import { ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps, StyledVariantProps } from "@ndla/styled-system/types";

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

interface SrcQueryStringOptions {
  width: number | undefined;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
  imageLanguage?: string;
}

export const makeSrcQueryString = ({ width, crop, focalPoint, imageLanguage }: SrcQueryStringOptions) => {
  const widthParams = width && `width=${width}`;
  const cropParams =
    crop && `cropStartX=${crop.startX}&cropEndX=${crop.endX}&cropStartY=${crop.startY}&cropEndY=${crop.endY}`;
  const focalPointParams = focalPoint && `focalX=${focalPoint.x}&focalY=${focalPoint.y}`;
  const imageLanguageParams = imageLanguage && `language=${imageLanguage}`;
  const params = [widthParams, cropParams, focalPointParams, imageLanguageParams].filter((p) => p).join("&");

  return params;
};

interface SrcSetOptions {
  src?: string;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
  imageLanguage?: string;
}

export const getSrcSet = ({ src, crop, focalPoint, imageLanguage }: SrcSetOptions) => {
  if (!src) return undefined;
  const widths = [2720, 2080, 1760, 1440, 1120, 1000, 960, 800, 640, 480, 320, 240, 180];
  return widths
    .map((width) => `${src}?${makeSrcQueryString({ width, crop, focalPoint, imageLanguage })} ${width}w`)
    .join(", ");
};

const FALLBACK_WIDTH = 1024;

const FALLBACK_SIZES = "(min-width: 1024px) 1024px, 100vw";

export interface PictureProps extends StyledProps, ComponentPropsWithRef<"picture"> {
  src: string;
  sizes?: string;
  contentType?: string;
  srcSet?: string;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
  imageLanguage?: string;
}

export const Picture = forwardRef<HTMLPictureElement, PictureProps>(
  (
    {
      children,
      srcSet: srcSetProp,
      crop,
      focalPoint,
      src,
      imageLanguage,
      contentType,
      sizes = FALLBACK_SIZES,
      ...props
    },
    ref,
  ) => {
    const srcSet = srcSetProp ?? getSrcSet({ src, crop, focalPoint, imageLanguage });

    return (
      <styled.picture {...props} ref={ref}>
        {contentType !== "image/gif" && <source type={contentType} srcSet={srcSet} sizes={sizes} />}
        {children}
      </styled.picture>
    );
  },
);

const StyledImage = styled("img", {
  defaultVariants: { variant: "regular" },
  variants: {
    variant: {
      regular: {},
      rounded: {
        borderRadius: "xsmall",
      },
    },
  },
});

const StyledFallbackElement = styled(
  ark.div,
  {
    base: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  { baseComponent: true },
);

type ImageVariantProps = StyledVariantProps<typeof StyledImage>;

export interface ImgProps extends StyledProps, ComponentPropsWithRef<"img">, ImageVariantProps {
  alt: string;
  src: string;
  fallbackWidth?: number;
  contentType?: string;
  crop?: ImageCrop;
  imageLanguage?: string;
  focalPoint?: ImageFocalPoint;
}

export const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ fallbackWidth = FALLBACK_WIDTH, crop, focalPoint, imageLanguage, contentType, src, alt, ...props }, ref) => {
    const queryString = makeSrcQueryString({ width: fallbackWidth, crop, focalPoint, imageLanguage });
    return (
      <StyledImage alt={alt} src={contentType === "image/gif" ? src : `${src}?${queryString}`} {...props} ref={ref} />
    );
  },
);

export interface ImageProps extends StyledProps, ComponentPropsWithRef<"img">, ImageVariantProps {
  alt: string;
  src?: string;
  sizes?: string;
  fallbackWidth?: number;
  contentType?: string;
  imageLanguage?: string;
  crop?: ImageCrop;
  fallbackElement?: ReactNode;
  focalPoint?: ImageFocalPoint;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      srcSet: srcSetProp,
      crop,
      focalPoint,
      src,
      contentType,
      imageLanguage,
      fallbackWidth = FALLBACK_WIDTH,
      sizes = FALLBACK_SIZES,
      alt,
      fallbackElement,
      ...props
    },
    ref,
  ) => {
    const srcSet = srcSetProp ?? getSrcSet({ src, crop, focalPoint, imageLanguage });
    const queryString = makeSrcQueryString({ width: fallbackWidth, crop, focalPoint, imageLanguage });
    const fallbackSrc = src ? `${src}?${queryString}` : src;
    if ((!src || !src.length) && fallbackElement) {
      return (
        <StyledFallbackElement {...props} ref={ref}>
          {fallbackElement}
        </StyledFallbackElement>
      );
    }
    return (
      <picture>
        {contentType !== "image/gif" && <source type={contentType} srcSet={srcSet} sizes={sizes} />}
        <StyledImage alt={alt} src={contentType === "image/gif" ? src : fallbackSrc} {...props} ref={ref} />
      </picture>
    );
  },
);
