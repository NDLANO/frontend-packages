/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from 'html-react-parser';
import { RelatedContentMetaData } from '@ndla/types-embed';
import { RelatedContentEmbed } from '@ndla/ui';
import { PluginType } from '../types';

export const relatedContentEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as RelatedContentMetaData;
  return <RelatedContentEmbed embed={data} subject={opts.subject} ndlaFrontendDomain={opts.frontendDomain} />;
};
