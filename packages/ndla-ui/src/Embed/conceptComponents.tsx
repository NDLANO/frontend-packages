/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, ReactNode, RefAttributes } from 'react';
import { ConceptVisualElementMeta } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { Root, Item, Header, Trigger, Content } from '@radix-ui/react-accordion';
import { getGroupedContributorDescriptionList, getLicenseByAbbreviation, getLicenseCredits } from '@ndla/licenses';
import { css } from '@emotion/react';
import { ButtonV2 } from '@ndla/button';
import { breakpoints, colors, fonts, misc, mq, spacing } from '@ndla/core';
import { ChevronDown } from '@ndla/icons/common';
import { parseMarkdown } from '@ndla/util';
import styled from '@emotion/styled';
import { NotionDialogContent, NotionDialogLicenses, NotionDialogText } from '@ndla/notion';
import { Figure, FigureCaption } from '../Figure';
import { NotionVisualElementType } from '../Notion';
import { classLicenses, FigureLicenseByline, FigureLicenseCta } from '../Figure/FigureLicense';
import { Copyright } from '../types';
import { getContributorGroups, getLicenseByNBTitle } from './BrightcoveEmbed';
import { ImageLicenseButtons } from './ImageEmbed';

export interface ConceptNotionData {
  title: string;
  content?: string;
  articlePath?: string;
  metaImage?: {
    url?: string;
    alt?: string;
  };
  copyright?: Copyright;
  source?: string;
  visualElement?: ConceptVisualElementMeta;
}

interface ConceptNotionProps extends RefAttributes<HTMLDivElement>, ConceptNotionData {
  className?: string;
  closeButton?: ReactNode;
}

const getVisualElement = (
  visualElement: ConceptVisualElementMeta,
  locale: string,
): NotionVisualElementType | undefined => {
  if (visualElement.status === 'error') {
    return undefined;
  }

  if (visualElement.resource === 'image') {
    return {
      resource: visualElement.resource,
      title: visualElement.data.title.title,
      copyright: visualElement.data.copyright,
      image: { src: visualElement.data.imageUrl, alt: visualElement.data.alttext.alttext },
      url: visualElement.data.imageUrl,
    };
  } else if (visualElement.resource === 'brightcove') {
    const licenseCode = getLicenseByNBTitle(visualElement.data.custom_fields.license) as string;
    return {
      resource: visualElement.resource,
      title: visualElement.data.name,
      url: `https://players.brightcove.net/${visualElement.embedData.account}/${visualElement.embedData.player}_default/index.html?videoId=${visualElement.embedData.videoid}`,
      copyright: {
        license: { license: licenseCode },
        ...getContributorGroups(visualElement.data.custom_fields),
      },
    };
  } else if (visualElement.resource === 'external' || visualElement.resource === 'iframe') {
    return {
      resource: visualElement.resource,
      url: visualElement.embedData.url,
      title: visualElement.embedData.url,
    };
  } else {
    return {
      resource: visualElement.resource,
      url: visualElement.data.h5pUrl,
      title: visualElement.embedData.title,
      copyright: {
        creators: visualElement.data.h5pLicenseInformation?.h5p.authors.map((author) => ({
          type: author.role,
          name: author.role,
        })),
      },
    };
  }
};

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
  padding: ${spacing.small};
  background-color: white;
  z-index: 1;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  ${mq.range({ from: breakpoints.tablet })} {
    width: 500px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 720px;
  }

  ${mq.range({ until: breakpoints.tablet })} {
    z-index: 9999;
    height: 100%;
    width: 100%;
  }
`;

const StyledIframe = styled.iframe<{ type?: string }>`
  aspect-ratio: 16 / 8;
  min-height: ${(p) => p.type === 'video' && '400px'};
`;

const NotionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.brand.tertiary};
  padding-bottom: ${spacing.small};
  h1 {
    flex-grow: 1;
    margin: 0;
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('22px', 1.2)};
  }
  small {
    padding-left: ${spacing.small};
    margin-left: ${spacing.xsmall};
    border-left: 1px solid ${colors.brand.greyLight};
    ${fonts.sizes('20px', 1.2)};
    font-weight: ${fonts.weight.normal};
  }
`;

const StyledAccordionContent = styled(Content)`
  background-color: ${colors.brand.lighter};
  padding: ${spacing.small};
  border-radius: ${misc.borderRadius};
  overflow: hidden;
  &[data-state='open'] {
    animation: slideDown 300ms ease-out;
  }
  &[data-state='closed'] {
    animation: slideUp 300ms ease-out;
  }
  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`;

const StyledRoot = styled(Root)`
  border-bottom: 1px solid ${colors.brand.greyLight};
`;

