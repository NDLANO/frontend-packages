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
import { JsxStyleProps, StyledVariantProps, SystemStyleObject } from "@ndla/styled-system/types";
import { ArticleByline } from "./ArticleByline";
import { ContentTypeBadgeNew } from "..";
import { ContentType } from "../ContentTypeBadge/ContentTypeBadgeNew";
import { Article as ArticleType } from "../types";

const articlePadding: SystemStyleObject = {
  paddingInline: "8%",
};

const paddingBlockEnd: SystemStyleObject = {
  paddingBlockEnd: "xsmall",
  tablet: {
    paddingBlockEnd: "medium",
  },
  desktop: {
    paddingBlockEnd: "xxlarge",
  },
};

const paddingBlockStart: SystemStyleObject = {
  paddingBlockStart: "xsmall",
  tablet: {
    paddingBlockStart: "medium",
  },
  desktop: {
    paddingBlockStart: "xxlarge",
  },
};

export const ArticlePadding = styled(
  ark.div,
  {
    base: {
      ...articlePadding,
      width: "100%",
    },
    variants: {
      padStart: {
        true: paddingBlockStart,
      },
      padEnd: {
        true: paddingBlockEnd,
      },
    },
  },
  { baseComponent: true },
);

const StyledArticleContent = styled(
  ark.section,
  {
    base: {
      background: "surface.default",
    },
    variants: {
      padded: {
        true: {
          ...articlePadding,
          ...paddingBlockStart,
          ...paddingBlockEnd,
        },
      },
    },
  },
  { baseComponent: true },
);

type ArticleContentVariantProps = StyledVariantProps<typeof StyledArticleContent>;

export const ArticleContent = forwardRef<HTMLElement, HTMLArkProps<"div"> & JsxStyleProps & ArticleContentVariantProps>(
  ({ className, ...props }, ref) => (
    <StyledArticleContent className={cx("ndla-article", className)} {...props} ref={ref} />
  ),
);

const StyledArticleWrapper = styled(
  ark.article,
  {
    base: {
      display: "flex",
      flexDirection: "column",
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
      display: "grid",
      width: "100%",
      gridTemplateColumns: "auto 1fr auto",
      gridTemplateAreas: `
      "badge button button"
      "title title title"
       `,
      rowGap: "xsmall",
      alignItems: "flex-start",
      "& h1": {
        overflowWrap: "anywhere",
      },
    },
  },
  { baseComponent: true },
);

export const ArticleBadgeWrapper = styled(
  ark.div,
  {
    base: {
      gridArea: "badge",
    },
  },
  { baseComponent: true },
);

export const ArticleHeading = styled(Heading, {
  base: {
    gridArea: "title",
  },
});

export const ArticleActionWrapper = styled(
  ark.div,
  {
    base: {
      gridArea: "button",
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
  },
  { baseComponent: true },
);

export const ArticleHeader = styled(
  ark.header,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      background: "surface.default",
      gap: "medium",
      alignItems: "flex-start",
      width: "100%",
    },
    variants: {
      padded: {
        true: {
          ...articlePadding,
          ...paddingBlockStart,
        },
      },
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
      background: "surface.default",
      gap: "xxlarge",
      width: "100%",
    },
    variants: {
      padded: {
        true: {
          ...articlePadding,
          ...paddingBlockEnd,
        },
      },
    },
  },
  { baseComponent: true },
);

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
    <ArticleHeader padded>
      <ArticleHGroup>
        {!!contentType && (
          <ArticleBadgeWrapper asChild>
            <ContentTypeBadgeNew contentType={contentType} />
          </ArticleBadgeWrapper>
        )}
        <ArticleHeading textStyle="heading.large" id={id} lang={lang}>
          {title}
        </ArticleHeading>
        {!!heartButton && <ArticleActionWrapper>{heartButton}</ArticleActionWrapper>}
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
      <ArticleContent padded>{content}</ArticleContent>
      <ArticleFooter padded>
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
