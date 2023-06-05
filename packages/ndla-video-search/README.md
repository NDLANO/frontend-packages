# ndla-video-search

A simple library for selecting NDLA videos

## Installation

```sh
yarn add @ndla/video-search
```

```sh
npm install @ndla/video-search
```

## Example usage

### Styling

```scss
/* Your project's main .scss import file */
@import '~@ndla/video-search/scss/video-search'; // with webpack and sass-loader
@import '../path/to/node_modules/ndla-video-search/scss/video-search'; // direct reference
```

### Get video with the video selector

To use the `VideoSearch` component, some functions for handling search and fetching video is needed. In addition, some translations is needed.

```js
import VideoSearch from '@ndla/video-search';

const videoSelector = (image) => {
  // handle video
};

const searchVideos = (query, type) => {
  //return a promise
};

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
/>;
```

## PropTypes

| Props          |  Type  | Required | Description |
| -------------- | :----: | :------: | :---------- |
| onVideoSelect  |  func  |    \*    |             |
| searchVideos   |  func  |    \*    |             |
| translations   | object |    \*    |             |
| locale         | string |    \*    |             |
| enabledSources | array  |          |             |
