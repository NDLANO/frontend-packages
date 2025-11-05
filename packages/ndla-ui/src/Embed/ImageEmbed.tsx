/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { type ReactNode, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { AddLine } from "@ndla/icons";
import { Figure, type FigureSize, type FigureVariantProps, Image } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { ImageEmbedData, ImageMetaData } from "@ndla/types-embed";
import { EmbedErrorPlaceholder } from "./EmbedErrorPlaceholder";
import type { RenderContext } from "./types";
import { EmbedByline } from "../LicenseByline/EmbedByline";
import { licenseAttributes } from "../utils/licenseAttributes";

interface Props {
  embed: ImageMetaData;
  previewAlt?: boolean;
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

const getFigureProps = (size?: string, float?: string): FigureVariantProps => {
  const actualFloat = float === "left" ? "left" : float === "right" ? "right" : undefined;
  const replacedSize = size?.replace("-hide-byline", "") ?? "full";
  const actualSize: FigureSize = (replacedSize === "fullwidth" ? "full" : replacedSize) as FigureSize;
  return {
    float: actualFloat,
    // Figure expects you to set a size when floating. If you don't, the figure will simply take up the available width. Fallback to medium in those cases.
    size: actualSize === "full" && float ? "medium" : actualSize,
  };
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

const ImageWrapper = styled("div", {
  base: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    "& img": {
      width: "100%",
    },
  },
  variants: {
    svg: {
      true: {
        display: "flex",
        justifyContent: "center",
      },
      false: {},
    },
    border: {
      true: {
        border: "1px solid",
        borderColor: "stroke.subtle",
        borderRadius: "xsmall",
        "& img": {
          borderRadius: "0",
        },
      },
      false: {},
    },
    expandable: {
      true: {
        cursor: "pointer",
      },
      false: {},
    },
  },
});

const StyledFigure = styled(Figure, {
  base: {
    zIndex: "docked",
    _hover: {
      "& [data-byline-button]": {
        background: "background.default",
      },
      "& button[data-expanded]": {
        transform: "scale(1.2)",
      },
    },
    "& button[data-expanded='true']": {
      "& svg": {
        transform: "rotate(-45deg)",
      },
    },
  },
});

const ExpandButton = styled(
  "button",
  {
    base: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      position: "absolute",
      padding: "0",
      top: "xsmall",
      right: "xsmall",
      width: "medium",
      height: "medium",
      border: "2px solid",
      borderColor: "background.default",
      transitionProperty: "transform, background-color, color",
      transitionDuration: "normal",
      transitionTimingFunction: "ease-out",
      color: "background.default",
      backgroundColor: "surface.action",
      borderRadius: "large",
      "& svg": {
        transitionProperty: "transform",
        transitionDuration: "normal",
        transitionTimingFunction: "ease-out",
      },
      tabletDown: {
        display: "none",
      },
    },
  },
  { defaultProps: { type: "button" } },
);

export const ImageEmbed = ({ embed, previewAlt, lang, renderContext = "article", children }: Props) => {
  const [imageSizes, setImageSizes] = useState<string | undefined>(undefined);
  const figureProps = getFigureProps(embed.embedData.size, embed.embedData.align);
  const { t } = useTranslation();

  const parsedDescription = useMemo(() => {
    if (embed.embedData.caption || renderContext === "article") {
      return embed.embedData.caption ? parse(embed.embedData.caption) : undefined;
    }
    if (embed.status === "success" && embed.data.caption.caption) {
      return parse(embed.data.caption.caption);
    }
  }, [embed, renderContext]);

  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type={"image"} figureType={figureProps?.size} float={figureProps?.float} />;
  }

  const { data, embedData } = embed;

  const altText = embedData.alt || "";

  const sizes = getSizes(embedData.size, embedData.align);

  const focalPoint = getFocalPoint(embedData);
  const crop = getCrop(embedData);

  const toggleImageSize = () => {
    setImageSizes((sizes) => (!sizes ? expandedSizes : undefined));
  };

  const licenseProps = licenseAttributes(data.copyright.license.license, lang, embedData.url);

  const figureSize = figureProps?.float ? (figureProps?.size ?? "medium") : "full";

  return (
    <StyledFigure
      float={figureProps?.float}
      size={imageSizes ? "full" : figureSize}
      data-embed-type="image"
      {...licenseProps}
    >
      {children}
      <ImageWrapper border={embedData.border === "true"} expandable={!!figureProps?.float}>
        <Image
          focalPoint={focalPoint}
          contentType={data.image.contentType}
          crop={crop}
          sizes={imageSizes ?? sizes}
          alt={altText}
          src={data.image.imageUrl}
          lang={lang}
          onClick={figureProps?.float ? toggleImageSize : undefined}
          variant="rounded"
          {...data.image.dimensions}
        />
        {(embedData.align === "right" || embedData.align === "left") && (
          <ExpandButton
            aria-label={t(`license.images.itemImage.zoom${imageSizes ? "Out" : ""}ImageButtonLabel`)}
            onClick={toggleImageSize}
            data-expanded={!!imageSizes}
          >
            <AddLine />
          </ExpandButton>
        )}
      </ImageWrapper>
      <EmbedByline
        type="image"
        copyright={data.copyright}
        description={parsedDescription}
        hideDescription={embedData.hideCaption === "true"}
        hideCopyright={embedData.hideByline === "true"}
        visibleAlt={previewAlt ? embed.embedData.alt : ""}
      />
    </StyledFigure>
  );
};
