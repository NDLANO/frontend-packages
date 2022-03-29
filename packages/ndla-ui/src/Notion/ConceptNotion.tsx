/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

import React, { useEffect } from 'react';
//@ts-ignore
import { initArticleScripts } from '@ndla/article-scripts';
import { Notion } from '.';
import { NotionImage } from './NotionImage';
import NotionVisualElement, { NotionVisualElementType } from './NotionVisualElement';
import FigureNotion from './FigureNotion';
import { Copyright } from '../types';

export interface ConceptNotionType {
  id: number;
  copyright?: Partial<Copyright>;
  title: string;
  text: string;
  subjectNames?: string[];
  visualElement?: NotionVisualElementType;
  image?: {
    src: string;
    alt: string;
  };
}
interface Props {
  concept: ConceptNotionType;
  disableScripts?: boolean;
}

const ConceptNotion = ({ concept, disableScripts }: Props) => {
  const notionId = `notion-${concept.id}`;
  const figureId = `notion-figure-${concept.id}`;
  const visualElementId = `visual-element-${concept.id}`;

  useEffect(() => {
    if (!disableScripts) {
      initArticleScripts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <FigureNotion
      id={figureId}
      figureId={visualElementId}
      copyright={concept.copyright}
      title={concept.title}
      licenseString={concept.copyright?.license?.license ?? ''}
      type="concept">
      <Notion
        id={notionId}
        title={concept.title}
        text={concept.text}
        labels={concept.subjectNames ?? []}
        imageElement={
          concept.visualElement?.resource === 'image' && concept.visualElement.image ? (
            <NotionImage
              id={visualElementId}
              src={concept.visualElement.image.src}
              alt={concept.visualElement.image.alt ?? ''}
              imageCopyright={concept.visualElement.copyright}
            />
          ) : undefined
        }
        visualElement={
          concept.visualElement && concept.visualElement.resource !== 'image' && concept.visualElement.url
            ? {
                type: concept.visualElement.resource === 'brightcove' ? 'video' : 'other',
                metaImage: concept.image && {
                  url: concept.image.src,
                  alt: concept.image.alt,
                },
                element: <NotionVisualElement visualElement={concept.visualElement} />,
              }
            : undefined
        }></Notion>
    </FigureNotion>
  );
};

export default ConceptNotion;
