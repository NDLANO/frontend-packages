/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { AudioMetaInformationDTO, AudioSummarySearchResultDTO } from "@ndla/types-backend/audio-api";
import type { Meta, StoryFn } from "@storybook/react";
import { useRef } from "react";
import { AudioSearch, type QueryObject } from "./AudioSearch";

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
    loadingIndicator: (
      <div style={{ display: "flex", justifyContent: "center", minHeight: "1000px" }}>
        <p>Laster...</p>
      </div>
    ),
  },
} as Meta<typeof AudioSearch>;

export const Default: StoryFn<typeof AudioSearch> = ({ ...args }) => {
  const ref = useRef<HTMLDivElement>(null);
  const fetchAudios = (queryObject: QueryObject): Promise<AudioSummarySearchResultDTO> => {
    ref.current?.scrollIntoView({
      block: "start",
    });
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

  const fetchAudio = (id: number): Promise<AudioMetaInformationDTO> =>
    new Promise((resolve, reject) => {
      fetch(`https://api.test.ndla.no/audio-api/v1/audio/${id}`, {
        method: "GET",
      }).then((res) => {
        if (res.ok) return resolve(res.json());
        return res.json().then((json) => reject(json));
      });
    });

  return (
    <div ref={ref}>
      <AudioSearch
        {...args}
        fetchAudio={fetchAudio}
        searchAudios={fetchAudios}
        // oxlint-disable-next-line no-console
        onError={console.error}
        // oxlint-disable-next-line no-console
        onAudioSelect={console.log}
      />
    </div>
  );
};
