/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { StoryFn } from "@storybook/react";
import { BrightcoveApiType } from "@ndla/types-embed";
import { VideoSearch, VideoQueryType } from "./VideoSearch";
//@ts-ignore
import { firstBrightcoveList, secondBrightcoveList } from "../../../dummydata";

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
      loadMoreVideos: "Last flere videor",
      noResults: "Ingen videor funnet.",
      addVideo: "Bruk video",
      previewVideo: "Forhåndsvis",
      publishedDate: "Publisert dato",
      duration: "Varighet",
      interactioncount: "Visninger",
      is360Video: "VR-video",
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

  // eslint-disable-next-line no-console
  return <VideoSearch {...args} searchVideos={fetchVideos} onVideoSelect={console.log} onError={console.error} />;
};
