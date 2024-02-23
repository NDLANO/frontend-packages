/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { MouseEventHandler, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors, spacing, utils } from "@ndla/core";
import { ExpandTwoArrows } from "@ndla/icons/action";
import { ArrowCollapse, ChevronDown, ChevronUp } from "@ndla/icons/common";
import { COPYRIGHTED } from "@ndla/licenses";
import { ImageEmbedData, ImageMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { CanonicalUrlFuncs, HeartButtonType, RenderContext } from "./types";
import { Figure, FigureType } from "../Figure";
import Image, { ImageLink } from "../Image";
import { EmbedByline } from "../LicenseByline";

interface Props {
  embed: ImageMetaData;
  previewAlt?: boolean;
  path?: string;
  heartButton?: HeartButtonType;
  canonicalUrl?: CanonicalUrlFuncs["image"];
  inGrid?: boolean;
  lang?: string;
  renderContext?: RenderContext;
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

const CaptionWrapper = styled.div`
  background-color: ${colors.brand.lightest};
  padding: ${spacing.nsmall} ${spacing.normal};
  border: 1px solid ${colors.brand.light};
`;

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
  const focalX = parseFloat(data.focalX ?? "");
  const focalY = parseFloat(data.focalY ?? "");
  if (!isNaN(focalX) && !isNaN(focalY)) {
    return { x: focalX, y: focalY };
  }
  return undefined;
};

export const getCrop = (data: ImageEmbedData) => {
  const lowerRightX = parseFloat(data.lowerRightX ?? "");
  const lowerRightY = parseFloat(data.lowerRightY ?? "");
  const upperLeftX = parseFloat(data.upperLeftX ?? "");
  const upperLeftY = parseFloat(data.upperLeftY ?? "");
  if (!isNaN(lowerRightX) && !isNaN(lowerRightY) && !isNaN(upperLeftX) && !isNaN(upperLeftY)) {
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

const ImageEmbed = ({
  embed,
  previewAlt,
  heartButton: HeartButton,
  inGrid,
  path,
  lang,
  canonicalUrl,
  renderContext = "article",
}: Props) => {
  const [isBylineHidden, setIsBylineHidden] = useState(hideByline(embed.embedData.size));
  const [imageSizes, setImageSizes] = useState<string | undefined>(undefined);

  const parsedDescription = useMemo(() => {
    if (embed.embedData.caption || renderContext === "article") {
      return embed.embedData.caption ? parse(embed.embedData.caption) : undefined;
    } else if (embed.status === "success" && embed.data.caption.caption) {
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
    <Figure
      type={imageSizes ? undefined : figureType}
      className={imageSizes ? `c-figure--${embedData.align} expanded` : ""}
    >
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
              onExpand={() => setImageSizes((p) => (p ? undefined : expandedSizes))}
              onHideByline={() => setIsBylineHidden((p) => !p)}
            />
          }
          lang={lang}
        />
        <CaptionWrapper>
          {parsedDescription}
        </CaptionWrapper>
      </ImageWrapper>
      {isBylineHidden || (isSmall(embedData.size) && !imageSizes) ? null : (
        <EmbedByline
          type="image"
          copyright={data.copyright}
          bottomRounded
          visibleAlt={previewAlt ? embed.embedData.alt : ""}
          inGrid={inGrid}
        >
          {HeartButton && !isCopyrighted && <HeartButton embed={embed} />}
        </EmbedByline>
      )}
    </Figure>
  );
};

const HiddenSpan = styled.span`
  ${utils.visuallyHidden};
`;

interface ImageWrapperProps {
  src?: string;
  children: React.ReactNode;
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

const ExpandButton = ({ size, expanded, bylineHidden, onExpand, onHideByline }: ExpandButtonProps) => {
  const { t } = useTranslation();
  if (isSmall(size)) {
    return (
      <button
        type="button"
        className="c-figure__fullscreen-btn"
        aria-label={t(`license.images.itemImage.zoom${expanded ? "Out" : ""}ImageButtonLabel`)}
        onClick={onExpand}
      >
        {expanded ? <ArrowCollapse /> : <ExpandTwoArrows />}
      </button>
    );
  } else if (hideByline(size)) {
    return (
      <button
        type="button"
        className="c-figure__show-byline-btn"
        aria-label={t(`license.images.itemImage.${bylineHidden ? "expandByline" : "minimizeByline"}`)}
        onClick={onHideByline}
      >
        {bylineHidden ? <ChevronDown /> : <ChevronUp />}
      </button>
    );
  } else return null;
};

export default ImageEmbed;
