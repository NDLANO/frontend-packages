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
import {
  getGroupedContributorDescriptionList,
  getLicenseByAbbreviation,
  getLicenseByNBTitle,
  getLicenseCredits,
} from '@ndla/licenses';
import { css } from '@emotion/react';
import { ButtonV2 } from '@ndla/button';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { parseMarkdown } from '@ndla/util';
import styled from '@emotion/styled';
import { NotionDialogContent, NotionDialogLicenses, NotionDialogText } from '@ndla/notion';
import { Figure, FigureCaption } from '../Figure';
import { NotionVisualElementType } from '../Notion';
import { classLicenses, FigureLicenseByline, FigureLicenseCta } from '../Figure/FigureLicense';
import { Copyright } from '../types';
import { getContributorGroups } from './BrightcoveEmbed';

export interface ConceptNotionData {
  title: string;
  content?: string;
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
  } else if (visualElement.resource === 'external') {
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
        creators: visualElement.data.h5pLicenseInformation.h5p.authors.map((author) => ({
          type: author.role,
          name: author.role,
        })),
      },
    };
  }
};

const notionContentCss = css`
  overflow: auto;
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
    width: 100vw;
    height: 100vh;
  }
`;

const StyledIframe = styled.iframe<{ type?: string }>`
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
  /* background-color: ${colors.brand.tertiary}; */
`;

export const ConceptNotion = forwardRef<HTMLDivElement, ConceptNotionProps>(
  ({ visualElement, title, content, source, copyright, closeButton, ...rest }, ref) => {
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
          <Figure resizeIframe type={'full-column'}>
            {notionVisualElement && notionVisualElement.image?.src ? (
              <img src={notionVisualElement.image.src} alt={notionVisualElement.image.alt} />
            ) : (
              <StyledIframe
                allowFullScreen
                type={visualElementType}
                src={notionVisualElement?.url}
                title={notionVisualElement?.title}
              />
            )}
            <Root type="single" collapsible>
              <Item value="licenseInfo">
                <Header>
                  <FigureCaption
                    figureId={''}
                    id={''}
                    modalButton={<></>}
                    reuseLabel={t('reuse')}
                    authors={visualElementAuthors}
                    licenseRights={visualElementLicense.rights}>
                    <Trigger asChild>
                      <ButtonV2>Skjul lisensinformasjon</ButtonV2>
                    </Trigger>
                  </FigureCaption>
                </Header>
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
                      messages={{ source: t('source'), title: t('title') }}></FigureLicenseCta>
                  </div>
                </StyledAccordionContent>
              </Item>
            </Root>
          </Figure>
          <NotionDialogText>{parseMarkdown(content ?? '', 'body')}</NotionDialogText>
        </NotionDialogContent>
        <NotionDialogLicenses
          authors={authors.map((a) => a.name)}
          license={copyright?.license?.license ?? ''}
          source={source}
        />
      </div>
    );
  },
);
