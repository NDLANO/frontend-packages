/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
import { Root, Trigger, Content, Anchor, Close, Portal } from '@radix-ui/react-popover';
import { ButtonV2, IconButtonV2 } from '@ndla/button';
import { useIntersectionObserver } from '@ndla/hooks';
import { Cross } from '@ndla/icons/action';
import { breakpoints, colors, mq, spacing } from '@ndla/core';
import { getGroupedContributorDescriptionList, getLicenseByAbbreviation, getLicenseCredits } from '@ndla/licenses';
import { ModalV2 } from '@ndla/modal';
import { ConceptMetaData, ConceptVisualElementMeta } from '@ndla/types-embed';
import Tooltip from '@ndla/tooltip';
import { Notion as UINotion } from '../Notion';
import { Figure, FigureCaption } from '../Figure';
import { FigureLicenseDialogContent } from '../Figure/FigureLicenseDialogContent';
import { NotionImage } from '../Notion/NotionImage';
import { ConceptNotionV2, ConceptNotionData } from './conceptComponents';
import { css } from '@emotion/react';
import { Copyright } from '../types';

const BottomBorder = styled.div`
  margin-top: ${spacing.normal};
  border-bottom: 1px solid ${colors.brand.greyLight};
`;

interface PopoverPosition {
  preventOverflow?: boolean;
}

const PopoverWrapper = styled.div<PopoverPosition>`
  div[data-radix-popper-content-wrapper] {
    height: 5000px;
    ${({ preventOverflow }) =>
      preventOverflow &&
      css`
        position: absolute !important;
        bottom: 0;
      `}
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
      z-index: 9999 !important;
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
}

const StyledButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-style: inherit;
  line-height: 1em;
  padding: 0 0 4px 0;
  margin-bottom: -4px;
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

export const ConceptEmbed = ({ embed, fullWidth }: Props) => {
  if (embed.status === 'error') {
    return <span>{embed.embedData.linkText}</span>;
  }

  const {
    data: { concept, visualElement },
  } = embed;

  if (embed.embedData.type === 'block') {
    return (
      <BlockConcept
        fullWidth={fullWidth}
        title={concept.title.title}
        content={concept.content?.content}
        metaImage={concept.metaImage}
        copyright={concept.copyright}
        source={concept.source}
        visualElement={visualElement}
      />
    );
  } else if (embed.embedData.type === 'inline') {
    return (
      <InlineConcept
        title={concept.title.title}
        content={concept.content?.content}
        metaImage={concept.metaImage}
        copyright={concept.copyright}
        source={concept.source}
        visualElement={visualElement}
        linkText={embed.embedData.linkText}
      />
    );
  } else {
    return (
      <ConceptNotionV2
        title={concept.title.title}
        content={concept.content?.content}
        metaImage={concept.metaImage}
        copyright={concept.copyright}
        source={concept.source}
        visualElement={visualElement}
      />
    );
  }
};

interface InlineConceptProps extends ConceptNotionData {
  linkText: string;
}

const BaselineIcon = styled.span`
  display: block;
  border-bottom: 5px double currentColor;
