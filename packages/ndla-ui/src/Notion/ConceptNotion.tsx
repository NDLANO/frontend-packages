/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */
import styled from '@emotion/styled';

import React, { useEffect, Fragment } from 'react';
//@ts-ignore
import { initArticleScripts } from '@ndla/article-scripts';

import { breakpoints, mq, spacing } from '@ndla/core';
import Notion, { NotionDialogContent, NotionDialogText, NotionDialogImage, NotionDialogLicenses } from '@ndla/notion';
import { Notion as UINotion } from '.';
import { NotionImage } from './NotionImage';
import NotionVisualElement, { NotionVisualElementType } from './NotionVisualElement';
import FigureNotion from './FigureNotion';
import { Copyright } from '../types';

const ContentWrapper = styled.div<{ adjustSizeToFitWiderPage?: boolean }>`
  position: relative;
  right: auto;
  left: ${(props) => (props.adjustSizeToFitWiderPage ? '0%' : '-16.6666666667%')};
  width: ${(props) => (props.adjustSizeToFitWiderPage ? '100%' : '133.3333333333%')};
  padding-left: 24px;
  padding-right: 24px;
  & button {
    width: 100%;
  }
  & .iconify--ic {
    //Hides the underline icon when in a notionblock
    display: none;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
    left: 0;
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

export interface ConceptNotionType {
  id: number;
  copyright?: Partial<Copyright>;
  title: string;
  text: string;
  subjectNames?: string[];
  visualElement?: NotionVisualElementType;
  authors: string[];
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
  adjustSizeToFitWiderPage?: boolean;
}

const ConceptNotion = ({ concept, disableScripts, type, hideIconsAndAuthors, adjustSizeToFitWiderPage }: Props) => {
  const notionId = `notion-${concept.id}`;
  const figureId = `notion-figure-${concept.id}`;
  const visualElementId = `visual-element-${concept.id}`;

  useEffect(() => {
    if (!disableScripts) {
      initArticleScripts();
    }
  }, [disableScripts]);

  return (
    <ContentWrapper adjustSizeToFitWiderPage={adjustSizeToFitWiderPage}>
      <FigureNotion
        id={figureId}
        figureId={visualElementId}
        copyright={concept.copyright}
        licenseString={concept.copyright?.license?.license ?? ''}
        type="concept"
        hideIconsAndAuthors={hideIconsAndAuthors}>
        <UINotion
          id={notionId}
          title={concept.title}
          text={concept.text}
          imageElement={
            concept.visualElement?.resource === 'image' && concept.visualElement.image ? (
              <ImageWrapper>
                <Notion
                  id={notionId}
                  ariaLabel="Vis begrep beskrivelse"
                  title={concept.title}
                  subTitle="forklaring"
                  hideBaselineIcon
                  content={
                    <Fragment>
                      <NotionDialogContent>
                        {concept.visualElement?.resource === 'image' && concept.visualElement.image ? (
                          <NotionDialogImage
                            src={concept.visualElement.image.src}
                            alt={concept.visualElement.image.alt ?? ''}
                          />
                        ) : undefined}

                        <NotionDialogText>{concept.text}</NotionDialogText>
                      </NotionDialogContent>
                    </Fragment>
                  }>
                  <NotionImage
                    type={type}
                    id={visualElementId}
                    src={concept.visualElement.image.src}
                    alt={concept.visualElement.image.alt ?? ''}
                    imageCopyright={concept.visualElement.copyright}
                  />
                </Notion>
              </ImageWrapper>
            ) : undefined
          }
          visualElement={
            concept.visualElement && concept.visualElement.resource !== 'image' && concept.visualElement.url ? (
              <ImageWrapper>
                <Notion
                  id={notionId}
                  ariaLabel="Vis begrep beskrivelse"
                  title={concept.title}
                  subTitle="forklaring"
                  content={
                    <Fragment>
                      <NotionDialogContent>
                        {concept.visualElement &&
                        concept.visualElement?.resource !== 'image' &&
                        concept.visualElement.url ? (
                          <NotionVisualElement visualElement={concept.visualElement} />
                        ) : undefined}

                        <NotionDialogText>{concept.text}</NotionDialogText>
                      </NotionDialogContent>
                      <NotionDialogLicenses
                        license={concept.copyright?.license?.license ?? ''}
                        source="https://snl.no"
                      />
                    </Fragment>
                  }>
                  <NotionImage
                    type={type}
                    id={visualElementId}
                    src={concept.image?.src as string}
                    alt={concept.image?.alt ?? ''}
                    imageCopyright={concept.visualElement.copyright}
                  />
                </Notion>
              </ImageWrapper>
            ) : undefined
          }>
          {' '}
        </UINotion>{' '}
      </FigureNotion>
    </ContentWrapper>
  );
};

export default ConceptNotion;
