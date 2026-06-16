/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ark } from "@ark-ui/react/factory";
import { ArrowRightLine } from "@ndla/icons";
import { Text, Image } from "@ndla/primitives";
import { SafeLinkButton } from "@ndla/safelink";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { CampaignBlockEmbedData } from "@ndla/types-embed";
import parse from "html-react-parser";
import type { HeadingLevel } from "../types";
import { getPossiblyRelativeUrl } from "../utils/relativeUrl";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  title: string;
  description: string;
  headingLevel?: HeadingLevel;
  url: {
    url?: string;
    text?: string;
  };
  image?: Image;
  imageSide?: CampaignBlockEmbedData["imageSide"];
  className?: string;
  path?: string;
  background?: CampaignBlockEmbedData["background"];
}

const campaignBlockRecipe = sva({
  slots: ["root", "image", "link", "text", "content"],
  base: {
    root: {
      display: "grid",
      gridTemplateColumns: "1fr",
      border: "1px solid",
      borderColor: "stroke.default",
      backgroundColor: "background.default",
      borderRadius: "xsmall",
      boxShadow: "full",
      overflow: "hidden",
      tablet: {
        "&:has(> :is(img, picture):first-child)": {
          gridTemplateColumns: "minmax(230px, 455px) auto",
        },
        "&:has(> :is(img, picture):last-child)": {
          gridTemplateColumns: "auto minmax(230px, 455px)",
        },
      },
    },
    content: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "medium",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingBlock: "medium",
      paddingInline: "medium",
      position: "relative",
    },
    text: {
      tablet: {
        display: "block",
        overflow: "hidden",
        position: "relative",
        lineClamp: 4,
        boxOrient: "vertical",
      },
    },
    link: {
      boxShadow: "full",
      border: "1px solid",
      borderColor: "stroke.default",
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "215px",
      backgroundColor: "background.default",
      tablet: {
        height: "340px",
      },
    },
  },
  variants: {
    background: {
      neutral: {},
      brand1: {
        root: {
          backgroundColor: "surface.brand.1",
        },
      },
      brand3: {
        root: {
          backgroundColor: "surface.brand.3",
        },
      },
    },
  },
  defaultVariants: {
    background: "neutral",
  },
});

const { withProvider, withContext } = createStyleContext(campaignBlockRecipe);

export const CampaignBlockContainer = withProvider(ark.div, "root", {
  baseComponent: true,
  defaultProps: { "data-embed-type": "campaign-block" },
});

export const CampaignBlockContent = withContext(ark.div, "content", { baseComponent: true });

export const CampaignBlockText = withContext(Text, "text", { defaultProps: { textStyle: "body.xlarge" } });

export const CampaignBlockSafeLinkButton = withContext(SafeLinkButton, "link", {
  defaultProps: {
    variant: "secondary",
    rel: "noopener noreferrer",
  },
});

export const CampaignBlockImage = withContext(Image, "image", { baseComponent: true });

export const CampaignBlock = ({
  title,
  image,
  imageSide = "left",
  description,
  headingLevel: InternalHeading = "h2",
  url,
  path,
  className,
  background,
}: Props) => {
  const imageComponent = image && <CampaignBlockImage src={image.src} alt={image.alt} />;

  return (
    <CampaignBlockContainer className={className} background={background}>
      {imageSide === "left" && imageComponent}
      <CampaignBlockContent>
        <Text asChild consumeCss textStyle="heading.small">
          <InternalHeading>{parse(title)}</InternalHeading>
        </Text>
        <CampaignBlockText>{parse(description)}</CampaignBlockText>
        {!!url?.url && (
          <CampaignBlockSafeLinkButton to={getPossiblyRelativeUrl(url.url, path)}>
            {parse(url.text ?? "")}
            <ArrowRightLine />
          </CampaignBlockSafeLinkButton>
        )}
      </CampaignBlockContent>
      {imageSide !== "left" && imageComponent}
    </CampaignBlockContainer>
  );
};
