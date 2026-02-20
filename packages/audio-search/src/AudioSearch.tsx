/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ArrowLeftShortLine, ArrowRightShortLine } from "@ndla/icons";
import {
  Text,
  Button,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationRoot,
  PaginationNextTrigger,
  type PaginationRootProps,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type {
  AudioMetaInformationDTO,
  AudioSummaryDTO,
  AudioSummarySearchResultDTO,
} from "@ndla/types-backend/audio-api";
import { type ReactNode, useEffect, useState } from "react";
import { AudioSearchInput } from "./AudioSearchInput";
import { AudioSearchList } from "./AudioSearchList";

const AudioSearchWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    padding: "small",
  },
});

const StyledPaginationRoot = styled(PaginationRoot, {
  base: {
    flexWrap: "wrap",
  },
});

const StyledButton = styled(Button, {
  base: {
    tabletWideDown: {
      paddingInline: "xsmall",
      "& span": {
        display: "none",
      },
    },
  },
});

const StyledPaginationItem = styled(PaginationItem, {
  base: {
    tabletWideDown: {
      "&:nth-child(2)": {
        display: "none",
      },
      "&:nth-last-child(2)": {
        display: "none",
      },
    },
  },
});

export interface AudioSearchTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  useAudio: string;
  noResults: string;
  paginationTranslations: PaginationRootProps["translations"];
}

interface Props {
  queryObject: QueryObject;
  fetchAudio: (id: number) => Promise<AudioMetaInformationDTO>;
  searchAudios: (queryObject: QueryObject) => Promise<AudioSummarySearchResultDTO>;
  onError: (err: any) => void;
  translations: AudioSearchTranslations;
  onAudioSelect: (audio: AudioSummaryDTO) => void;
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

export const AudioSearch = ({
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
  const [searchResult, setSearchResult] = useState<AudioSummarySearchResultDTO | undefined>();
  const noResultsFound = !searching && searchResult?.results.length === 0;

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
    // oxlint-disable-next-line react/exhaustive-deps
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
      <AudioSearchInput
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
      <StyledPaginationRoot
        page={searchResult?.page ?? 1}
        onPageChange={(details) => searchAudios({ ...queryObject, page: details.page })}
        translations={translations.paginationTranslations}
        count={searchResult?.totalCount ?? 0}
        pageSize={searchResult?.pageSize}
        hidden={noResultsFound}
      >
        <PaginationPrevTrigger asChild>
          <StyledButton
            variant="tertiary"
            aria-label={translations.paginationTranslations?.prevTriggerLabel}
            title={translations.paginationTranslations?.prevTriggerLabel}
          >
            <ArrowLeftShortLine />
            <span>{translations.paginationTranslations?.prevTriggerLabel}</span>
          </StyledButton>
        </PaginationPrevTrigger>
        <PaginationContext>
          {(pagination) =>
            pagination.pages.map((page, index) =>
              page.type === "page" ? (
                <StyledPaginationItem key={index} {...page} asChild>
                  <Button variant={page.value === pagination.page ? "primary" : "tertiary"}>{page.value}</Button>
                </StyledPaginationItem>
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
          <StyledButton
            variant="tertiary"
            aria-label={translations.paginationTranslations?.nextTriggerLabel}
            title={translations.paginationTranslations?.nextTriggerLabel}
          >
            <span>{translations.paginationTranslations?.nextTriggerLabel}</span>
            <ArrowRightShortLine />
          </StyledButton>
        </PaginationNextTrigger>
      </StyledPaginationRoot>
    </AudioSearchWrapper>
  );
};
