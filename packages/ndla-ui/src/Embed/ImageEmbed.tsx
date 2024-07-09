/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { ReactNode, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus } from "@ndla/icons/action";
import { ChevronDown, ChevronUp } from "@ndla/icons/common";
import { Figure, FigureSize, FigureVariantProps, Image } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { ImageEmbedData, ImageMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { RenderContext } from "./types";
import { EmbedByline } from "../LicenseByline";

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

export const errorSvgSrc = `data:image/svg+xml;charset=UTF-8,%3Csvg fill='%238A8888' height='400' viewBox='0 0 24 12' width='100%25' xmlns='http://www.w3.org/2000/svg' style='background-color: %23EFF0F2'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath transform='scale(0.3) translate(28, 8.5)' d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E`;

const getFigureProps = (size?: string, float?: string): FigureVariantProps => {
  const actualFloat = float === "left" ? "left" : float === "right" ? "right" : undefined;
  const replacedSize: FigureSize = (size?.replace("-hide-byline", "") ?? "full") as FigureSize;
  return {
    float: actualFloat,
    // Figure expects you to set a size when floating. If you don't, the figure will simply take up the available width. Fallback to medium in those cases.
    size: replacedSize === "full" && float ? "medium" : replacedSize,
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
        // TODO: Not sure if we want this color.
        borderColor: "surface.brand.1.strong",
        borderBottom: "0",
        borderRadius: "xsmall",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
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

// TODO: Ask about BylineButton styling. Not included in design
const BylineButton = styled(
  "button",
  {
    base: {
      cursor: "pointer",
      position: "absolute",
      zIndex: "base",
      bottom: "0",
      right: "0",
      paddingBlock: "xsmall",
      paddingInline: "xsmall",
      transitionProperty: "transform, background-color, color",
      transitionDuration: "normal",
      transitionTimingFunction: "ease-out",
      background: "background.default/20",
      border: "0",
      "& svg": {
        transitionProperty: "transform",
        transitionDuration: "normal",
        transitionTimingFunction: "ease-out",
        fill: "primary",
      },
    },
  },
  { defaultProps: { type: "button" } },
);

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
    },
  },
  { defaultProps: { type: "button" } },
);

const ImageEmbed = ({ embed, previewAlt, lang, renderContext = "article", children }: Props) => {
  const [isBylineHidden, setIsBylineHidden] = useState(hideByline(embed.embedData));
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

  // TODO: Check how this works with `children`. Will only be important for ED
  return (
    <StyledFigure float={figureProps?.float} size={imageSizes ? "full" : figureProps?.size ?? "medium"}>
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
        />
        {!!embedData.align && (
          <ExpandButton
            aria-label={t(`license.images.itemImage.zoom${imageSizes ? "Out" : ""}ImageButtonLabel`)}
            onClick={toggleImageSize}
            data-expanded={!!imageSizes}
          >
            <Plus />
          </ExpandButton>
        )}
        {(embedData.size?.endsWith("-hide-byline") || embedData.hideByline === "true") && (
          <BylineButton
            data-byline-button=""
            aria-label={t(`license.images.itemImage.${isBylineHidden ? "expandByline" : "minimizeByline"}`)}
            onClick={() => setIsBylineHidden((p) => !p)}
          >
            {isBylineHidden ? <ChevronDown /> : <ChevronUp />}
          </BylineButton>
        )}
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

const hideByline = (embed: ImageEmbedData): boolean => {
  return (!!embed.size && embed.size.endsWith("-hide-byline")) || embed.hideByline === "true";
};

export default ImageEmbed;
