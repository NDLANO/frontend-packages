/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from 'html-react-parser';
import { EmbedMetaData } from '@ndla/types-embed';

const extractEmbedMeta = (embed: string): EmbedMetaData | undefined => {
  const node = parse(embed);
  if (typeof node === 'string' || Array.isArray(node) || node.type !== 'ndlaembed' || !node.props['data-json']) {
    return;
  }

  return JSON.parse(node.props['data-json']) as EmbedMetaData;
};

export default extractEmbedMeta;
