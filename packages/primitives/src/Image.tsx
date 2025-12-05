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
import type { ImageVariantSize } from "@ndla/types-backend/image-api";

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
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
  imageLanguage?: string;
}

export const makeSrcQueryString = ({ crop, focalPoint, imageLanguage }: SrcQueryStringOptions) => {
  const cropParams =
    crop && `cropStartX=${crop.startX}&cropEndX=${crop.endX}&cropStartY=${crop.startY}&cropEndY=${crop.endY}`;
  const focalPointParams = focalPoint && `focalX=${focalPoint.x}&focalY=${focalPoint.y}`;
  const imageLanguageParams = imageLanguage && `language=${imageLanguage}`;
  const params = [cropParams, focalPointParams, imageLanguageParams].filter((p) => p).join("&");

  return params;
};

interface SrcSetOptions {
  src?: string;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
  imageLanguage?: string;
}

interface VariantWidth {
  width: number;
  variant: ImageVariantSize;
}

const VARIANT_WIDTHS: VariantWidth[] = [
  {
    width: 2560,
    variant: "xxlarge",
  },
  {
    width: 1920,
    variant: "xlarge",
  },
  {
    width: 1440,
    variant: "large",
  },
  {
    width: 1080,
    variant: "medium",
  },
  {
    width: 800,
    variant: "small",
  },
  {
    width: 480,
    variant: "xsmall",
  },
  {
    width: 240,
    variant: "icon",
  },
];

export const getSrcSet = ({ src, crop, focalPoint, imageLanguage }: SrcSetOptions) => {
  if (!src) return undefined;
  return VARIANT_WIDTHS.map(
    (width) => `${src}/${width.width}/?${makeSrcQueryString({ crop, focalPoint, imageLanguage })} ${width}w`,
  ).join(", ");
};

// const FALLBACK_WIDTH = 1024;

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
  contentType?: string;
  crop?: ImageCrop;
  imageLanguage?: string;
  focalPoint?: ImageFocalPoint;
}

export const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ crop, focalPoint, imageLanguage, contentType, src, alt, ...props }, ref) => {
    const queryString = makeSrcQueryString({ crop, focalPoint, imageLanguage });
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
      sizes = FALLBACK_SIZES,
      alt,
      fallbackElement,
      ...props
    },
    ref,
  ) => {
    const srcSet = srcSetProp ?? getSrcSet({ src, crop, focalPoint, imageLanguage });
    const queryString = makeSrcQueryString({ crop, focalPoint, imageLanguage });
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
