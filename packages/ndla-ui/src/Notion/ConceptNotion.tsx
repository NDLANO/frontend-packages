/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */
import styled from '@emotion/styled';

import { useEffect } from 'react';
//@ts-ignore
import { initArticleScripts } from '@ndla/article-scripts';
import { useTranslation } from 'react-i18next';
import { breakpoints, mq, spacing } from '@ndla/core';
import { parseMarkdown } from '@ndla/util';
import { getLicenseCredits } from '@ndla/licenses';
import Notion, { NotionDialogContent, NotionDialogText, NotionDialogLicenses } from '@ndla/notion';
import { Notion as UINotion } from '.';
import { NotionImage } from './NotionImage';
import NotionVisualElement from './NotionVisualElement';
import type { NotionVisualElementType } from './NotionVisualElement';
import FigureNotion from './FigureNotion';
import { Copyright } from '../types';
import { FigureType } from '../Figure';

const ImageWrapper = styled.div`
  float: right;
  padding-left: ${spacing.normal};
  position: relative;

  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
    padding-left: 0;
  }
`;

export interface ConceptNotionType {
  id: number;
  copyright?: Partial<Copyright>;
  title: string;
  text: string;
  visualElement?: NotionVisualElementType;
  source?: string;
  image?: {
    src: string;
    alt: string;
  };
}
interface Props {
  type?: 'image' | 'video' | 'h5p' | 'iframe' | 'external';
  concept: ConceptNotionType;
  disableScripts?: boolean;
  hideIconsAndAuthors?: boolean;
  figureType?: FigureType;
}

const ConceptNotion = ({ concept, disableScripts, type, hideIconsAndAuthors, figureType }: Props) => {
  const notionId = `notion-${concept.id}`;
  const figureId = `notion-figure-${concept.id}`;
  const visualElementId = `visual-element-${concept.id}`;
  const { t } = useTranslation();

  const { creators, rightsholders, processors } = getLicenseCredits(concept.copyright);

  const authors = (creators.length || rightsholders.length ? [...creators, ...rightsholders] : [...processors]).map(
    (author) => author.name,
  );

  useEffect(() => {
    if (!disableScripts) {
      initArticleScripts();
    }
  }, [disableScripts]);

  return (
    <FigureNotion
      resizeIframe
      id={figureId}
      title={concept.title}
      figureId={visualElementId}
      copyright={concept.copyright}
      licenseString={concept.copyright?.license?.license ?? ''}
      type="concept"
      hideIconsAndAuthors={hideIconsAndAuthors}
      figureType={figureType}
    >
      <UINotion
        id={notionId}
        title={concept.title}
        text={concept.text}
        imageElement={
          concept.visualElement?.resource === 'image' && concept.visualElement.image ? (
            <ImageWrapper>
              <Notion
                id={notionId}
                title={concept.title}
                subTitle={t('searchPage.resultType.notionsHeading')}
                hideBaselineIcon
                content={
                  <>
                    <NotionDialogContent>
                      {concept.visualElement?.resource === 'image' && concept.visualElement.image ? (
                        <NotionVisualElement visualElement={concept.visualElement} id={notionId} figureId={figureId} />
                      ) : undefined}
                      <NotionDialogText>{parseMarkdown(concept.text, 'body')}</NotionDialogText>
                    </NotionDialogContent>
                    <NotionDialogLicenses
                      authors={authors}
                      license={concept.copyright?.license?.license ?? ''}
                      source={concept.source}
                    />
                  </>
                }
              >
                {concept.visualElement.image && (
                  <NotionImage
                    type={type}
                    id={visualElementId}
                    src={concept.visualElement.image.src}
                    alt={concept.visualElement.image.alt ?? ''}
                  />
                )}
              </Notion>
            </ImageWrapper>
          ) : undefined
        }
        visualElement={
          concept.visualElement && concept.visualElement.resource !== 'image' && concept.visualElement.url ? (
            <ImageWrapper>
              <Notion
                id={notionId}
                title={concept.title}
                hideBaselineIcon
                subTitle={t('searchPage.resultType.notionsHeading')}
                content={
                  <>
                    <NotionDialogContent>
                      {concept.visualElement &&
                      concept.visualElement?.resource !== 'image' &&
                      concept.visualElement.url ? (
                        <NotionVisualElement visualElement={concept.visualElement} id={notionId} figureId={figureId} />
                      ) : undefined}

                      <NotionDialogText>{parseMarkdown(concept.text, 'body')}</NotionDialogText>
                    </NotionDialogContent>
                    <NotionDialogLicenses
                      authors={authors}
                      license={concept.copyright?.license?.license ?? ''}
                      source={concept.source}
                    />
                  </>
                }
              >
                {concept.image && (
                  <NotionImage
                    type={type}
                    id={visualElementId}
                    src={concept.image?.src}
                    alt={concept.image?.alt ?? ''}
                  />
                )}
              </Notion>
            </ImageWrapper>
          ) : undefined
        }
      ></UINotion>
    </FigureNotion>
  );
};

export default ConceptNotion;
