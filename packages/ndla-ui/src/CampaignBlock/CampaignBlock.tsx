/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { ReactNode } from "react";
import { ArrowRightLine } from "@ndla/icons/common";
import { Text } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { HeadingLevel } from "../types";
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
  imageSide?: "left" | "right";
  className?: string;
  path?: string;
}

const Container = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "medium",
    border: "1px solid",
    borderColor: "stroke.default",
    backgroundColor: "background.default",
    borderRadius: "xsmall",
    boxShadow: "full",
    marginBlockEnd: "4xsmall",
    overflow: "hidden",
    tabletWide: {
      gridTemplateColumns: "auto minmax(230px, 455px)", //required for campaign block in myNdla
      "&[data-img-left='true']": {
        gridTemplateColumns: "minmax(230px, 455px) auto", //required for campaign block in myNdla
      },
    },
  },
});

const LinkText = styled(Text, {
  base: {
    display: "flex",
    gap: "xxsmall",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
    paddingBlock: "xsmall",
    fontWeight: "bold",
  },
});

const LinkHeader = styled(Text, {
  base: {
    display: "flex",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
  },
});

const StyledImg = styled("img", {
  base: {
    objectFit: "cover",
    width: "100%",
    height: "215px",
    tablet: {
      height: "265px",
    },
    tabletWide: {
      height: "340px",
    },
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
    minWidth: "270px", //required for campaign block in myNdla
  },
});

const StyledText = styled(Text, {
  base: {
    tabletWide: {
      display: "block",
      overflow: "hidden",
      position: "relative",
      lineClamp: 4,
      boxOrient: "vertical",
    },
  },
});

interface MaybeLinkTextProps {
  url?: string;
  path?: string;
  children: ReactNode;
}

const StyledSafeLink = styled(SafeLink, {
  base: {
    color: "inherit",
  },
});

const MaybeLinkText = ({ url, children, path }: MaybeLinkTextProps) => {
  if (url) return <StyledSafeLink to={getPossiblyRelativeUrl(url, path)}>{children}</StyledSafeLink>;
  return children;
};

const CampaignBlock = ({
  title,
  image,
  imageSide = "left",
  description,
  headingLevel: InternalHeading = "h2",
  url,
  path,
  className,
}: Props) => {
  const imageComponent = image && <StyledImg src={`${image.src}?width=455`} height={340} width={455} alt={image.alt} />;
  const HeaderComponent = url?.url ? LinkHeader : Text;
  return (
    <Container className={className} data-embed-type="campaign-block" data-img-left={imageSide === "left"}>
      {imageSide === "left" && imageComponent}
      <ContentWrapper>
        <MaybeLinkText url={url?.url} path={path}>
          <HeaderComponent asChild consumeCss textStyle="heading.small">
            <InternalHeading>{parse(title)}</InternalHeading>
          </HeaderComponent>
        </MaybeLinkText>
        <StyledText textStyle="body.xlarge">{parse(description)}</StyledText>
        {!!url?.url && (
          <MaybeLinkText url={url.url} path={path}>
            <LinkText textStyle="body.medium">
              {parse(url.text ?? "")}
              <ArrowRightLine />
            </LinkText>
          </MaybeLinkText>
        )}
      </ContentWrapper>
      {imageSide !== "left" && imageComponent}
    </Container>
  );
};

export default CampaignBlock;
