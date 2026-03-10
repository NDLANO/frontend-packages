/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { BrightcoveApiType } from "@ndla/types-embed";
import type { StoryFn } from "@storybook/react";
import { firstBrightcoveList, secondBrightcoveList } from "../../../dummydata/mockBrightcove";
import { VideoSearch, type VideoQueryType } from "./VideoSearch";

const firstDummyData = firstBrightcoveList as unknown as BrightcoveApiType[];
const secondDummyData = secondBrightcoveList as unknown as BrightcoveApiType[];
/**
 * Searching for videos requires a token and an api url (for brightcove).
 * This example uses dummy data to simulate the search.
 */
const meta = {
  title: "Production system/VideoSearch",
  tags: ["autodocs"],
  component: VideoSearch,
  parameters: {
    inlineStories: true,
  },
  args: {
    locale: "nb",
    translations: {
      searchPlaceholder: "Søk i videoer",
      searchButtonTitle: "Søk",
      loadMoreVideos: "Last flere videoer",
      noResults: "Ingen videoer funnet",
      addVideo: "Bruk video",
      previewVideo: "Forhåndsvis",
      publishedDate: "Publisert dato",
      duration: "Varighet",
      interactioncount: "Visninger",
      is360Video: "VR-video",
      close: "Lukk",
    },
  },
};

export default meta;

export const Default: StoryFn<typeof VideoSearch> = ({ ...args }) => {
  const fetchVideos = (query: VideoQueryType): Promise<BrightcoveApiType[]> =>
    new Promise((resolve) => {
      if (query.offset > 0) {
        return setTimeout(() => resolve(secondDummyData), 1000);
      }
      return setTimeout(() => resolve(firstDummyData), 1000);
    });

  // oxlint-disable-next-line no-console
  return <VideoSearch {...args} searchVideos={fetchVideos} onVideoSelect={console.log} onError={console.error} />;
};
