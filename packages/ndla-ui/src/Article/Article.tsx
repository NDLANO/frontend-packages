/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, ReactNode, forwardRef } from "react";
import { ark, type HTMLArkProps } from "@ark-ui/react";
import { Heading, Text } from "@ndla/primitives";
import { cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";
import ArticleByline from "./ArticleByline";
import { ContentTypeBadgeNew } from "..";
import { ContentType } from "../ContentTypeBadge/ContentTypeBadgeNew";
import { Article as ArticleType } from "../types";
import { licenseAttributes } from "../utils/licenseAttributes";

const StyledArticleContent = styled(ark.section, {}, { baseComponent: true });

export const ArticleContent = forwardRef<HTMLElement, HTMLArkProps<"div"> & JsxStyleProps>(
  ({ className, ...props }, ref) => (
    <StyledArticleContent className={cx("ndla-article", className)} {...props} ref={ref} />
  ),
);

const StyledArticleWrapper = styled("article", {
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

export const ArticleWrapper = forwardRef<HTMLElement, ComponentPropsWithRef<"article"> & JsxStyleProps>(
  (props, ref) => <StyledArticleWrapper data-ndla-article="" ref={ref} {...props} />,
);

export const ArticleHGroup = styled("hgroup", {
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

export const ArticleActionWrapper = styled("div", {
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

interface ArticleTitleProps {
  heartButton?: ReactNode;
  contentType?: ContentType;
  competenceGoals?: ReactNode;
  id: string;
  lang?: string;
  title?: ReactNode;
  introduction?: ReactNode;
}

export const ArticleTitle = ({
  contentType,
  heartButton,
  title,
  lang,
  id,
  introduction,
  competenceGoals,
}: ArticleTitleProps) => {
  return (
    <ArticleHeader>
      <ArticleHGroup>
        {!!contentType && <ContentTypeBadgeNew contentType={contentType} />}
        {!!heartButton && <ArticleActionWrapper>{heartButton}</ArticleActionWrapper>}
        <Heading textStyle="heading.large" id={id} lang={lang} property="dct:title">
          {title}
        </Heading>
      </ArticleHGroup>
      {!!introduction && (
        <Text lang={lang} textStyle="body.xlarge" asChild consumeCss>
          <div>{introduction}</div>
        </Text>
      )}
      {competenceGoals}
    </ArticleHeader>
  );
};

interface Props {
  heartButton?: ReactNode;
  article: ArticleType;
  licenseBox?: ReactNode;
  contentType?: ContentType;
  children?: ReactNode;
  competenceGoals?: ReactNode;
  id: string;
  lang?: string;
}

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

  const licenseProps = licenseAttributes(copyright?.license?.license, lang, undefined);

  return (
    <ArticleWrapper {...licenseProps}>
      <ArticleTitle
        id={id}
        contentType={contentType}
        heartButton={heartButton}
        title={title}
        introduction={introduction}
        competenceGoals={competenceGoals}
        lang={lang}
      />
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
