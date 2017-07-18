# ndla-video-search

A simple library for selecting NDLA videos.

## Installation

```sh
$ npm install ndla-video-search
```

## Usage

### Get image with the image selector
To use the `VideoSearch` component, some functions for handling search and fetching video is needed. In addition, some translations is needed.
```js
import VideoSearch from 'ndla-video-search';

const videoSelector = (image) => {
  // handle image
}

const searchVideos = (query, offset, limit) => {
  //return a promise
}

const fetchVideo = (videoId) => {
  //return a promise
}

const translations = {
  searchPlaceholder: 'Search videos',
  searchButtonTitle: 'Search',
  loadMoreVideos: 'Load more videos',
  noResults: 'Noe videos found',
  addVideo: 'Use video',
  previewVideo: 'Preview',
};

<VideoSearch
  onVideoSelect={videoSelector}
  translations={translations}
  fetchVideo={fetchVideo}
  searchVideos={searchVideos}
/>

```
