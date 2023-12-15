/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { colors, misc, spacing } from '@ndla/core';
import { FormControl, InputV3, Label } from '@ndla/forms';
import { Spinner } from '@ndla/icons';
import { BrightcoveApiType } from '@ndla/types-embed';
import { usePrevious } from '@ndla/util';
import { VideoResultList } from './VideoResultList';

export type Translations = {
  searchPlaceholder: string;
  searchButtonTitle: string;
  loadMoreVideos: string;
  noResults: string;
  is360Video: string;
  previewVideo: string;
  addVideo: string;
};

interface Props {
  onVideoSelect: (video: BrightcoveApiType) => void;
  searchVideos: (query: VideoQueryType) => Promise<BrightcoveApiType[]>;
  onError: (e: unknown) => void;
  translations: Translations;
  locale: string;
}

export interface VideoQueryType {
  query: string;
  offset: number;
  limit: number;
}

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: ${spacing.small};
  align-items: center;
  button {
    min-width: ${spacing.xxlarge};
  }
`;

const VideoSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.normal};
  border: 1px solid ${colors.brand.light};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal};
  > form {
    width: 100%;
  }
`;

const StyledFormControl = styled(FormControl)`
  display: flex;
  gap: ${spacing.small};
  flex-direction: row;
  align-items: center;
  button {
    min-width: ${spacing.xxlarge};
    height: ${spacing.large};
  }
`;

export const VideoSearch = ({ onVideoSelect, searchVideos, onError, translations, locale }: Props) => {
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [videos, setVideos] = useState<BrightcoveApiType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const previousQuery = usePrevious(query);

  const fetchVideos = useCallback(
    async (query: string, offset: number) => {
      setIsLoading(true);
      try {
        const isAppending = query === previousQuery;
        const results = await searchVideos({ query, offset: offset, limit: 10 });
        setVideos((prev) => (isAppending ? prev.concat(results) : results));
      } catch (e) {
        onError(e);
      }
      setIsLoading(false);
    },
    [searchVideos, previousQuery, onError],
  );

  useEffect(() => {
    fetchVideos('', 0);
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
      <form onSubmit={onSubmit}>
        <StyledFormControl id="video-search-field">
          <Label visuallyHidden>{translations.searchPlaceholder}</Label>
          <InputV3 type="search" value={query} onChange={onQueryChange} placeholder={translations.searchPlaceholder} />
          <ButtonV2 type="submit">{translations.searchButtonTitle}</ButtonV2>
        </StyledFormControl>
      </form>
      {videos.length === 0 && !isLoading ? (
        <p>{translations.noResults}</p>
      ) : (
        <VideoResultList videos={videos} locale={locale} onSelectVideo={onVideoSelect} translations={translations} />
      )}
      {isLoading ? <Spinner /> : <ButtonV2 onClick={onShowMore}>{translations.loadMoreVideos}</ButtonV2>}
    </VideoSearchWrapper>
  );
};
