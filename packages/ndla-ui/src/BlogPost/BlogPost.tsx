/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { Heading } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { HeadingLevel } from "../types";
import { getPossiblyRelativeUrl } from "../utils/relativeUrl";

export interface Props {
  title: string;
  author?: string;
  url: string;
  headingLevel?: HeadingLevel;
  size?: "normal" | "large";
  metaImage: {
    url: string;
    alt: string;
  };
  path?: string;
}

const Container = styled(
  SafeLink,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      color: "text.default",
      backgroundColor: "background.default",
      gap: "medium",
      border: "1px solid",
      borderColor: "stroke.subtle",
      borderRadius: "xsmall",
      transitionDuration: "fast",
      transitionProperty: "background-color, border-color, max-width",
      transitionTimingFunction: "default",
      height: "100%",
      "&:hover, &:focus-visible": {
        borderColor: "stroke.hover",
        backgroundColor: "surface.actionSubtle.hover",
        "& h1, h2, h3, h4, h5, h6": {
          textDecoration: "underline",
        },
      },
    },
    defaultVariants: {
      size: "normal",
    },
    variants: {
      // TODO: Reconsider these sizes. Maybe they should match up with surface?
      size: {
        normal: {
          paddingBlock: "medium",
          paddingInline: "medium",
          tabletWide: {
            maxWidth: "350px",
          },
        },
        large: {
          paddingBlock: "xlarge",
          paddingInline: "xxlarge",
          tabletWide: {
            maxWidth: "532px",
          },
        },
      },
    },
  },
  // TODO: Reconsider this once we handle SafeLink
  { baseComponent: true },
);

const AuthorContainer = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xsmall",
    textTransform: "uppercase",
    textStyle: "body.large",
  },
});

const StyledImg = styled("img", {
  base: {
    borderRadius: "xsmall",
    flex: "1",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    border: "0",
  },
});

const StyledHeading = styled(Heading, {
  base: {
    display: "inline-block",
    width: "fit-content",
  },
});

const BlogPost = ({ title, author, url, metaImage, headingLevel: Heading = "h3", size = "normal", path }: Props) => {
  const { t } = useTranslation();
  const href = getPossiblyRelativeUrl(url, path);
  const imageWidth = size === "large" ? 532 : 350;
  return (
    <Container data-size={size} to={href} size={size}>
      <StyledHeading className="blog-title" asChild consumeCss textStyle="title.large">
        <Heading>{parse(title)}</Heading>
      </StyledHeading>
      <StyledImg src={`${metaImage.url}?width=${imageWidth}`} alt={metaImage.alt} />
      {!!author && <AuthorContainer aria-label={t("article.writtenBy", { authors: author })}>{author}</AuthorContainer>}
    </Container>
  );
};

export default BlogPost;