const StyledFigureCaption = styled(FigureCaption)`
  border-bottom: 0;

  h3 {
    margin: 0;
  }
`;

const StyledAccordionTrigger = styled(ButtonV2)`
  color: ${colors.brand.primary};
  border-color: ${colors.brand.primary};
  &[data-state='open'] {
    svg {
      transform: rotate(180deg);
    }
  }
  svg {
    transition: transform 300ms;
  }
`;

export const ConceptNotion = forwardRef<HTMLDivElement, ConceptNotionProps>(
  ({ visualElement, articlePath, title, content, source, copyright, closeButton, ...rest }, ref) => {
    const { t, i18n } = useTranslation();
    const licenseCredits = getLicenseCredits(copyright);
    const { creators, rightsholders, processors } = licenseCredits;
    const authors = creators.length || rightsholders.length ? creators.concat(rightsholders) : processors;

    const visualElementType =
      visualElement?.embedData.resource === 'brightcove' ? 'video' : visualElement?.embedData.resource;

    const notionVisualElement = visualElement ? getVisualElement(visualElement, i18n.language) : undefined;
    const visualElementLicense = getLicenseByAbbreviation(
      notionVisualElement?.copyright?.license?.license ?? '',
      i18n.language,
    );
    const visualElementLicenseCredits = getLicenseCredits(notionVisualElement?.copyright);
    const visualElementAuthors =
      visualElementLicenseCredits.creators.length || visualElementLicenseCredits.rightsholders.length
        ? visualElementLicenseCredits.creators.concat(visualElementLicenseCredits.rightsholders)
        : visualElementLicenseCredits.processors;
    const visualElementGroupedAuthors = getGroupedContributorDescriptionList(
      visualElementLicenseCredits,
      i18n.language,
    ).map((item) => ({
      name: item.description,
      type: item.label,
    }));
    return (
      <div css={notionContentCss} {...rest} ref={ref}>
        <NotionHeader>
          <h1>
            {title}
            <small>{t('searchPage.resultType.notionsHeading')}</small>
          </h1>
          {closeButton}
        </NotionHeader>
        <NotionDialogContent>
          {notionVisualElement && (
            <Figure resizeIframe type={'full-column'}>
              {notionVisualElement.image?.src ? (
                <img src={notionVisualElement.image.src} alt={notionVisualElement.image.alt} />
              ) : (
                <StyledIframe
                  allowFullScreen
                  type={visualElementType}
                  src={notionVisualElement?.url}
                  title={notionVisualElement?.title}
                />
              )}
              {visualElementLicense && (
                <StyledRoot type="single" collapsible>
                  <Item value="licenseInfo">
                    <StyledFigureCaption
                      figureId={''}
                      id={''}
                      modalButton={<></>}
                      reuseLabel={t('reuse')}
                      authors={visualElementAuthors}
                      licenseRights={visualElementLicense.rights}>
                      {visualElementLicense.abbreviation && (
                        <Header>
                          <Trigger asChild>
                            <StyledAccordionTrigger variant="outline" shape="pill" size="small" colorTheme="lighter">
                              {t('license.info')}
                              <ChevronDown />
                            </StyledAccordionTrigger>
                          </Trigger>
                        </Header>
                      )}
                    </StyledFigureCaption>
                    <StyledAccordionContent>
                      <div {...classLicenses()}>
                        <h1 {...classLicenses('title')}>{t(`license.${visualElementType}.rules`)}</h1>
                        <FigureLicenseByline
                          license={visualElementLicense}
                          messages={{
                            learnAboutLicenses: t('license.learnMore'),
                          }}
                          locale={i18n.language}
                        />
                        <FigureLicenseCta
                          authors={visualElementGroupedAuthors}
                          title={notionVisualElement?.title}
                          origin={notionVisualElement?.copyright?.origin}
                          messages={{ source: t('source'), title: t('title') }}>
                          {visualElementType === 'image' ? (
                            <ImageLicenseButtons
                              imageUrl={notionVisualElement.image?.src ?? ''}
                              title={notionVisualElement.title}
                              copyright={notionVisualElement.copyright}
                              articlePath={articlePath}
                            />
                          ) : null}
                        </FigureLicenseCta>
                      </div>
                    </StyledAccordionContent>
                  </Item>
                </StyledRoot>
              )}
            </Figure>
          )}
          <NotionDialogText>{parseMarkdown(content ?? '', 'body')}</NotionDialogText>
        </NotionDialogContent>
        <NotionDialogLicenses
          authors={authors.map((a) => a.name)}
          license={copyright?.license?.license ?? ''}
          source={parseMarkdown(source ?? '', 'body')}
        />
      </div>
    );
  },
);
