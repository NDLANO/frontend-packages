/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from 'html-react-parser';
import { BlogPostMetaData } from '@ndla/types-embed';
import { BlogPostV2 } from '@ndla/ui';
import { PluginType } from '../types';

export const errorSvgSrc = `data:image/svg+xml;charset=UTF-8,%3Csvg fill='%238A8888' height='400' viewBox='0 0 24 12' width='100%25' xmlns='http://www.w3.org/2000/svg' style='background-color: %23EFF0F2'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath transform='scale(0.3) translate(28, 8.5)' d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E`;

export const blogPostEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as BlogPostMetaData;
  const { title, author, url, size, language } = data.embedData;
  return (
    <BlogPostV2
      title={{ title, language }}
      author={author}
      url={url}
      size={size}
      path={opts.path}
      metaImage={{
        alt: '',
        url: data.status === 'success' ? data.data.metaImage?.image.imageUrl ?? errorSvgSrc : errorSvgSrc,
      }}
    />
  );
};
