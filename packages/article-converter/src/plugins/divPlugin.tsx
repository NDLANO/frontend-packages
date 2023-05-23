/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import partition from 'lodash/partition';
import { domToReact, attributesToProps, Element } from 'html-react-parser';
import { FileListV2, RelatedArticleListV2, Grid } from '@ndla/ui';
import { PluginType } from './types';

export const divPlugin: PluginType = (node, opts) => {
  if (node.attribs['data-type'] === 'related-content' && node.children.length) {
    const props = attributesToProps(node.attribs);

    return (
      <RelatedArticleListV2 {...props} headingLevel="h3">
        {/* @ts-ignore */}
        {domToReact(node.children, opts)}
      </RelatedArticleListV2>
    );
  } else if (node.attribs['data-type'] === 'file' && node.childNodes.length) {
    const elements = node.childNodes.filter(
      (c): c is Element => c.type === 'tag' && c.name === 'ndlaembed' && c.attribs['data-resource'] === 'file',
    );
    const [pdfs, files] = partition(
      elements,
      (el) => el.attribs['data-type'] === 'pdf' && el.attribs['data-display'] === 'block',
    );

    return (
      <>
        {files.length ? <FileListV2>{domToReact(files, opts)}</FileListV2> : undefined}
        {domToReact(pdfs, opts)}
      </>
    );
  } else if (
    node.attribs['class']?.includes('c-bodybox') &&
    node.childNodes.filter((c): c is Element => 'attribs' in c).some((c) => c.name === 'table')
  ) {
    const props = attributesToProps(node.attribs);
    return (
      <div {...props} className={`${props.className} c-bodybox--contains-table`}>
        {domToReact(node.children, opts)}
      </div>
    );
  } else if (node.attribs['data-type'] === 'grid' && node.children.length) {
    const columns = attributesToProps(node.attribs)['columns'] as '2' | '4';

    return (
      <Grid border={false} columns={columns}>
        {node.children}
      </Grid>
    );
  }
  return null;
};
