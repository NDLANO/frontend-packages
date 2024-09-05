# ndla-image-search

A simple library for selecting images from NDLA.

## Installation

```sh
yarn add @ndla/image-search
```

```sh
npm install @ndla/image-search
```

## Example usage

### Get image with the image selector

To use the `ImageSearch` component, you will need to provide translations and functions for searching, handling image selection and error handling.

```js
import ImageSearch from "@ndla/image-search";

const onImageSelect = (image) => {
  // handle image
};

const searchImages = (query, page) => {
  //return a promise
};

const onError = (err) => void

const translations = {
    close: "Lukk",
    searchPlaceholder: "Søk i bilder",
    searchButtonTitle: "Søk",
    useImageTitle: "Bruk bildet",
    imageMetadata: {
        creators: "Bilde",
        license: "Lisens",
        caption: "Bildetekst",
        altText: "Alt-tekst",
        modelRelease: "Modellklarert",
        tags: "Emneknagger",
    },
    paginationTranslations: {
        rootLabel: "Sidenavigering",
        prevTriggerLabel: "Forrige side",
        nextTriggerLabel: "Neste side",
    },
}

<ImageSearch onImageSelect={onImageSelect} searchImages={searchImages}  onError={onError} translations={translations} locale="nb"/>;
```
