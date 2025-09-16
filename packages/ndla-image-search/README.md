# ndla-image-search

A simple library for selecting images from NDLA

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
    searchPlaceholder: "Søk i bilder",
    searchButtonTitle: "Søk",
    imagePreview: {
        creatorsLabel: "Bilde",
        license: "Lisens",
        caption: "Bildetekst",
        altText: "Alt-tekst",
        modelRelease: "Modellklarert",
        tags: "Emneknagger",
        checkboxLabel: "Sett som metabilde",
        close: "Lukk",
        useImageTitle: "Bruk bildet",
    },
    paginationTranslations: {
        rootLabel: "Sidenavigering",
        prevTriggerLabel: "Forrige side",
        nextTriggerLabel: "Neste side",
    },
}

<ImageSearch onImageSelect={onImageSelect} searchImages={searchImages}  onError={onError} translations={translations} locale="nb" showCheckbox />;
```
