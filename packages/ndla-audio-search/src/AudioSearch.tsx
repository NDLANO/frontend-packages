/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { Pager } from "@ndla/pager";
import { IAudioMetaInformation, IAudioSummary, IAudioSummarySearchResult } from "@ndla/types-backend/audio-api";
import AudioSearchForm from "./AudioSearchForm";
import AudioSearchList from "./AudioSearchList";

const AudioSearchWrapper = styled.div`
  padding: 1rem;
  border: 1px solid ${colors.brand.lighter};
  border-radius: 0.2rem;
`;

interface Props {
  queryObject: QueryObject;
  fetchAudio: (id: number) => Promise<IAudioMetaInformation>;
  searchAudios: (queryObject: QueryObject) => Promise<IAudioSummarySearchResult>;
  onError: (err: any) => void;
  translations: {
    searchPlaceholder: string;
    searchButtonTitle: string;
    useAudio: string;
    noResults: string;
  };
  onAudioSelect: (audio: IAudioSummary) => void;
}

export interface QueryObject {
  query?: string;
  audioType?: string;
  page: number;
  pageSize: number;
  locale: string;
}

const AudioSearch = ({
  queryObject: query,
  searchAudios: search,
  onError,
  translations,
  fetchAudio,
  onAudioSelect,
}: Props) => {
  const [queryObject, setQueryObject] = useState<QueryObject>(query);
  const [audios, setAudios] = useState<IAudioSummary[]>([]);
  const [lastPage, setLastPage] = useState(0);
  const [searching, setSearching] = useState(false);

  const { page, locale } = queryObject ?? {};

  const searchAudios = (queryObject: QueryObject) => {
    setSearching(true);
    search(queryObject)
      .then((result) => {
        setQueryObject({
          query: queryObject.query,
          page: queryObject.page,
          pageSize: result.pageSize,
          locale: queryObject.locale,
          audioType: queryObject.audioType || "standard",
        });
        setAudios(result.results);
        setLastPage(Math.ceil(result.totalCount / result.pageSize));
        setSearching(false);
      })
      .catch((err) => {
        onError(err);
        setSearching(false);
      });
  };

  useEffect(() => {
    searchAudios(queryObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitAudioSearchQuery = (queryObject: QueryObject) => {
    searchAudios({
      query: queryObject.query,
      page: 1,
      pageSize: queryObject.pageSize,
      locale: queryObject.locale,
      audioType: queryObject.audioType || "standard",
    });
  };

  return (
    <AudioSearchWrapper>
      <AudioSearchForm
        onSearchQuerySubmit={submitAudioSearchQuery}
        queryObject={queryObject}
        searching={searching}
        translations={translations}
      />
      <AudioSearchList
        audios={audios}
        searching={searching}
        locale={locale}
        translations={translations}
        onError={onError}
        fetchAudio={fetchAudio}
        onAudioSelect={onAudioSelect}
      />
      <Pager
        page={page ?? 1}
        pathname=""
        lastPage={lastPage}
        query={queryObject}
        onClick={searchAudios}
        pageItemComponentClass="button"
      />
    </AudioSearchWrapper>
  );
};

export default AudioSearch;
