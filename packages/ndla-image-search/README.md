# ndla-licenses

A simple library for selecting images from NDLA

## Installation

```sh
$ npm install ndla-image-search
```

### Get image with the image selector

```js
import ImageSearch from '@ndla/image-search';

const imageSelector = (image) => {
  // handle image
}

<ImageSearch onImageSelect={imageSelector} />
```
