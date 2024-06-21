/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, forwardRef, ComponentPropsWithRef, useMemo, CSSProperties } from "react";
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

import { spacing, mq, breakpoints, fonts, colors, spacingUnit } from "@ndla/core";
import { Heading, Text } from "@ndla/typography";
import ArticleByline from "./ArticleByline";
import ArticleHeaderWrapper from "./ArticleHeaderWrapper";
import LayoutItem from "../Layout";
import MessageBox from "../Messages/MessageBox";
import { Article as ArticleType } from "../types";

export type ArticleModifier =
  | "clean"
  | "in-topic"
  | "subject-material"
  | "assessment-resources"
  | "tasks-and-activities"
  | "concept"
  | "source-material";

interface ArticleWrapperProps extends ComponentPropsWithRef<"article"> {
  modifier?: ArticleModifier;
}

const StyledArticle = styled.article`
  font-family: ${fonts.serif};
  background: ${colors.white};
  margin-top: ${spacing.large};
  margin-right: auto;
  margin-bottom: ${spacing.normal};
  margin-left: auto;
  overflow-wrap: break-word;
  ${fonts.sizes("18px", "29px")};
  position: relative;

  mjx-stretchy-v > mjx-ext > mjx-c {
    transform: scaleY(100) translateY(0.075em);
  }

  > section > p {
    &:not([class]) {
      margin-bottom: 29px;
    }
  }

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes("18px", "29px")}; //This is probably not needed, but it's here to be sure.

    > section > p {
      &:not([class]) {
        margin-bottom: 35px;
      }
    }
    padding: 0 ${spacing.normal} ${spacing.normal};
    margin-bottom: ${spacing.large};
    margin-top: -${spacingUnit * 6}px;
    padding-top: ${spacing.xlarge};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding-bottom: ${spacing.large};
    margin-bottom: ${spacing.large};
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  p {
    margin-top: 0;
  }
`;

// Make sure to wrap modifiers in & {} to avoid specificity issues
const articleModifiers: Partial<Record<ArticleModifier, SerializedStyles>> = {
  clean: css`
    & {
      margin-top: ${spacing.normal} !important;
      padding: ${spacing.small} !important;
      ${mq.range({ from: breakpoints.tablet })} {
        padding: 0 !important;
      }
      border: none;
    }
  `,
  "in-topic": css`
    & {
      margin-top: 0 !important;
      padding: 0 !important;
      padding-left: ${spacing.medium} !important;
    }
  `,
};

const borderCss = css`
  ${mq.range({ from: breakpoints.tablet })} {
    border: 2px solid var(--color);
  }
`;

export const ArticleWrapper = forwardRef<HTMLElement, ArticleWrapperProps>(({ children, modifier, ...rest }, ref) => {
  const borderColor = useMemo(() => {
    let color = undefined;
    if (modifier === "subject-material") {
      color = colors.subjectMaterial.light;
    } else if (modifier === "assessment-resources") {
      color = colors.assessmentResource.background;
    } else if (modifier === "tasks-and-activities") {
      color = colors.tasksAndActivities.background;
    } else if (modifier === "concept") {
      color = colors.concept.light;
    } else if (modifier === "source-material") {
      color = colors.sourceMaterial.light;
    }
    if (color) {
      return { "--color": color } as CSSProperties;
    }
    return undefined;
  }, [modifier]);

  return (
    <StyledArticle
      css={[borderColor ? borderCss : undefined, modifier ? articleModifiers[modifier] : undefined]}
      style={borderColor}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledArticle>
  );
});

type ArticleTitleProps = {
  icon?: ReactNode;
  label?: string;
  children: ReactNode;
  id: string;
  lang?: string;
};

const TitleLabelText = styled(Text)`
  color: #757575;
  text-transform: uppercase;
  font-family: ${fonts.sans};
`;

const ArticleTitleWrapper = styled.div`
  display: flex;
  gap: ${spacing.normal};
  align-items: flex-start;
  h1 {
    overflow-wrap: anywhere;
  }
  padding-bottom: ${spacing.medium};
  [data-badge] {
    flex-shrink: 0;
  }
`;

export const ArticleTitle = ({ children, icon, label, id, lang }: ArticleTitleProps) => (
  <ArticleTitleWrapper>
    {icon}
    <hgroup>
      {!!label && (
        <TitleLabelText textStyle="meta-text-medium" margin="none">
          {label}
        </TitleLabelText>
      )}
      <Heading element="h1" margin="none" headingStyle="h1-resource" id={id} tabIndex={-1} lang={lang}>
        {children}
      </Heading>
    </hgroup>
  </ArticleTitleWrapper>
);

type ArticleIntroductionProps = {
  children: ReactNode;
  lang?: string;
};

export const ArticleIntroduction = ({ children, lang }: ArticleIntroductionProps) => {
  if (children) {
    return (
      <Text textStyle="ingress" element="div" lang={lang}>
        {children}
      </Text>
    );
  }
  return null;
};

type Messages = {
  label: string;
  messageBox?: string;
};
const MSGboxWrapper = styled.div`
  margin-bottom: 50px;
`;

const ArticleFavoritesButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  transform: translate(${spacing.xsmall}, -${spacing.normal});
  ${mq.range({ from: breakpoints.tablet })} {
    transform: translate(${spacing.normal}, -${spacing.medium});
  }
`;

type Props = {
  heartButton?: ReactNode;
  article: ArticleType;
  icon?: ReactNode;
  licenseBox?: ReactNode;
  modifier?: ArticleModifier;
  children?: ReactNode;
  messages: Messages;
  messageBoxLinks?: [];
  competenceGoals?: ReactNode;
  id: string;
  lang?: string;
};

export const Article = ({
  article,
  icon,
  licenseBox,
  modifier,
  messages,
  messageBoxLinks,
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
    <ArticleWrapper modifier={modifier} data-ndla-article="">
      <LayoutItem layout="center">
        {messages.messageBox && (
          <MSGboxWrapper>
            <MessageBox links={messageBoxLinks}>{messages.messageBox}</MessageBox>
          </MSGboxWrapper>
        )}
        <ArticleHeaderWrapper competenceGoals={competenceGoals}>
          {heartButton ? <ArticleFavoritesButtonWrapper>{heartButton}</ArticleFavoritesButtonWrapper> : null}
          <ArticleTitle id={id} icon={icon} label={messages.label} lang={lang}>
            {title}
          </ArticleTitle>
          <ArticleIntroduction lang={lang}>{introduction}</ArticleIntroduction>
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">{content}</LayoutItem>
      <LayoutItem layout="center">
        <ArticleByline
          footnotes={footNotes}
          authors={authors}
          suppliers={copyright?.rightsholders}
          published={published}
          license={copyright?.license?.license ?? ""}
          licenseBox={licenseBox}
        />
      </LayoutItem>
      <LayoutItem layout="extend">{children}</LayoutItem>
    </ArticleWrapper>
  );
};

export default Article;
