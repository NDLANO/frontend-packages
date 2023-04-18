/*
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyNumber } from '@ndla/ui';
import { attributesToProps } from 'html-react-parser';
import { KeyNumberMetaData } from '@ndla/types-embed';
import { PluginType } from '../types';

export const keyNumberEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as KeyNumberMetaData;
  const { title, subTitle } = data.embedData;
  return (
    <KeyNumber title={title} subTitle={subTitle} image={data.status === 'success' ? data.data.metaImage : undefined} />
  );
};
