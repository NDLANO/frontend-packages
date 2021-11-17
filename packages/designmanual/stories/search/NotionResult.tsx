/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { SearchNotionsResult } from '@ndla/ui';

// @ts-ignore
import { notionResults } from '../../dummydata/mockSearchResultType';
// @ts-ignore
import FigureWithLicense from '../article/FigureWithLicense';

const notionsItems = () => {
  return notionResults.map((item: any) => {
    if (item.media) {
      switch (item.media.type) {
        case 'video':
          return {
            ...item,
            media: {
              ...item.media,
              element: (
                <FigureWithLicense
                  type="full-column"
                  resizeIframe
                  caption="Utholdenhet - animasjon av oksygentransporten">
                  <iframe
                    title="Video: Utholdenhet - animasjon av oksygentransporten"
                    height="270"
                    width="480"
                    frameBorder="0"
                    src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
                    allowFullScreen
                  />
                </FigureWithLicense>
              ),
            },
          };
        case 'other':
          return {
            ...item,
            media: {
              ...item.media,
              element: (
                <FigureWithLicense
                  type="full-column"
                  resizeIframe
                  caption="Utholdenhet - animasjon av oksygentransporten">
                  <iframe
                    title="Ekskresjon"
                    loading="lazy"
                    width="762"
                    height="571.5"
                    allowFullScreen
                    src="https://h5p.ndla.no/resource/d1816a8f-4641-483a-980b-743defd0f709?locale=nb-no"
                    data-ratio="0.75"
                  />
                </FigureWithLicense>
              ),
            },
          };
        default:
          return item;
      }
    }
    return item;
  });
};

type Props = {
  onHideNotionResults: () => void;
};

// @ts-ignore
const NotionResult = ({ onHideNotionResults }: Props) => {
  const items = notionsItems();
  return <SearchNotionsResult items={items} totalCount={items.length} onRemove={onHideNotionResults} />;
};

export default NotionResult;
