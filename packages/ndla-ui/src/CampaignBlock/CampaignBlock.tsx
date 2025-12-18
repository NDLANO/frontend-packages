/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { type ReactNode } from "react";
import { ArrowRightLine } from "@ndla/icons";
import { Text } from "@ndla/primitives";
import { SafeLinkButton } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import type { CampaignBlockEmbedData } from "@ndla/types-embed";
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

const Wrapper = styled("div", {
  base: {
    width: "100%",
    height: "100%",
    containerType: "inline-size",
  },
});

const Container = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "1fr",
    border: "1px solid",
    borderColor: "stroke.default",
    backgroundColor: "background.default",
    borderRadius: "xsmall",
    boxShadow: "full",
    overflow: "hidden",
  },
  variants: {
    imageSide: {
      left: {
        "@/tablet": {
          gridTemplateColumns: "minmax(230px, 455px) auto", //required for campaign block in myNdla
        },
        "@supports not (container-type: inline-size)": {
          tabletWide: {
            gridTemplateColumns: "minmax(230px, 455px) auto",
          },
        },
      },
      right: {
        "@/tablet": {
          gridTemplateColumns: "auto minmax(230px, 455px)", //required for campaign block in myNdla
        },
        "@supports not (container-type: inline-size)": {
          tabletWide: {
            gridTemplateColumns: "auto minmax(230px, 455px)",
          },
        },
      },
    },
    background: {
      neutral: {},
      brand1: {
        backgroundColor: "surface.brand.1",
      },
      brand3: {
        backgroundColor: "surface.brand.3",
      },
    },
  },
  defaultVariants: {
    imageSide: "left",
    background: "neutral",
  },
});

const StyledImg = styled("img", {
  base: {
    objectFit: "cover",
    width: "100%",
    height: "215px",
    "@/tablet": {
      height: "340px",
    },
    "@supports not (container-type: inline-size)": {
      tablet: {
        height: "265px",
      },
      tabletWide: {
        height: "340px",
      },
    },
    backgroundColor: "background.default",
  },
});

const ContentWrapper = styled("div", {
  base: {
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
});

const StyledText = styled(Text, {
  base: {
    tablet: {
      display: "block",
      overflow: "hidden",
      position: "relative",
      lineClamp: 4,
      boxOrient: "vertical",
    },
  },
});

interface LinkButtonProps {
  url?: string;
  path?: string;
  children: ReactNode;
}

const StyledSafeLinkButton = styled(SafeLinkButton, {
  base: {
    boxShadow: "full",
    border: "1px solid",
    borderColor: "stroke.default",
  },
});

const LinkButton = ({ url, children, path }: LinkButtonProps) => {
  if (url)
    return (
      <StyledSafeLinkButton to={getPossiblyRelativeUrl(url, path)} variant="secondary" rel="noopener noreferrer">
        {children}
      </StyledSafeLinkButton>
    );
  return children;
};

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
  const imageComponent = image && <StyledImg src={`${image.src}?width=455`} width={455} alt={image.alt} />;

  return (
    <Wrapper>
      <Container className={className} data-embed-type="campaign-block" imageSide={imageSide} background={background}>
        {imageSide === "left" && imageComponent}
        <ContentWrapper>
          <Text asChild consumeCss textStyle="heading.small">
            <InternalHeading>{parse(title)}</InternalHeading>
          </Text>
          <StyledText textStyle="body.xlarge">{parse(description)}</StyledText>
          {!!url?.url && (
            <LinkButton url={url.url} path={path}>
              {parse(url.text ?? "")}
              <ArrowRightLine />
            </LinkButton>
          )}
        </ContentWrapper>
        {imageSide !== "left" && imageComponent}
      </Container>
    </Wrapper>
  );
};
