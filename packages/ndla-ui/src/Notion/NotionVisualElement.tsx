/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

import React, { ReactNode } from 'react';
import { Copyright } from '../types';
import FigureNotion from './FigureNotion';
import { ImageCrop, ImageFocalPoint } from '../Image';

export type NotionVisualElementType = {
  element?: ReactNode;
  type?: 'video' | 'image' | 'h5p';
  resource?: string;
  title?: string;
  url?: string;
  copyright?: Partial<Copyright>;
  image?: {
    src: string;
    alt?: string;
    crop?: ImageCrop;
    focalPoint?: ImageFocalPoint;
  };
};

interface Props {
  visualElement: NotionVisualElementType;
  id: string;
  figureId: string;
}
const supportedEmbedTypes = ['brightcove', 'h5p', 'iframe', 'external', 'image'];

const getType = (resource: string) => {
  if (resource === 'brightcove') {
    return 'video';
  }
  if (resource === 'image') {
    return 'image';
  }
  return 'h5p';
};

const NotionVisualElement = ({ visualElement, id, figureId }: Props) => {
  if (!visualElement.resource || !supportedEmbedTypes.includes(visualElement.resource)) {
    return <p>Embed type is not supported!</p>;
  }

  const type = getType(visualElement.resource);

  return (
    <FigureNotion
      resizeIframe
      id={id}
      figureId={figureId}
      title={visualElement.title ?? ''}
      copyright={visualElement.copyright}
      licenseString={visualElement.copyright?.license?.license ?? ''}
      type={type}>
      {visualElement.image?.src ? (
        <img src={visualElement.image?.src} alt={visualElement.image.alt} />
      ) : (
        <iframe src={visualElement.url} title={visualElement.title} />
      )}
    </FigureNotion>
  );
};

export default NotionVisualElement;