`;

const NotionButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-style: inherit;
  line-height: 1em;
  padding: 0 0 4px 0;
  margin-bottom: -4px;
  text-decoration: none;
  position: relative;
  text-align: left;
  display: inline;
  color: ${colors.notion.dark};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${colors.notion.dark};
    color: ${colors.white};
    outline: none;
    ${BaselineIcon} {
      border-color: transparent;
    }
  }

  &:active {
    color: ${colors.notion.dark};
    background-color: ${colors.notion.light};
    ${BaselineIcon} {
      border-color: currentColor;
    }
  }
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

interface ConceptPopoverProps {
  title: string;
  content?: string;
  copyright?: Copyright;
  source?: string;
  visualElement?: ConceptVisualElementMeta;
}

const ConceptPopover = ({ title, content, copyright, source, visualElement }: ConceptPopoverProps) => {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const { entry } = useIntersectionObserver({ root: window.document, target: modalRef.current, threshold: 1 });
  console.log(entry);
  console.log(modalRef.current);

  return (
    <div ref={modalRef}>
      <ConceptNotionV2
        title={title}
        content={content}
        copyright={copyright}
        source={source}
        visualElement={visualElement}
        inPopover
        closeButton={
          <Close asChild>
            <IconButtonV2 aria-label={t('close')} variant="ghost">
              <Cross />
            </IconButtonV2>
          </Close>
        }
      />
    </div>
  );
};

const InlineConcept = ({ title, content, copyright, source, visualElement, linkText }: InlineConceptProps) => {
  const { t } = useTranslation();

  return (
    <Root modal={isMobile}>
      <StyledAnchor asChild>
        <StyledAnchorSpan />
      </StyledAnchor>
      <Trigger asChild>
        <NotionButton>
          {linkText}
          {<BaselineIcon />}
        </NotionButton>
      </Trigger>
      <Portal>
        <PopoverWrapper preventOverflow={false}>
          <Content avoidCollisions={false} side="bottom">
            <ConceptPopover
              title={title}
              content={content}
              copyright={copyright}
              source={source}
              visualElement={visualElement}
            />
          </Content>
        </PopoverWrapper>
      </Portal>
    </Root>
  );
};

interface ConceptProps extends ConceptNotionData {
  fullWidth?: boolean;
}

export const BlockConcept = ({
  title,
  content,
  metaImage,
  copyright,
  source,
  visualElement,
  fullWidth,
}: ConceptProps) => {
  const { t, i18n } = useTranslation();
  const [preventOverflow, setPreventOverflow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const licenseCredits = getLicenseCredits(copyright);
  const { creators, rightsholders, processors } = licenseCredits;
  const authors = creators.length || rightsholders.length ? creators.concat(rightsholders) : processors;
  const visualElementType =
    visualElement?.embedData.resource === 'brightcove' ? 'video' : visualElement?.embedData.resource;

  const groupedAuthors = getGroupedContributorDescriptionList(licenseCredits, i18n.language).map((item) => ({
    name: item.description,
    type: item.label,
  }));
  const license = copyright?.license && getLicenseByAbbreviation(copyright?.license?.license, i18n.language);

  const onOpenChange = (open: boolean) => {
    // if (open) {
    //   const anchor = anchorRef.current;
    //   if (anchor) {
    //     const anchorPos = anchor.getBoundingClientRect();
    //     const top = window.scrollY + anchorPos.top;
    //     setModalPos({ top });
    //   }
    // }
  };

  return (
    <Root modal={isMobile}>
      <StyledAnchor />
      <Figure resizeIframe type={fullWidth ? 'full' : 'full-column'}>
        <UINotion
          id=""
          title={title}
          text={content}
          visualElement={
            visualElement?.status === 'success' && (
              <>
                <ImageWrapper>
                  <Tooltip tooltip={t('searchPage.resultType.showNotion')}>
                    <Trigger asChild>
                      <StyledButton type="button" aria-label={t('concept.showDescription', { title: title })}>
                        {visualElement.resource === 'image' ? (
                          <NotionImage
                            type={visualElementType}
                            id={''}
                            src={visualElement.data.imageUrl}
                            alt={visualElement.data.alttext.alttext}
                          />
                        ) : metaImage ? (
                          <NotionImage
                            type={visualElementType}
                            id={''}
                            src={metaImage?.url ?? ''}
                            alt={metaImage?.alt ?? ''}
                          />
                        ) : undefined}
                      </StyledButton>
                    </Trigger>
                  </Tooltip>
                </ImageWrapper>
                <Portal>
                  <PopoverWrapper preventOverflow={false}>
                    <Content avoidCollisions={false} side="bottom">
                      <ConceptPopover
                        title={title}
                        content={content}
                        copyright={copyright}
                        source={source}
                        visualElement={visualElement}
                      />
                    </Content>
                  </PopoverWrapper>
                </Portal>
              </>
            )
          }
        />
        {copyright?.license && license ? (
          <FigureCaption
            figureId=""
            id=""
            authors={authors}
            licenseRights={license.rights}
            locale={i18n.language}
            hideIconsAndAuthors
            modalButton={
              <ButtonV2 variant="outline" size="small" shape="pill" onClick={() => setIsOpen(true)}>
                {t('concept.reuse')}
              </ButtonV2>
            }>
            <ModalV2 controlled isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {(close) => (
                <FigureLicenseDialogContent
                  authors={groupedAuthors}
                  locale={i18n.language}
                  title={title}
                  origin={copyright.origin}
                  license={license}
                  onClose={close}
                  type="concept"
                />
              )}
            </ModalV2>
          </FigureCaption>
        ) : (
          <BottomBorder />
        )}
      </Figure>
    </Root>
  );
};

export default ConceptEmbed;
