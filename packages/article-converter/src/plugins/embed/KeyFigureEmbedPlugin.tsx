/*
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from 'html-react-parser';
import { KeyFigureMetaData } from '@ndla/types-embed';
import { PluginType } from '../types';
import { KeyFigure } from '@ndla/ui/src';

export const keyFigureEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as KeyFigureMetaData;
  const { title, subTitle } = data.embedData;
  return (
    <KeyFigure
      title={title}
      subTitle={subTitle}
      image={
        data.status === 'success'
          ? { src: data.data.metaImage?.image.imageUrl, alt: data.data.metaImage?.alttext.alttext }
          : undefined
      }
    />
  );
};
