/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { IAudioMetaInformation, IAudioSummarySearchResult } from "@ndla/types-backend/audio-api";
import AudioSearch, { QueryObject } from "./AudioSearch";

export default {
  title: "Production system/AudioSearch",
  tags: ["autodocs"],
  component: AudioSearch,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    queryObject: {
      query: "",
      page: 1,
      pageSize: 16,
      locale: "nb",
    },
    translations: {
      searchPlaceholder: "Søk i lydfiler",
      searchButtonTitle: "Søk",
      useAudio: "Velg lyd",
      noResults: "Ingen resultater funnet",
      paginationTranslations: {
        rootLabel: "Sidenavigering",
        prevTriggerLabel: "Forrige side",
        nextTriggerLabel: "Neste side",
      },
    },
    loadingIndicator: <p>Laster...</p>,
  },
} as Meta<typeof AudioSearch>;

export const Default: StoryFn<typeof AudioSearch> = ({ ...args }) => {
  const fetchAudios = (queryObject: QueryObject): Promise<IAudioSummarySearchResult> => {
    const { query, page, pageSize, locale } = queryObject;
    const queryString = `${query ? `query=${query}&` : ""}page=${page}&page-size=${pageSize}&language=${locale}`;
    return new Promise((resolve, reject) => {
      fetch(`https://api.test.ndla.no/audio-api/v1/audio/?${queryString}`, {
        method: "GET",
      }).then((res) => {
        if (res.ok) return resolve(res.json());
        return res.json().then((json) => reject(json));
      });
    });
  };

  const fetchAudio = (id: number): Promise<IAudioMetaInformation> =>
    new Promise((resolve, reject) => {
      fetch(`https://api.test.ndla.no/audio-api/v1/audio/${id}`, {
        method: "GET",
      }).then((res) => {
        if (res.ok) return resolve(res.json());
        return res.json().then((json) => reject(json));
      });
    });

  return (
    <AudioSearch
      {...args}
      fetchAudio={fetchAudio}
      searchAudios={fetchAudios}
      // eslint-disable-next-line no-console
      onError={console.error}
      // eslint-disable-next-line no-console
      onAudioSelect={console.log}
    />
  );
};
