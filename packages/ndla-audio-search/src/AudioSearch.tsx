/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@ndla/icons/common";
import {
  Text,
  Button,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationRoot,
  PaginationNextTrigger,
  PaginationRootProps,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IAudioMetaInformation, IAudioSummary, IAudioSummarySearchResult } from "@ndla/types-backend/audio-api";
import AudioSearchForm from "./AudioSearchForm";
import AudioSearchList from "./AudioSearchList";

const AudioSearchWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    padding: "small",
  },
});

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
    paginationTranslations: PaginationRootProps["translations"];
  };
  onAudioSelect: (audio: IAudioSummary) => void;
  loadingIndicator?: ReactNode;
}

export interface QueryObject {
  query?: string;
  audioType?: string;
  page: number;
  pageSize: number;
  locale: string;
  fallback?: boolean;
}

const AudioSearch = ({
  queryObject: query,
  searchAudios: search,
  onError,
  translations,
  fetchAudio,
  onAudioSelect,
  loadingIndicator,
}: Props) => {
  const [queryObject, setQueryObject] = useState<QueryObject>(query);
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<IAudioSummarySearchResult | undefined>();

  const { locale } = queryObject ?? {};

  const searchAudios = (queryObject: QueryObject) => {
    setSearching(true);
    search(queryObject)
      .then((result) => {
        setQueryObject({
          query: queryObject.query,
          page: queryObject.page,
          pageSize: result.pageSize,
          locale: queryObject.locale,
          fallback: queryObject.fallback || false,
          audioType: queryObject.audioType || "standard",
        });
        setSearchResult(result);
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
      fallback: queryObject.fallback,
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
        audios={searchResult?.results ?? []}
        searching={searching}
        locale={locale}
        translations={translations}
        onError={onError}
        fetchAudio={fetchAudio}
        onAudioSelect={onAudioSelect}
        loadingIndicator={loadingIndicator}
      />
      <PaginationRoot
        page={searchResult?.page ?? 1}
        onPageChange={(details) => searchAudios({ ...queryObject, page: details.page })}
        translations={translations.paginationTranslations}
        count={searchResult?.totalCount ?? 0}
        pageSize={searchResult?.pageSize}
        siblingCount={2}
      >
        <PaginationPrevTrigger asChild>
          <Button variant="tertiary">
            <ChevronLeft />
            {translations.paginationTranslations?.prevTriggerLabel}
          </Button>
        </PaginationPrevTrigger>
        <PaginationContext>
          {(pagination) =>
            pagination.pages.map((page, index) =>
              page.type === "page" ? (
                <PaginationItem key={index} {...page} asChild>
                  <Button variant={page.value === pagination.page ? "primary" : "tertiary"}>{page.value}</Button>
                </PaginationItem>
              ) : (
                <PaginationEllipsis key={index} index={index} asChild>
                  <Text asChild consumeCss>
                    <div>&#8230;</div>
                  </Text>
                </PaginationEllipsis>
              ),
            )
          }
        </PaginationContext>
        <PaginationNextTrigger asChild>
          <Button variant="tertiary">
            {translations.paginationTranslations?.nextTriggerLabel}
            <ChevronRight />
          </Button>
        </PaginationNextTrigger>
      </PaginationRoot>
    </AudioSearchWrapper>
  );
};

export default AudioSearch;
