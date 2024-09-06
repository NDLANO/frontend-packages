/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { SearchLine } from "@ndla/icons/common";
import { IconButton, Input } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { BrightcoveApiType } from "@ndla/types-embed";
import { usePrevious } from "@ndla/util";
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

const StyledForm = styled("form", {
  base: {
    display: "flex",
    gap: "xsmall",
  },
});

export const VideoSearch = ({ onVideoSelect, searchVideos, onError, translations, locale }: Props) => {
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const [videos, setVideos] = useState<BrightcoveApiType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const previousQuery = usePrevious(query);

  const fetchVideos = useCallback(
    async (query: string, offset: number) => {
      setIsLoading(true);
      try {
        const isAppending = query === previousQuery;
        const results = await searchVideos({
          query,
          offset: offset,
          limit: 10,
        });
        setVideos((prev) => (isAppending ? prev.concat(results) : results));
      } catch (e) {
        onError(e);
      }
      setIsLoading(false);
    },
    [searchVideos, previousQuery, onError],
  );

  useEffect(() => {
    fetchVideos("", 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setOffset(0);
      fetchVideos(query, offset);
    },
    [fetchVideos, offset, query],
  );

  const onShowMore = useCallback(() => {
    const newOffset = offset + 10;
    setOffset(newOffset);
    fetchVideos(query, newOffset);
  }, [fetchVideos, offset, query]);

  const onQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <VideoSearchWrapper>
      <StyledForm onSubmit={onSubmit}>
        <Input type="search" placeholder={translations.searchPlaceholder} value={query} onChange={onQueryChange} />
        <IconButton
          variant="primary"
          type="submit"
          aria-label={translations.searchButtonTitle}
          title={translations.searchButtonTitle}
        >
          <SearchLine />
        </IconButton>
      </StyledForm>
      <VideoResultList
        videos={videos}
        isLoading={isLoading}
        translations={translations}
        locale={locale}
        onVideoSelect={onVideoSelect}
        onShowMore={onShowMore}
      />
    </VideoSearchWrapper>
  );
};
