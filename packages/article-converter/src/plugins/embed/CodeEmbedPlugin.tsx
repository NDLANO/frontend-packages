/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from 'html-react-parser';
import { CodeMetaData } from '@ndla/types-embed';
import { CodeEmbed } from '@ndla/code';
import { PluginType } from '../types';

export const CodeEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as CodeMetaData;
  return <CodeEmbed embed={data} />;
};
