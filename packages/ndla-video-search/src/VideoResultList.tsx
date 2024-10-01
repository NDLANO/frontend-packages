/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Text, Button, Spinner } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { BrightcoveApiType } from "@ndla/types-embed";
import { VideoListItem } from "./VideoListItem";
import { VideoTranslations } from "./VideoSearch";

const StyledList = styled("ul", {
  base: {
    listStyle: "none",
    width: "100%",
  },
});

const SpinnerWrapper = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
  },
});
const StyledVideoResultWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    alignItems: "center",
  },
});

interface Props {
  videos: BrightcoveApiType[];
  isLoading: boolean;
  translations: VideoTranslations;
  locale: string;
  onVideoSelect: (video: BrightcoveApiType) => void;
  onShowMore: () => void;
}

export const VideoResultList = ({ videos, isLoading, translations, locale, onVideoSelect, onShowMore }: Props) => {
  return (
    <StyledVideoResultWrapper>
      {!videos.length && !isLoading ? (
        <Text>{translations.noResults}</Text>
      ) : (
        <StyledList>
          {videos.map((video, index) => (
            <VideoListItem
              key={`${video.id}-${index}`}
              video={video}
              translations={translations}
              locale={locale}
              onVideoSelect={onVideoSelect}
            />
          ))}
        </StyledList>
      )}
      {isLoading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      {videos.length === 10 && <Button onClick={onShowMore}>{translations.loadMoreVideos}</Button>}
    </StyledVideoResultWrapper>
  );
};
