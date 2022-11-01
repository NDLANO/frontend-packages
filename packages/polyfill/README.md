# Polyfill

This package includes polyfills for various browsers, but is mainly intended for IE 11. It includes minimum requirements and commonly used language features used by NDLA projects.

## Installation

```sh
$ yarn @ndla/polyfill
```

## Usage

### Simple

```js
// This must be the first line in your bundle.
import '@ndla/polyfill';
```

### Advanced

1. Create an umd build of `@ndla/polyfill`
2. Use `<ScriptLoader>` to conditional load the polyfill based on the following [features](src/featureDetect.js). Scripts that depend on the polyfill are loaded after the polyfill.

```js
import ScriptLoader from '@ndla/polyfill/lib/ScriptLoader';

const Document = (props) => {
  const polyfill = { src: '/polyfill.min.js' };
  const scripts = [{ src: '/vendor.min.js' }, { src: '/client.min.js' }];
  return (
    <html>
      <head />
      <body>
        <ScriptLoader polyfill={polyfill} scripts={scripts} />
      </body>
    </html>
  );
};
```
