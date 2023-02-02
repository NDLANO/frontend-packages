/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Root, Trigger, Content, Anchor, Close, Portal } from '@radix-ui/react-popover';
import { ButtonV2, IconButtonV2 } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { ShortText } from '@ndla/icons/common';
import { breakpoints, colors, mq, spacing } from '@ndla/core';
import { getGroupedContributorDescriptionList, getLicenseByAbbreviation, getLicenseCredits } from '@ndla/licenses';
import { ModalV2 } from '@ndla/modal';
import { ConceptMetaData } from '@ndla/types-embed';
import Tooltip from '@ndla/tooltip';
import { Notion as UINotion } from '../Notion';
import { Figure, FigureCaption } from '../Figure';
import { FigureLicenseDialogContent } from '../Figure/FigureLicenseDialogContent';
import { NotionImage } from '../Notion/NotionImage';
import { ConceptNotion, ConceptNotionData } from './conceptComponents';

const BottomBorder = styled.div`
  margin-top: ${spacing.normal};
  border-bottom: 1px solid ${colors.brand.greyLight};
`;

const fixPopoverMobileCss = css`
  ${mq.range({ until: breakpoints.mobileWide })} {
    + div[data-radix-popper-content-wrapper] {
      // Fix for popover positioning on mobile.
      // If we modify all popovers we break license icons.
      // https://github.com/radix-ui/primitives/issues/1839
      transform: none !important;
    }
  }
`;

const ImageWrapper = styled.div`
  float: right;
  padding-left: ${spacing.normal};
  position: relative;
`;

interface Props {
  embed: ConceptMetaData;
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

export const ConceptEmbed = ({ embed }: Props) => {
  if (embed.status === 'error') {
    return <div>Failed to fetch embed</div>;
  }

  const {
    data: { concept, visualElement },
  } = embed;

  if (embed.embedData.type === 'block') {
    return (
      <BlockConcept
        title={concept.title.title}
        content={concept.content?.content}
        metaImage={concept.metaImage}
        copyright={concept.copyright}
        source={concept.source}
        visualElement={visualElement}
      />
    );
  } else {
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
  }
};

interface InlineConceptProps extends ConceptNotionData {
  linkText: string;
}

const BaselineIcon = styled(ShortText)`
  position: absolute;
  margin: calc(0.5em + 1px) auto 0;
  left: -2px;
  color: ${colors.brand.secondary};
  height: 1.1em;
  width: 1.1em;
  transition-duration: 0.5s;
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
  color: #000;
  position: relative;
  cursor: pointer;
  ${fixPopoverMobileCss};
  &:focus,
  &:hover {
    color: ${colors.brand.primary};
    outline: none;
    ${BaselineIcon} {
      color: ${colors.brand.primary};
      transform: scale(1.2, 1);
      transform-origin: top left;
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
  display: flex;
  display: block;
  align-self: center;
`;

const InlineConcept = ({
  title,
  content,
  metaImage,
  copyright,
  source,
  visualElement,
  linkText,
}: InlineConceptProps) => {
  const { t } = useTranslation();
  return (
    <Root>
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
        <Content asChild side="bottom">
          <ConceptNotion
            title={title}
            content={content}
            metaImage={metaImage}
            copyright={copyright}
            source={source}
            visualElement={visualElement}
            closeButton={
              <Close asChild>
                <IconButtonV2 aria-label={t('close')} variant="ghost">
                  <Cross />
                </IconButtonV2>
              </Close>
            }
          />
        </Content>
      </Portal>
    </Root>
  );
};

interface ConceptProps extends ConceptNotionData {}

export const BlockConcept = ({ title, content, metaImage, copyright, source, visualElement }: ConceptProps) => {
  const { t, i18n } = useTranslation();
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

  return (
    <Root>
      <StyledAnchor />
      <Figure resizeIframe type={'full-column'}>
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
                  <Content asChild side="bottom">
                    <ConceptNotion
                      title={title}
                      content={content}
                      metaImage={metaImage}
                      copyright={copyright}
                      source={source}
                      visualElement={visualElement}
                      closeButton={
                        <Close asChild>
                          <IconButtonV2 aria-label={t('close')} variant="ghost">
                            <Cross />
                          </IconButtonV2>
                        </Close>
                      }
                    />
                  </Content>
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
