/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import VideoSearch from './VideoSearch';
import { firstBrightcoveList, firstYouTubeList, secondBrightcoveList, secondYouTubeList } from '../../../dummydata';
import { defaultParameters } from '../../../stories/defaults';

const firstDummyData = {
  brightcove: firstBrightcoveList,
  youtube: firstYouTubeList,
};

const secondDummyData = {
  brightcove: secondBrightcoveList,
  youtube: secondYouTubeList,
};

/**
 * Searching for videos requires a token and an api url (for brightcove).
 * This example uses dummy data to simulate the search.
 */
const meta = {
  title: 'Production system/VideoSearch',
  tags: ['autodocs'],
  component: VideoSearch,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    enabledSources: ['Brightcove'],
    locale: 'nb',
    translations: {
      searchPlaceholder: 'Søk i videoer',
      searchButtonTitle: 'Søk',
      loadMoreVideos: 'Last flere videor',
      noResults: 'Ingen videor funnet.',
      addVideo: 'Bruk video',
      previewVideo: 'Forhåndsvis',
      publishedDate: 'Publisert dato',
      duration: 'Varighet',
      interactioncount: 'Visninger',
    },
  },
};

export default meta;

export const Default = ({ ...args }) => {
  const fetchVideos = (query, type) =>
    new Promise((resolve) => {
      if (query.offset > 0 || query.page > 1) {
        return setTimeout(() => resolve(secondDummyData[type]), 1000);
      }
      return setTimeout(() => resolve(firstDummyData[type]), 1000);
    });

  // eslint-disable-next-line no-console
  return <VideoSearch {...args} searchVideos={fetchVideos} onVideoSelect={console.log} onError={console.error} />;
};
