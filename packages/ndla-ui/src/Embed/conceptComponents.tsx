/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode, RefAttributes } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, misc, mq, spacing, stackOrder } from "@ndla/core";
import { ConceptData, ConceptVisualElementMeta } from "@ndla/types-embed";
import { ExternalEmbed, IframeEmbed } from ".";
import BrightcoveEmbed from "./BrightcoveEmbed";
import H5pEmbed from "./H5pEmbed";
import ImageEmbed from "./ImageEmbed";
import { Gloss } from "../Gloss";
import { LicenseContainerContent } from "../LicenseByline/EmbedByline";
import { Copyright } from "../types";

export type ConceptType = "concept" | "gloss";

export interface ConceptNotionData {
  title: ConceptData["concept"]["title"];
  content?: ReactNode;
  metaImage?: {
    url?: string;
    alt?: string;
  };
  copyright?: Copyright;
  source?: string;
  visualElement?: ConceptVisualElementMeta;
  conceptType: ConceptData["concept"]["conceptType"];
  glossData?: ConceptData["concept"]["glossData"];
  lang?: string;
}

interface ConceptNotionProps extends RefAttributes<HTMLDivElement>, Omit<ConceptNotionData, "metaImage"> {
  className?: string;
  closeButton?: ReactNode;
  previewAlt?: boolean;
  inPopover?: boolean;
  tags?: string[];
  subjects?: string[];
  headerButtons?: ReactNode;
  exampleIds?: string;
  exampleLangs?: string;
  showTitle?: boolean;
}

const NotionDialogText = styled.div`
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes("18px", 1.3)};
  color: ${colors.text.primary};
  font-family: ${fonts.sans};
`;

const NotionDialogContent = styled.div`
  padding-bottom: ${spacing.normal};
  display: flex;
  flex-direction: column;
`;

const ContentSpacing = styled.div`
  padding: ${spacing.normal};
  &[data-is-concept="false"] {
    margin-bottom: ${spacing.normal};
  }
`;

const notionContentCss = css`
  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: translate3d(0, -13px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  animation-name: animateIn;
  animation-duration: 300ms;
  background-color: white;
  z-index: ${stackOrder.offsetSingle};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  ${mq.range({ from: breakpoints.tablet })} {
    width: 500px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 720px;
    max-width: 60vw;
  }

  ${mq.range({ until: breakpoints.tablet })} {
    padding: ${spacing.small};
    z-index: ${stackOrder.popover};
    height: 100%;
    width: 100%;
    overflow: auto;
  }
`;

const NotionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 2px solid ${colors.brand.tertiary};
  padding-bottom: ${spacing.small};
  h1 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: 0;
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes("22px", 1.2)};
  }
  small {
    display: flex;
    ${fonts.sizes("20px", 1.2)};
    font-weight: ${fonts.weight.normal};
  }
  ${mq.range({ from: breakpoints.mobileWide })} {
    &[data-is-concept="true"] {
      small:before {
        display: inline-flex;
        align-self: center;
        margin: 0 ${spacing.xsmall};
        content: "";
        height: ${spacing.normal};
        width: 1px;
        background-color: ${colors.brand.greyLight};
      }
    }
  }
  &[data-is-concept="false"] {
    margin-bottom: ${spacing.large};
  }
`;

const ListWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
`;

const StyledNotionDialogContent = styled(NotionDialogContent)`
  padding-top: ${spacing.small};
  figure {
    width: 100% !important;
    padding: 0;
    margin: 0;
    padding-bottom: ${spacing.normal};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
  list-style: none;
  > li {
    font-family: ${fonts.sans};
    font-weight: ${fonts.weight.semibold};
    border-radius: ${misc.borderRadius};
    background-color: ${colors.brand.greyLightest};
    ${fonts.sizes("12px", 1.2)};
    padding: ${spacing.xxsmall};
  }
`;
const BylineWrapper = styled.div`
  padding: 0 ${spacing.normal} ${spacing.small} ${spacing.normal};
  span {
    font-family: ${fonts.sans};
    ${fonts.sizes("16px", "26px")};
  }
`;

export const ConceptNotionV2 = forwardRef<HTMLDivElement, ConceptNotionProps>(
  (
    {
      visualElement,
      title,
      content,
      source,
      copyright,
      closeButton,
      inPopover,
      previewAlt,
      tags,
      subjects,
      conceptType,
      glossData,
      headerButtons,
      lang,
      exampleIds,
      exampleLangs,
      showTitle = true,
      ...rest
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const isConcept = conceptType === "concept";
    return (
      <div css={inPopover ? notionContentCss : undefined} {...rest} ref={ref}>
        <ContentSpacing data-is-concept={isConcept}>
          <NotionHeader data-is-concept={isConcept}>
            {showTitle && (
              <h1>
                {isConcept && title.title}
                {<small data-is-concept={isConcept}>{t(`searchPage.resultType.${conceptType}`)}</small>}
              </h1>
            )}
            <ButtonWrapper>
              {headerButtons}
              {closeButton}
            </ButtonWrapper>
          </NotionHeader>
          {isConcept ? (
            <>
              <StyledNotionDialogContent>
                {visualElement?.resource === "image" ? (
                  <ImageEmbed embed={visualElement} lang={lang} />
                ) : visualElement?.resource === "brightcove" ? (
                  <BrightcoveEmbed embed={visualElement} />
                ) : visualElement?.resource === "h5p" ? (
                  <H5pEmbed embed={visualElement} />
                ) : visualElement?.resource === "iframe" ? (
                  <IframeEmbed embed={visualElement} />
                ) : visualElement?.resource === "external" ? (
                  <ExternalEmbed embed={visualElement} />
                ) : null}
                {content && <NotionDialogText lang={lang}>{content}</NotionDialogText>}
              </StyledNotionDialogContent>
              {tags && (
                <ListWrapper>
                  {`${t("notions.tags")}:`}
                  <StyledList>
                    {tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </StyledList>
                </ListWrapper>
              )}
              {subjects && (
                <ListWrapper>
                  {`${t("notions.usedIn")}:`}
                  <StyledList>
                    {subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </StyledList>
                </ListWrapper>
              )}
            </>
          ) : (
            <Gloss
              title={title}
              glossData={glossData!}
              audio={
                visualElement?.status === "success" && visualElement.resource === "audio"
                  ? {
                      src: visualElement.data.audioFile.url,
                      title: visualElement.data.title.title,
                    }
                  : undefined
              }
              exampleIds={exampleIds}
              exampleLangs={exampleLangs}
            />
          )}
        </ContentSpacing>
        {copyright && (
          <BylineWrapper>
            <LicenseContainerContent copyright={copyright} type={conceptType as ConceptType} />
          </BylineWrapper>
        )}
      </div>
    );
  },
);
