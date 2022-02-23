# ndla-util

Collection of util functions used by NDLA

## Installation

```sh
$ npm install ndla-util
```

## Usage

```js
import uuid from '@ndla/util/uuid');

const unique = uuid();
console.log(unique); // > 'b56f476a-bc77-49cd-8be1-9d9aa93117ca'
```

or

```js
import { uuid } from '@ndla/util');

const unique = uuid();
console.log(unique); // > '0ada1b02-5888-43fd-9fbc-ccdbb69528f2'
```

## API(functions)

### `uuid()`

Get an unique identifier.

```js
const unique = util.uuid();
console.log(unique); // > '95821b33-694c-40e8-824c-d115a046d009'
```

### `getComponentName()`

Get component name of a React component. Useful in HOCs.

```js
import { getComponentName } from '@ndla/util';

const withHOC = (WrappedComponent) => {
  class NameOfHoc extends Component {
    ....
    render() {
      return createElement(WrappedComponent, nextProps);
    }
  }

  NameOfHoc.displayName = `NameOfHoc(${getComponentName(WrappedComponent)})`;
  return hoistNonReactStatics(NameOfHoc, WrappedComponent);
};

export default withStateHandler;
```

### `copyTextToClipboard(text)`

Copies text to clipboard by (1) creating a hidden textarea with the provided text, (2) selects the text, (3) runs `document.execCommand('copy')`.

```js
import { copyTextToClipboard } from '@ndla/util';
copyTextToClipboard('Hello world!');
```

### `tagsI18N(object, locale, withFallback, preferdLocales)`

Finds translation for a specific language in an array named tags from an object. Prefered locales is a fallback option if the given locale translation does not exist.
If no preferdLocales is defined, it is default sat to `['nb', 'nn', 'en']`.

````js
import { tagsI18N } from '@ndla/util';
tagsI18N(object, 'nb', false, ['nb', 'nn', 'en']);

### `downloadPdf({ title, content })`
Creates a PDF document based of content. Content is an array of objects with keys 'content' and 'style'. Content is pure text, style must be one of 'heading', 'ingress' or 'paragraph'.
```js
import { downloadPdf } from '@ndla/util';
downloadPdf({ title: 'myPdf', content: [{ text: 'PDF example', style: 'header'}, { text: 'Ingress text', style: 'ingress'}, { text: 'paragraph text #1', style: 'paragraph'}, { text: 'paragraph text #2', style: 'paragraph'}]);
````
