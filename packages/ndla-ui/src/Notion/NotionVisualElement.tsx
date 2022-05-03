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
}
const supportedEmbedTypes = ['brightcove', 'h5p', 'iframe', 'external', 'image'];

const NotionVisualElement = ({ visualElement }: Props) => {
  const id = '1';
  const figureId = 'figure-1';
  if (!visualElement.resource || !supportedEmbedTypes.includes(visualElement.resource)) {
    return <p>Embed type is not supported!</p>;
  }
  let type = visualElement.type;
  visualElement.resource === 'brightcove' ? (type = 'video') : (type = 'h5p');
  visualElement.resource === 'image' && (type = 'image');

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
        <iframe title={visualElement.title} src={visualElement.url} />
      )}
    </FigureNotion>
  );
};

export default NotionVisualElement;
