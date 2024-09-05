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
import { Stack, styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { ArticleByline } from "./ArticleByline";
import { ContentTypeBadgeNew } from "..";
import { ContentType } from "../ContentTypeBadge/ContentTypeBadgeNew";
import { Article as ArticleType } from "../types";

const StyledArticleContent = styled(ark.section, {}, { baseComponent: true });

export const ArticleContent = forwardRef<HTMLElement, HTMLArkProps<"div"> & JsxStyleProps>(
  ({ className, ...props }, ref) => (
    <StyledArticleContent className={cx("ndla-article", className)} {...props} ref={ref} />
  ),
);

const StyledArticleWrapper = styled(
  ark.article,
  {
    base: {
      background: "background.default",
      display: "flex",
      flexDirection: "column",
      gap: "xxlarge",
      color: "text.default",
      alignItems: "center",
      width: "100%",
      overflowWrap: "break-word",
      position: "relative",
      "& mjx-stretchy-v > mjx-ext > mjx-c": {
        transform: "scaleY(100) translateY(0.075em)",
      },
      _after: {
        content: "",
        display: "table",
        clear: "both",
      },
    },
  },
  { baseComponent: true },
);

export const ArticleWrapper = forwardRef<HTMLElement, ComponentPropsWithRef<"article"> & JsxStyleProps>(
  (props, ref) => <StyledArticleWrapper data-ndla-article="" ref={ref} {...props} />,
);

export const ArticleHGroup = styled(
  ark.hgroup,
  {
    base: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
      "& h1": {
        overflowWrap: "anywhere",
      },
    },
  },
  { baseComponent: true },
);

export const ArticleHeader = styled(
  ark.header,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      gap: "medium",
      alignItems: "flex-start",
      width: "100%",
      paddingBlockStart: "xxlarge",
    },
  },
  { baseComponent: true },
);

export const ArticleFooter = styled(
  ark.footer,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      gap: "xxlarge",
      width: "100%",
      "& > :is(:last-child)": {
        paddingBlockEnd: "5xlarge",
      },
    },
  },
  { baseComponent: true },
);

const StyledStack = styled(Stack, {
  base: {
    width: "100%",
    minHeight: "xxlarge",
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
        <StyledStack justify="space-between" align="center" direction="row" gap="small">
          {!!contentType && <ContentTypeBadgeNew contentType={contentType} />}
          {heartButton}
        </StyledStack>
        <Heading textStyle="heading.medium" id={id} lang={lang} property="dct:title">
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

  return (
    <ArticleWrapper>
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
