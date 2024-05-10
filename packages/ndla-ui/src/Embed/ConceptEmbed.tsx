/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { ReactElement, ReactNode, useCallback, useMemo, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { Root, Trigger, Content, Anchor, Close, Portal } from "@radix-ui/react-popover";
import { IconButtonV2 } from "@ndla/button";
import { breakpoints, colors, mq, spacing, stackOrder } from "@ndla/core";
import { Cross } from "@ndla/icons/action";
import { COPYRIGHTED } from "@ndla/licenses";
import { Tooltip } from "@ndla/tooltip";
import { ConceptMetaData } from "@ndla/types-embed";
import { ConceptNotionV2, ConceptNotionData, ConceptType } from "./conceptComponents";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { HeartButtonType, RenderContext } from "./types";
import { Figure } from "../Figure";
import { Gloss } from "../Gloss";
import { EmbedByline } from "../LicenseByline";
import { Notion as UINotion } from "../Notion";
import { NotionImage } from "../Notion/NotionImage";

interface PopoverPosition {
  top?: number;
}

const PopoverWrapper = styled.div<PopoverPosition>`
  div[data-radix-popper-content-wrapper] {
    position: absolute !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    top: ${({ top }) => top}px !important;
    z-index: ${stackOrder.popover} !important;
  }

  ${mq.range({ until: breakpoints.tablet })} {
    div[data-radix-popper-content-wrapper] {
      // Fix for popover positioning on mobile.
      // If we modify all popovers we break license icons.
      // https://github.com/radix-ui/primitives/issues/1839
      position: fixed !important;
      transform: none !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw;
      z-index: ${stackOrder.popover} !important;
      height: 100vh;
      min-width: 100vw !important;
    }
  }
`;

const ImageWrapper = styled.div`
  float: right;
  padding-left: ${spacing.normal};
  position: relative;

  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
    padding-left: 0;
  }
`;

interface Props {
  embed: ConceptMetaData;
  fullWidth?: boolean;
  heartButton?: HeartButtonType;
  lang?: string;
  renderContext?: RenderContext;
}

const StyledButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-style: inherit;
  line-height: 1em;
  padding: 0 0 ${spacing.xxsmall} 0;
  margin-bottom: -${spacing.xxsmall};
  text-decoration: none;
  color: #000;
  position: relative;
  cursor: pointer;
  &:focus,
  &:hover {
    color: ${colors.brand.primary};
    outline: none;
  }
`;

export const ConceptEmbed = ({ embed, fullWidth, heartButton: HeartButton, lang, renderContext }: Props) => {
  const parsedContent = useMemo(() => {
    if (embed.status === "error" || !embed.data.concept.content) return undefined;
    return parse(embed.data.concept.content.htmlContent);
  }, [embed]);
  if (embed.status === "error" && embed.embedData.type === "inline") {
    return <span>{embed.embedData.linkText}</span>;
  }
  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type="concept" />;
  }

  const {
    data: { concept, visualElement },
  } = embed;

  if (embed.embedData.type === "block") {
    return (
      <BlockConcept
        fullWidth={fullWidth}
        title={concept.title}
        content={parsedContent}
        metaImage={concept.metaImage}
        copyright={concept.copyright}
        source={concept.source}
        visualElement={visualElement}
        heartButton={HeartButton}
        conceptHeartButton={HeartButton && <HeartButton embed={embed} />}
        conceptType={concept.conceptType}
        glossData={concept.glossData}
        lang={lang}
        exampleIds={embed.embedData.exampleIds}
        exampleLangs={embed.embedData.exampleLangs}
      />
    );
  }
  if (embed.embedData.type === "inline") {
    return (
      <InlineConcept
        title={concept.title}
        content={parsedContent}
        metaImage={concept.metaImage}
        copyright={concept.copyright}
        source={concept.source}
        visualElement={visualElement}
        linkText={embed.embedData.linkText}
        heartButton={HeartButton}
        conceptHeartButton={HeartButton && <HeartButton embed={embed} />}
        conceptType={concept.conceptType}
        glossData={concept.glossData}
        lang={lang}
        exampleIds={embed.embedData.exampleIds}
        exampleLangs={embed.embedData.exampleLangs}
      />
    );
  }
  return (
    <ConceptNotionV2
      title={concept.title}
      content={parsedContent}
      copyright={concept.copyright}
      source={concept.source}
      visualElement={visualElement}
      heartButton={HeartButton}
      conceptHeartButton={HeartButton && <HeartButton embed={embed} />}
      conceptType={concept.conceptType}
      glossData={concept.glossData}
      lang={lang}
      exampleIds={embed.embedData.exampleIds}
      exampleLangs={embed.embedData.exampleLangs}
      showTitle={renderContext !== "embed"}
    />
  );
};

interface InlineConceptProps extends ConceptNotionData {
  linkText: ReactNode;
  heartButton?: HeartButtonType;
  headerButtons?: ReactNode;
  conceptHeartButton?: ReactNode;
  exampleIds?: string;
  exampleLangs?: string;
}

const NotionButton = styled.span`
  background: none;
  border: none;
  font-family: inherit;
  font-style: inherit;
  line-height: 1em;
  text-decoration: none;
  position: relative;
  text-align: left;
  color: ${colors.concept.text};
  cursor: pointer;
  &:focus,
  &:hover,
  &:active,
  &[data-open="true"] {
    color: ${colors.concept.text};
    background-color: ${colors.concept.light};
  }
  display: inline;
  border-bottom: 5px double currentColor;
`;

const StyledAnchor = styled(Anchor)`
  ${mq.range({ until: breakpoints.tablet })} {
    position: fixed;
    top: 0;
  }
`;

const StyledAnchorSpan = styled.span`
  position: absolute;
  left: 50%;
  align-self: center;
`;

const getModalPosition = (anchor: HTMLElement) => {
  const article = anchor.closest(".c-article");
  const articlePos = article?.getBoundingClientRect();
  const anchorPos = anchor.getBoundingClientRect();
  return anchorPos.top - (articlePos?.top || -window.scrollY) + 240; // add 240 so that position is under the word
};

export const InlineConcept = ({
  title,
  content,
  copyright,
  source,
  visualElement,
  linkText,
  heartButton,
  conceptHeartButton,
  glossData,
  conceptType,
  headerButtons,
  lang,
  exampleIds,
  exampleLangs,
}: InlineConceptProps) => {
  const { t } = useTranslation();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [modalPos, setModalPos] = useState(-9999);

  const onOpenChange = useCallback((open: boolean) => {
    if (open) {
      const anchor = anchorRef.current;
      if (anchor) {
        const top = getModalPosition(anchor);
        setModalPos(top);
      }
    } else {
      setModalPos(-9999);
    }
  }, []);

  return (
    <Root modal={isMobile} onOpenChange={onOpenChange}>
      <StyledAnchor ref={anchorRef} asChild>
        <StyledAnchorSpan contentEditable={false} />
      </StyledAnchor>
      <Trigger asChild type={undefined}>
        <NotionButton role={"button"} data-open={modalPos !== -9999} tabIndex={0}>
          {linkText}
        </NotionButton>
      </Trigger>
      <Portal container={(anchorRef.current?.closest(".c-article") as HTMLElement | null) || undefined}>
        <PopoverWrapper top={modalPos}>
          <Content avoidCollisions={false} side="bottom" asChild>
            <ConceptNotionV2
              title={title}
              content={content}
              copyright={copyright}
              source={source}
              visualElement={visualElement}
              inPopover
              heartButton={heartButton}
              headerButtons={headerButtons}
              conceptHeartButton={conceptHeartButton}
              lang={lang}
              closeButton={
                <Close asChild>
                  <IconButtonV2 aria-label={t("close")} variant="ghost">
                    <Cross />
                  </IconButtonV2>
                </Close>
              }
              conceptType={conceptType}
              glossData={glossData}
              exampleIds={exampleIds}
              exampleLangs={exampleLangs}
            />
          </Content>
        </PopoverWrapper>
      </Portal>
    </Root>
  );
};

interface ConceptProps extends ConceptNotionData {
  fullWidth?: boolean;
  heartButton?: HeartButtonType;
  conceptHeartButton?: ReactElement;
  exampleIds?: string;
  exampleLangs?: string;
}

export const BlockConcept = ({
  title,
  content,
  metaImage,
  copyright,
  source,
  visualElement,
  fullWidth,
  heartButton,
  conceptHeartButton,
  glossData,
  conceptType,
  lang,
  exampleIds,
  exampleLangs,
}: ConceptProps) => {
  const { t } = useTranslation();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [modalPos, setModalPos] = useState(-9999);

  const visualElementType =
    visualElement?.embedData.resource === "brightcove" ? "video" : visualElement?.embedData.resource;

  const onOpenChange = useCallback((open: boolean) => {
    if (open) {
      const anchor = anchorRef.current;
      if (anchor) {
        const top = getModalPosition(anchor);
        setModalPos(top);
      }
    } else {
      setModalPos(-9999);
    }
  }, []);

  return (
    <Root modal={isMobile} onOpenChange={onOpenChange}>
      <StyledAnchor ref={anchorRef} />
      <Figure type={fullWidth ? "full" : "full-column"}>
        {conceptType === "concept" ? (
          <UINotion
            id=""
            title={title.title}
            text={content}
            lang={lang}
            visualElement={
              visualElement?.status === "success" && (
                <>
                  <ImageWrapper>
                    <Tooltip tooltip={t(`searchPage.resultType.${conceptType}`)}>
                      <Trigger asChild>
                        <StyledButton
                          type="button"
                          aria-label={t("concept.showDescription", {
                            title: title,
                          })}
                        >
                          {visualElement.resource === "image" ? (
                            <NotionImage
                              type={visualElementType}
                              src={visualElement.data.image.imageUrl}
                              alt={visualElement.data.alttext.alttext}
                            />
                          ) : metaImage ? (
                            <NotionImage
                              type={visualElementType}
                              src={metaImage?.url ?? ""}
                              alt={metaImage?.alt ?? ""}
                            />
                          ) : undefined}
                        </StyledButton>
                      </Trigger>
                    </Tooltip>
                  </ImageWrapper>
                  <Portal
                    container={
                      typeof document !== "undefined"
                        ? (document.querySelector(".c-article") as HTMLElement | null) || undefined
                        : undefined
                    }
                  >
                    <PopoverWrapper top={modalPos}>
                      <Content avoidCollisions={false} asChild side="bottom">
                        <ConceptNotionV2
                          title={title}
                          content={content}
                          copyright={copyright}
                          source={source}
                          visualElement={visualElement}
                          heartButton={heartButton}
                          conceptHeartButton={conceptHeartButton}
                          inPopover
                          lang={lang}
                          closeButton={
                            <Close asChild>
                              <IconButtonV2 aria-label={t("close")} variant="ghost">
                                <Cross />
                              </IconButtonV2>
                            </Close>
                          }
                          conceptType={conceptType}
                          glossData={glossData}
                        />
                      </Content>
                    </PopoverWrapper>
                  </Portal>
                </>
              )
            }
          />
        ) : (
          <Gloss
            glossData={glossData}
            title={title}
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
        {copyright && conceptType === "concept" && (
          <EmbedByline copyright={copyright} bottomRounded topRounded type={conceptType as ConceptType}>
            {copyright.license?.license.toLowerCase() !== COPYRIGHTED && conceptHeartButton}
          </EmbedByline>
        )}
      </Figure>
    </Root>
  );
};

export default ConceptEmbed;
