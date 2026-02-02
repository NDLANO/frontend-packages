/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { StyledProps } from "@ndla/styled-system/types";
import { ark, type HTMLArkProps } from "@ark-ui/react";
import { Heading, Text } from "@ndla/primitives";
import { cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { type ComponentPropsWithRef, type ReactNode, forwardRef } from "react";
import { BadgesContainer } from "./BadgesContainer";

const StyledArticleContent = styled(ark.section, {}, { baseComponent: true });

export const ArticleContent = forwardRef<HTMLElement, HTMLArkProps<"div"> & StyledProps>(
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

export const ArticleWrapper = forwardRef<HTMLElement, ComponentPropsWithRef<"article"> & StyledProps>((props, ref) => (
  <StyledArticleWrapper data-ndla-article="" ref={ref} {...props} />
));

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
      overflowWrap: "anywhere",
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

const InfoWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "small",
    width: "100%",
    minHeight: "xxlarge",
  },
});

const StyledWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "small",
    flexWrap: "wrap",
    alignItems: "center",
  },
});

interface ArticleTitleProps {
  badges?: ReactNode;
  heartButton?: ReactNode;
  competenceGoals?: ReactNode;
  id: string;
  lang?: string;
  title?: ReactNode;
  introduction?: ReactNode;
  disclaimer?: ReactNode;
  children?: ReactNode;
}

export const ArticleTitle = ({
  badges,
  heartButton,
  title,
  lang,
  id,
  introduction,
  competenceGoals,
  disclaimer,
  children,
}: ArticleTitleProps) => {
  return (
    <ArticleHeader>
      <ArticleHGroup>
        {(!!badges || !!heartButton) && (
          <InfoWrapper>
            {!!badges && <BadgesContainer>{badges}</BadgesContainer>}
            {heartButton}
          </InfoWrapper>
        )}
        <Heading textStyle="heading.medium" id={id} lang={lang} property="dct:title">
          {title}
        </Heading>
      </ArticleHGroup>
      {!!introduction && (
        <Text lang={lang} textStyle="body.xlarge" asChild consumeCss>
          <div>{introduction}</div>
        </Text>
      )}
      <StyledWrapper>
        {competenceGoals}
        {disclaimer}
      </StyledWrapper>
      {children}
    </ArticleHeader>
  );
};
