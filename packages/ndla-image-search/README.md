# ndla-licenses

A simple library for selecting images from NDLA

## Installation

```sh
$ npm install ndla-image-search
```

## Usage

### Styling

```scss
/* Your project's main .scss import file */
@import '~ndla-image-search/scss/image-search'; // with webpack and sass-loader
@import '../path/to/node_modules/ndla-image-search/scss/image-search'; // direct reference
```

### Get image with the image selector

```js
import ImageSearch from 'ndla-image-search';

const imageSelector = (image) => {
  // handle image
}

<ImageSearch onImageSelect={imageSelector} />
```
