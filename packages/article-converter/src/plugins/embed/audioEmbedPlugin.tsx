/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from 'html-react-parser';
import { AudioMetaData } from '@ndla/types-embed';
import { AudioEmbed } from '@ndla/ui';
import { PluginType } from '../types';

export const audioEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as AudioMetaData;
  return <AudioEmbed embed={data} heartButton={opts.components?.heartButton} lang={opts.articleLanguage} />;
};
