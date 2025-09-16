# ndla-video-search

A simple library for selecting NDLA videos.

## Installation

```sh
yarn add @ndla/video-search
```

```sh
npm install @ndla/video-search
```

## Example usage

### Get video with the video selector

To use the `VideoSearch` component, you will need to provide translations and a function for searching for videos.

```tsx
import { VideoSearch, VideoQueryType } from "@ndla/video-search";
import { BrightcoveApiType } from "@ndla/types-embed";

const onVideoSelect = (image: BrightcoveApiType) => {
  // handle video
};

const searchVideos = (query: VideoQueryType) => {
  //return a promise
};

const translations = {
  searchPlaceholder: "Search videos",
  searchButtonTitle: "Search",
  loadMoreVideos: "Load more videos",
  noResults: "Noe videos found",
  addVideo: "Use video",
  previewVideo: "Preview",
  publishedDate: "Published date",
  duration: "Duration",
  interactioncount: "Views",
  is360Video: "360 video",
  close: "Close",
};

<VideoSearch onVideoSelect={onVideoSelect} searchVideos={searchVideos} translations={translations} locale="nb" />;
```
