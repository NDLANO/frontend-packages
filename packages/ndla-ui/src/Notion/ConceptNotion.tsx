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

import NotionDialog, {
  NotionDialogContent,
  NotionDialogText,
  NotionDialogImage,
  NotionDialogLicenses,
} from '@ndla/notion';
import { breakpoints, mq, spacing } from '@ndla/core';
import { Notion } from '.';
import { NotionImage } from './NotionImage';
import NotionVisualElement, { NotionVisualElementType } from './NotionVisualElement';
import FigureNotion from './FigureNotion';
import { Copyright } from '../types';

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
  type?: 'H5P' | 'image' | 'video';
  concept: ConceptNotionType;
  disableScripts?: boolean;
  hideIconsAndAuthors?: boolean;
}

const ConceptNotion = ({ concept, disableScripts, type, hideIconsAndAuthors }: Props) => {
  const notionId = `notion-${concept.id}`;
  const figureId = `notion-figure-${concept.id}`;
  const visualElementId = `visual-element-${concept.id}`;

  useEffect(() => {
    if (!disableScripts) {
      initArticleScripts();
    }
  }, [disableScripts]);

  return (
    <FigureNotion
      id={figureId}
      figureId={visualElementId}
      copyright={concept.copyright}
      licenseString={concept.copyright?.license?.license ?? ''}
      type="concept"
      hideIconsAndAuthors={hideIconsAndAuthors}>
      <Notion
        id={notionId}
        title={concept.title}
        text={concept.text}
        imageElement={
          concept.visualElement?.resource === 'image' && concept.visualElement.image ? (
            <ImageWrapper>
              <NotionDialog
                id={notionId}
                ariaLabel="Vis begrep beskrivelse"
                title={concept.title}
                subTitle="forklaring"
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
              </NotionDialog>
            </ImageWrapper>
          ) : undefined
        }
        visualElement={
          concept.visualElement && concept.visualElement.resource !== 'image' && concept.visualElement.url ? (
            <ImageWrapper>
              <NotionDialog
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
                    <NotionDialogLicenses license={concept.copyright?.license?.license ?? ''} source="https://snl.no" />
                  </Fragment>
                }>
                <NotionImage
                  type={type}
                  id={visualElementId}
                  src={concept.image?.src as string}
                  alt={concept.image?.alt ?? ''}
                  imageCopyright={concept.visualElement.copyright}
                />
              </NotionDialog>
            </ImageWrapper>
          ) : undefined
        }>
        {' '}
      </Notion>{' '}
    </FigureNotion>
  );
};

export default ConceptNotion;
