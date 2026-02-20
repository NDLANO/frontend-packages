/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps, StyledVariantProps } from "@ndla/styled-system/types";
import type { ImageVariantDTO, ImageVariantSize } from "@ndla/types-backend/image-api";
import { type ComponentPropsWithRef, type ReactNode, forwardRef, useEffect, useState } from "react";

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
  width?: number;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
  imageLanguage?: string;
}

export const makeSrcQueryString = ({ width, crop, focalPoint, imageLanguage }: SrcQueryStringOptions) => {
  const params = [];
  if (width) {
    params.push(`width=${width}`);
  }
  if (crop) {
    params.push(`cropStartX=${crop.startX}&cropEndX=${crop.endX}&cropStartY=${crop.startY}&cropEndY=${crop.endY}`);
  }
  if (focalPoint) {
    params.push(`focalX=${focalPoint.x}&focalY=${focalPoint.y}`);
  }
  if (imageLanguage) {
    params.push(`language=${imageLanguage}`);
  }
  return params.join("&");
};

interface SrcSetOptions {
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
  imageLanguage?: string;
  src?: string;
}

export const VAR_WIDTHS: Record<ImageVariantSize, number> = {
  icon: 240,
  xsmall: 480,
  small: 800,
  medium: 1080,
  large: 1440,
  xlarge: 1920,
  xxlarge: 2560,
};

const IMAGE_WIDTHS = [2720, 2080, 1760, 1440, 1120, 1000, 960, 800, 640, 480, 320, 240, 180];

export const getVariantSrcSet = (variants: ImageVariantDTO[]) => {
  return variants
    .map((variant) => {
      return `${variant.variantUrl} ${VAR_WIDTHS[variant.size]}w`;
    })
    .join(", ");
};

export const getVariantSizes = (variants: ImageVariantDTO[]) => {
  return variants
    .map((variant, i) => {
      if (i === variants.length - 1) {
        return `${VAR_WIDTHS[variant.size]}px`;
      }
      return `(max-width: ${VAR_WIDTHS[variant.size]}px) ${VAR_WIDTHS[variant.size]}px`;
    })
    .join(", ");
};

export const getSrcSet = ({ src, crop, focalPoint, imageLanguage }: SrcSetOptions) => {
  if (!src) return undefined;
  return IMAGE_WIDTHS.map((width) => {
    const queryString = makeSrcQueryString({ width, crop, focalPoint, imageLanguage });
    const query = queryString.length ? `?${queryString}` : "";
    return `${src}${query} ${width}w`;
  }).join(", ");
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
    const srcWithParms = queryString ? `${src}?${queryString}` : src;
    return <StyledImage alt={alt} src={contentType === "image/gif" ? src : srcWithParms} {...props} ref={ref} />;
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
  variants?: ImageVariantDTO[];
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
      sizes: sizesProp,
      alt,
      fallbackElement,
      variants,
      ...props
    },
    ref,
  ) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      setHasError(false);
    }, [src, srcSetProp, sizesProp, variants]);

    if (!src?.length && !variants?.length && fallbackElement) {
      return (
        <StyledFallbackElement {...props} ref={ref}>
          {fallbackElement}
        </StyledFallbackElement>
      );
    }

    const queryString = makeSrcQueryString({ width: fallbackWidth, crop, focalPoint, imageLanguage });
    const fallbackSrc = src && queryString ? `${src}?${queryString}` : src;

    return (
      <picture>
        {!!variants?.length && !crop && !focalPoint && contentType !== "image/gif" && (
          <source
            type={"image/webp"}
            srcSet={getVariantSrcSet(variants)}
            sizes={sizesProp ?? getVariantSizes(variants)}
          />
        )}
        {contentType !== "image/gif" && (
          <source
            type={contentType}
            srcSet={getSrcSet({ src, crop, focalPoint, imageLanguage })}
            sizes={sizesProp ?? FALLBACK_SIZES}
          />
        )}
        <StyledImage
          alt={alt}
          src={contentType === "image/gif" ? src : fallbackSrc}
          {...props}
          ref={ref}
          data-error={hasError ? "" : undefined}
          onError={(e) => {
            setHasError(true);
            props.onError?.(e);
          }}
          onLoad={(e) => {
            setHasError(false);
            props.onLoad?.(e);
          }}
        />
      </picture>
    );
  },
);
