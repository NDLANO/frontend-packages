/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, misc, mq, spacing } from "@ndla/core";
import { Additional, Core, HumanMaleBoard } from "@ndla/icons/common";
import { SafeLink } from "@ndla/safelink";
import ContentTypeBadge from "../ContentTypeBadge";
import * as contentTypes from "../model/ContentType";
import { Resource } from "../types";

const listElementActiveColor = (contentType?: string) => {
  switch (contentType) {
    case contentTypes.SUBJECT_MATERIAL:
      return colors.subjectMaterial.dark;
    case contentTypes.TASKS_AND_ACTIVITIES:
      return colors.tasksAndActivities.dark;
    case contentTypes.ASSESSMENT_RESOURCES:
      return colors.assessmentResource.dark;
    case contentTypes.CONCEPT:
      return colors.concept.text;
    case contentTypes.SOURCE_MATERIAL:
      return colors.sourceMaterial.dark;
    case contentTypes.LEARNING_PATH:
      return colors.learningPath.dark;
    default:
      break;
  }
  return "none";
};

const fadeInAdditionalsKeyframe = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-10px, 0px, 0px);
    position: absolute;
  }
  49% {
    position: absolute;
  }
  50% {
    position: static;
    opacity: 0;
    transform: translate3d(-10px, 0px, 0px);
  }
  100% {
    position: static;
    opacity: 1;
    height: auto;
  }
`;

const ListElement = styled.li`
  border: 1px solid ${colors.brand.neutral7};
  border-radius: ${misc.borderRadius};
  background: ${colors.white};
  margin-bottom: ${spacing.xsmall};
  display: grid;
  align-items: center;
  grid-template-areas:
    "badge resourceType typeWrapper"
    "badge resourceLink typeWrapper";
  grid-row-gap: ${spacing.xsmall};
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;

  padding: ${spacing.small};
  &[data-additional="true"] {
    border-style: dashed;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    animation: ${fadeInAdditionalsKeyframe};
  }

  * {
    transition:
      height ease-out 0.2s,
      width ease-out 0.2s;
  }
  &[data-active="true"] {
    &:before {
      ${mq.range({ from: breakpoints.tablet })} {
        content: "";
        display: block;
        position: absolute;
        width: ${spacing.small};
        height: ${spacing.small};
        border-radius: 100%;
        transform: translate(-${spacing.mediumlarge});
        background-color: var(--contentTypeBg);
      }
    }
  }
  &[hidden] {
    display: none;
  }
  [data-badge-wrapper="true"] {
    &:has(+ a:hover) {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  &:not([data-content-type]) {
    grid-template-areas: "badge resourceLink typeWrapper";
    grid-row-gap: 0;
    align-items: center;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    grid-template-areas: "badge resourceLink resourceType typeWrapper";
    grid-row-gap: 0;
    align-items: center;
  }
`;

const ResourceLink = styled(SafeLink)`
  grid-area: resourceLink;
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: ${fonts.weight.semibold};
  box-shadow: none;
  &[data-active="false"] {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  color: ${colors.brand.dark};
  ${fonts.sizes("16px", "26px")};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes("18px", "26px")};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes("20px", "26px")};
  }
  &:hover {
    text-decoration: none;
  }
`;

const TitleContainer = styled.div`
  align-items: normal;
  display: flex;
  flex-direction: column;
  ${mq.range({ from: breakpoints.desktop })} {
    align-items: center;
    flex-direction: row;
  }
`;

const ContentBadgeWrapper = styled.div`
  grid-area: badge;
  display: flex;
  flex: 0 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  box-sizing: content-box;
  padding-right: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding-right: ${spacing.small};
    padding-left: ${spacing.xsmall};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    align-items: center;
    padding-right: ${spacing.nsmall};
  }
`;

const TypeWrapper = styled.div`
  grid-area: typeWrapper;
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  ${mq.range({ from: breakpoints.desktop })} {
    align-items: center;
  }
`;

const ContentTypeName = styled.span`
  grid-area: resourceType;
  font-family: ${fonts.sans};
  ${fonts.sizes("14px", "18px")};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text.light};
  text-align: left;
  ${mq.range({ from: breakpoints.desktop })} {
    padding-left: 0;
    text-align: right;
    margin: 0 ${spacing.xsmall};
  }
`;

const CurrentSmall = styled.small`
  text-decoration: none;
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.normal};
  white-space: nowrap;
  ${mq.range({ from: breakpoints.desktop })} {
    padding: 0 ${spacing.xsmall};
  }
`;

interface Props {
  id: string;
  showContentTypeDescription?: boolean;
  contentTypeName?: string;
  contentTypeDescription?: string;
  extraBottomMargin?: boolean;
  showAdditionalResources?: boolean;
  language?: string;
  access?: "teacher";
  heartButton?: (path: string) => ReactNode;
}

const IconWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const ResourceItem = ({
  id,
  contentTypeName,
  contentTypeDescription,
  name,
  path,
  contentType,
  active,
  additional,
  showAdditionalResources,
  access,
  language,
  heartButton,
}: Props & Resource) => {
  const { t } = useTranslation();
  const accessId = `${id}-teacher`;
  const coreId = `${id}-core`;
  const additionalId = `${id}-additional`;
  const describedBy = `${coreId} ${additionalId} ${accessId}`;
  const hidden = additional ? !showAdditionalResources : false;
  const listElementVars = useMemo(() => {
    if (!contentType) return {};
    return {
      "--contentTypeBg": listElementActiveColor(contentType),
    } as unknown as CSSProperties;
  }, [contentType]);

  return (
    <ListElement
      aria-current={active ? "page" : undefined}
      hidden={hidden && !active}
      data-active={active}
      data-additional={additional}
      data-content-type={contentTypeName}
      style={listElementVars}
    >
      <ContentBadgeWrapper data-badge-wrapper={!active}>
        <ContentTypeBadge type={contentType ?? ""} background border={false} />
      </ContentBadgeWrapper>
      <ResourceLink
        to={path}
        lang={language === "nb" ? "no" : language}
        aria-current={active ? "page" : undefined}
        aria-describedby={describedBy}
        disabled={active}
        data-active={active}
      >
        <TitleContainer>
          <div>{name}</div>
          {active ? <CurrentSmall>{t("resource.youAreHere")}</CurrentSmall> : undefined}
        </TitleContainer>
      </ResourceLink>
      {contentTypeName && <ContentTypeName>{contentTypeName}</ContentTypeName>}
      <TypeWrapper>
        {access && access === "teacher" && (
          <IconWrapper aria-label={t("article.access.onlyTeacher")} title={t("article.access.onlyTeacher")}>
            <HumanMaleBoard id={accessId} />
          </IconWrapper>
        )}
        {showAdditionalResources && contentTypeDescription && (
          <>
            {additional && (
              <IconWrapper id={additionalId} aria-label={contentTypeDescription} title={contentTypeDescription}>
                <Additional color={colors.brand.dark} size="normal" />
              </IconWrapper>
            )}
            {!additional && (
              <IconWrapper id={coreId} aria-label={contentTypeDescription} title={contentTypeDescription}>
                <Core color={colors.brand.primary} size="normal" />
              </IconWrapper>
            )}
          </>
        )}
        {heartButton?.(path)}
      </TypeWrapper>
    </ListElement>
  );
};

export default ResourceItem;
