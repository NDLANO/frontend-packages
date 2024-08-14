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
    width: "100%",
    display: "flex",
    gap: "medium",
    flexDirection: "column",
    border: "1px solid",
    borderColor: "stroke.default",
    backgroundColor: "background.default",
    borderRadius: "xsmall",
    boxShadow: "full",
    marginBlockEnd: "4xsmall",
    overflow: "hidden",
    tabletWide: {
      flexDirection: "row",
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
    paddingInline: "medium",
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
    alignSelf: "center",
    objectFit: "cover",
    width: "auto",
    height: "215px",
    mobileWide: {
      height: "340px",
    },
    tabletWide: {
      height: "280px",
    },
    desktop: {
      height: "340px",
    },
  },
});

const ContentWrapper = styled("div", {
  base: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBlock: "medium",
    paddingInline: "medium",
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
    // TODO: Remove data-type
    <Container className={className} data-type="campaign-block" data-embed-type="campaign-block">
      {imageSide === "left" && imageComponent}
      <ContentWrapper>
        <MaybeLinkText url={url?.url} path={path}>
          <HeaderComponent asChild consumeCss textStyle="heading.small">
            <InternalHeading>{parse(title)}</InternalHeading>
          </HeaderComponent>
        </MaybeLinkText>
        <Text textStyle="body.large">{parse(description)}</Text>
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
