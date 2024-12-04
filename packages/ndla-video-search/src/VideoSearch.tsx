/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ChangeEvent, useCallback, useEffect, useState, type KeyboardEvent } from "react";
import { SearchLine } from "@ndla/icons";
import { IconButton, Input } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { BrightcoveApiType } from "@ndla/types-embed";
import { VideoResultList } from "./VideoResultList";

export interface VideoTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  loadMoreVideos: string;
  noResults: string;
  is360Video: string;
  previewVideo: string;
  addVideo: string;
  close: string;
}

interface Props {
  onVideoSelect: (video: BrightcoveApiType) => void;
  searchVideos: (query: VideoQueryType) => Promise<BrightcoveApiType[]>;
  onError: (e: unknown) => void;
  translations: VideoTranslations;
  locale: string;
}

export interface VideoQueryType {
  query: string;
  offset: number;
  limit: number;
}

const VideoSearchWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
  },
});

const InputWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "xsmall",
  },
});

const VIDEO_FETCH_LIMIT = 10;

export const VideoSearch = ({ onVideoSelect, searchVideos, onError, translations, locale }: Props) => {
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const [videos, setVideos] = useState<BrightcoveApiType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchVideos = useCallback(
    async (query: string, offset: number, isAppending?: boolean) => {
      setIsLoading(true);
      try {
        const results = await searchVideos({
          query,
          offset: offset,
          limit: VIDEO_FETCH_LIMIT,
        });
        setVideos((prev) => (isAppending ? prev.concat(results) : results));
      } catch (e) {
        onError(e);
      }
      setIsLoading(false);
    },
    [searchVideos, onError],
  );

  useEffect(() => {
    fetchVideos("", 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = useCallback(() => {
    setOffset(0);
    fetchVideos(query, 0);
  }, [fetchVideos, query]);

  const onShowMore = useCallback(() => {
    const newOffset = offset + VIDEO_FETCH_LIMIT;
    setOffset(newOffset);
    fetchVideos(query, newOffset, true);
  }, [fetchVideos, offset, query]);

  const onQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const onEnter = (e: KeyboardEvent<HTMLInputElement | HTMLButtonElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <VideoSearchWrapper>
      <InputWrapper role="search">
        <Input
          type="search"
          placeholder={translations.searchPlaceholder}
          value={query}
          onChange={onQueryChange}
          onKeyDown={onEnter}
        />
        <IconButton
          variant="primary"
          type="submit"
          aria-label={translations.searchButtonTitle}
          title={translations.searchButtonTitle}
          onKeyDown={onEnter}
          onClick={onSearch}
        >
          <SearchLine />
        </IconButton>
      </InputWrapper>
      <VideoResultList
        videos={videos}
        isLoading={isLoading}
        translations={translations}
        locale={locale}
        onVideoSelect={onVideoSelect}
        onShowMore={onShowMore}
        existsMoreVideos={videos.length === offset + VIDEO_FETCH_LIMIT}
      />
    </VideoSearchWrapper>
  );
};
