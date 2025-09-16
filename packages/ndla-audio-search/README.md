# ndla-audio-search

A simple library for selecting NDLA audio files.

## Installation

```sh
yarn add @ndla/audio-search
```

```sh
npm install @ndla/audio-search
```

## Usage

### Styling

### Get audio with the audio selector

To use the `AudioSearch` component, some functions for handling search and fetching audios are needed. In addition, some translations are needed.

```js
import { AudioSearch } from '@ndla/audio-search';

const searchAudios = queryObject => {
  // Return new Promise of audio objects
};

const fetchAudio = id => {
  // Return new Promise of a single audio object
};

const onError = err => {
  // Handle error
};

const audioSelect = audio => {
  // Handle audio selection
};

const translations = {
  searchPlaceholder:  /* Translated string */,
  searchButtonTitle:  /* Translated string */,
  useAudio:           /* Translated string */,
  noResults:          /* Translated string */,
  paginationTranslations: {
        rootLabel: /* Translated string */,
        prevTriggerLabel: /* Translated string */,
        nextTriggerLabel: /* Translated string */,
      },
};


<AudioSearch
  translations={translations}
  fetchAudio={fetchAudio}
  searchAudios={searchAudios}
  onAudioSelect={audioSelect}
  onError={onError}
  queryObject={defaultQueryObject}
/>
```

A `queryObject` must look like this:

```js
{
  query:    /* Query string */,
  page:     /* Page number */,
  pageSize: /* Page size (elements per page) */,
  locale:   /* The search language; usually provided by the front-end */,
}
```
