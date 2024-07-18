/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { Heading, Text } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import ArticleByline from "./ArticleByline";
import { ContentTypeBadgeNew } from "..";
import { ContentType } from "../ContentTypeBadge/ContentTypeBadgeNew";
import { Article as ArticleType } from "../types";

export const ArticleContent = styled("section", {
  base: {
    width: "100%",
  },
});

export const ArticleWrapper = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    color: "text.default",
    gap: "xxlarge",
    background: "surface.default",
    paddingBlock: "xsmall",
    paddingInline: "8%",
    alignItems: "center",
    width: "100%",
    overflowWrap: "break-word",
    position: "relative",
    tablet: {
      paddingBlock: "medium",
    },
    desktop: {
      paddingBlock: "xxlarge",
    },
    "& mjx-stretchy-v > mjx-ext > mjx-c": {
      transform: "scaleY(100) translateY(0.075em)",
    },
    _after: {
      content: "",
      display: "table",
      clear: "both",
    },
  },
});

const ArticleTitleWrapper = styled("hgroup", {
  base: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "xsmall",
    "& h1": {
      overflowWrap: "anywhere",
    },
  },
});

const ArticleFavoritesButtonWrapper = styled("div", {
  base: {
    position: "absolute",
    right: "8%",
    top: "xsmall",
    tablet: {
      top: "medium",
    },
    desktop: {
      top: "xxlarge",
    },
  },
});

export const ArticleHeader = styled("header", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    alignItems: "flex-start",
    width: "100%",
  },
});

export const ArticleFooter = styled("footer", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xxlarge",
    width: "100%",
  },
});

type Props = {
  heartButton?: ReactNode;
  article: ArticleType;
  licenseBox?: ReactNode;
  contentType?: ContentType;
  children?: ReactNode;
  competenceGoals?: ReactNode;
  id: string;
  lang?: string;
};

export const Article = ({
  article,
  contentType,
  licenseBox,
  children,
  competenceGoals,
  id,
  heartButton,
  lang,
}: Props) => {
  const { title, introduction, published, content, footNotes, copyright } = article;

  const authors =
    copyright?.creators.length || copyright?.rightsholders.length ? copyright.creators : copyright?.processors;

  return (
    <ArticleWrapper data-ndla-article="">
      <ArticleHeader>
        <ArticleTitleWrapper>
          {!!contentType && <ContentTypeBadgeNew contentType={contentType} />}
          {!!heartButton && <ArticleFavoritesButtonWrapper>{heartButton}</ArticleFavoritesButtonWrapper>}
          <Heading textStyle="heading.large" id={id} tabIndex={-1} lang={lang}>
            {title}
          </Heading>
        </ArticleTitleWrapper>
        {!!introduction && (
          <Text lang={lang} textStyle="body.xlarge" asChild consumeCss>
            <div>{introduction}</div>
          </Text>
        )}
        {competenceGoals}
      </ArticleHeader>
      <ArticleContent>{content}</ArticleContent>
      <ArticleFooter>
        <ArticleByline
          footnotes={footNotes}
          authors={authors}
          suppliers={copyright?.rightsholders}
          published={published}
          license={copyright?.license?.license ?? ""}
          licenseBox={licenseBox}
        />
        {children}
      </ArticleFooter>
    </ArticleWrapper>
  );
};
