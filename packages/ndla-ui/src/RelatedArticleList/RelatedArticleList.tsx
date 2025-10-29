/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Children, type ComponentPropsWithoutRef, type ReactElement, type ReactNode, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLinkLine } from "@ndla/icons";
import { CardContent, CardHeading, CardRoot, Text, Heading, Button } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { linkOverlay } from "@ndla/styled-system/patterns";
import { LabelContainer } from "../Article/LabelContainer";
import type { HeadingLevel } from "../types";

interface RelatedArticleProps {
  title: string;
  introduction: string;
  to: string;
  linkInfo?: string;
  target?: string;
  badges?: ReactNode;
}

const StyledSpan = styled("span", {
  base: {
    display: "flex",
    gap: "3xsmall",
  },
});

export const RelatedArticle = ({
  title,
  introduction,
  to,
  badges,
  linkInfo = "",
  target = "",
}: RelatedArticleProps) => {
  return (
    <CardRoot data-embed-type="related-article">
      <CardContent>
        <LabelContainer>{badges}</LabelContainer>
        <CardHeading asChild consumeCss>
          <span>
            <SafeLink
              unstyled
              to={to}
              target={target}
              rel={linkInfo ? "noopener noreferrer" : undefined}
              css={linkOverlay.raw()}
            >
              <StyledSpan>
                {title}
                {target === "_blank" && <ExternalLinkLine />}
              </StyledSpan>
            </SafeLink>
          </span>
        </CardHeading>
        <Text dangerouslySetInnerHTML={{ __html: introduction }} />
        <Text color="text.subtle" textStyle="label.small">
          {linkInfo}
        </Text>
      </CardContent>
    </CardRoot>
  );
};

const HeadingWrapper = styled("div", {
  base: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
  },
});

const ArticlesWrapper = styled("div", {
  base: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "medium",
    tabletDown: {
      gridTemplateColumns: "1fr",
    },
  },
});

const StyledSection = styled("section", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "medium",
    clear: "both",
  },
});

const StyledButton = styled(Button, {
  base: {
    marginBlockStart: "xsmall",
  },
});

interface Props extends ComponentPropsWithoutRef<"section"> {
  children?: ReactElement[];
  articleCount?: number;
  headingLevel?: HeadingLevel;
  headingButtons?: ReactNode;
}

export const RelatedArticleList = ({
  children = [],
  articleCount,
  headingLevel: HeadingElement = "h2",
  headingButtons,
  ...rest
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const childCount = useMemo(() => articleCount ?? Children.count(children), [children, articleCount]);
  const childrenToShow = useMemo(
    () => (childCount > 2 && !expanded ? children?.slice(0, 2) : children),
    [childCount, children, expanded],
  );

  return (
    <StyledSection {...rest} data-embed-type="related-content-list">
      <HeadingWrapper>
        <Heading asChild consumeCss textStyle="title.large" fontWeight="bold">
          <HeadingElement>{t("related.title")}</HeadingElement>
        </Heading>
        {headingButtons}
      </HeadingWrapper>
      <ArticlesWrapper>{childrenToShow}</ArticlesWrapper>
      {childCount > 2 ? (
        <StyledButton variant="secondary" onClick={() => setExpanded((p) => !p)}>
          {t(`related.show${expanded ? "Less" : "More"}`)}
        </StyledButton>
      ) : null}
    </StyledSection>
  );
};
