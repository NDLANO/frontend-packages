/*
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyPerformanceIndicator } from '@ndla/ui';
import { attributesToProps } from 'html-react-parser';
import { KeyPerformanceIndicatorMetaData } from '@ndla/types-embed';
import { PluginType } from '../types';

export const keyPerformanceIndicatorEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as KeyPerformanceIndicatorMetaData;
  const { title, subTitle } = data.embedData;
  return (
    <KeyPerformanceIndicator
      title={title}
      subTitle={subTitle}
      image={data.status === 'success' ? data.data.metaImage : undefined}
    />
  );
};
