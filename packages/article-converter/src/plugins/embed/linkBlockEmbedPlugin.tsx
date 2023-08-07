/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LinkBlock } from '@ndla/ui';
import { attributesToProps } from 'html-react-parser';
import { LinkBlockMetaData } from '@ndla/types-embed';
import { PluginType } from '../types';

export const imageEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as LinkBlockMetaData;

  return <LinkBlock {...data.embedData} />;
};
