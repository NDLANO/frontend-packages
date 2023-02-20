/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from 'html-react-parser';
import { FileMetaData } from '@ndla/types-embed';
import { PdfFile, FileV2 } from '@ndla/ui';
import { PluginType } from '../types';

export const fileEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as FileMetaData;
  const { type, title, url } = data.embedData;
  if (type === 'pdf') {
    return <PdfFile title={title} url={url} />;
  } else {
    return (
      <FileV2
        id={`file-${data.seq}`}
        url={url}
        title={title}
        fileExists={data.status === 'success' ? !!data.data.exists : false}
        fileType={type}
      />
    );
  }
};
