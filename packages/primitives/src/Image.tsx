/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, ReactNode, forwardRef } from "react";
import { ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, StyledVariantProps } from "@ndla/styled-system/types";

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

export const getSrcSet = (src: string, crop: ImageCrop | undefined, focalPoint: ImageFocalPoint | undefined) => {
  const widths = [2720, 2080, 1760, 1440, 1120, 1000, 960, 800, 640, 480, 320, 240, 180];
  return widths.map((width) => `${src}?${makeSrcQueryString(width, crop, focalPoint)} ${width}w`).join(", ");
};

const FALLBACK_WIDTH = 1024;

const FALLBACK_SIZES = "(min-width: 1024px) 1024px, 100vw";

export interface PictureProps extends JsxStyleProps, ComponentPropsWithRef<"picture"> {
  src: string;
  sizes?: string;
  contentType?: string;
  srcSet?: string;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
}

export const Picture = forwardRef<HTMLPictureElement, PictureProps>(
  ({ children, srcSet: srcSetProp, crop, focalPoint, src, contentType, sizes = FALLBACK_SIZES, ...props }, ref) => {
    const srcSet = srcSetProp ?? getSrcSet(src, crop, focalPoint);

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

export interface ImgProps extends JsxStyleProps, ComponentPropsWithRef<"img">, ImageVariantProps {
  alt: string;
  src: string;
  fallbackWidth?: number;
  contentType?: string;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
}

export const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ fallbackWidth = FALLBACK_WIDTH, crop, focalPoint, contentType, src, alt, ...props }, ref) => {
    const queryString = makeSrcQueryString(fallbackWidth, crop, focalPoint);
    return (
      <StyledImage alt={alt} src={contentType === "image/gif" ? src : `${src}?${queryString}`} {...props} ref={ref} />
    );
  },
);

export interface ImageProps extends JsxStyleProps, ComponentPropsWithRef<"img">, ImageVariantProps {
  alt: string;
  src: string;
  sizes?: string;
  fallbackWidth?: number;
  contentType?: string;
  crop?: ImageCrop;
  fallbackElement?: ReactNode;
  focalPoint?: ImageFocalPoint;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      children,
      srcSet: srcSetProp,
      crop,
      focalPoint,
      src,
      contentType,
      fallbackWidth = FALLBACK_WIDTH,
      sizes = FALLBACK_SIZES,
      alt,
      fallbackElement,
      ...props
    },
    ref,
  ) => {
    const srcSet = srcSetProp ?? getSrcSet(src, crop, focalPoint);
    const queryString = makeSrcQueryString(fallbackWidth, crop, focalPoint);
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
