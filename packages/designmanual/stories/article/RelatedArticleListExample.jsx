/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { RelatedArticleList, RelatedArticle } from 'ndla-ui';
import { articleResources } from '../../dummydata/index';

export default () => (
  <RelatedArticleList messages={{ title: 'Relaterte artikler' }}>
    <RelatedArticle
      title={articleResources[0].title}
      introduction={articleResources[0].introduction}
      to="#"
    />
    <RelatedArticle
      title={articleResources[1].title}
      introduction={articleResources[1].introduction}
      to="#"
    />
  </RelatedArticleList>
);
