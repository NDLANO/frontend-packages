/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

import React from 'react';
import { Copyright } from '../types';
import FigureNotion from './FigureNotion';

export type NotionVisualElementType = {
  resource?: string;
  title?: string;
  url?: string;
  copyright?: Partial<Copyright>;
  image?: {
    src: string;
    alt?: string;
  };
};

interface Props {
  visualElement: NotionVisualElementType;
}

const supportedEmbedTypes = ['brightcove', 'h5p', 'iframe', 'external'];
const NotionVisualElement = ({ visualElement }: Props) => {
  const id = '1';
  const figureId = 'figure-1';
  if (!visualElement.resource || !supportedEmbedTypes.includes(visualElement.resource)) {
    return <p>Embed type is not supported!</p>;
  }

  const type = visualElement.resource === 'brightcove' ? 'video' : 'h5p';
  return (
    <FigureNotion
      resizeIframe
      id={id}
      figureId={figureId}
      title={visualElement.title ?? ''}
      copyright={visualElement.copyright}
      licenseString={visualElement.copyright?.license?.license ?? ''}
      type={type}>
      <iframe title={visualElement.title} src={visualElement.url} />
    </FigureNotion>
  );
};

export default NotionVisualElement;
