# ndla-video-search

A simple library for selecting NDLA videos.

## Installation

```sh
$ npm install ndla-video-search
```

## Example usage

### Get video with the video selector
To use the `VideoSearch` component, some functions for handling search and fetching video is needed. In addition, some translations is needed.
```js
import VideoSearch from 'ndla-video-search';

const videoSelector = (image) => {
  // handle video
}

const searchVideos = (query, type) => {
  //return a promise
}

const translations = {
  searchPlaceholder: 'Search videos',
  searchButtonTitle: 'Search',
  loadMoreVideos: 'Load more videos',
  noResults: 'Noe videos found',
  addVideo: 'Use video',
  previewVideo: 'Preview',
  publishedDate: 'Published date',
  duration: 'Duration',
  interactioncount: 'Views',
};

<VideoSearch
  onVideoSelect={videoSelector}
  searchVideos={searchVideos}
  translations={translations}
  locale="nb"
  enabledSources={['Brightcove', 'YouTube']}
/>

```
## PropTypes
| Props          | Type   | Required | Description |
| -------------- | :----: | :------: | :---------- |
| onVideoSelect  | func   | *        |             |
| searchVideos   | func   | *        |             |
| translations   | object | *        |             |
| locale         | string | *        |             |
| enabledSources | array  |          |             |
