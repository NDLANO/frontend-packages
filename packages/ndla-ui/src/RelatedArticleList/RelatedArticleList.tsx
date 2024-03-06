/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, Children, ComponentProps, ReactNode, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { breakpoints, colors, fonts, mq, spacing } from "@ndla/core";
import SafeLink from "@ndla/safelink";
import { Heading, HeadingLevel, Text } from "@ndla/typography";
import ContentTypeBadge from "../ContentTypeBadge";
import { contentTypes } from "../model/ContentType";

interface RelatedArticleProps {
  title: string;
  introduction: string;
  to: string;
  linkInfo?: string;
  target?: string;
  type?: string;
}

const TitleWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  align-items: flex-start;
  div {
    min-width: 34px;
    min-height: 34px;
    max-width: 34px;
    max-height: 34px;
  }
`;

const StyledRelatedArticle = styled.article`
  border-left: 6px solid var(--border-color, ${colors.brand.greyLight});
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  padding: 0px ${spacing.normal} 0px ${spacing.normal};
`;

const LinkInfo = styled(Text)`
  font-weight: ${fonts.weight.bold};
`;

const LinkText = styled(Text)`
  font-weight: ${fonts.weight.semibold};
`;

const colorMap = {
  [contentTypes.SUBJECT_MATERIAL]: colors.subjectMaterial.light,
  [contentTypes.TASKS_AND_ACTIVITIES]: colors.tasksAndActivities.background,
  [contentTypes.ASSESSMENT_RESOURCES]: colors.assessmentResource.background,
  [contentTypes.CONCEPT]: colors.concept.light,
  [contentTypes.SOURCE_MATERIAL]: colors.sourceMaterial.light,
  [contentTypes.LEARNING_PATH]: colors.learningPath.background,
  [contentTypes.SUBJECT]: colors.subject.light,
};

export const RelatedArticle = ({
  title,
  introduction,
  to,
  linkInfo = "",
  target = "",
  type = contentTypes.SUBJECT_MATERIAL,
}: RelatedArticleProps) => {
  return (
    <StyledRelatedArticle style={{ "--border-color": colorMap[type] } as CSSProperties}>
      <TitleWrapper>
        <ContentTypeBadge type={type} background size="small" />
        <LinkText element="span" textStyle="meta-text-medium" margin="none">
          <SafeLink to={to} target={target} rel={linkInfo ? "noopener noreferrer" : undefined}>
            {title}
          </SafeLink>
        </LinkText>
      </TitleWrapper>
      <Text textStyle="meta-text-small" margin="none" dangerouslySetInnerHTML={{ __html: introduction }} />
      <LinkInfo textStyle="content" margin="none">
        {linkInfo}
      </LinkInfo>
    </StyledRelatedArticle>
  );
};

const HeadingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
`;

const ArticlesWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  row-gap: ${spacing.large};
  ${mq.range({ until: breakpoints.tablet })} {
    grid-template-columns: 1fr;
  }
`;

interface Props extends ComponentProps<"section"> {
  children?: JSX.Element[];
  articleCount?: number;
  headingLevel?: HeadingLevel;
  headingButtons?: ReactNode;
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.normal};
`;

export const RelatedArticleList = ({
  children = [],
  articleCount,
  headingLevel = "h2",
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
    <StyledSection {...rest}>
      <HeadingWrapper>
        <Heading element={headingLevel} margin="none" headingStyle="list-title">
          {t("related.title")}
        </Heading>
        {headingButtons}
      </HeadingWrapper>
      <ArticlesWrapper>{childrenToShow}</ArticlesWrapper>
      {childCount > 2 ? (
        <ButtonV2 onClick={() => setExpanded((p) => !p)} variant="outline">
          {t(`related.show${expanded ? "Less" : "More"}`)}
        </ButtonV2>
      ) : null}
    </StyledSection>
  );
};
