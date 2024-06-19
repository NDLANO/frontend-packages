/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { MouseEventHandler, ReactNode, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors, spacing, utils } from "@ndla/core";
import { ExpandTwoArrows } from "@ndla/icons/action";
import { ArrowCollapse, ChevronDown, ChevronUp } from "@ndla/icons/common";
import { COPYRIGHTED } from "@ndla/licenses";
import { ImageEmbedData, ImageMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { CanonicalUrlFuncs, RenderContext } from "./types";
import { Figure, FigureType, figureActionIndicatorStyle } from "../Figure";
import Image, { ImageLink } from "../Image";
import { EmbedByline } from "../LicenseByline";

interface Props {
  embed: ImageMetaData;
  previewAlt?: boolean;
  path?: string;
  canonicalUrl?: CanonicalUrlFuncs["image"];
  inGrid?: boolean;
  lang?: string;
  renderContext?: RenderContext;
  children?: ReactNode;
}

export interface Author {
  name: string;
  type: string;
}

export const getLicenseCredits = (copyright?: {
  creators?: Author[];
  rightsholders?: Author[];
  processors?: Author[];
}) => {
  return {
    creators: copyright?.creators ?? [],
    rightsholders: copyright?.rightsholders ?? [],
    processors: copyright?.processors ?? [],
  };
};

export const errorSvgSrc = `data:image/svg+xml;charset=UTF-8,%3Csvg fill='%238A8888' height='400' viewBox='0 0 24 12' width='100%25' xmlns='http://www.w3.org/2000/svg' style='background-color: %23EFF0F2'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath transform='scale(0.3) translate(28, 8.5)' d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E`;
const isSmall = (size?: string): size is "xsmall" | "small" => size === "xsmall" || size === "small";

const isAlign = (align?: string): align is "left" | "right" => align === "left" || align === "right";

const getFigureType = (size?: string, align?: string): FigureType => {
  if (size && isSmall(size) && align && isAlign(align)) {
    return `${size}-${align}`;
  }
  if (size && isSmall(size) && !align) {
    return size as FigureType;
  }
  if (align && isAlign(align)) {
    return align;
  }
  return "full";
};

const getSizes = (size?: string, align?: string) => {
  if (align && size === "full") {
    return "(min-width: 1024px) 512px, (min-width: 768px) 350px, 100vw";
  }
  if (align && size === "small") {
    return "(min-width: 1024px) 350px, (min-width: 768px) 180px, 100vw";
  }
  if (align && size === "xsmall") {
    return "(min-width: 1024px) 180px, (min-width: 768px) 180px, 100vw";
  }
  return "(min-width: 1024px) 1024px, 100vw";
};

export const getFocalPoint = (data: ImageEmbedData) => {
  const focalX = Number.parseFloat(data.focalX ?? "");
  const focalY = Number.parseFloat(data.focalY ?? "");
  if (!Number.isNaN(focalX) && !Number.isNaN(focalY)) {
    return { x: focalX, y: focalY };
  }
  return undefined;
};

export const getCrop = (data: ImageEmbedData) => {
  const lowerRightX = Number.parseFloat(data.lowerRightX ?? "");
  const lowerRightY = Number.parseFloat(data.lowerRightY ?? "");
  const upperLeftX = Number.parseFloat(data.upperLeftX ?? "");
  const upperLeftY = Number.parseFloat(data.upperLeftY ?? "");
  if (
    !Number.isNaN(lowerRightX) &&
    !Number.isNaN(lowerRightY) &&
    !Number.isNaN(upperLeftX) &&
    !Number.isNaN(upperLeftY)
  ) {
    return {
      startX: lowerRightX,
      startY: lowerRightY,
      endX: upperLeftX,
      endY: upperLeftY,
    };
  }
  return undefined;
};

const expandedSizes = "(min-width: 1024px) 1024px, 100vw";

const StyledFigure = styled(Figure)`
  &:hover {
    [data-byline-button] {
      background: ${colors.white};
      svg {
        transform: scale(1.2);
      }
    }
  }
  &[data-float="right"] {
    float: right;
  }
  &[data-float="left"] {
    float: left;
  }
`;

const ImageEmbed = ({
  embed,
  previewAlt,
  inGrid,
  path,
  lang,
  canonicalUrl,
  renderContext = "article",
  children,
}: Props) => {
  const [isBylineHidden, setIsBylineHidden] = useState(hideByline(embed.embedData.size));
  const [imageSizes, setImageSizes] = useState<string | undefined>(undefined);
  // Full-size figures automatically get a margin of {spacing.normal} on its y-axis if a float is not set (or if float is an empty string).
  // This adds some margin to normal figures within an article, but should not happen for figures in a grid.
  const [floatAttr, setFloatAttr] = useState<{ "data-float"?: string }>(() =>
    inGrid && !embed.embedData.align ? {} : { "data-float": embed.embedData.align },
  );

  const parsedDescription = useMemo(() => {
    if (embed.embedData.caption || renderContext === "article") {
      return embed.embedData.caption ? parse(embed.embedData.caption) : undefined;
    }
    if (embed.status === "success" && embed.data.caption.caption) {
      return parse(embed.data.caption.caption);
    }
  }, [embed, renderContext]);

  if (embed.status === "error") {
    const { align, size } = embed.embedData;
    const figureType = getFigureType(size, align);
    return <EmbedErrorPlaceholder type={"image"} figureType={figureType} />;
  }

  const { data, embedData } = embed;

  const altText = embedData.alt || "";

  const figureType = getFigureType(embedData.size, embedData.align);
  const sizes = getSizes(embedData.size, embedData.align);

  const focalPoint = getFocalPoint(embedData);
  const crop = getCrop(embedData);

  const isCopyrighted = data.copyright.license.license.toLowerCase() === COPYRIGHTED;

  return (
    <StyledFigure type={imageSizes ? undefined : figureType} {...floatAttr}>
      {children}
      <ImageWrapper
        src={!isCopyrighted ? canonicalUrl?.(data) : undefined}
        crop={crop}
        size={embedData.size}
        pagePath={path}
      >
        <Image
          focalPoint={focalPoint}
          contentType={data.image.contentType}
          crop={crop}
          sizes={imageSizes ?? sizes}
          alt={altText}
          src={data.image.imageUrl}
          border={embedData.border}
          expandButton={
            <ExpandButton
              size={embedData.size}
              expanded={!!imageSizes}
              bylineHidden={isBylineHidden}
              onExpand={() => {
                if (!imageSizes) {
                  setImageSizes(expandedSizes);
                  setTimeout(() => {
                    setFloatAttr({});
                  }, 400); //Removing the float parameter too quickly causes the image to be resized from left regardless
                } else {
                  setImageSizes(undefined);
                  setFloatAttr({ "data-float": embedData.align });
                }
              }}
              onHideByline={() => setIsBylineHidden((p) => !p)}
            />
          }
          lang={lang}
        />
      </ImageWrapper>
      {isBylineHidden ? null : (
        <EmbedByline
          type="image"
          copyright={data.copyright}
          description={parsedDescription}
          visibleAlt={previewAlt ? embed.embedData.alt : ""}
        />
      )}
    </StyledFigure>
  );
};

const HiddenSpan = styled.span`
  ${utils.visuallyHidden};
`;

interface ImageWrapperProps {
  src?: string;
  children: ReactNode;
  pagePath?: string;
  crop?: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  size?: string;
}
const hideByline = (size?: string): boolean => {
  return !!size && size.endsWith("-hide-byline");
};

const ImageWrapper = ({ src, crop, size, children, pagePath }: ImageWrapperProps) => {
  const { t } = useTranslation();
  if (isSmall(size) || hideByline(size) || !src || (pagePath && src.endsWith(pagePath))) {
    return <>{children}</>;
  }

  return (
    <ImageLink src={src} crop={crop}>
      {children}
      <HiddenSpan>{t("license.images.itemImage.ariaLabel")}</HiddenSpan>
    </ImageLink>
  );
};

interface ExpandButtonProps {
  size?: string;
  expanded: boolean;
  bylineHidden: boolean;
  onExpand: MouseEventHandler<HTMLButtonElement>;
  onHideByline: MouseEventHandler<HTMLButtonElement>;
}

const BylineButton = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  padding: ${spacing.small};
  transition: all 0.3s ease-out;
  background: ${colors.background.default}20;
  border: 0;

  svg {
    transition: transform 0.4s ease-out;
    width: ${spacing.normal};
    height: ${spacing.normal};
    fill: ${colors.brand.primary};
  }
`;

const ExpandButton = ({ size, expanded, bylineHidden, onExpand, onHideByline }: ExpandButtonProps) => {
  const { t } = useTranslation();
  if (isSmall(size)) {
    return (
      <button
        type="button"
        css={figureActionIndicatorStyle}
        data-byline-button=""
        aria-label={t(`license.images.itemImage.zoom${expanded ? "Out" : ""}ImageButtonLabel`)}
        onClick={onExpand}
      >
        {expanded ? <ArrowCollapse /> : <ExpandTwoArrows />}
      </button>
    );
  }
  if (hideByline(size)) {
    return (
      <BylineButton
        type="button"
        data-byline-button=""
        aria-label={t(`license.images.itemImage.${bylineHidden ? "expandByline" : "minimizeByline"}`)}
        onClick={onHideByline}
      >
        {bylineHidden ? <ChevronDown /> : <ChevronUp />}
      </BylineButton>
    );
  }
  return null;
};

export default ImageEmbed;
